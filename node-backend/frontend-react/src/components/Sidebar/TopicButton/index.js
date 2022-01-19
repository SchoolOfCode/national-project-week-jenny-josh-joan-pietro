import React from "react";

function TopicButton({ name, searchByTopic }) {
  return (
    <div>
      <a id={name} onClick={(e) => searchByTopic(e)}>
        {name}
      </a>
    </div>
  );
}

export default TopicButton;
