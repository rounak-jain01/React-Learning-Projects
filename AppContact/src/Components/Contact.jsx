import { collection, deleteDoc, doc } from "firebase/firestore";
import { CircleUserRound, SquarePen, Trash2 } from "lucide-react";
import { db } from "../Confirg/config";
import Modal from "./Modal";

const Contact = ({ name, mail, id}) => {


  const deleteContact = async (id) => {
    const del = await deleteDoc(doc(db, "user-data", id));
    console.log(del)
  };

  


  return (
    <div className="min-w-[360px] bg-[#FFEAAE] h-16 rounded-lg flex justify-between items-center px-2">
      <div className="flex gap-2">
        <CircleUserRound color="#F6820C" size={45} />
        <div className="">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="leading-[0.5]">{mail}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Trash2 size={30} className="cursor-pointer" onClick={() => deleteContact(id)} />
      </div>
    </div>
  );
};

export default Contact;
