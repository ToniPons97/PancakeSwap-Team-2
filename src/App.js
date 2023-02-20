import "./App.css";

import Fab from "./components/Fab";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import { useFabScroll } from "./components/Hooks/useFabScroll";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PhishingWarning from "./components/PhishingWarning";
import { Pools } from "./components/Pools/Pools";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LiquidityHome } from "./components/LiqudityHome";
import { AddLiquidity } from "./components/AddLiquidity";
import Graph from "./components/Graph";
import { useCountdown } from "./components/Hooks/useCountdown";
import Teams from "./components/Teams";

function App() {
  // Phishing Warning state.
  const [showWarning, setShowWarning] = useState(true);

  // Custom hook to render Fab component conditionally.
  const { fabVisible, handleFabScrollEvent } = useFabScroll();

  // Go to the top of the page on browser refresh.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Start countdown.
  useCountdown();

  return (
    <div onScroll={handleFabScrollEvent}>
      <PhishingWarning phishingWarningState={{ showWarning, setShowWarning }} />
      <Navbar isWarningVisible={showWarning} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="/pools" element={<Pools isWarningVisible={showWarning} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="swap" element={<Graph showWarning={showWarning} />} />
        <Route
          path="Liquidity"
          element={<LiquidityHome isWarningVisible={showWarning} />}
        />
        <Route
          path="add"
          element={<AddLiquidity isWarningVisible={showWarning} />}
        />
        <Route path='teams' element={<Teams />}>
          <Route path=':id' element={<Teams />} />
        </Route>
      </Routes>
      <Footer />
      <Fab isFabVisible={fabVisible} />
    </div>
  );
}

export default App;
