import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [sendText, setSendText] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      //Api polling
      // console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-[625px]  h-[450px]  ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {
          //Disclaimer : Don't use Indexes as keys
          chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Soumin Mohanty",
            message:sendText,
          }))
          setSendText("");
        }}
      >
        <input
          className="px-2 w-96 border border-black"
          type="text"
          value={sendText}
          onChange={(e) => {
            setSendText(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-black text-white rounded-sm">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
