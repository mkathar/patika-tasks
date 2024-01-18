import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../redux/store";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const [noteText, setNoteText] = useState("");
  const [noteColor, setNoteColor] = useState("");

  const handleNoteChange = (text) => {
    setNoteText(text);
  };

  const handleColorChange = (newColor) => {
    setNoteColor(newColor);
  };

  const saveNote = () => {
    let newNote = {
      note: noteText,
      color: noteColor,
    };

    dispatch(updateNote([newNote]));
  };

  return (
    <div className="notes">
      <textarea
        className="notes__input"
        rows="4"
        cols="50"
        onChange={(e) => handleNoteChange(e.target.value)}
        style={{ backgroundColor: noteColor }}
      />

      <div className="notes__group">
        <input
          className="notes__group__colorChanger"
          type="color"
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <button onClick={saveNote} className="notes__group__btn">
          Save
        </button>
      </div>
      {/* <ul className="notes__list">
        <li className="notes__list__item notes__list__item--purple"></li>
        <li className="notes__list__item notes__list__item--green"></li>
        <li className="notes__list__item notes__list__item--blue"></li>
        <li className="notes__list__item notes__list__item--gray"></li>
        <li className="notes__list__item notes__list__item--red"></li>
      </ul> */}
    </div>
  );
};

export default Notes;
