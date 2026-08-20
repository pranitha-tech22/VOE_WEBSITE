import { useState } from "react";

import Navbar from "./assets/components/Navbar.jsx";
import Hero from "./assets/components/Hero.jsx";
import MissionVision from "./assets/components/MissionVision.jsx";
import Team from "./assets/components/Team.jsx";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Navbar setActivePage={setActivePage} />

      {/* HOME PAGE */}
      {activePage === "home" && (
        <>
          <Hero />
          <MissionVision />
        </>
      )}

      {/* TEAM PAGE */}
      {activePage === "team" && <Team />}
    </>
  );
}

export default App;