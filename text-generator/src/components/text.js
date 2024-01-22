import React from "react";
import { useSelector } from "react-redux";

function Text() {
  const text = useSelector((state) => state.text);
  return (
    <div className="text">
      <p className="text__content">{text}</p>
    </div>
  );
}

export default Text;
