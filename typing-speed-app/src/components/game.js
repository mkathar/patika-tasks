import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentWord,
  setScore,
  setStartTime,
  setIsRunning,
  setText,
  setRemainingTime,
  selectGame,
} from "../store";

const Game = () => {
  const dispatch = useDispatch();
  const { currentWord, score, startTime, isRunning, text, remainingTime } =
    useSelector(selectGame);
  const inputRef = useRef(null);
  const isEnterPressed = useRef(false);

  useEffect(() => {
    if (isRunning) {
      dispatch(setStartTime(Date.now()));
      dispatch(setScore({ correct: 0, incorrect: 0 }));
      dispatch(setCurrentWord(getNextWord()));
      inputRef.current.focus();
    }
  }, [isRunning, dispatch]);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = (currentTime - startTime) / 1000;

      if (elapsedTime >= 60) {
        dispatch(setIsRunning(false));
        dispatch(setRemainingTime(0));
        clearInterval(timer);
      } else {
        dispatch(setRemainingTime(Math.max(60 - elapsedTime, 0)));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, isRunning, dispatch]);

  const getNextWord = () => {
    const words = text.split(" ");
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const handleInputChange = (e) => {
    if (!isRunning) {
      return;
    }

    const currentTime = Date.now();
    const elapsedTime = (currentTime - startTime) / 1000;
    const typedWord = e.target.value.trim();

    if (typedWord === currentWord.trim()) {
      dispatch(
        setScore({ correct: score.correct + 1, incorrect: score.incorrect })
      );
      dispatch(setCurrentWord(getNextWord()));
      e.target.value = "";
    } else if (isEnterPressed.current && elapsedTime < 60) {
      dispatch(
        setScore({ correct: score.correct, incorrect: score.incorrect + 1 })
      );
      isEnterPressed.current = false;
    }

    if (elapsedTime >= 60) {
      dispatch(setIsRunning(false));
      dispatch(setRemainingTime(0));
    } else {
      const remainingTime = Math.max(60 - elapsedTime, 0);
      dispatch(setRemainingTime(Math.floor(remainingTime)));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      isEnterPressed.current = true;
    }
  };

  const startGame = async () => {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=all-meat&paras=5&format=text"
      );
      const data = await response.text();
      dispatch(setText(data.trim()));
      dispatch(setIsRunning(true));
    } catch (error) {
      console.error("Metin alınamadı:", error);
    }
  };

  return (
    <div className="game">
      <h2 className="game__title">Yazma Hızı Skorlayıcı</h2>
      <button className="game__start" onClick={startGame} disabled={isRunning}>
        Başlat
      </button>
      <p className="game__word">Yazılması Gereken Kelime: {currentWord}</p>
      <textarea
        className="game__input"
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Yazmaya başlayın..."
        disabled={!isRunning}
      />
      <div className="game__group">
        <p className="game__group__true">Doğru: {score.correct}</p>
        <p className="game__group__false">Yanlış: {score.incorrect}</p>
      </div>
      {isRunning && (
        <p className="game__remainingTime">
          Kalan süre: {Math.floor(Math.max(remainingTime, 0))} saniye
        </p>
      )}
    </div>
  );
};

export default Game;
