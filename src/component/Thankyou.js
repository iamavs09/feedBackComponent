import React from 'react'
import thankyou from '../images/illustration-thank-you.svg'
import { useContext  } from 'react'
import { AppContext } from '../App'

function Thankyou() {
  const {selectedValue} = useContext(AppContext);

  return (
    <>
    <main className='thankyou'>
      <img src={thankyou} alt="Thank you" />
      <div className="thankyou-selection-box">
        <p>You selected {selectedValue} out 5</p> 
      </div>
      <h3>Thank You!</h3>
      <p>
        We appreciate you taking the time to give a rating.
        If you ever need more support, dont hesitate to get in touch !
      </p>
    </main>
    </>
  )
}

export default Thankyou