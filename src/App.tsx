import { Route, Routes } from "react-router-dom";
import "./App.css";
//component
import Nav from "./component/Nav";
// page
import Homepage from "./page/Homepage";
import AboutMe from "./page/AboutMe";
import Resume from "./page/Resume";
import Charming from "./page/Charming";
import SelfReliance from "./page/SelfReliance";
import MomBaby from "./page/MomBaby";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/charming" element={<Charming />} />
        <Route path="/self-reliance" element={<SelfReliance />} />
        <Route path="/mom&baby" element={<MomBaby />} />
      </Routes>
    </div>
  );
}

export default App;
