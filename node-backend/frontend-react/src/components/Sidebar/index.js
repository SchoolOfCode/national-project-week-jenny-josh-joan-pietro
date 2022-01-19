import React, { useState } from "react";
import TopicButton from "./TopicButton";
import { topicList } from "../CreatePage";
import "./Sidebar.css";

function Sidebar({ searchByTopic }) {
  return (
    <div className="sideBar">
      <div class="sidebar">
        <p>Click on topic below to browse all articles</p>
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
