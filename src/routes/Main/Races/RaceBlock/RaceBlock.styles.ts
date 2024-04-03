import styled from 'styled-components';
import ground from '../../../../assets/images/ground.png';

export const StyledContainer = styled.div<{ background: string }>`
  min-height: 100vh;
  position: relative;
  width: 100%;
  background-image: url(${(props) => props.background});
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
`;

export const StyledLogo = styled.img`
  position: absolute;
  top: -12vh;
  left: 50%;
  transform: translateX(-50%);
  width: 20vh;
  z-index: 105;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5vh;
`;

export const StyledTitle = styled.div`
  margin-top: 17vh;
  font-size: 6vh;
  font-weight: 100;
  color: #fbee65;
`;

export const StyledSubtitle = styled.div`
  margin: 2vh auto;
  width: 125vh;
  color: #e0d3b8;
  font-size: 2.5vh;
`;

export const StyledRaceCards = styled.div`
  display: flex;
  gap: 5vh;
  margin-top: 10vh;
`;
