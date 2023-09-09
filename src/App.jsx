import { BrowserRouter, Routes, Route } from "react-router-dom";


import Universe from "./components/Universe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Observer from "./components/Observer";


const App = () => {
  return (
        
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Universe />} />
        <Route path="/test" element={<Observer />} />

      </Routes>
    </BrowserRouter>

  );
};

export default App;
