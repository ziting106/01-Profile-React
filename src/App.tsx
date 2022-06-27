import { Route, Routes } from "react-router-dom";
import "./App.css";
//component
import Nav from "./component/Nav";
import Footer from "./component/Footer";
// page
import Homepage from "./page/Homepage";
import AboutMe from "./page/AboutMe";
import Charming from "./page/Charming";
import SelfReliance from "./page/SelfReliance";
import MomBaby from "./page/MomBaby";

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/charming" element={<Charming />} />
          <Route path="/self-reliance" element={<SelfReliance />} />
          <Route path="/mom&baby" element={<MomBaby />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
