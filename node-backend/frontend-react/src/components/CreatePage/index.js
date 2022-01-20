import React, { useState } from "react";
import "./CreatePage.css";

export const topicList = [
  "html",
  "css",
  "javascript",
  "react",
  "database",
  "api",
  "node",
  "express",
  "testing",
  "agile",
  "other",
];

function CreatePage() {
  const initialFormData = {};
  const [formData, setFormData] = useState(initialFormData);
  //to catch the value in the input field - e.target.value
  //add this input value into the state -  key(name atribute of the input)/value(user) pair
  //[e.target.name]: e.target.value
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
    console.log(formData);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await fetch("/api/resources", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    console.log(JSON.stringify(formData));
    return response.json();
  }

  return (
    <>
      <h1>Share your resources</h1>
      <div className="card container p-5 border border-primary">
        <div className="container pl-5">
          <form
            className="col g-2 needs-validation"
            novalidate
            method="POST"
            action="submit"
            onSubmit={handleSubmit}
          >
            <div className="col-md-1">
              <label className="form-label" for="topic">
                Topic:
              </label>
              <select
                className="select-button border border-primary"
                name="topic"
                id="cars"
                onChange={handleChange}
              >
                {topicList.map((item,index) => {
                  return <option key={index} value={item}>{item}</option>;
                })}
              </select>
            </div>

            <br />

            <div className="col-md-8">
              <label className="form-label" for="keywords">
                Keywords:
              </label>
              <input
                className="form-control border border-primary"
                onChange={handleChange}
                type="text"
                id="keywords"
                name="keywords"
              />
            </div>

            <br></br>

            <div className="col-md-8">
              <label className="form-label" for="description">
                Description:
              </label>
              <input
                className="form-control border border-primary"
                onChange={handleChange}
                type="text"
                id="description"
                name="description"
              />
            </div>

            <br></br>

            <div class="col-md-8">
              <label className="form-label" for="link">
                Link:
              </label>
              <input
                className="form-control border border-primary"
                onChange={handleChange}
                type="text"
                id="link"
                name="link"
              />
            </div>

            <br></br>

            <div className="col-md-8">
              <label className="form-label" for="username">
                Username:
              </label>
              <input
                className="form-control border border-primary"
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
              />
            </div>

            <br></br>
            <div className="button-line col-12">
              <input className="btn btn-primary" type="submit" value="Submit" />
                
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePage;
