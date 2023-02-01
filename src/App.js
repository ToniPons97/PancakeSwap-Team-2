import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useFabScroll } from './components/Hooks/useFabScroll';
import { LiquidityHome } from './components/LiqudityHome';
import { AddLiquidity } from './components/AddLiquidity';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import PhishingWarning from './components/PhishingWarning';
import Fab from "./components/Fab";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Graph from "./components/Graph";

function App() {
  // Phishing Warning state.
  const [showWarning, setShowWarning] = useState(true);

  // Custom hook to render Fab component conditionally.
  const { fabVisible, handleFabScrollEvent } = useFabScroll();

  // Go to the top of the page on browser refresh.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div onScroll={handleFabScrollEvent}>
      <PhishingWarning phishingWarningState={{ showWarning, setShowWarning }} />
      <Navbar isWarningVisible={showWarning} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="home" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="swap" element={<Graph />} />
        <Route path='Liquidity' element={<LiquidityHome isWarningVisible={showWarning} />}/>
        <Route path='add' element={<AddLiquidity isWarningVisible={showWarning}/>} />
      </Routes>
      <Footer />
      <Fab isFabVisible={fabVisible} />
    </div>
  );
}

export default App;
