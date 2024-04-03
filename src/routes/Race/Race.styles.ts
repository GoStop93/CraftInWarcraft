import styled, { css } from 'styled-components';
import ground from '../../assets/images/ground.png';

interface StyledLayerBackProps {
  offset: number;
  background: string;
}

interface StyledImageLeftProps {
  offset: number;
  left: number;
  leftHeight: number;
  isHovered: boolean;
  color: string;
}

interface StyledImageRightProps {
  offset: number;
  right: number;
  rightHeight: number;
  isHovered: boolean;
  color: string;
}

interface StyledTitleProps {
  offset: number;
}

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledHeader = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 1vh;
    background-image: url(${ground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    bottom: -0.5vh;
    left: 0px;
  }
`;

export const StyledLayerBack = styled.div.attrs<StyledLayerBackProps>((props) => ({
  style: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundImage: `url(${props.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 1.5}px, 0)`,
    zIndex: 1,
  },
}))<StyledLayerBackProps>``;

export const StyledImageLeft = styled.img.attrs<StyledImageLeftProps>((props) => ({
  style: {
    position: 'absolute',
    height: `${props.leftHeight}vh`,
    bottom: 0,
    left: `${props.left}vh`,
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 3}px, 0)`,
    zIndex: 2,
    ...(props.isHovered && {
      filter: `drop-shadow(0 0 10px ${props.color})`,
      animation: 'shake 1s infinite',
      bottom: '-1vh',
    }),
  },
}))<StyledImageLeftProps>``;

export const StyledImageRight = styled.img.attrs<StyledImageRightProps>((props) => ({
  style: {
    position: 'absolute',
    height: `${props.rightHeight}vh`,
    bottom: 0,
    right: `${props.right}vh`,
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 3}px, 0)`,
    zIndex: 2,
    ...(props.isHovered && {
      filter: `drop-shadow(0 0 10px ${props.color})`,
      animation: 'shake 1s infinite',
      bottom: '-1vh',
    }),
  },
}))<StyledImageRightProps>``;

export const StyledTitle = styled.div.attrs<StyledTitleProps>((props) => ({
  style: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2vh',
    transform: `translate3d(0, ${props.offset / 4}px, 0)`,
    zIndex: 2,
  },
}))<StyledTitleProps>``;

export const StyledFactionIcon = styled.img`
  width: 10vh;
`;

export const StyledRaceName = styled.div`
  font-size: 8vh;
  font-weight: 100;
  color: #fbee65;
  text-shadow: 7px 7px 3px black;
`;

export const StyledRaceLogo = styled.img`
  position: absolute;
  top: -23vh;
  left: 50%;
  transform: translateX(-50%);
  height: 45vh;
  z-index: 125;
  transition: all 0.5s;
  &:hover {
    cursor: var(--custom-cursor-hover);
  }
`;

export const StyledContent = styled.div<{ background: string }>`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
`;

export const StyledDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
  width: 100vh;
  gap: 5vh;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
`;

export const StyledDescriptionText = styled.div`
  width: 100%;
  color: #e0d3b8;
  font-size: 3.5vh;
  line-height: 3vh;
`;

export const StyledClassesAndTraits = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vh;
  margin: 15vh 0 20vh;
`;

export const BackButton = styled.button<{ color: string; position: boolean }>`
  position: absolute;
  top: 14vh;
  left: 4vh;
  display: flex;
  align-items: center;
  width: 138px;
  height: 42px;
  gap: 8px;
  border-color: #f1b924;
  border-radius: 8px;
  background: ${(props) => props.color};
  z-index: 5;
  transition: all 1s;

  ${(props) =>
    props.position &&
    css`
      position: fixed;
      transform: translateY(70vh);
    `}

  &:hover {
    cursor: var(--custom-cursor-go);
  }
`;

export const BackButtonText = styled.div`
  font-size: 28px;
  padding: 6px 0;
  margin-top: 0.2vh;
  color: #f1b924;
  font-family: warcraft;
  text-shadow: 0 0 2px black;
`;

export const BackButtonImage = styled.img`
  width: 24px;
  margin-left: 1vh;
  transition: all 0.5s;
  ${BackButton}:hover & {
    transform: translateX(-1vh);
  }
`;
