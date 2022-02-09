import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import List from "./list";

export default function TodoList() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const itemAdd = (e) => {
    setItem(e.target.value);
  };


  const listOfData = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem(" ");
  };

  
  const deleteItems=(id)=>{
    console.log("deleted");
    setNewItem((preValue) =>{
       return preValue.filter((arr, index)=>{
        return index !== id
    });
});
  }




  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h2> TodoList </h2>
          <br />

          <input
            type="text"
            value={item}
            placeholder="Add Items"
            onChange={itemAdd}
          />

          <Button 
          className="newBtn" 
          onClick={listOfData}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val, index) => {
              return( 
              <List 
              key={index} 
              text={val} 
              id={index}
              onSelect={deleteItems}
              />);
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
}
