import React from "react";
import { Bookmark } from "lucide-react";

function Cards({image, company, days, position, type, level, rate, currency, location, apply}){
  return (
    <div className="border-2 w-80 p-5 h-100 flex flex-col gap-8">
      <div className="flex justify-between">
        <div>
          <img
            className="w-16 h-15 object-fill rounded-[50%] p-2 border-2"
            src={image}
          />
        </div>
        <div>
          <div className="flex border-2 gap-1 p-2 pl-3 pr-3 rounded-2xl">
            <h2>Save</h2>
            <Bookmark />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="font-bold text-xl">
            {company} <span className="text-[12px] opacity-50">{days} days ago</span>
          </h2>
          <h1 className="text-2xl font-bold">{position}</h1>
          <div className="flex gap-2">
            <p className="bg-gray-300 px-3 py-1 text-black rounded-xl">
              {type}
            </p>
            <p className="bg-gray-300 px-3 py-1 text-black rounded-xl">
              {level}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-2 pt-8">
        <div>
          <h1 className="text-xl font-bold">${rate}/hr</h1>
          <p className="text-xs">{location}</p>
        </div>
        <div>
          <button className="bg-white text-black px-4 py-2 rounded-4xl">{apply}</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
