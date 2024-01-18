import { createSlice, configureStore } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      { note: "VueJS Öğren", color: "#6665ee" },
      { note: "ReactJS Öğren", color: "red" },
      { note: "AngularJS Öğren", color: "gray" },
      { note: "NodeJS Öğren", color: "blue" },
    ],
    filteredNotes: [],
  },
  reducers: {
    updateNote: (state, action) => {
      state.notes = [...state.notes, ...action.payload];
    },
    getFilteredNotes: (state, action) => {
      state.filteredNotes = action.payload;
    },
  },
});

const store = configureStore({
  reducer: notesSlice.reducer,
});

export const { updateNote, getFilteredNotes } = notesSlice.actions;
export default store;
