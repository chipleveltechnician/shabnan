import React, { useState, useEffect } from 'react';
import BootSequence from './components/BootSequence';
import Desktop from './components/Desktop';

function App() {
  const [bootPhase, setBootPhase] = useState('bios'); // 'bios', 'loading', 'login', 'desktop'

  useEffect(() => {
    // Phase 1: BIOS
    const biosTimer = setTimeout(() => {
      setBootPhase('loading');
    }, 4500); // BIOS takes 4.5 seconds

    return () => clearTimeout(biosTimer);
  }, []);

  useEffect(() => {
    if (bootPhase === 'loading') {
      // Phase 2: Windows Loading
      const loadTimer = setTimeout(() => {
        setBootPhase('login');
      }, 3500); // Loading takes 3.5 seconds

      return () => clearTimeout(loadTimer);
    }
  }, [bootPhase]);

  const handleLogin = () => {
    setBootPhase('desktop');
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-white select-none">
      {bootPhase !== 'desktop' ? (
        <BootSequence phase={bootPhase} onLogin={handleLogin} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

export default App;
