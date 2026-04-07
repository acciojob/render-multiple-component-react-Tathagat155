import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
   const projects=[
     {name:"pookie",description:"jjjjjjjjjjjjjjj"},
     {name:"cookie",description:"jjddddddddjjjjjj"},
     {name:"Tookie",description:"llllllllljjjjjjjj"},
     {name:"Look",description:"fggggggjjjjjj"}
 ]
  return (
    <div id="main">
    {projects.map((project)=>{
        return (
        <div key={project.name}> 
       <h1  data-ns-test="project-name">{project.name}</h1>
        <h6 data-ns-test="project-description">{project.description}</h6>
       </div>
       )
      })}
    </div>
  )
}


export default App;
