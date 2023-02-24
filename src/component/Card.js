import React from 'react'
import star from "../images/icon-star.svg"
import Button from './Button'

function Card() {
  return (
    <>
    <main className='card'>
      <div className="star-mask">
      <img src={star} alt="star" className="star" />
      </div>
      <h3>How did we do?</h3>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <Button/>
    </main>
    </>
  )
}

export default Card