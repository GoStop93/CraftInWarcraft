import styled from 'styled-components';
import { Form } from 'formik';
import background from '../../../../assets/images/background/explorer/explorer_tabs/items.jpg';
import bottomBackground from '../../../../assets/images/background/explorer/second_background.jpg';
import ground from '../../../../assets/images/ground.png';

interface StyledLayerBackProps {
  offset: number;
}

export const StyledContainer = styled.div`
  height: 100vh;
  margin-top: 34.5vh;
  width: 100%;
`;

export const StyledTopContent = styled.div`
  width: 100%;
  height: 49vh;
  position: relative;
  overflow: hidden;
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
    height: '60vh',
    marginTop: '-20vh',
    width: '100%',
    position: 'absolute',
    background: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    willChange: 'transform',
    zIndex: 1,
    transform: `translate3d(0, ${props.offset / 5}px, 0)`,
  },
}))<StyledLayerBackProps>``;

export const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12vh;
  font-weight: 100;
  color: #fbee65;
  text-shadow: 7px 7px 3px black;
  z-index: 2;
`;

export const StyledBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${bottomBackground});
  background-size: cover;
  background-position: center;
  padding: 5vh 30vh;
  gap: 7vh;
`;

export const DemonHunterImage = styled.img`
  height: 70vh;
  transform: scaleX(-1);
`;

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ItemInputBlock = styled.div`
  display: flex;
  position: relative;
  background: rgba(221, 221, 221, 0.1);
  border: 1px solid rgba(221, 221, 221, 0.15);
  border-radius: 2vh;
  padding: 1vh 1vh;
`;

export const ItemRandomBlock = styled.div`
  display: flex;
  text-align: center;
  background: rgba(221, 221, 221, 0.1);
  border: 1px solid rgba(221, 221, 221, 0.15);
  border-radius: 2vh;
  padding: 1vh 2vh;
`;

export const StyledButtonAndTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2vh;
  line-height: 2vh;
  padding: 1vh;
  color: #e1a42e;
`;

export const RandomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5vh;
  width: 15vh;
  border-color: #f1b924;
  border-radius: 8px;
  background: rgba(221, 221, 221, 0.01);
  z-index: 5;
  transition: all 0.3s;

  &:hover {
    cursor: var(--custom-cursor-hover);
    background: rgba(221, 221, 221, 0.2);
  }
`;

export const ButtonText = styled.div`
  font-size: 3vh;
  padding: 6px 0;
  margin-top: 0.2vh;
  color: #f1b924;
  font-family: warcraft;
  text-shadow: 0 0 2px black;
`;

export const StyledItemContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledForm = styled(Form)`
  display: flex;
  height: 3.5vh;
  gap: 5vh;
`;

export const StyledInputAndMessage = styled.div`
  display: flex;
`;

export const StyledInput = styled.input`
  border-color: #f1b924;
  margin-top: 0.5vh;
  background: rgba(221, 221, 221, 0.1);
  color: #e0d3b8;

  font-size: 2vh;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: var(--custom-cursor-mail);
  }
`;

export const StyledErrorMessage = styled.div`
  display: flex;
  text-align: start;
  flex-direction: column;
  position: absolute;
  top: 6.5vh;
  left: 22vh;
  width: 40vh;
  color: red;
  font-size: 2vh;
  bottom: 1vh;
`;

export const GoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -0.5vh;
  width: 15vh;
  height: 4.5vh;
  border-color: #f1b924;
  border-radius: 8px;
  background: rgba(221, 221, 221, 0.01);
  z-index: 5;
  transition: all 0.3s;

  &:hover {
    cursor: var(--custom-cursor-hover);
    background: rgba(221, 221, 221, 0.2);
  }
`;

export const StyledNavigationText = styled.div`
  text-align: start;
  font-size: 3vh;
  width: 20vh;
  height: auto;
  color: #e1a42e;
`;
