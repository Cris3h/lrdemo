import React from "react";

function ItemListProyect({id, image, name, place, description}) {

  // console.log(place)

  return (
    <div className="list-main-container" key={id} style={{border:' solid 2px blue', margin:'2rem'}}>
      {/* <img src={image} alt="art work" /> */}
      <p><b>obra: {name}</b></p>
      <p><b>Provincia: {place.state}</b></p>
      <p><b>Ciudad: {place.city}</b></p>
      <p><b>{description}</b></p>

      <br />
    </div>
  );
}

export default ItemListProyect;
