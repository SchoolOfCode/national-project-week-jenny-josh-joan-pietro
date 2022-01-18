import React, {useState} from "react";
import { Dropdown } from 'semantic-ui-react'
 

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
  async function handleSubmit(e){
    e.preventDefault();
    let response = await fetch('/api/resources',{
      method:'POST',
      body:JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
    // .then(res => console.log(res.json()));
    console.log(JSON.stringify(formData))
    return response.json();

  }
//array of topic
  let topics = ["html","css","javascript",'react','database','testing','UI/UX','API','node']

    
     return (
        <>
          <h1>Create your first topic</h1>

           <form method='POST' action='submit' onSubmit={handleSubmit}>

              <label for="topic">Topic:</label>
              <select name="topic" id="cars" onChange={handleChange}>
                <option value="html">html</option>
                <option value="css">css</option> 
              </select>
             
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