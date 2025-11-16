import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Head from "./Components/head";
import UserInput from "./Components/UserInput";
import Mytodo from "./Components/Mytodo";

const App = () => {
  const [Info, setInfo] = useState(
    () => JSON.parse(localStorage.getItem("todo")) || []
  );

  const deleteTodo = (id) => {
    const updated = Info.filter((item, i) => i !== id);
    setInfo(updated);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(Info));
  }, [Info]);

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center flex-col">
      <Header />
      <Head />
      <UserInput sendData={(item) => setInfo([...Info, item])} />
      {Info.length > 0 ? (
        <Mytodo Data={Info} deleteTodo={deleteTodo} />
      ) : (
        <div className="mt-10 text-xl bg-slate-900 px-9 py-3 rounded-full">
          <h1>No Todo</h1>
        </div>
      )}
    </div>
  );
};

export default App;
