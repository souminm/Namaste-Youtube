import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import appContext from "../utils/appContext";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  // const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search); //{}
  const dispatch = useDispatch();

  /**searchCache =
   * {
   * "iphone": ["iphone11","iphone14"]
   * }
   * searchQuery = iphone
   * */

  console.log(suggestions, "suggestion");

  useEffect(() => {
    //api call

    //make an api call after every key press
    //but if the difference between 2 api calls is <200 ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        // console.log(searchCache[searchText],'text');
        setSuggestions(searchCache[searchText]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  /**
   * key - i
   * - render the component
   * useEffect();
   * start time => make api call after 200 ms
   *
   * key - ip
   * - destroy the component (useEffect return method also)
   * re render the component
   * useEffect()
   * start timer => make api call after 200 ms
   *
   * setTimeOut(200) -make an api call
   *
   *
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    //Update in cache
    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
  };
  console.log("search", searchText);
  const { isMenuOpen, setMenuState } = useContext(appContext);
  const toggleMenuHandler = () => {
    // dispatch(toggleMenu());
    setMenuState(!isMenuOpen);
  };
  const handleYoutubeSearch = (e) => {
    setSearchText(e.target.value);
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
        <div>
          <input
            className=" px-2 border border-gray-400 w-1/2 p-2 rounded-l-full"
            type="text"
            value={searchText}
            onChange={handleYoutubeSearch}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
            🔎
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[26rem] shadow-lg rounded- border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
