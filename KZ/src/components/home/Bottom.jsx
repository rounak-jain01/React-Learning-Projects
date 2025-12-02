import React from "react";

const Bottom = () => {
  return (
    <div className="flex flex-col border">
      <div className="w-[20vw] text-end self-end text-sm">
        K72 est une agence qui pense chaque action pour nourrir la marque.
        Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
        l’étincelle pour générer de l’émotion. Pour assurer une relation
        honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui
        doit être fait.
      </div>

      <div className="self-center text-[6.5vw] flex gap-5 font-semibold overflow-hidden pb-3 ">
        <button className="px-7 leading-none  border rounded-full uppercase">Projects</button>
        <button className="px-7 leading-none  border rounded-full uppercase">Agence</button>
      </div>
    </div>
  );
};

export default Bottom;
