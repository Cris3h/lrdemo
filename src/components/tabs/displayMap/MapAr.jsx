import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import mapAr from "../../../images/mapAr-flag.png";
import ImgListonRosa from '../../../images/ImgListonRosa.png'

function MapAr() {
  return (
    <div className="mapAr-main-container">
      <div className="nav-bar-container">
        <Navbar />
      </div>
      <div className="title-container">
        <img src={ImgListonRosa} alt="title-liston-rosa" 
        style={{
          width:'110px'
        }}/>
      </div>

      <div className="map-container">
        <img
          src={mapAr}
          alt="Argentinian map"
          style={{
            width: "250px",
            height: "250px",
            background: "white",
          }}
        />
      </div>
      <Link to='/'>atrás</Link>
    </div>
  );
}

export default MapAr;
