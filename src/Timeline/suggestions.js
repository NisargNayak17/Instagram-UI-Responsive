import React, { useState } from "react";
import "./suggestions.css";
import { Avatar } from "@mui/material";

function Suggestions() {
  const [posts] = useState([
    {
      user: "nis17",
    },
    {
      user: "ash92",
    },
    {
      user: "het._.22",
    },
    {
      user: "ryan_01",
    },
  ]);

  return (
    <div className="suggestion">
      <div className="suggestion_title">Suggestions for you</div>
      <div className="suggestion_usernames">
        {posts.map((post, index) => (
          <div className="suggestion_username" key={index}>
            <div className="username_left">
              <span className="avatar">
                <Avatar>{post.user.charAt(0).toUpperCase()}</Avatar>
              </span>
              <div className="username_info">
                <span className="username">{post.user}</span>
                <span className="relation">New to Instagram</span>
              </div>
            </div>
            <button className="follow_button">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
