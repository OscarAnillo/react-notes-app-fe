import { useState, useEffect } from "react";
import axios from 'axios'

export const NotesComponents = () => {
    const [userInput, setUserInput] = useState("");
    const [notesData, setNotesData] = useState([])
    const date =  new Date();

    useEffect(() => {
        axios
        .get("http://localhost:3005/api/notes")
        .then((res) => {
            setNotesData(res.data);
        })
        .catch((err) => {
            console.log(err)
        });
    }, [setNotesData])

    const submitHandler = (e) => {
        e.preventDefault();
        if(!userInput){
            alert("Please add a note");
            return;
        }
        axios.post("http://localhost:3005/api/notes", {
            note: userInput
        })
        .then((res) => {
            setNotesData([...notesData, res.data])
        })
        .catch( console.log )
        setUserInput("")
    }

    const clickHandlerDelete = (id) => {
        axios.delete(`http://localhost:3005/api/notes/${id}`);
        const filterNotes = notesData.filter((item) => item._id !== id);
        setNotesData(filterNotes)
    }

    return (
        <div className="note-div">
            <h1>Today</h1>
            <p>{date.toDateString()}</p>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Add a note..." value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                <button>Send</button>
            </form>
            <hr />
            {notesData.map((item) => (
                <div key={item._id} className="map-div">
                    <div className="inner-map-div">
                        <ul>
                            <li>{item.note}</li>
                        </ul>
                        <div className="map-row">
                        <p>{item.date}</p>
                        <button type="submit" className="close" onClick={() => clickHandlerDelete(item._id)} role="button">x</button>
                    </div>
                    </div>
                </div>

            ))}
        </div>
    )
} 