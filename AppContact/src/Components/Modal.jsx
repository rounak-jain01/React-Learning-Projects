import { addDoc, collection } from "firebase/firestore";
import { CircleX } from "lucide-react";
import React, { useState } from "react";
import { db } from "../Confirg/config";

const Modal = ({ setIsOpen }) => {

  const [tempName, setTempName] = useState("");
  const [tempMail, setTempMail] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    addContact()
    setIsOpen(false)
  };

  const addContact = async () => {
    const contactRef = collection(db,"user-data")
    const data = await addDoc(contactRef,{name:tempName,
        email:tempMail
    })
  }
  

  return (
    <>
      <div className="bg-white w-87 h-70 flex flex-col absolute top-50">
        <div className="p-2 self-end">
          <CircleX size={30} onClick={() => setIsOpen(false)} />
        </div>

        <form className="flex flex-col h-full text-xl gap-4 px-4" onSubmit={formHandler}>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="border outline-none py-1 px-2"
              onChange={(e) => setTempName(e.target.value)}  // ❗ sirf local state
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="border outline-none py-1 px-2"
              onChange={(e) => setTempMail(e.target.value)}  
            />
          </div>

          <button
            type="submit"
            className="self-end bg-[#FCCA3F] px-3 py-2 rounded-lg cursor-pointer"
          >
            Add Contacts
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
