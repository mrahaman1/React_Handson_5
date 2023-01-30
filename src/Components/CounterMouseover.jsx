import React from 'react'
import HocComponent from './HocComponent'

const CounterMouseover = (props) => {

    const {Counter,UpdateCounter}=props;
  return (
    <div className='count'>
        <div><p>Mouse over Counter:{Counter}</p></div>
       
        <button onMouseOver={UpdateCounter} id="mouseoverbtn">Increment on mouseover!!</button>
    </div>
  )
}

export default HocComponent(CounterMouseover);