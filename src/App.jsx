import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Statistics from "./components/Statistics";
import Timeline from "./components/Timeline";
import Sponers from "./components/Sponers";
import Register from "./components/Register";
import Universe from "./components/Universe";

const App = () => {
  return (
    <div className=" w-full bg-primary min-h-screen ">
      <div className="bg-hero-pattern bg-cover">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Tracks/>
      <Statistics/>
      <Timeline/>
      <Sponers/>
      <Universe/>
      <Register/>

    </div>
  );
};

export default App;
