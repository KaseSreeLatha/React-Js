import React, { useState } from 'react'

const ToDo = () => {
    const [todo,setToDo]=useState("")
  return (
    <div>
        <form>
            <input type='text' value={todo} onChange={(e)=>setToDo(e.target.value)}></input>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}
export default ToDo 