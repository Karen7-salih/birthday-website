import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import HeartsBackground from './HeartsBackground';

interface BirthdayIntroProps {
  onStart: () => void;
}

function BirthdayIntro({ onStart }: BirthdayIntroProps) {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const duration = 1800;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        startVelocity: 28,
        spread: 360,
        ticks: 70,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.35,
        },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    const contentTimer = window.setTimeout(() => {
      setShowContent(true);
    }, 700);

    const buttonTimer = window.setTimeout(() => {
      setShowButton(true);
    }, 1300);

    return () => {
      window.clearTimeout(contentTimer);
      window.clearTimeout(buttonTimer);
    };
  }, []);

  const handleClick = () => {
    confetti({
      particleCount: 180,
      spread: 110,
      startVelocity: 34,
      origin: { y: 0.55 },
    });

    window.setTimeout(() => {
      onStart();
    }, 420);
  };

  return (
    <section className="intro-screen">
      <div className="intro-overlay" />
      <HeartsBackground />

      <div className="intro-content">
        <div className="intro-text-block">
          <motion.div
            initial={false}
            animate={{
              opacity: showContent ? 1 : 0,
              scale: showContent ? 1 : 0.985,
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <p className="intro-mini-text">a little surprise for you</p>

            <h1 className="intro-main-title">
              Happy Birthday
              <span>Jojo</span>
            </h1>
          </motion.div>
        </div>

        <div className="intro-button-wrap">
          <motion.button
            type="button"
            className="intro-start-button"
            onClick={handleClick}
            initial={false}
            animate={{
              opacity: showButton ? 1 : 0,
              y: showButton ? 0 : 6,
              pointerEvents: showButton ? 'auto' : 'none',
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            Click here to start
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default BirthdayIntro;