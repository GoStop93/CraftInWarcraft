import styled from 'styled-components';
import { Form } from 'formik';
import background from '../../../../assets/images/background/explorer/explorer_tabs/creatures.jpg';
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
  justify-content: center;
  gap: 15vh;
  background-image: url(${bottomBackground});
  background-size: cover;
  background-position: center;
`;

export const StyledCreatureInformation = styled.div`
  display: flex;
  position: relative;
  text-align: left;
  margin-top: 10vh;
  width: 90vh;
  height: 40vh;
  padding: 2vh;
  gap: 4vh;
  background: rgba(221, 221, 221, 0.1);
  border: 1px solid rgba(221, 221, 221, 0.15);
`;

export const StyledCreatureImage = styled.img`
  border: 1px solid #f8b700;
  height: 100%;
`;

export const StyledCreatureContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCreatureName = styled.div`
  font-size: 4vh;
  color: #fbee65;
`;

export const StyledCreatureType = styled.div`
  display: flex;
  margin-top: 4vh;
  align-items: center;
  font-size: 3vh;
  gap: 1vh;
  color: #f8b700;
  strong {
    color: #e0d3b8;
    margin-top: 0.5vh;
    font-size: 2.5vh;
    line-height: 2vh;
    font-weight: 100;
  }
`;

export const StyledCreatureFamily = styled.div`
  display: flex;
  margin-top: 2vh;
  align-items: center;
  font-size: 3vh;
  gap: 1vh;
  color: #f8b700;
`;

export const StyledCreatureFamilyBlock = styled.div`
  display: flex;
  margin-top: 1vh;
  gap: 2vh;
`;

export const StyledFamilyIcon = styled.img`
  width: 4vh;
  height: 4vh;
  border: 1px solid rgb(68, 68, 68);
`;

export const StyledFamilyName = styled.div`
  color: #e0d3b8;
  margin-top: 0.5vh;
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledLoading = styled.img`
  margin: 0 auto;
  height: 40vh;
`;

export const StyledRandomContent = styled.div`
  display: flex;
  margin-top: 15vh;
`;

export const StyledRandomText = styled.div`
  position: absolute;
  top: 1vh;
  left: 55vh;
  color: #82d334;
  margin-top: 10vh;
  font-size: 3vh;
`;

export const StyledDemon = styled.img`
  height: 55vh;
  transition: all 0.5s;
  &:hover {
    filter: drop-shadow(0 0 5px #82d334);
    cursor: var(--custom-cursor-hover);
  }
`;

export const StyledImp = styled.img`
  position: absolute;
  bottom: 1vh;
  right: 1vh;
  height: 12vh;
`;

export const StyledCreatureInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

export const StyledCreatureSearch = styled.div`
  display: flex;
  position: relative;
  text-align: left;
  width: 90vh;
  height: auto;
  padding: 2vh;
  gap: 4vh;
  background: rgba(221, 221, 221, 0.1);
  border: 1px solid rgba(221, 221, 221, 0.15);
`;

export const StyledErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  color: red;
  font-size: 2vh;
  bottom: 1vh;
`;

export const StyledInputAndMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7vh;
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

export const StyledButtonAndInputTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
  gap: 5vh;
  font-size: 3vh;
  line-height: 2vh;
  padding: 2vh;
  color: #e1a42e;
`;

export const StyledForm = styled(Form)`
  display: flex;
  width: 35vh;
  height: 4vh;
  gap: 5vh;
`;

export const GoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const ButtonText = styled.div`
  font-size: 3vh;
  padding: 6px 0;
  margin-top: 0.2vh;
  width: 10vh;
  color: #f1b924;
  font-family: warcraft;
  text-shadow: 0 0 2px black;
`;
