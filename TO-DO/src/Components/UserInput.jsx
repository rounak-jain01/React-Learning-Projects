import React, { useState } from "react";

const UserInput = ({sendData}) => {
  const [UserValue, setUserValue] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    sendData({ text: UserValue }); 
    setUserValue("");
  };

  const UserInp = (e) => {
    setUserValue(e.target.value);
  };

  return (
    <form onSubmit={formHandler} className="w-full mt-10">
      <div className="flex justify-center">
        <input
          className="bg-slate-900 py-2 px-5 text-xl rounded-l-full outline-none w-[30%]"
          type="text"
          placeholder="What do you need to do?"
          value={UserValue}
          onChange={(e) => UserInp(e)}
        />
        <button className="bg-blue-900 py-2 px-5 active:scale-95 text-xl rounded-r-full hover:bg-transparent hover:text-blue-900">
          ADD
        </button>
      </div>
    </form>
  );
};

export default UserInput;
