import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Football",
    "News",
    "Cooking",
    "Valentines",
    "Music",
    "Drama",
    "Gadget",
    "News"
  ];
  return (
    <div className="flex w-screen bg-white overflow-x-scroll no-scrollbar">
      {list.map((item, index) => (
        <div key={index}>
          <Button name={item} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
