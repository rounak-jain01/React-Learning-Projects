import React from "react";
import Rphoto from "./Rphoto";

const RightHome = () => {
  const data = [
    {
      img : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      left : 20,
      gap : 15
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      left : 10,
      gap : 15
    },
  ];

  return (
    <div className="absolute left-115 top-10 z-10 h-full flex gap-5">
      {data.map((item, idx) => (
        <Rphoto image={item.img} left={item.left} gap={item.gap} />

      ))}
    </div>
  );
};

export default RightHome;
