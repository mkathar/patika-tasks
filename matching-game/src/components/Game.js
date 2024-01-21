import React, { useState, useEffect } from "react";

function Game() {
  const initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [numbers, setNumbers] = useState(shuffle([...initialNumbers]));
  const [show, setShow] = useState(Array(numbers.length).fill(false));
  const [openCount, setOpenCount] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (openCount === 2) {
      const [index1, index2] = selectedIndexes;
      const isMatch = numbers[index1] === numbers[index2];

      const timeoutId = setTimeout(() => {
        setShow((prevShow) => {
          const updatedShowState = [...prevShow];
          if (isMatch) {
            setMatchedIndexes((prevMatches) => [
              ...prevMatches,
              index1,
              index2,
            ]);
            setScore((prevScore) => prevScore + 50);
          } else {
            updatedShowState[index1] = false;
            updatedShowState[index2] = false;
            setScore((prevScore) => prevScore - 10);
          }
          return updatedShowState;
        });

        setSelectedIndexes([]);
        setOpenCount(0);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [openCount, selectedIndexes, numbers, matchedIndexes, score]);

  const showNumber = (index) => {
    if (openCount < 2 && !show[index] && !matchedIndexes.includes(index)) {
      const updatedShowState = [...show];
      updatedShowState[index] = true;
      setShow(updatedShowState);

      setSelectedIndexes((prevIndexes) => [...prevIndexes, index]);
      setOpenCount((prevOpenCount) => prevOpenCount + 1);
    }
  };

  const restartGame = () => {
    const shuffledNumbers = shuffle([...initialNumbers]);
    setNumbers(shuffledNumbers);

    setShow(Array(shuffledNumbers.length).fill(false));
    setOpenCount(0);
    setSelectedIndexes([]);
    setMatchedIndexes([]);
    setScore(0);
  };

  return (
    <div className="game">
      <div className="game__info">
        <h1 className="game__info__score">Score: {score}</h1>
        <button onClick={restartGame} className="game__info__restart">
          Restart Game
        </button>
      </div>
      {numbers.map((item, index) => (
        <div
          id={index}
          key={index}
          className="game__area"
          onClick={() => showNumber(index)}
          style={{
            backgroundColor: show[index] ? "white" : "#6665ee",
          }}
        >
          {show[index] ? item : ""}
        </div>
      ))}
    </div>
  );
}

export default Game;
