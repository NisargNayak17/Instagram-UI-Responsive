import React from "react";
import "./sideNav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https:www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      ></img>
      <div className="sidenav__buttons">
        <button className="side_button">
          <HomeOutlinedIcon />
          <span>Home</span>
        </button>

        <button className="side_button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="side_button">
          <ExploreIcon />
          <span>Explore</span>
        </button>

        <button className="side_button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className="side_button">
          <ChatIcon />
          <span>Messages</span>
        </button>

        <button className="side_button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>

        <button className="side_button">
          <AddCircleOutlineOutlinedIcon />
          <span>Create</span>
        </button>
      </div>
      <div className="sidenav_more">
        <button className="side_button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
