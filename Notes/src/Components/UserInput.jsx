import React, { useState } from "react";
import Result from "./Result";

const UserInput = () => {
  const [UserValue, setUserValue] = useState("");
  const [UserDesc, setUserDesc] = useState("");
  const [SaveNotes, setSaveNotes] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    const copySaveNotes = [...SaveNotes]
    copySaveNotes.push({UserValue, UserDesc})
    setSaveNotes(copySaveNotes)
    setUserValue("");
    setUserDesc("")
  };
  const userI = (e) => {
    setUserValue(e.target.value);
  };

  const userD = (e) => {
    setUserDesc(e.target.value)
  };


  return (
    <>
    <form
      onSubmit={formHandler}
      className="flex flex-col gap-4 justify-center items-center lg:border-r lg:min-w-1/2 lg:h-full "
    >
      <div className="flex px-10 py-5 gap-5 rounded-2xl flex-col  w-full lg:w-[60%] bg-slate-900">
        <input
          className="p-2 outline-none focus:border-2 border-amber-100 bg-white/10 rounded-lg"
          type="text"
          placeholder="Enter Your Task"
          value={UserValue}
          onChange={(e) => {
          userI(e);
          }}
        />
        <textarea
          className="p-2 outline-none focus:border-2 border-amber-100 bg-white/10 rounded-lg"
          placeholder="Enter Description"
          rows={5}
          onChange={(e) => userD(e)}
          value={UserDesc}
        ></textarea>
      </div>
      <button className="bg-blue-700 px-8 border cursor-pointer active:scale-95 py-3 rounded-full hover:bg-black/40 hover:text-blue-700">
        Submit
      </button>
    </form>
    <div className="flex flex-wrap">
    {
      SaveNotes.map((item,idx) => (
        <Result title={item.UserValue} desc={item.UserDesc} key={idx} />
      ))
    }
    </div>

    </>
  );
};

export default UserInput;
