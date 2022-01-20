import React from "react";
import "./TopicButton.css"

function TopicButton({ name, searchByTopic }) {
  return (
    <div>
      <a  href="/" id={name} onClick={(e) => searchByTopic(e)}>
        {name}
      </a>
    </div>
  );
}

export default TopicButton;
