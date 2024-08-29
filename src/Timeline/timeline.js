import React, { useState } from "react";
import "./timeline.css";
import Suggestions from "./suggestions";
import Post from "./posts/post";

function Timeline() {
  const [posts] = useState([
    {
      user: "karen._.latour01",
      postImage:
        "https://sevenwonders.org/wp-content/uploads/2016/08/74ada40e-7fde-4ddc-9f3b-36bfd0b34123.jpg",
      likes: 103,
      timestamp: "2h",
    },
    {
      user: "nancy_cook",
      postImage:
        "https://images.unsplash.com/photo-1554080353-321e452ccf19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 300,
      timestamp: "1d",
    },
    {
      user: "johndoe",
      postImage:
        "https://www.pbs.org/wnet/nature/files/2011/02/bisesh-gurung-DWZtqyxYU4s-unsplash-scaled-e1616436869634-610x343.jpg",
      likes: 37,
      timestamp: "30min",
    },
    {
      user: "alex_browne11",
      postImage:
        "https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
      likes: 17,
      timestamp: "13h",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post, index) => (
            <Post
              key={index} // Consider using a unique identifier if available
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
