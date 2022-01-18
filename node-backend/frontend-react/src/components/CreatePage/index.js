import React, {useState} from "react";
 

function CreatePage() {
  const initialFormData={
    topic:"",

  };
  const [formData, setFormData]= useState(initialFormData);
  function handleChange(){

  }
  function handleSubmit(){

  }
     return (
        <>
          <h1>Create your first topic</h1>

           <form method='POST' action='submit'>
              <label for="topic">Topic:</label>
              <input type='text' id='topic' name='topic'/>
              <br></br>
              <label for="keywords">Keywords:</label>
              <input type='text' id='keywords' name='keywords'/>
              <br></br>
              <label for="description">Description:</label>
              <input type='text' id='description' name='description'/>
              <br></br>
              <label for="link">Link:</label>
              <input type='text' id='link' name='link'/>
              <br></br>
              <label for="username">Username:</label>
              <input type='text' id='username' name='username' />
              <br></br>
              <input  type='submit' value='Submit'/>
           </form>
        </>
      );
}

export default CreatePage
