import { BrowserRouter, Routes, Route } from "react-router-dom";


import Universe from "./components/Universe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


const App = () => {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Universe />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
