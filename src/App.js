import React from 'react'
import Navbar from './Component/Navbar'
import './App.css'
import Subheader from './Component/Subheader'
import Form from './Component/Form'
import HowPart from './Component/HowPart'

export default function App() {
  return (
    <>
    <Navbar/>
    <div className='container-fluid back'>
      <div class='row '>
        <div className='col-6'>
          <Subheader/>
        </div>
        <div className='col-6'>
          <Form/>
        </div>
      </div>
    </div>
    <HowPart/>
    </>
  )
  }