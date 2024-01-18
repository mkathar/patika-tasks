import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function List() {
  const notes = useSelector((state) => state.notes);
  const filteredNotes = useSelector((state) => state.filteredNotes);

  useEffect(() => {
    console.log("filtered notes güncellendi");
  }, [filteredNotes]);
  return (
    <>
      <ul className="list">
        {filteredNotes.map((item, index) => {
          return (
            <li
              className="list__item"
              key={index}
              style={{ backgroundColor: item.color }}
            >
              {item.note}
            </li>
          );
        })}
      </ul>
    </>
  );
}
