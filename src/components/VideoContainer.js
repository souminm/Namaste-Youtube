import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideoData(json.items);
  };

  console.log(videoData);
  return (
    <div className="flex flex-wrap">
      {videoData.map((video, index) => (
      <Link to={"/watch?v="+video.id}> <VideoCards key={video.id} info={video} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
