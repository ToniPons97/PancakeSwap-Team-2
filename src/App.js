import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Fab from "./components/Fab";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import { useFabScroll } from "./components/Hooks/useFabScroll";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PhishingWarning from "./components/PhishingWarning";
import Graph from "./components/Graph";

function App() {
  // Phishing Warning state.
  const [showWarning, setShowWarning] = useState(true);

  // Custom hook to render Fab component conditionally.
  const { fabVisible, handleFabScrollEvent } = useFabScroll();

  return (
    <div onScroll={handleFabScrollEvent}>
      <PhishingWarning phishingWarningState={{ showWarning, setShowWarning }} />
      <Navbar isWarningVisible={showWarning} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="swap" element={<Graph />} />
      </Routes>
      <Footer />
      <Fab isFabVisible={fabVisible} />
    </div>
  );
}

export default App;
