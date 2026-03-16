import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="main-container">
      {/* Dynamic Background */}
      <div 
        className="bg-glow" 
        style={{ 
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
          opacity: clicked ? 0.8 : 0.4
        }} 
      />
      
      <AnimatePresence mode="wait">
        {!clicked ? (
          <motion.div
            key="button-screen"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="screen"
          >
            <motion.div
              className="button-wrapper"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 0 80px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="magic-button"
                onClick={() => setClicked(true)}
              >
                <span className="button-text">Нажми если ты не гей</span>
                <div className="button-glow" />
              </motion.button>
              <motion.p 
                className="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1 }}
              >
                Твой выбор определит всё
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="result-screen"
            initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="screen"
          >
            <div className="result-container">
              <motion.h1 
                className="result-text"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 10 
                }}
              >
                Лох, теперь ты гей
              </motion.h1>
              
              <motion.div 
                 initial={{ width: 0, opacity: 0 }}
                 animate={{ width: "100%", opacity: 1 }}
                 transition={{ delay: 0.5, duration: 1 }}
                 className="rainbow-bar"
              />
              
              <motion.div 
                className="confetti-mock"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {/* Visual representation of a "prank success" aesthetic */}
                <div className="sparkle s1" />
                <div className="sparkle s2" />
                <div className="sparkle s3" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;900&display=swap');

        :root {
          --bg-dark: #050505;
          --accent-pink: #ff0080;
          --accent-purple: #7928ca;
          --glass: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--bg-dark);
          color: white;
          font-family: 'Outfit', sans-serif;
          overflow: hidden;
          cursor: crosshair;
        }

        .main-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at 50% 50%, #111 0%, #000 100%);
          position: relative;
          overflow: hidden;
        }

        .bg-glow {
          position: fixed;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(121, 40, 202, 0.3) 0%, rgba(255, 0, 128, 0.05) 50%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          filter: blur(40px);
          transition: opacity 1s ease;
        }

        .screen {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .button-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .magic-button {
          position: relative;
          padding: 2.5rem 5rem;
          font-size: 3rem;
          font-weight: 900;
          color: white;
          background: var(--glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8);
          text-transform: uppercase;
          letter-spacing: -1px;
        }

        .button-text {
          position: relative;
          z-index: 2;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .button-glow {
          position: absolute;
          inset: 0;
          border-radius: 30px;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .magic-button:hover .button-glow {
          opacity: 1;
        }

        .hint {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #666;
        }

        .result-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          padding: 2rem;
        }

        .result-text {
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 900;
          text-align: center;
          line-height: 0.9;
          background: linear-gradient(to right, #ff0080, #7928ca, #4facfe, #00f2fe, #ff0080);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: gradient-flow 3s linear infinite;
          filter: drop-shadow(0 10px 30px rgba(255, 0, 128, 0.3));
        }

        .rainbow-bar {
          height: 8px;
          border-radius: 4px;
          background: linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
        }

        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .confetti-mock {
          position: relative;
          width: 100%;
        }

        .sparkle {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          filter: blur(2px);
          animation: fly 2s infinite alternate;
        }

        .s1 { top: -100px; left: -50px; background: #ff0080; }
        .s2 { top: -120px; right: -80px; background: #7928ca; animation-delay: 0.5s; }
        .s3 { top: 50px; left: 100px; background: #4facfe; animation-delay: 1.2s; }

        @keyframes fly {
          from { transform: translateY(0) scale(1); opacity: 1; }
          to { transform: translateY(-50px) scale(1.5); opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .magic-button {
            font-size: 1.5rem;
            padding: 1.5rem 2rem;
            width: 85vw;
          }
          .hint {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default App;