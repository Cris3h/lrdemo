import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MapAr from "./components/tabs/displayMap/MapAr";
import ListProjects from "./components/tabs/projects/ListProjects";
import Donations from "./components/tabs/Donations";
import Loading from "./components/Loading";
import Info from './components/tabs/Info';

import { useEffect, useState } from "react";
import { createContext } from "react";
import test from "./testjson/test.json";
import Us from "./components/tabs/Us";

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
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/MapAr" element={<MapAr />} />
              <Route path="/proyectos" element={<ListProjects />} />
              <Route path="/donaciones" element={<Donations />} />
              <Route path="/informacion" element={<Info />}/>
              <Route path="/nosotres" element={<Us />} />
            </Routes>
        )}
      </MyContext.Provider>
    </div>
  );
}

export default App;
