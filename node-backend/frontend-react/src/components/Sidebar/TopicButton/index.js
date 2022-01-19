import React from 'react'

function TopicButton({name, handleClick}) {
    return (
      <div>
        <button
                    id={name}
          onClick={(e) => handleClick(e)}
        >
          {name}
        </button>
      </div>
    );
}

export default TopicButton
