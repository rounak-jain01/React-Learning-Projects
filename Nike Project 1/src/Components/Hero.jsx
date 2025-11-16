import React from "react";

const Hero = () => {
  return (
    <div className="flex w-[80%] mt-5 justify-self-center">
      {/* Left */}
      <div className="w-1/2 font-display flex flex-col gap-2 ">
        <h1 className="text-[99px] leading-25 font-extrabold">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="text-[16px] text-[#5A5959] w-[70%] font-semibold">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="flex gap-10">
          <button className="px-5 py-2 font-bold  text-white bg-[#D01C28]">Shop Now</button>
          <button className="px-5 py-2 font-bold text-[#5A5959] border-2 border-[#5A5959]">Category</button>
        </div>
        <p>Also Available On</p>
        <div className="flex gap-5">
          <img src="./flipkart.png" alt="" />
          <img src="./amazon.png" alt="" />
        </div>
      </div>
      {/* Right */}
      <div>
        <img src="./shoe_image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
