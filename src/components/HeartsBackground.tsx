import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

function HeartsBackground() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setIsReady(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      particles: {
        number: {
          value: 18,
        },
        shape: {
          type: 'image',
          options: {
            image: [
              {
                src: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
                width: 32,
                height: 32,
              },
            ],
          },
        },
        size: {
          value: { min: 10, max: 18 },
        },
        opacity: {
          value: { min: 0.35, max: 0.75 },
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'top',
          outModes: {
            default: 'out',
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!isReady) {
    return null;
  }

  return <Particles id="hearts" options={options} className="hearts-layer" />;
}

export default HeartsBackground;