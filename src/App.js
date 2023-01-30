import React from 'react'
import CounterClick from './Components/CounterClick'
import CounterMouseover from './Components/CounterMouseover'
import HocComponent from './Components/HocComponent'
import "./App.css"

const App = () => {
  return (
    <div>
      <h3>HOC Component Example</h3>
      <CounterClick/>
      <CounterMouseover/>
      <HocComponent/>
    </div>
  )
}

export default App