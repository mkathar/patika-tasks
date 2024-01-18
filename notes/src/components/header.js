import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredNotes } from "../redux/store";

export default function Header() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  dispatch(getFilteredNotes(notes));

  const handleSeachInput = (e) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredNotes = notes.filter((item) => {
      return item.note.toLowerCase().includes(searchValue);
    });

    dispatch(getFilteredNotes(filteredNotes));
    console.log(notes);
  };

  return (
    <header className="header">
      <h1 className="header__title">Notes App</h1>
      <input
        onChange={handleSeachInput}
        className="header__input"
        type="text"
        name=""
        id=""
      />
    </header>
  );
}
