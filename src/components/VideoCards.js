import React from "react";

const VideoCards = (props) => {
  const { info } = props;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 md:w-64 w-full shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCards info={info}/>
    </div>
  );
};

export default VideoCards;
