import { useState } from "react";
import React from "react";

let UseState = () =>{

    let [data,setData]=useState("Hungry")

    let eat=()=>{
        setData("Stomach Full")
    }

    return(
        <div>
            {data}<br/><br/>
            <button onClick={eat}>Food</button>
        </div>
    )
}

export default UseState;