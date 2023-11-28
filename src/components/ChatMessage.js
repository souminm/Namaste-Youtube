import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&usqp=CAU"
        alt="user-icon"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
