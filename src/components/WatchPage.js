import React, { useContext, useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import appContext from "../utils/appContext";


const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const{setMenuState} = useContext(appContext); 
  

  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(closeMenu());
    setMenuState(false);
  }, []);
  return (
    <div className="px-5">
      <iframe
        width="850"
        height="450"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
