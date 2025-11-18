import React from "react";
import { CirclePlus, Search } from "lucide-react";

const SearchBox = ({onOpen}) => {
  return (
    <div className="text-white flex gap-2 items-center min-w-[360px]">
      <div className="relative flex grow  items-center">
        <input type="text" className="text-white outline-none grow border pl-8 p-1 rounded-lg " placeholder="Search Contact" />
        <Search size={20}  className="absolute ml-2"/>
      </div>
      <div><CirclePlus size={45} className="cursor-pointer" onClick={onOpen} /></div>
    </div>
  );
};

export default SearchBox;
