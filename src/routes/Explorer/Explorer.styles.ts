import styled from "styled-components";
import ground from '../../assets/images/ground.png';
import background from '../../assets/images/background/explorer/main_background.jpg';

export const StyledContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledHeader = styled.div`
    height: 100vh;
    width: 100%;
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
        bottom: 0.2vh;
        left: 0px;
    }
`;

export const StyledTitile = styled.div`
    margin-top: 15vh;
    font-size: 6vh;
    font-weight: 100;
    color: #fbee65;
`;

export const StyledSubtitle = styled.div`
    margin: 2vh auto;
    width: 70vh;
    color :#E0D3B8;
    font-size: 2.5vh;
`;

export const StyledContent = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
`;