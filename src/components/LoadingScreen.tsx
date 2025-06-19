import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimatingOut(true);
      // Po animaci schovej a zavolej callback
      setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete();
      }, 800); // délka animace musí odpovídat CSS
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const generateParticles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 15}s`,
          animationDuration: `${15 + Math.random() * 10}s`
        }}
      />
    ));
  };

  if (!isVisible) return null;

  return (
    <div className={`loading-overlay ${isAnimatingOut ? 'slide-up-fade' : ''}`}>
      <div className="moving-background"></div>
      <div className="moving-particles">
        {generateParticles()}
      </div>
      
      <div className="loading-content">
        <div className="loading-logo"></div>
        <div className="loading-text">OpenWilds</div>
        <div className="text-green-400/60 text-sm mb-6 animate-pulse">
          Initializing server connection...
        </div>
        <div className="loading-progress">
          <div className="loading-progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
