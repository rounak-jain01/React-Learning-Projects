import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

const Mytodo = ({ Data, deleteTodo }) => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="bg-slate-900 w-[36%] rounded-2xl px-4 py-5">
        <div className="flex flex-col gap-5">
          {Data.map((item, idx) => (
            <TodoList
              value={item.text}
              index={idx}
              key={idx}
              deleteTodo={deleteTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mytodo;
