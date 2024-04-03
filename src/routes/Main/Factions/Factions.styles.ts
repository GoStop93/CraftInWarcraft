import styled from 'styled-components';
import background from '../../../assets/images/background/main/faction.jpg';
import ground from '../../../assets/images/ground.png';

export const StyledContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: absolute;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
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
  ::before {
    content: '';
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 1vh;
    background-image: url(${ground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    top: -0.5vh;
    left: 0px;
  }
`;

export const StyledInformation = styled.div`
  display: table;
  width: 123vh;
  margin-top: 10vh;
`;

export const StyledHeader = styled.div`
  color: white;
`;

export const StyledTitle = styled.h2`
  font-size: 6vh;
  font-weight: 100;
  color: #fbee65;
`;

export const StyledSubtitle = styled.div`
  margin: 2vh auto;
  width: 70vh;
  color: #e0d3b8;
  font-size: 2.5vh;
`;

export const StyledContentHorde = styled.div`
  margin-top: 15vh;
  display: flex;
  color: white;
`;

export const StyledFaction = styled.div`
  width: 48%;
`;

export const StyledHordeFrame = styled.img`
  position: absolute;
  width: 44vh;
  height: 26vh;
  left: 8vh;
  top: 47vh;
  z-index: 2;
  &:hover {
    cursor: var(--custom-cursor-hover);
  }
  &:hover ~ .horde_img {
    transform: scale(0.9);
  }
`;

export const StyledHordeImage = styled.img`
  width: 40vh;
  transition: all 0.3s;
  background-color: black;
`;

export const StyledHordeIcon = styled.img`
  position: absolute;
  z-index: 10;
  width: 80vh;
  top: 15vh;
  right: 5vh;
  border-radius: 55px;
  filter: drop-shadow(2px 0 20px #910000);
`;

export const StyledAllianceIcon = styled.img`
  position: absolute;
  z-index: 10;
  width: 90vh;
  top: 15vh;
  right: 3vh;
  border-radius: 55px;
  filter: drop-shadow(2px 0 20px #133c85);
`;

export const StyledAllianceFrame = styled.img`
  position: absolute;
  width: 43.2vh;
  height: 26vh;
  left: 67vh;
  top: 47vh;
  z-index: 2;
  &:hover {
    cursor: var(--custom-cursor-hover);
  }
  &:hover ~ .alliance_img {
    transform: scale(0.9);
  }
`;

export const StyledAllianceImage = styled.img`
  width: 40vh;
  transition: all 0.3s;
  background-color: black;
`;

export const StyledFactionTitle = styled.div`
  color: #fbee65;
  font-size: 4vh;
  margin-top: 4vh;
`;

export const StyledFactionDescription = styled.div`
  margin: 2vh auto;
  width: 350px;
  font-size: 2.3vh;
`;
