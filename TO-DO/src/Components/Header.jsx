import React from "react";
import { CircleCheckBig } from "lucide-react";

const Header = () => {
  return (
    <>
      <div  className="bg-slate-700 p-5 w-full">
        <div className="flex justify-center">
          <span className="flex text-orange-500 text-5xl font-bold tracking-widest">
            TO-D
            <CircleCheckBig size={48} color="#4cf702" /> 
            App
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
