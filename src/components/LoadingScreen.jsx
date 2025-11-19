import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animación de pulso para el logo
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

// Animación de rotación para el spinner
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Animación de fade para las estrellas
const twinkle = keyframes`
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

// Estrellas de fondo
const Stars = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Star = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} ${props => props.duration || '2s'} infinite;
  top: ${props => props.top || '50%'};
  left: ${props => props.left || '50%'};
  animation-delay: ${props => props.delay || '0s'};
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const MoonIcon = styled.div`
  font-size: 6rem;
  animation: ${pulse} 2s ease-in-out infinite;
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.5));
`;

const LogoText = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin: 0;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin-top: 1rem;
`;

const LoadingText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
  font-weight: 500;
`;

const ProgressBarContainer = styled.div`
  width: 300px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-top: 1.5rem;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #fff 0%, #a78bfa 100%);
  border-radius: 10px;
  transition: width 0.3s ease;
  width: ${props => props.progress || '0%'};
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

function LoadingScreen({ message = 'Preparando tu experiencia SleepWell...' }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 100 / 30; // 30 pasos en 3 segundos (cada 100ms)
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Generar estrellas aleatorias
  const stars = React.useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      key: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 2}s`
    }));
  }, []);

  return (
    <LoaderContainer>
      <Stars>
        {stars.map(star => (
          <Star
            key={star.key}
            top={star.top}
            left={star.left}
            duration={star.duration}
            delay={star.delay}
          />
        ))}
      </Stars>

      <LogoContainer>
        <MoonIcon>🌙</MoonIcon>
        <LogoText>SleepWell</LogoText>
        <Spinner />
        <LoadingText>{message}</LoadingText>
        <ProgressBarContainer>
          <ProgressBar progress={`${progress}%`} />
        </ProgressBarContainer>
      </LogoContainer>
    </LoaderContainer>
  );
}

export default LoadingScreen;
