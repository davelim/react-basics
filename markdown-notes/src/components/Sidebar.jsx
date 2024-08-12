import React from "react"

export default function Sidebar(props) {
    const currentNoteIndex = props.notes.findIndex(e => e.id === props.currentNote.id);
    const notes = [props.notes[currentNoteIndex], ...props.notes.toSpliced(currentNoteIndex, 1)];
    const noteElements = notes.map(note => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
            </div>
        </div>
    ))

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
