import React from 'react'
import './index.css'
import StatusBar from './components/StatusBar'
import { ContextAPI } from './context/ContextAPI'
 
const App = () => {
  return (
    <div>
      <ContextAPI>
      <StatusBar/>
      </ContextAPI>
    </div>
  )
}
 
export default App