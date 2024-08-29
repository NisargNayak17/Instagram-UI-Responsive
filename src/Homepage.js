import React from "react";
import "./Homepage.css";
import Sidenav from "./NavigationMenu/sideNav";
import Timeline from "./Timeline/timeline";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
