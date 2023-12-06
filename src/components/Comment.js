import React from "react";
import moment from "moment";

const Comment = ({ data }) => {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    data?.snippet?.topLevelComment?.snippet;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2 ">
      <img
        className="w-6 md:w-12 h-6 md:h-12 rounded-full"
        src={authorProfileImageUrl}
        alt="user-icon"
      ></img>
      <div className="px-3">
        <p className="font-bold">{authorDisplayName}</p>
        <p className="text-xs text-gray-500">{moment(publishedAt).fromNow()}</p>
        <p>{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
