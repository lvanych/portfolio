import React from 'react'
import { v4 as uuidv4 } from "uuid";

export function ProjectList({state}) {
    function view(){
      if (state.proj.length === 0 ) {
        return state.project.map((el) => (
        <img key={uuidv4()} src={el.img} alt={el.category} />
      ));
    } else {
      return state.proj.map((el) => (<img key={uuidv4()} src={el.img} alt={el.category} />))
    }
  }
  
    return (
      <div className="containerCards">
        {view()}
  </div>
    );
  }
  
