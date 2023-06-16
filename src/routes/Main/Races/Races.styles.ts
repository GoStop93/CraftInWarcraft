import styled from "styled-components";
import ground from '../../../assets/images/ground.png';

export const StyledContainer = styled.div`
    margin-top: 306vh;
    min-height: 100vh;
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

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
`;