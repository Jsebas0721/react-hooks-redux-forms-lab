import React from "react";
import { useState } from "react"

function BandInput({onBandSubmit}) {

  const [name, setName] = useState("");
 

  function handleChange(e){
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    onBandSubmit(name)
    setName("");
  }

  return (
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">name </label>
          <input type="text" id="name" onChange={handleChange} value={name}/>
          <input type="submit" value="add band"/>
        </p>
      </form>
  );
}

export default BandInput;
