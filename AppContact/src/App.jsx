import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import SearchBox from "./Components/SearchBox";
import Contact from "./Components/Contact";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./Confirg/config";
import Modal from "./Components/Modal";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }


  useEffect(() => {
    const Contacts = async () => {
      try {
        const contactRef = collection(db, "user-data");
        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map((item) => {
            return {
              id: item.id,
              ...item.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        });
      } catch (error) {
        console.log(error);
      }
    };

    Contacts();
  }, []);

  return (
    <>
      <div
        className={`py-5 flex flex-col gap-3 items-center min-h-screen w-screen relative 
        ${isOpen ? "blur-sm transition-all duration-300" : ""}`}
      >
        <Navbar />
        <SearchBox onOpen={onOpen} />
        {contacts.map((item, idx) => (
          <Contact key={idx} name={item.name} mail={item.email} id={item.id}/>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm">
          <Modal setIsOpen={setIsOpen} />
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm">
          <Modal setIsOpen={setIsOpen}/>
        </div>
      )}
    </>
  );
};

export default App;
