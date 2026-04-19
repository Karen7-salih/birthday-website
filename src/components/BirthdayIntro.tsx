import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import HeartsBackground from './HeartsBackground';

interface BirthdayIntroProps {
  onStart: () => void;
}

function BirthdayIntro({ onStart }: BirthdayIntroProps) {
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
          <p className="intro-mini-text">a little surprise for you</p>

          <h1 className="intro-main-title">
            Happy Birthday
            <span>Jojo</span>
          </h1>
        </div>

        <div className="intro-button-wrap">
          <button
            type="button"
            className="intro-start-button"
            onClick={handleClick}
          >
            Click here to start
          </button>
        </div>
      </div>
    </section>
  );
}

export default BirthdayIntro;