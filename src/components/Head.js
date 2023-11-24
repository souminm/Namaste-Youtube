import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="yt-menu"
        ></img>
        <img
          className="h-8 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzg_LCf5ZahVQ42WRFD0PS3TNrpdOhqvckaO6-xgyo7kmVo5KW2EV6CEUakyaSGdmxqw&usqp=CAU"
          alt="yt-logo"
        ></img>
      </div>

      <div className="col-span-10 px-44">
        <input
          className="border border-gray-400 w-1/2 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
          🔎
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSEPxHF0-PRxJlVMHla55wvcxWdSi8RU2g&usqp=CAU"
          alt="user-icon"
        ></img>
      </div>
    </div>
  );
};

export default Head;
