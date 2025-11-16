import React from "react";
import UserInput from "./Components/UserInput";
import Result from "./Components/Result";

const App = () => {
  return (
    <div className="bg-black text-white h-screen w-screen">
      <div className="lg:flex p-10 w-full h-full">
        <UserInput />
      </div>
    </div>
  );
};

export default App;
