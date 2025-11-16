import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/home";

function App() {
  return (
    <div>
      <div className="px-16 py-5 h-screen w-full">
        <Navbar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
