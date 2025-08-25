// import { useState } from "react";
// import "./App.css";
//
// export default function GlitchReveal() {
//   const [revealed, setRevealed] = useState(false);
//
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black">
//
//       {/* Logo & Subtitle */}
//       <div className="mb-6">
//         <div className="logo ">
//           <img src="hachi.png"
//           className="logo-small"/>
//         </div>
//         <div className="subtitle">GLITCH CET PRESENTS</div>
//       </div>
//
//       {/* Reveal Button */}
//       {!revealed ? (
//         <button onClick={() => setRevealed(true)} className="button-glow">
//           REVEAL
//         </button>
//       ) : (
//         <div className="flex flex-col items-center space-y-6">
//           {/* Event Image */}
//           <img
//             src="/ctrl_create.png" // Replace with your image path
//             alt="Event Poster"
//             className="small-img zoom-in"
//           />
//
//           {/* Event Text */}
//           <div className="fade-in-delay flex flex-col items-center space-y-4 max-w-2xl text-center">
//             <h1 className="text-4xl font-bold glow-cyan">
//               🚀 Glitch 30-Day Challenge
//             </h1>
//             <h2 className="text-lg font-bold glow-pink">
//               Gaming Club Presents
//             </h2>
//             <p className="text-xl glow-purple">
//               A 30-day game development challenge to bring your ideas to life.
//               Take on the competition and rise through the leaderboard, with mentors available to guide you and clear your doubts.
//               Exciting prizes await at the top! 🎮🔥
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Trophy,
  Calendar,
  Users,
  Zap,
  GamepadIcon,
  Code,
  Target,
} from "lucide-react";

