import React, { useState } from "react";
import FormButton from "./FormButton";
import { MessageSquareText, Phone } from "lucide-react";

const FormD = () => {
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const formHandler = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setMail(e.target[1].value);
    setDesc(e.target[2].value);
  };

  const userName = (e) => {
    // console.log(e)
  };

  return (
    <div className="w-[50%] mt-15 flex flex-col gap-5 font-semibold">
      <div className="flex gap-10 w-full ">
        <FormButton
          text={"Via Support Chat"}
          icon={<MessageSquareText />}
          isOutline={false}
        />
        <FormButton text={"Via Call"} icon={<Phone />} isOutline={false} />
      </div>
      <FormButton
        text={"Via email Form"}
        icon={<MessageSquareText />}
        isOutline={true}
      />

      <div className="w-full flex justify-center">
        <form
          onSubmit={(e) => formHandler(e)}
          className="w-[90%] flex flex-col gap-8 "
        >
          <div className="relative">
            <label
              htmlFor="name"
              className="absolute -top-2.5 left-5 bg-white px-2"
            >
              Name
            </label>
            <input
              type="text"
              className=" outline-none border w-full text-lg p-2"
              onChange={(e) => userName(e)}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2.5 left-5 bg-white px-2"
            >
              Email
            </label>
            <input
              type="text"
              className=" outline-none border w-full text-lg p-2"
              onChange={(e) => userName(e)}
            />
          </div>
          <div className="relative">
            <label
              htmlFor="text"
              className="absolute -top-2.5 left-5 bg-white px-2"
            >
              Text
            </label>
            <textarea
              className=" outline-none border p-2 w-full"
              onChange={(e) => userName(e)}
            />
          </div>
          <div className="w-[50%] self-end ">
            <FormButton text={"Submit"} isOutline={false} />
          </div>
        </form>
      </div>

      {name != "" || mail != "" || desc != "" ? 
      <div>
          <h1>Name : {name}</h1>
          <h1>Email : {mail}</h1>
          <h1>Description : {desc}</h1>
      </div> 
      : 
      ""}
    </div>
  );
};

export default FormD;
