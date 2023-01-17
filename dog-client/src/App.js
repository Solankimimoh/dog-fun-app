import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/ui/Hedaer";
import Random from "./components/dog/Random";
import ByBreed from "./components/dog/ByBreed";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route exact index path="/" element={<Random />}/>
            <Route exact path="/by-breed" element={<ByBreed />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
