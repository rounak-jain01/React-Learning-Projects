import React from "react";
import VideoHome from "../components/home/VideoHome";
import UpperHome from "../components/home/UpperHome";
import Bottom from "../components/home/Bottom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed ">
        <VideoHome Isrounded={false}/>
      </div>
      <div className="relative  h-screen w-screen flex flex-col justify-between font-home1 ">
        <UpperHome />
        <Bottom />
      </div>
    </div>
  );
};

export default Home;
