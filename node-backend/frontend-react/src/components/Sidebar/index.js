import React, {useState} from 'react';
import TopicButton from './TopicButton';
import { topicList } from '../CreatePage';

function Sidebar() {

    const [topicSearchResults, setTopicSearchResults] = useState([])

    async function searchByTopic(e) {
      e.preventDefault();
      let topic = e.target.id;
      let response = await fetch(`/api/resources?topic=${topic}`);
        let data = await response.json();
      console.log(data.payload);
        setTopicSearchResults(data.payload);
    }

  
    return (
      <div className="sideBar">
            <p>Click on topic below to browse all articles</p>
            {topicList.map((topic, index) => { return <TopicButton key={index} name={topic} handleClick={searchByTopic} />;})}

      </div>
    );
}

export default Sidebar
