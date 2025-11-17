import { useState } from "react";
import Sec1 from "./Components/Section 1/Sec1";
import Sec2 from "./Components/Section 2/Sec2";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  
  // const playArena = () => {
  //   if(isPlay){
  //     <Sec2/>
  //   }else{
  //     <Sec1 />
  //   }
  // }
  return (

    <div className="w-screen h-screen overflow-x-hidden">
      {
        isPlay ? <Sec2/> : <Sec1 play={setIsPlay}/>
      }
    </div>
  );
};

export default App;
