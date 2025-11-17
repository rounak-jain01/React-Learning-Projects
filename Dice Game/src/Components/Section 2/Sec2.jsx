import React, { act, useEffect, useState } from "react";
import TotalScore from "./header/TotalScore";
import ButtonSel from "./header/ButtonSel";
import Hero from "./Main/Hero";

const Sec2 = () => {
  const [diceNum, setDiceNum] = useState(1);
  const [activeBtn, setActiveBtn] = useState(null);
  const [score, setScore] = useState(0);  

  function calcScore(diceNum) {
    if (diceNum == activeBtn) {
      setScore((prev) => (prev += 10));
    }
  }

  useEffect(() => {
    if (diceNum !== null && activeBtn != null) {
      calcScore(diceNum); 
    }
  }, [diceNum]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="font-display w-[80%] flex justify-between">
        <TotalScore score={score} />
        <ButtonSel activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      </div>
      <div className="w-full h-full">
        <Hero diceNum={diceNum} setDiceNum={setDiceNum} setScore={setScore} setActiveBtn={setActiveBtn} />
      </div>
    </div>
  );
};

export default Sec2;
