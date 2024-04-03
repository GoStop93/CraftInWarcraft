import styled, { css } from 'styled-components';
import background from '../../assets/images/background/races/alliance.jpg';
import { ProjectCardEnum } from './type';
import { PlayIcon } from '../../assets/icons/navigation_icons';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TopContent = styled.div<{ background: string }>`
  min-height: 95vh;
  width: 100%;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease;
`;

export const BottomContent = styled.div`
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15vh;
  gap: 10vh;
`;

export const BottomTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;

export const StyledTitile = styled.div`
  font-size: 6vh;
  font-weight: 100;
  color: #fbee65;
  text-align: left;
  text-shadow: 7px 7px 3px black;
`;

export const StyledText = styled.div`
  width: 80vh;
  color: #e0d3b8;
  font-size: 2.5vh;
  text-align: left;
`;

export const StyledPrev = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 2vh;
  z-index: 5;
  &:hover {
    cursor: var(--custom-cursor-sword);
  }
`;

export const StyledPrevIcon = styled.img`
  height: 7.5vh;
  transition: all 0.3s;
  ${StyledPrev}:hover & {
    transform: translateX(-2vh);
  }
`;

export const StyledNext = styled.div`
  position: fixed;
  height: 7.5vh;
  top: 50%;
  transform: translateY(-50%);
  right: 2vh;
  z-index: 5;
  &:hover {
    cursor: var(--custom-cursor-sword);
  }
`;

export const StyledNextIcon = styled.img`
  height: 7.5vh;
  transition: all 0.3s;
  ${StyledNext}:hover & {
    transform: translateX(2vh);
  }
`;

export const StyledCard = styled.div<{ stateCard: string }>`
  position: relative;
  height: 55.8vh;
  width: 39vh;
  border: 1px solid rgb(80, 65, 55);
  box-shadow: -15px 15px 15px black;
  transform-style: preserve-3d;
  transform-origin: right;
  transition: ease-in 0.5s;
  &:hover {
    border-color: #f8b700;
    cursor: var(--custom-cursor-bag);
  }
  ${({ stateCard }) =>
    stateCard === ProjectCardEnum.FLIPPED
      ? css`
          transform: rotateY(180deg) translateX(-100%);
          transform-origin: left;
        `
      : css`
          transform: rotateY(0);
          transform-origin: left;
          box-shadow: 15px 15px 15px black;
        `};
`;

export const BottomImage = styled.div<{ background: string }>`
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  transform: rotateY(180deg);
  transition: background-image 0.5s ease;
`;

export const StyledVideo = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  background-color: #150e0b;
`;

export const StyledContainerCard = styled.div`
  transform-origin: right top;
  perspective: 50rem;
  cursor: pointer;
`;

export const StyledBackCardText = styled.div`
  padding: 2vh;
  color: #e0d3b8;
  font-size: 2vh;
  text-align: left;
`;

export const StyledBackImage = styled.img`
  margin-top: 2vh;
  width: 90%;
  border-radius: 1vh;
`;

export const BackPlayContent = styled.div<{ background?: string }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 33.9vh;
  height: 19.1vh;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  border: 1px solid rgb(253, 222, 180);
  transition: all 0.7s;
  &:hover {
    cursor: var(--custom-cursor-gear);
    border: 1px solid red;
  }
`;

export const StyledPlayIcon = styled(PlayIcon)`
  width: 12vh;
  height: 12vh;
  z-index: 10;
  fill: red;
  transition: all 0.7s;
  ${BackPlayContent}:hover & {
    width: 15vh;
    height: 15vh;
  }
`;

export const StyledVideoTitle = styled.div<{ hovered: boolean }>`
  margin-top: 7vh;
  font-size: 4vh;
  font-weight: 100;
  color: ${(props) => (props.hovered ? 'red' : '#fbee65')};
  text-shadow: 7px 7px 3px black;
  transition: all 0.7s;
`;
