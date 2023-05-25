import { useState } from "react";
import TopNavBar from "./components/TopNavBar";
import NavBar from "./components/NavBar";
import HowWeWork from "./components/HowWeWork";

import Hero from "./components/Hero";
import Open from "./components/Open";
import Offer from "./components/Offer";
import Numbers from "./components/Numbers";
import "./App.css";

function App() {
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <Hero />
      <Open />
      <HowWeWork />
      <Offer />
      <Numbers />
    </div>
  );
}

export default App;
