import { useState } from "react";
import TopNavBar from "./components/TopNavBar";
import NavBar from "./components/NavBar";
import HowWeWork from "./components/HowWeWork";

import Hero from "./components/Hero";
import Open from "./components/Open";
import Services from "./components/Services";
import Numbers from "./components/Numbers";
import "./App.css";
import Packages from "./components/Packages";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <Hero />
      <Open />
      <HowWeWork />
      <Services />
      <Numbers />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
