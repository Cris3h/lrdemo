import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import mapAr from "../../../images/mapAr.png";
import ImgListonRosa from '../../../images/ImgListonRosa.png'

function MapAr() {
  return (
    <div className="mapAr-main-container">
      <div className="nav-bar-container">
        <Navbar />
      </div>
      <div className="title-container">
        <img src={ImgListonRosa} alt="title-liston-rosa" className="img-title"/>
      </div>

      <div className="map-container">
        <img
          src={mapAr}
          alt="Argentinian map"
          style={{
            width: "auto",
            height: "550px",
          }}
        />
      </div>
      <Link to='/'>atrás</Link>
    </div>
  );
}

export default MapAr;
