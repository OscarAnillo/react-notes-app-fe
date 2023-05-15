export const NotesComponents = () => {
    const date =  new Date();

    return (
        <div className="note-div">
            <h1>Today</h1>
            <p>{date.toDateString()}</p>
            <form>
                <input type="text" placeholder="" />
                <button>Send</button>
            </form>
        </div>
    )
} 