import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { IParticlesProps } from './type';

export const MyParticles = ({ color, id, min, count }: IParticlesProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id={id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: `${color}`,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 2000,
            },
            value: count,
          },
          opacity: {
            value: 0.8,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: min, max: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
