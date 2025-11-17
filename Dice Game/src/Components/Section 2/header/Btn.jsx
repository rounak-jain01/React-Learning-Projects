import React, { useState } from "react";

const Btn = ({ num, active, onClick }) => {

  return (
    <button
      className={`border w-12 flex justify-center items-center aspect-square font-bold text-2xl cursor-pointer ${
        active ? "bg-black text-white" : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      {num}
    </button>
  );
};

export default Btn;
