import styled from 'styled-components';
import { Form } from 'formik';
import background from '../../../../assets/images/background/explorer/explorer_tabs/pets.png';
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
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-image: url(${bottomBackground});
  background-size: cover;
  background-position: center;
`;

export const StyledPetInformation = styled.div`
  display: flex;
  position: relative;
  text-align: left;
  flex-direction: column;
  width: 80vh;
  height: 55vh;
  padding: 2vh;
  gap: 4vh;
  background: rgba(221, 221, 221, 0.1);
  border: 1px solid rgba(221, 221, 221, 0.15);
`;

export const StyledPetContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4vh;
`;

export const StyledPetIcon = styled.img`
  width: 6vh;
  height: 6vh;
  border: 1px solid #f8b700;
`;

export const StyledPetContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledPetName = styled.div`
  font-size: 3vh;
  font-weight: 100;
  color: #fbee65;
`;

export const StyledPetDescription = styled.div`
  color: #e0d3b8;
  font-size: 2.5vh;
  line-height: 2vh;
  margin-top: 2vh;
`;

export const StyledLoading = styled.img`
  margin: 10vh auto;
  height: 40vh;
`;

export const StyledPetAbilitiesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  flex-wrap: wrap;
`;

export const StyledPetAbilitiesTitle = styled.div`
  font-size: 3vh;
  font-weight: 100;
  color: rgb(225, 164, 46);
`;

export const StyledPetImage = styled.img`
  position: absolute;
  height: 30vh;
  bottom: 3vh;
  right: 3vh;
`;

export const StyledNavigationContainer = styled.div`
  width: 30vh;
  height: 55vh;
  display: flex;
  flex-direction: column;
  padding: 2vh;
  background: rgba(221, 221, 221, 0.1);
  border: 1px solid rgba(221, 221, 221, 0.15);
`;

export const StyledRandomContainer = styled.div`
  height: 50%;
  position: relative;
  border-top: 1px solid rgba(221, 221, 221, 0.15);
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 50%;
  align-items: center;
`;

export const StyledButtonAndInputTitle = styled.div`
  font-size: 3vh;
  line-height: 2.5vh;
  padding: 2vh;
  color: #e1a42e;
`;

export const ButtonText = styled.div`
  font-size: 3vh;
  padding: 6px 0;
  margin-top: 0.2vh;
  color: #f1b924;
  font-family: warcraft;
  text-shadow: 0 0 2px black;
`;

export const GoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2vh;
  left: 50%;
  transform: translateX(-50%);
  width: 14vh;
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

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StyledInput = styled.input`
  border-color: #f1b924;
  margin-top: 1vh;
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
  color: red;
  margin-top: 1vh;
`;

export const TreeImage = styled.img`
  width: 16vh;
  margin-top: -2vh;
  transform: scaleX(-1);
  transition: all 0.3s;
  &:hover {
    filter: drop-shadow(0 0 3px rgb(225, 164, 46));
    cursor: var(--custom-cursor-hover);
  }
`;
