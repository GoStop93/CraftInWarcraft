import styled from 'styled-components';
import background from '../../../assets/images/background/main/lordaeron.jpg';
import ground from '../../../assets/images/ground.png';

interface StyledLayerProps {
  offset: number;
}

export const StyledContainer = styled.div`
  margin-top: 100vh;
  height: 206vh;
  width: 100%;
  position: absolute;
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

export const StyledLayer = styled.div.attrs<StyledLayerProps>((props) => ({
  style: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    marginTop: '-70vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 3}px, 0)`,
    zIndex: -1,
  },
}))<StyledLayerProps>``;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

export const StyledTitle = styled.div`
  font-size: 10vh;
  font-weight: 100;
  margin-top: 5vh;
  color: #fbee65;
  text-shadow: 0 0 5px #fde905;
  z-index: 2;
`;

export const StyledSubtitle = styled.div`
  color: #e0d3b8;
  font-size: 3vh;
  font-weight: 100;
  margin-top: 2vh;
  width: 103vh;
  z-index: 2;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 0 15vh;
  z-index: 2;
`;
