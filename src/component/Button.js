import React from 'react'
import data from "./Data"
import { useContext  } from 'react'
import { AppContext } from '../App'

function Button() {
  const {setSelectedValue,handleClick,selectedValue} = useContext(AppContext);
  const listHandler = (e) =>{
      setSelectedValue(e.target.value)
  }
  const submitHandler = (e) =>{
      e.preventDefault();
      handleClick()
  }

  return (
    <>
      <ul onClick={listHandler}>
      {data.map((list)=>{
        return(
            <li key={list.id} value={list.value} className='list-item'
              style={{ backgroundColor: selectedValue===list.id ? 'coral' : 'hsl(213, 19%, 18%)' }}
            >{list.value}</li>
        )
      })} 
      </ul>
    <button className='submit-btn'  onClick={submitHandler} disabled={!selectedValue}>SUBMIT</button>
    </>
  )
}

export default Button
