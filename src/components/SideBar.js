import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import appContext from "../utils/appContext";

const SideBar = () => {
  //We can subscribe to only specific portion from store
  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // (early return) if(!isMenuOpen) return null;
  const {isMenuOpen} = useContext(appContext);
  return (
    isMenuOpen && (
      <div className="md:p-5 p-3 shadow-lg md:w-48 w-25">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>

        <h1 className="font-bold pt-5">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    )
  );
};

export default SideBar;
