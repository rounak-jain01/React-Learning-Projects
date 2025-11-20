import { BiSupport } from "react-icons/bi";
import { BsArrowDownUp } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

const Sidebar = ({open}) => {
  return (
    <div className={`min-w-64 h-screen bg-white  p-4 flex flex-col justify-between shadow-2xl ${open ? "" : "hidden "} lg:flex`}>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl my-4 text-center text-[#5F00D9] font-bold">Rounak Jain</h1>
        <div className="flex gap-2 items-center  p-3 cursor-pointer text-xl hover:bg-[#f3f3f7] rounded-lg hover:font-semibold">
          <MdDashboard /> <h1>Dashboard</h1>
        </div>
        <div className="flex gap-2 items-center  p-3 cursor-pointer text-xl hover:bg-[#f3f3f7] rounded-lg hover:font-semibold">
          <BsArrowDownUp /> <h1>Transactions</h1>
        </div>
      </div>

      <div className="flex gap-2 items-center  p-3 cursor-pointer text-xl hover:bg-[#f3f3f7] rounded-lg hover:font-semibold">
        <BiSupport /> <h1>Support</h1>
      </div>
    </div>
  );
};

export default Sidebar;
