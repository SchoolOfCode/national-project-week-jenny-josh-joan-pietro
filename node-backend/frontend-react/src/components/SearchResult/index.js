import React from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import "./searchResult.css";
function SearchResult({ searchResults }) {
  //access search result

  return (
    <div className="unorder-list sectionCard card border border-primary">
      {searchResults.map((result) => {
        return (
          <>
          <div className="element list-card card border border-primary">
            <h3> Topic: {result.topic}</h3>
            <h4> Keywords: {result.keywords}</h4>
            <p>Description: {result.description}</p>
            <p> Submitted by: {result.username}</p>
            <LinkPreview url={result.link} width="300px" height="200px" />  
          </div>
          </>
        );
      })}
      
      
    </div>
  );
}
export default SearchResult;

// topic keywords despription link username
//  return <LinkPreview url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' width='400px' />;
