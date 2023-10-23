import React from 'react'
import Navbar from '../Navbar'
import ImgListonRosa from '../../images/ImgListonRosa.png'


function Us() {
  return (
    <div>
    <div className="nav-container">
        <Navbar />
      </div>
      <div className="title-container">
        <img
          src={ImgListonRosa}
          alt="liston rosa logo"
          className="img-title"
        />
      </div>
      <p>Us</p>
    </div>
  )
}

export default Us
