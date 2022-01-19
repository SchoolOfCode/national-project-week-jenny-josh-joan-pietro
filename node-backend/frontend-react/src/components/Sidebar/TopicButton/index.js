import React from 'react'

function TopicButton({name, searchByTopic}) {
    return (
      <div>
        <button
                    id={name}
          onClick={(e) => searchByTopic(e)}
        >
          {name}
        </button>
      </div>
    );
}

export default TopicButton
