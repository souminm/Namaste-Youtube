import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { COMMENTS_API } from "../utils/constants";

// const commentsData = [
//   {
//     name: "Soumin Mohanty",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Soumin Mohanty",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [
//       {
//         name: "Soumin Mohanty",
//         text: "Lorem ipsum dolor sit amet, consectetur adip",
//         replies: [],
//       },
//       {
//         name: "Soumin Mohanty",
//         text: "Lorem ipsum dolor sit amet, consectetur adip",
//         replies: [
//           {
//             name: "Soumin Mohanty",
//             text: "Lorem ipsum dolor sit amet, consectetur adip",
//             replies: [
//               {
//                 name: "Soumin Mohanty",
//                 text: "Lorem ipsum dolor sit amet, consectetur adip",
//                 replies: [
//                   {
//                     name: "Soumin Mohanty",
//                     text: "Lorem ipsum dolor sit amet, consectetur adip",
//                     replies: [
//                       {
//                         name: "Soumin Mohanty",
//                         text: "Lorem ipsum dolor sit amet, consectetur adip",
//                         replies: [],
//                       },
//                     ],
//                   },
//                   {
//                     name: "Soumin Mohanty",
//                     text: "Lorem ipsum dolor sit amet, consectetur adip",
//                     replies: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Soumin Mohanty",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Soumin Mohanty",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Soumin Mohanty",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Soumin Mohanty",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
// ];

const CommentsList = ({ commentData }) => {
  // Disclaimer: Don't use indexes as keys
  // return comments.map((comment, index) => (
  //   <div key={index}>
  //     <Comment data={comment} />
  //     <div className="pl-5 border border-l-black ml-5">
  //       <CommentsList comments={comment.replies} />
  //     </div>
  //   </div>
  // ));
  //  const {authorDisplayName,authorProfileImageUrl,publishedAt,textDisplay} = commentData.s
  return (
    <div>
      {commentData.map((comment) => (
        <div key={comment.id}>
          <Comment data = {comment}/>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = (props) => {
  const { videoId } = props;
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, [videoId]);

  const getCommentsData = async () => {
    const data = await fetch(COMMENTS_API + videoId);
    const json = await data.json();
    setCommentData(json.items);
  };
  // console.log(commentData, "comment_Data");

  // console.log(videoId,'id');
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">{commentData.length} Comments </h1>
      <CommentsList commentData={commentData} />
    </div>
  );
};

export default CommentsContainer;
