import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getText } from "../redux/store";

function Header() {
  const dispatch = useDispatch();

  const [paragraphCount, setParagraphCount] = useState(4);

  const [paragraphType, setParagraphType] = useState("text");

  const handleInput = (e) => {
    setParagraphCount(e.target.value);
    console.log(paragraphCount);
  };
  const handleSelectOptions = (e) => {
    setParagraphType(e.target.value);
    console.log(paragraphType);
  };

  useEffect(() => {
    let newRules = {
      count: paragraphCount,
      type: paragraphType,
    };
    dispatch(getText(newRules));
  }, [paragraphCount, paragraphType]);
  return (
    <header className="header">
      <h1 className="header__title">React sample text generator app</h1>

      <div className="header__group">
        <div className="header__group__box">
          <span className="header__group__box__title">Count: </span>
          <input
            className="header__group__box__input"
            onChange={handleInput}
            type="number"
            value={paragraphCount}
          />
        </div>
        <div className="header__group__box">
          {" "}
          <span className="header__group__box__title">Type: </span>
          <select
            className="header__group__box__chooser"
            onChange={handleSelectOptions}
            name=""
            id=""
          >
            <option value="text">TEXT</option>
            <option value="html">HTML</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
