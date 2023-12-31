import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_VIDEO_SEARCH_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchedVideos, setSearchedVideos] = useState([]);
  let searchQuery = searchParams.get("q");

  useEffect(() => {
    getSearchedVideosList();
  }, [searchQuery]);

  const getSearchedVideosList = async () => {
    const data = await fetch(YOUTUBE_VIDEO_SEARCH_API + searchQuery);
    const searchedVideosJson = await data.json();
    // console.log(searchedVideosJson);
    setSearchedVideos(searchedVideosJson?.items);
    // console.log(searchedVideosJson?.items?.id)
  };
  return searchedVideos?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-2 md:px-3 col-span-6 md:col-span-11 mt-4 md:mt-10">
      <div className="flex flex-col px-0 md:px-3  items-center">
        <div className="p-0 md:p-2 m-0 md:m-2">
          {searchedVideos?.map((video) => (
            <Link
              key={video?.id?.videoId}
              to={"/watch?v=" + video?.id?.videoId}
            >
              <div className="px-1 md:px-3 m-2 md:m-4 flex">
                <img
                  className="rounded-lg w-[200px] md:w-[400px] h-[100px] md:h-[210px] "
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                />
                <ul className="flex flex-col justify-start ml-2 md:ml-5 w-96">
                  <li className=" py-2 text-xl md:text-2xl ">{video?.snippet?.title}</li>
                  <li className="text-gray-500 text-sm md:text-[18px]">
                    {video?.snippet?.channelTitle}
                  </li>
                  <li className="text-gray-500 text-sm md:text-[18px]">
                    100 views{" "}
                    {(
                      Math.abs(
                        new Date(video?.snippet?.publishedAt) - new Date()
                      ) /
                      (60 * 60 * 24 * 1000)
                    ).toFixed(1)}{" "}
                    days ago
                  </li>
                  <li className="text-gray-500 mt-2 text-sm md:text-[15px]">
                    {video?.snippet?.description}
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
