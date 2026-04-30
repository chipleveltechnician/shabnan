import React, { useState, useEffect } from 'react';
import BootSequence from './components/BootSequence';
import Desktop from './components/Desktop';

function App() {
  const [bootPhase, setBootPhase] = useState('loading'); // 'loading', 'login', 'desktop'

  useEffect(() => {
    // Phase 1: Windows Loading (Starts immediately now)
    const loadTimer = setTimeout(() => {
      setBootPhase('login');
    }, 3500);

    return () => clearTimeout(loadTimer);
  }, []);

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
