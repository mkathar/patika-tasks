import { configureStore, createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    currentWord: "",
    score: { correct: 0, incorrect: 0 },
    startTime: 0,
    isRunning: false,
    text: "",
    remainingTime: 60,
  },
  reducers: {
    setCurrentWord: (state, action) => {
      state.currentWord = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setIsRunning: (state, action) => {
      state.isRunning = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setRemainingTime: (state, action) => {
      state.remainingTime = action.payload;
    },
  },
});

export const {
  setCurrentWord,
  setScore,
  setStartTime,
  setIsRunning,
  setText,
  setRemainingTime,
} = gameSlice.actions;

export const selectGame = (state) => state.game;

const rootReducer = {
  game: gameSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
