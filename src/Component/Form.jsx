import React from 'react'
import './Form.css'

export default function () {
  return (
    <div className='form-container mt'>
        <h1 class="baf">Book a <span class="site-red-color">FREE</span> trial class.
            </h1>

        
            <label>Email*</label><br/>
            <input type="email" placeholder='email' className='input-form'/><br/>
            <label>Graduation Year*</label><br/>
            <input type="number"  className='input-form'/><br></br>
            <label>Phone Number</label><br/>
            <input className='dis' value="  91" disabled/><input type="number"  className='dis1'/><br></br>

           <div className='btm-session-0uter'> <button className='btn-session'>Book
                Your Live Session
              </button></div>
             
    </div>
  )
}
