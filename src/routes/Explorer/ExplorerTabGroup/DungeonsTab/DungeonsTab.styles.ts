import styled from "styled-components";
import { Form } from "formik";
import background from '../../../../assets/images/background/explorer/explorer_tabs/dungeons.jpg';
import bottomBackground from '../../../../assets/images/background/explorer/second_background.jpg';
import ground from '../../../../assets/images/ground.png';
import { DefaultImage } from "../../../../assets/icons/navigation_icons";

export const StyledContainer = styled.div`
    min-height: 100vh;
    margin-top: 34.5vh;
    width: 100%;
`;

export const StyledTopContent = styled.div`
    width: 100%;
    height: 49vh;
    position: relative;
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
`;

export const StyledTitle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12vh;
    font-weight: 100;
    color: #fbee65;
    text-shadow: 7px 7px 3px black;
`;

export const StyledBottomContent = styled.div`
    min-height: 95vh;
    position: relative;
    display: flex;
    padding: 5vh;
    background-image: url(${bottomBackground});
    background-size: cover;
    background-position: center;
`;

export const StyledDungeonInformation = styled.div`
    display: flex;
    width: 150vh;
    height: 40vh;
    position: absolute;
    top: 10vh;
    background: rgba(221, 221, 221, 0.1);
    border: 1px solid rgba(221, 221, 221, 0.15);
`;

export const StyledImage = styled.img`
    width: 81vh;
    z-index: 2;
`;

export const DungeonContent = styled.div`
    display: flex;
    width: 69vh;
    flex-direction: column;
    text-align: left;
    padding: 2vh;
`;

export const DungeonTitle = styled.div`
    font-size: 3.5vh;
    color: #E1A42E;
`;

export const DungeonDescription = styled.div`
    margin: 2.5vh 0;
    color: #E0D3B8;
    font-size: 2vh;
    line-height: 2vh;
    
`;

export const DungeonsNavigation = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 10vh;
    right: 5vh;
    gap: 2.5vh;
`;

export const DungeonInputBlock = styled.div`
    width: 40vh;
    height: 23vh;
    position: relative;
    background: rgba(221, 221, 221, 0.1);
    border: 1px solid rgba(221, 221, 221, 0.15);
`;

export const DungeonRandomBlock = styled.div`
    width: 40vh;
    height: 14.5vh;
    display: flex;
    justify-content: center;
    background: rgba(221, 221, 221, 0.1);
    border: 1px solid rgba(221, 221, 221, 0.15);
`;

export const StyledButtonAndInputTitle = styled.div`
    font-size: 2vh;
    line-height: 2vh;
    padding: 2vh;
    color: #E1A42E;
`;

export const RandomButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2vh auto;
    width: 14vh;
    height: 4.5vh;
    border-color: #F1B924;
    border-radius: 8px;
    background: rgba(221, 221, 221, 0.01);
    z-index: 5;
    transition: all 0.3s;

    &:hover {
        cursor: var(--custom-cursor-hover);
        background: rgba(221, 221, 221, 0.2);
    }
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
    border-color: #F1B924;
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
    color: #F1B924;
    font-family: warcraft;
    text-shadow: 0 0 2px black;
`;

export const StyledErrorMessage = styled.div`
    color: red;
    margin-top: 1vh;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 35vh;
`;

export const StyledInput = styled.input`
    border-color: #F1B924;
    margin-top: 1vh;
    background: rgba(221, 221, 221, 0.1);
    color: #E0D3B8;
    font-size: 2vh;
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: var(--custom-cursor-mail);
    }
`;

export const StyledLoading = styled.img`
    position: absolute;
    width: 60vh;
    left: 25%;
`;

export const StyledLevel = styled.div`
    color: #E0D3B8;
    font-size: 2vh;
    line-height: 2vh;
    strong {
        font-weight: inherit;
        color: rgb(225, 164, 46);
    }
`;

export const DefaultIcon = styled(DefaultImage)`
    width: 79vh;
    height: 39vh;
    z-index: 1;
`;

export const DefaultArea = styled.div`
    position: absolute;
    width: 77vh;
    height: 100%;
    background: #2B2B2B;
`;

export const StyledEncounters = styled.div`
    margin-top: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 35vh;
    width: 100vh;
    gap: 3vh;
    flex-wrap: wrap;
`;

export const EncountersContent = styled.div`
    display: flex;
    height: 50vh;
    margin-top: 50vh;
    position: relative;
    width: 100%;
    justify-content: space-between;
`;

export const StyledChoImage = styled.img`
    height: 50vh;
    margin-left: 5vh;
`;

export const StyledEncounterText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledEncounterTitle = styled.div`
    font-size: 3.5vh;
    color: #E1A42E;
`;

export const StyledOrcImage = styled.img`
    height: 50vh;
    margin-right: 5vh;
`;
