import styled, { keyframes } from 'styled-components';

const generateRandomOffset = () => Math.random() * 20 - 10;

const rainAnimation = keyframes`
  0% {
    top: -5vh;
    opacity: 1;
  }
  100% {
    top: 100vh;
    opacity: 1;
    transform: translate(${generateRandomOffset()}px, 100vh);
  }
`;

export const Icon = styled.div<{ iconSrc: string; position: number; delay: number }>`
  position: absolute;
  width: 5vh;
  height: 5vh;
  background-image: url(${props => props.iconSrc});
  background-size: cover;
  background-position: center;
  animation: ${rainAnimation} 3s linear infinite;
  animation-delay: ${props => props.delay}s;
  border: 1px solid rgb(68, 68, 68);
  border-radius: 1vh;
  z-index: 1;
  top: -10vh;
  left: ${props => props.position}%;
`;

export const Container = styled.div<{ rain: boolean }>`
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  visibility: ${(props) => props.rain ? 'visible' : 'hidden' };
`;
