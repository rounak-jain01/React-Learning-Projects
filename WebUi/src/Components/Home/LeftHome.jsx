import React from "react";

const LeftHome = () => {
  return (
    <div className="absolute left-10 z-20 w-[40%] flex flex-col py-10 gap-5">
      {/* Left Top */}
      <div>
        <h1 className="font-display text-7xl font-bold mt-10">
          Watch.
          <br />
          Learn.
          <br />
          Grow.
        </h1>
      </div>

      {/* Left Bottom */}
      <div className="p-5">
        <div className="flex justify-between font-display  items-center  font-bold bg-white h-28">
          <div className="pl-10 text-xl text-slate-600">
            <h2>Find Your Passion</h2>
          </div>
          <div className="flex justify-center text-4xl items-center bg-green-400 h-full w-1/4">
            <h2>Go</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
