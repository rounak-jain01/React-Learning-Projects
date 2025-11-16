import React, { useState } from "react";
import { Circle, CircleCheck, Trash2 } from "lucide-react";

const TodoList = ({ value, index, deleteTodo }) => {
  const [Click, setClick] = useState(true);
  function changeCheck() {
    setClick(!Click);
  }

  return (
    <>
      <div className="flex justify-between">
        <div
          className="flex gap-4 text-lg cursor-pointer"
          onClick={changeCheck}
        >
          {Click ? (
            <Circle color="#61e232" size={30} />
          ) : (
            <CircleCheck color="#5fe218" size={30} />
          )}

          <h3
            className={
              Click ? "" : "line-through decoration-white decoration-4"
            }
          >
            {value}
          </h3>
        </div>
        <div className="cursor-pointer">
          <span id={index} onClick={() => deleteTodo(index)}>
            <Trash2 color="#e23232" size={30} />
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoList;
