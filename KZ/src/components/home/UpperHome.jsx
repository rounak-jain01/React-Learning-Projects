import React from "react";
import VideoHome from "./VideoHome";

const UpperHome = () => {
  return (
    <div className="pt-2 text-[9.5vw] uppercase text-center leading-[8.5vw]">
      <div>L'étincelle</div>
      <div className="flex justify-center items-center text-center">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden">
          {" "}
          <VideoHome Isrounded={true} />{" "}
        </div>
        génère
      </div>
      <div>la créativité</div>
    </div>
  );
};

export default UpperHome;
