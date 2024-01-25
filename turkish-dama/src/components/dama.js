import React, { useState } from "react";

function Dama() {
  const [stones, setStones] = useState([
    // İlk oyuncu için
    { type: "black", position: 9 },
    { type: "black", position: 10 },
    { type: "black", position: 11 },
    { type: "black", position: 12 },
    { type: "black", position: 13 },
    { type: "black", position: 14 },
    { type: "black", position: 15 },
    { type: "black", position: 16 },
    { type: "black", position: 17 },
    { type: "black", position: 18 },
    { type: "black", position: 19 },
    { type: "black", position: 20 },
    { type: "black", position: 21 },
    { type: "black", position: 22 },
    { type: "black", position: 23 },
    { type: "black", position: 24 },

    // İkinci oyuncu için
    { type: "white", position: 41 },
    { type: "white", position: 42 },
    { type: "white", position: 43 },
    { type: "white", position: 44 },
    { type: "white", position: 45 },
    { type: "white", position: 46 },
    { type: "white", position: 47 },
    { type: "white", position: 48 },
    { type: "white", position: 49 },
    { type: "white", position: 50 },
    { type: "white", position: 51 },
    { type: "white", position: 52 },
    { type: "white", position: 53 },
    { type: "white", position: 54 },
    { type: "white", position: 55 },
    { type: "white", position: 56 },
  ]);

  const [selectedStone, setSelectedStone] = useState(null);
  const [moveHistory, setMoveHistory] = useState([]);

  const handleSquareClick = (clickedSquare) => {
    if (!selectedStone) {
      const stone = stones.find((stone) => stone.position === clickedSquare);
      if (stone) {
        setSelectedStone(stone);
      }
    } else {
      const targetPosition = clickedSquare;
      const isTargetOccupied = stones.some(
        (stone) => stone.position === targetPosition
      );

      if (!isTargetOccupied) {
        const updatedStones = stones.map((stone) =>
          stone.position === selectedStone.position
            ? { ...stone, position: targetPosition }
            : stone
        );

        setStones(updatedStones);

        setMoveHistory([
          ...moveHistory,
          { from: selectedStone.position, to: targetPosition },
        ]);
      } else {
        console.log("Hedef karede başka bir taş var. Hareket engellendi.");
      }

      setSelectedStone(null);
    }
  };

  const MoveHistory = () => (
    <div className="move-history">
      <h3>Move History</h3>
      <ul>
        {moveHistory.map((move, index) => (
          <li key={index}>{`Move ${index + 1}: ${move.from} to ${move.to}`}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="dama-container">
      <div className="dama">
        <div className="dama__coordinate dama__coordinate--top">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="dama__coordinate__label">
              {String.fromCharCode(65 + index)}
            </div>
          ))}
        </div>

        {Array.from({ length: 64 }, (_, index) => index + 1).map(
          (item, mapIndex) => {
            const isBlack =
              (Math.floor((item - 1) / 8) + item) % 2 === 0 ? "black" : "white";

            const stoneOnSquare = stones.find(
              (stone) => stone.position === item
            );

            return (
              <div
                onClick={() => handleSquareClick(item)}
                className={`dama__box ${isBlack}`}
                key={item}
              >
                {mapIndex % 8 === 0 && (
                  <div className="dama__coordinate__label dama__coordinate__label--left">
                    {8 - Math.floor(mapIndex / 8)}
                  </div>
                )}

                {stoneOnSquare && (
                  <div className={`dama__box__stone ${stoneOnSquare.type}`}>
                    {stoneOnSquare.type === "black" ? "●" : "○"}
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>

      <div className="move-history">
        <h3>Move History</h3>
        <ul>
          {moveHistory.map((move, index) => (
            <li key={index}>{`Move ${index + 1}: ${move.from} to ${
              move.to
            }`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dama;
