import React, { useState } from "react";
import TopicButton from "./TopicButton";
import { topicList } from "../CreatePage";
import "./sideBar.css";

function Sidebar({ searchByTopic }) {
  return (
    <div className="sideBar">
      <div className="sidebar">
        <p className="title-sidebar">TOPIC</p>
        {topicList.map((topic, index) => {
          return (
            <TopicButton
              key={index}
              name={topic}
              searchByTopic={searchByTopic}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
