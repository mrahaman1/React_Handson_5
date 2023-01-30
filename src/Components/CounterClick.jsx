import React from 'react'
import HocComponent from './HocComponent'

const CounterClick = (props) => {

   const {Counter,UpdateCounter}=props;
  return (
    <div className='count'>
        <div><p>Click Counter:{Counter}</p></div>
       
        <button onClick={UpdateCounter} id="clickbtn">Increment!! on Click</button>

    </div>
  )
}

export default HocComponent(CounterClick);