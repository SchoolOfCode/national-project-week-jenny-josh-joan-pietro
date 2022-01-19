import React, {useState} from 'react';
import TopicButton from './TopicButton';
import { topicList } from '../CreatePage';

function Sidebar({searchByTopic}) {

    
  
    return (
      <div className="sideBar">
            <p>Click on topic below to browse all articles</p>
            {topicList.map((topic, index) => { return <TopicButton key={index} name={topic} searchByTopic={searchByTopic} />;})}

      </div>
    );
}

export default Sidebar
