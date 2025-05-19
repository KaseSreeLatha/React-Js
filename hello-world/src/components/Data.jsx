import React, { useState } from 'react'

const Data = () => {
    const arr=[
        {
            students:[  { name:"Sree", age:20 },
                        { name:"Latha", age:19 },
                        { name:"Anurag", age:18 }]
        },
        {
            teachers:[  { name:"Devi-T", age:20 },
                        { name:"Surekha-T", age:19 },
                        { name:"Anu-T", age:18 }]
        },
        {
            clerks:[    { name:"Ajitha-C", age:20 },
                        { name:"Maggie-C", age:19 },
                        { name:"Roopa-C", age:18 }]
        }
    ]

    const arr1=["students","teachers","clerks"]
    let [index,setIndex]=useState(0);
    let [profile,setProfile]=useState(arr[0][arr1[0]]);
    
    const prevHandler=()=>{
        index>0? setIndex(index-1):setIndex(2)
        setProfile(arr[index][arr1[index]]);
    }
    const nextHandler=()=>{
        setIndex(index=(index+1)%3)
        setProfile(arr[index][arr1[index]]);
    }
  return (
    <div>
        <h1>{arr1[index]} Profile</h1>
        <div>
            {profile.map((item)=>{
                return(
                    <div>
                        {item.name}
                        {item.age}
                    </div>
                )
            })}
        </div>

        <button onClick={prevHandler}>Prev</button>
        <button onClick={nextHandler}>Next</button>
    </div>
  )
}

export default Data