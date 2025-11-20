import { AiOutlineUpload } from "react-icons/ai"; 
import { BsDownload } from "react-icons/bs"; 
import { AiFillInfoCircle } from "react-icons/ai";

const Dash1 = () => {
  return (
    <div className="mt-5 w-[90%] flex justify-self-center flex-col items-center gap-5 ">
          <div className="bg-white w-full rounded-xl  p-6">
            {/* Amount */}
            <div className="flex flex-col lg:flex-row gap-7 justify-between"
>
              <div>
                <p className="flex gap-1 text-[#535d66] font-semibold">
                  Total Portfolio value <AiFillInfoCircle />
                </p>
                <h2 className="text-xl font-bold">₹ 112,312.24</h2>
              </div>
              <div>
                <p className="flex gap-1 text-[#535d66] font-semibold">
                  Wallet Balances
                </p>
                <div className="flex gap-5 ">
                  <span className="flex text-xl font-bold">
                    22.39401000{" "}
                    <p className="bg-[#f3f3f7] font-medium px-2 my-auto text-sm  rounded-xl">
                      BTC
                    </p>
                  </span>
                  <span className="flex text-xl font-bold">
                    ₹ 1,300.00{" "}
                    <p className="bg-[#f3f3f7]  font-medium px-2 my-auto text-sm  rounded-xl">
                      INR
                    </p>
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center ">
                <button className="flex gap-2 items-center bg-[#5f00d9] text-white px-3 py-2 font-bold rounded-lg cursor-pointer"><BsDownload />Deposit</button>
                <button className="flex gap-2 items-center bg-[#5f00d9] text-white px-3 py-2 font-bold rounded-lg cursor-pointer"><AiOutlineUpload />Withdraw</button>
              </div>
            </div>
            {/* Buttons */}
            <div></div>
          </div>
        </div>
  )
}

export default Dash1
