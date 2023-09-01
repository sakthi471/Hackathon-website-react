import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Statistics from "./components/Statistics";

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
    </div>
  );
};

export default App;
