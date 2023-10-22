import { Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import MapAr from "./components/tabs/displayMap/MapAr";
import ListProjects from "./components/tabs/projects/ListProjects";
import Donations from "./components/tabs/Donations";
import Loading from "./components/Loading";

import { useEffect, useState } from "react";
import { createContext } from "react";
import test from "./testjson/test.json";

export const MyContext = createContext();

function map(r) {
  return r.map((e) => e);
}

function App() {
  const [artWork, setArtWork] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/proyectos`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setArtWork(data);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    let render = map(test);
    setArtWork(render);
    setLoading(false);
  }, []);

  return (
    <div className="app">
      <MyContext.Provider value={{ artWork, setArtWork }}>
        {loading ? (
          <Loading />
        ) : (
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/lrdemo/MapAr" element={<MapAr />} />
              <Route path="/lrdemo/proyectos" element={<ListProjects />} />
              <Route path="/lrdemo/donations" element={<Donations />} />
              <Route />
            </Routes>
          </Router>
        )}
      </MyContext.Provider>
    </div>
  );
}

export default App;
