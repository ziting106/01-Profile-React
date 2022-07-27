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
import JavaScript from "./page/JavaScript";
// javascript練習範例

function App() {
  return (
    <>
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/charming" element={<Charming />} />
          <Route path="/javaScript" element={<JavaScript />} />
          <Route path="/self-reliance" element={<SelfReliance />} />
          <Route path="/mom&baby" element={<MomBaby />} />
          {/* javascript練習範例 */}
          <Route path="/challenge1" element={<MomBaby />} />
          <Route path="/challenge2" element={<MomBaby />} />
          <Route path="/challenge3" element={<MomBaby />} />
          <Route path="/challenge4" element={<MomBaby />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
