import React from "react";
import Navitem from "./navitem";

const data = [
  {
    tab: "Find Passion",
  },
  {
    tab: "Categories",
  },
  {
    tab: "Skills",
  },
  {
    tab: "Customer",
  },
];

function Navbar() {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="font-extrabold font-display text-4xl">
        <h1>Skillex.</h1>
      </div>
      <div className="flex  gap-15 text-xl font-display text-slate-800">
        {data.map((item, idx) => (
          <Navitem tab={item.tab} />
        ))}
      </div>
      <div className="flex gap-10 text-xl font-display text-slate-800 border-none items-center">
        <div className="relative group">
          <span className="relative z-10">Login</span>

          <span className="absolute left-0 bottom-0 w-full h-2 bg-green-800 opacity-60 origin-bottom transform scale-y-0 group-hover:scale-y-150 transition-transform duration-300 ease-out z-0" />
        </div>
        <div>
          <button className="bg-black px-10 py-2 rounded-4xl relative overflow-hidden group">
            <span className=" text-white relative z-10 ">Free Trial</span>

            <span
              className="
                absolute left-0 bottom-0 w-full
                h-full                
                bg-green-700
                
                origin-bottom
                scale-y-0              
                group-hover:scale-y-100 text-black
                transition-transform duration-300 ease-out 
                z-0
                "
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
