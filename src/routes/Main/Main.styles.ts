import styled from 'styled-components';
import front from '../../assets/images/background/main/front.png';
import middle from '../../assets/images/background/main/middle.png';
import back from '../../assets/images/background/main/back.jpg';

interface StyledLayerProps {
  offset: number;
}

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledGreeting = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

export const StyledHeader = styled.div.attrs<StyledLayerProps>((props) => ({
  style: {
    zIndex: 3,
    marginTop: '-10vh',
    textTransform: 'uppercase',
    willChange: 'transform',
    color: '#cce3fd',
    textShadow: '0 0 15px #3794fd',
    transform: `translate3d(0, ${props.offset / 2.5}px, 0)`,
  },
}))<StyledLayerProps>``;

export const StyledTitle = styled.div`
  font-size: 3.5vh;
  letter-spacing: 1vh;
`;

export const StyledSubtitle = styled.div`
  margin-top: 2vh;
  font-size: 12vh;
  letter-spacing: 0.7vh;
`;

export const StyledLayerBack = styled.div.attrs<StyledLayerProps>((props) => ({
  style: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundImage: `url(${back})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 1.5}px, 0)`,
    zIndex: 1,
  },
}))<StyledLayerProps>``;

export const StyledLayerMiddle = styled.div.attrs<StyledLayerProps>((props) => ({
  style: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundImage: `url(${middle})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 3}px, 0)`,
    zIndex: 2,
  },
}))<StyledLayerProps>``;

export const StyledLayerFront = styled.div.attrs<StyledLayerProps>((props) => ({
  style: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundImage: `url(${front})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 6}px, 0)`,
    zIndex: 4,
  },
}))<StyledLayerProps>``;

export const UpButton = styled.button`
  position: fixed;
  right: 5vh;
  bottom: 5vh;
  z-index: 200;
  width: 6vh;
  height: 6vh;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(0.4rem);
  transform: rotateX(180deg);
  border: 2px solid rgb(248, 183, 0);
  fill: rgb(248, 183, 0);
  transition: all 0.3s;
  &:hover {
    cursor: var(--custom-cursor-sword);
    fill: red;
    border-color: red;
    transform: rotateX(180deg) scale(1.2);
  }
  & svg {
    width: 100%;
    height: 100%;
  }
`;
