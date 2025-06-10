import React, { useState } from 'react'

const Task = () => {
    let [name,setName] =useState([]);

    const [formName,setFormName]=useState({firstName:'',secondName:''});

    const handleNext =()=>{
        setName([...name,{firstName:formName.firstName,secondName:formName.secondName}])
        setFormName({firstName:'',secondName:''})
    }


  return (
    <div>
        <input type="text" value={formName.firstName} onChange={(e)=>{setFormName({...formName,firstName:e.target.value})}} />
        <input type="text" value={formName.secondName} onChange={(e)=>{setFormName({...formName,secondName:e.target.value})}} />
        <button onClick={handleNext}>next</button>
        {name.map((item, index) => (
        <div key={index}>
          {item.firstName} {item.secondName}
        </div>
      ))}
    </div>
  )
}

export default Task