const InaugurationPage = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleLaunchEvent = () => {
    setIsLaunched(true);

    // Enhanced confetti effect
    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    // Multi-stage confetti burst
    const confettiInterval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(confettiInterval);
        return;
      }

      const particleCount = 60 * (timeLeft / duration);

      // Center burst
      confetti({
        angle: randomInRange(60, 120),
        spread: randomInRange(55, 85),
        particleCount: particleCount * 1.5,
        origin: { x: 0.5, y: 0.6 },
        colors: [
          "#ff0080",
          "#ffffff",
          "#8b5cf6",
          "#06b6d4",
          "#10b981",
          "#f59e0b",
        ],
      });

      // Side bursts
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.1 },
        colors: ["#ff0080", "#ffffff", "#8b5cf6", "#06b6d4"],
      });

      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.1 },
        colors: ["#ff0080", "#ffffff", "#8b5cf6", "#06b6d4"],
      });
    }, 200);
  };

  return (
    <div className="min-h-screen bg-primary-dark relative overflow-hidden">
      {/* Enhanced Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 128, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 128, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px, 50px 50px, 100px 100px, 100px 100px",
          }}
        />
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full opacity-70"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background:
                particle.id % 3 === 0
                  ? "#ff0080"
                  : particle.id % 3 === 1
                    ? "#8b5cf6"
                    : "#06b6d4",
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.7, 1, 0.3, 0.7],
              scale: [1, 1.8, 0.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Enhanced Sparkle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
              color:
                i % 4 === 0
                  ? "#ff0080"
                  : i % 4 === 1
                    ? "#8b5cf6"
                    : i % 4 === 2
                      ? "#06b6d4"
                      : "#10b981",
            }}
            animate={{
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={20 + Math.random() * 10} />
          </motion.div>
        ))}
      </div>

      {/* Glitch Effect Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0.05, 0, 0.03, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #ff0080 50%, transparent 100%)",
          transform: "skew(-0.5deg)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Enhanced GLITCH Logo - Always visible */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="flex flex-col justify-center items-center">
              {/* Enhanced Pixelated Logo */}
              <img
                src="hachi.png"
                className="w-20 h-20 mb-6 inset-3 bg-primary-dark"
                alt="Hachi"
              />

              <h3 className="font-heading text-2xl tracking-widest text-white mb-2">
                GLITCH
              </h3>

              <motion.p
                className="text-neon-pink font-body text-base tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                presents
              </motion.p>
            </div>
          </motion.div>

          {/* Enhanced Main Title - Hidden initially, revealed after launch */}
          <AnimatePresence>
            {isLaunched && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center"
              >
                <img
                  src="ctrlcreate@3x.png"
                  className="w-1/2 inset-3 bg-primary-dark"
                  alt="Hachi"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Event Description - Hidden initially, revealed after launch */}
          <AnimatePresence>
            {isLaunched && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="max-w-4xl mx-auto space-y-4 mb-12"
              >
                <motion.p
                  className="text-2xl md:text-3xl text-light-gray leading-relaxed"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.015,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                >
                  {"A 30-day game development challenge to bring your ideas to life. Take on the competition and rise through the leaderboard, with mentors available to guide you and clear your doubts. Exciting prizes await at the top!"
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        style={{
                          color:
                            char === "!"
                              ? "#ff0080"
                              : char === "?"
                                ? "#8b5cf6"
                                : "inherit",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Launch Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="py-12"
          >
            {!isLaunched && (
              <motion.button
                onClick={handleLaunchEvent}
                className="relative group px-16 py-8 bg-gradient-to-r from-neon-pink via-purple-600 to-cyan-500 text-white text-3xl font-heading font-black tracking-wide rounded-2xl overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 0, 128, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-600 to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10 flex items-center space-x-4">
                  <Zap className="w-8 h-8" />
                  <span>LAUNCH EVENT</span>
                  <Zap className="w-8 h-8" />
                </span>
                <motion.div
                  className="absolute inset-0 border-3 border-white/40 rounded-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>
            )}
          </motion.div>

          {/* Event Details - Hidden initially, revealed after launch */}
          <AnimatePresence>
            {isLaunched && (
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="grid md:grid-cols-3 gap-8 mt-16"
              >
                <motion.div
                  className="bg-dark-gray/60 backdrop-blur-lg border border-neon-pink/30 rounded-2xl p-8 text-center relative overflow-hidden"
                  whileHover={{
                    borderColor: "rgba(255, 0, 128, 0.8)",
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 0, 128, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-neon-pink/10 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Calendar className="w-12 h-12 text-neon-pink mx-auto mb-4" />
                  <h3 className="font-heading text-xl mb-3 text-white">
                    EVENT DURATION
                  </h3>
                  <p className="text-light-gray text-lg">
                    August 25 - September 25
                  </p>
                  <motion.div
                    className="mt-4 flex items-center justify-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                  >
                    <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                    <span className="text-neon-pink text-sm font-mono">
                      30 DAYS
                    </span>
                    <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="bg-dark-gray/60 backdrop-blur-lg border border-neon-pink/30 rounded-2xl p-8 text-center relative overflow-hidden"
                  whileHover={{
                    borderColor: "rgba(255, 0, 128, 0.8)",
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 0, 128, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Users className="w-12 h-12 text-neon-pink mx-auto mb-4" />
                  <h3 className="font-heading text-xl mb-3 text-white">
                    PARTICIPATION
                  </h3>
                  <p className="text-light-gray text-lg">Team / Individual</p>
                  <motion.div
                    className="mt-4 flex items-center justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0 }}
                  >
                    <GamepadIcon className="w-6 h-6 text-cyan-400" />
                    <Code className="w-6 h-6 text-purple-400" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="bg-dark-gray/60 backdrop-blur-lg border border-neon-pink/30 rounded-2xl p-8 text-center relative overflow-hidden"
                  whileHover={{
                    borderColor: "rgba(255, 0, 128, 0.8)",
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 0, 128, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Trophy className="w-12 h-12 text-neon-pink mx-auto mb-4" />
                  <h3 className="font-heading text-xl mb-3 text-white">
                    PRIZE POOL
                  </h3>
                  <p className="text-light-gray font-mono text-2xl">₹3K+</p>
                  <motion.div
                    className="mt-4 flex items-center justify-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                  >
                    <Target className="w-6 h-6 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-mono">
                      REWARDS
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Prize Pool Highlight - Also revealed after launch */}
          <AnimatePresence>
            {isLaunched && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 2.5,
                  type: "spring",
                  bounce: 0.3,
                }}
                className="mt-16"
              >
                <motion.div
                  className="inline-flex items-center space-x-6 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-600/20 border-2 border-yellow-400/40 rounded-full px-12 py-6 relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(255, 215, 0, 0.4)",
                      "0 0 60px rgba(255, 215, 0, 0.6), 0 0 90px rgba(255, 165, 0, 0.3)",
                      "0 0 30px rgba(255, 215, 0, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(255, 215, 0, 0.8)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <Trophy className="w-10 h-10 text-yellow-400" />
                  <span className="font-mono text-2xl font-black text-yellow-400 tracking-wide relative z-10">
                    WIN A PRIZE POOL OF ₹3K+
                  </span>
                  <Trophy className="w-10 h-10 text-yellow-400" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InaugurationPage;
