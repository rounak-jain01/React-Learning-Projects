import React from "react";

const Result = (props) => {
  return (
    <div className="lg:w-1/2 border  p-5 flex flex-wrap">
      <div className="h-[50%] w-70 relative">
        <img
          className="h-full  object-cover"
          src="../public/notes.png" 
        />
        <div className="absolute top-18 left-13 flex w-38 flex-col justify-center items-center text-black text-xs ">
          <h1 className="text-2xl ">{props.title}</h1>
          <p className="text-center">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
