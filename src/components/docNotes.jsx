import { Button } from "@mui/material";
import React, { useState } from "react";

function DocNotes() {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState([]);

  const handleInputChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, noteText]);
      setNoteText("");
    }
  };

  return (
    <>
      <div>
        <textarea
          className="mt-5 "
          value={noteText}
          onChange={handleInputChange}
          placeholder="Enter your note..."
          style={{ width: "100%", height: "100px" }}
        />
        <Button onClick={handleAddNote}>Add Note</Button>
      </div>
      <div>
        <h3>Notes:</h3>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DocNotes;
