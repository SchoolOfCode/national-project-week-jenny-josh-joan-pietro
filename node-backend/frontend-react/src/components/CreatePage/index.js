import React, {useState} from "react";
 

function CreatePage() {
  const initialFormData={
    


  };
  const [formData, setFormData]= useState(initialFormData);
  //to catch the value in the input field - e.target.value
  //add this input value into the state -  key(name atribute of the input)/value(user) pair
  //[e.target.name]: e.target.value
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(e.target.name);
    console.log(formData);
  }
  function handleSubmit(){

  }

     return (
        <>
          <h1>Create your first topic</h1>

           <form method='POST' action='submit'>
              <label for="topic">Topic:</label>
              <input onChange={handleChange} type='text' id='topic' name='topic'/>
              <br></br>
              <label for="keywords">Keywords:</label>
              <input onChange={handleChange} type='text' id='keywords' name='keywords'/>
              <br></br>
              <label for="description">Description:</label>
              <input onChange={handleChange} type='text' id='description' name='description'/>
              <br></br>
              <label for="link">Link:</label>
              <input onChange={handleChange} type='text' id='link' name='link'/>
              <br></br>
              <label for="username">Username:</label>
              <input onChange={handleChange} type='text' id='username' name='username' />
              <br></br>
              <input  type='submit' value='Submit'/>
           </form>
        </>
      );
}

export default CreatePage
