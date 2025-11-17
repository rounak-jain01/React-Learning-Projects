
const Hero = ({diceNum, setDiceNum, setScore, setActiveBtn}) => {

  const chooseDice = () => {
    setDiceNum(Math.floor(Math.random() * (7-1)+1))
  }

  function resetbtn(){
    setScore(0)
    setDiceNum(1)
    setActiveBtn(null)

  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className=" flex flex-col gap-7">
        <div>
          <img className="cursor-pointer" src={`/images/dice_${diceNum}.png`} alt=""
          onClick={chooseDice}
          />
          <p className="font-semibold text-2xl text-center">
            Click on Dice to Roll
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button onClick={resetbtn} className="w-full py-3 font-semibold border rounded outline-none cursor-pointer hover:bg-black hover:text-white">
            Reset Score
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
