import { useState, useEffect } from "react";
import axios from 'axios'

export const NotesComponents = () => {
    const [userInput, setUserInput] = useState("");
    const [notesData, setNotesData] = useState([])
    const date =  new Date();

    const submitHandler = (e) => {
        e.preventDefault();
        if(!userInput){
            alert("Please add a note");
            return;
        }
        axios.post("http://localhost:3005/api/notes", {
            note: userInput
        }).then((res) => {
            setNotesData(notesData.concat(res.data))

        })
    }

    useEffect(() => {
        axios
        .get("http://localhost:3005/api/notes")
        .then((res) => {
            console.log(res.data)
            setNotesData(notesData.concat(res.data))
        })
        .catch( console.log )
    }, [setNotesData])

    return (
        <div className="note-div">
            <h1>Today</h1>
            <p>{date.toDateString()}</p>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Add a note..." value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                <button>Send</button>
            </form>
            {notesData.map((item) => (
                <div key={item._id}>
                    <li>{item.note}</li>
                    <p>{date.toLocaleTimeString()}</p>
                </div>

            ))}
        </div>
    )
} 