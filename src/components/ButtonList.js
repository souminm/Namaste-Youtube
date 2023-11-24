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
  ];
  return (
    <div className="flex">
      {list.map((item, index) => (
        <div key={index}>
          <Button name={item} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
