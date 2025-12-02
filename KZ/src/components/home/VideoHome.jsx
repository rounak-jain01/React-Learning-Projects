import React from "react";

const VideoHome = ({Isrounded}) => {
  console.log(Isrounded)
  return (
    // <div className="w-full h-full ">
      <video className={`w-full h-full object-cover ${Isrounded ? 'rounded-full' : ""}`} autoPlay loop muted src="/video/homevideo.mp4"></video>
    // </div>
  );
};

export default VideoHome;
