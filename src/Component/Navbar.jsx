import React from 'react'
import './Navbar.css'

export default function () {
  return (
    <div className='Navbar-Container'>
        <div className='logo-conttainer'>
            <img src="pepcoding.png" alt="pepcoding" srcset="" />
        </div>
        <div className='menu-nav'>
            <ul className='menu'>
                <li>Trainings</li>
                <li> Guaranteed Job Program</li>
                <li>NADOS</li>
                <li>Resources</li>
                <li>Login</li>
            </ul>
        </div>
    </div>
  )
}
