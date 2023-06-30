import styled from "styled-components";
import background from '../../../../assets/images/background/explorer/explorer_tabs/creatures.jpg';
import bottomBackground from '../../../../assets/images/background/explorer/second_background.jpg';
import ground from '../../../../assets/images/ground.png';
export const StyledContainer = styled.div`
    height: 100vh;
    margin-top: 35vh;
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
    width: 100%;
    height: 100vh;
    background-image: url(${bottomBackground});
    background-size: cover;
    background-position: center;
`;
