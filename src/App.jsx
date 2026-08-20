import { useState } from "react";

import Navbar from "./assets/components/Navbar.jsx";
import Hero from "./assets/components/Hero.jsx";
import MissionVision from "./assets/components/MissionVision.jsx";
import Team from "./assets/components/Team.jsx";
import About from "./assets/components/About.jsx";
import Footer from "./assets/components/Footer.jsx";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Navbar setActivePage={setActivePage} />

      {/* HOME */}
      {activePage === "home" && (
        <>
          <Hero />
          <MissionVision />
        </>
      )}

      {/* ABOUT */}
      {activePage === "about" && <About />}

      {/* TEAM */}
      {activePage === "team" && <Team />}

      {/* FOOTER - VISIBLE ON EVERY PAGE */}
      <Footer />
    </>
  );
}

export default App;