import React, { useContext } from "react";

import ItemListProyect from "./ItemListProyect";
import Navbar from "../../Navbar";
import { MyContext } from "../../../App";


function ListProjects() {
  const { artWork } = useContext(MyContext);

  console.log('listproyects', artWork);

  return (
    <div className="list-main-container">
      <div className="nav-bar-container">
        <Navbar />
      </div>
      <div className="title-listproject-container">Liston Rosa</div>
      <div className="listproject-header-container">
        <p>Te contamos una historia</p>
      </div>
      {
        artWork?.map((a) => {
          return (
            <div className="item-list-proyect-container">
              <ItemListProyect 
                id={a.id}
                image={a.image}
                name={a.name}
                place={a.place}
                description={a.description}
              />
            </div>
          )
        } )
      }
      <div className="asd">
        <a href="/"> back </a>
      </div>
    </div>
  );
};

export default ListProjects;
