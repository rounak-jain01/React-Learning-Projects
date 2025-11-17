import React, { useState } from "react";
import Btn from "./Btn";

const ButtonSel = ({activeBtn, setActiveBtn}) => {

  const arrNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex flex-col w-fit gap-5 pt-10">
      <div className="flex gap-5">
        {arrNumbers.map((item, idx) => (
          <Btn
            key={idx}
            num={item}
            active={activeBtn === item}
            onClick={() => setActiveBtn(item)}
          />
        ))}
      </div>
      <p className="self-end font-bold">Select Number</p>
    </div>
  );
};

export default ButtonSel;
