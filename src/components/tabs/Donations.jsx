import React from 'react'
import Navbar from '../Navbar'
import ImgListonRosa from '../../images/ImgListonRosa.png'

function Donations() {
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
      <p>Donations</p>
    </div>
  )
}

export default Donations
