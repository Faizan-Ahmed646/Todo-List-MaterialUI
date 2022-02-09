import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
export default function List(props) {
  return (
    <div 
    className="todo_style">

      <span>

        <HighlightOffIcon 
        className="deleteIcon" 
        onClick={ ()=>{
        props.onSelect(props.id); }}/>
      
      </span>

      <li>{props.text}</li>
      
    </div>
  );
}
