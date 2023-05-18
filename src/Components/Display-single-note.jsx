import { useParams } from "react-router-dom";

export const DisplaySingleNote = () => {
    let { name } = useParams()

    return (
        <div className="single-note-div">
            <h3>Note:</h3>
            <p>{name}</p>
        </div>
    )
}