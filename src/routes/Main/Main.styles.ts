import styled from "styled-components";
import front from '../../assets/images/background/main/front.png';
import middle from '../../assets/images/background/main/middle.png';
import back from '../../assets/images/background/main/back.jpg';
import ground from '../../assets/images/ground.png';

export const StyledContainer = styled.div`
    position: relative;
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
    };
`;

export const StyledGreeting = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
`;

export const StyledHeader = styled.div<{ offset: number}>`
    z-index: 3;
    margin-top: -10vh;
    text-transform: uppercase;
    will-change: transform;
    color: #CCE3FD;
    text-shadow:  0 0 15px #3794fd;
    transform: translate3d(0, ${props => props.offset/2.5}px, 0);
`;

export const StyledTitle = styled.div`
    font-size: 3.5vh;
    letter-spacing: 1vh;
`;

export const StyledSubtitle = styled.div`
    margin-top: 2vh;
    font-size: 12vh;
    letter-spacing: 0.7vh;
`;

export const StyledLayerBack = styled.div<{ offset: number}>`
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${back});
    background-size: cover;
    background-position: center;
    will-change: transform;
    transform: translate3d(0, ${props => props.offset/1.5}px, 0);
    z-index: 1;
`;

export const StyledLayerMiddle = styled.div<{ offset: number}>`
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${middle});
    background-size: cover;
    background-position: center;
    will-change: transform;
    transform: translate3d(0, ${props => props.offset/3}px, 0);
    z-index: 2;
`;

export const StyledLayerFront = styled.div<{ offset: number}>`
    height: 100%;
    width: 100%;
    position: absolute;
    background-image: url(${front});
    background-size: cover;
    background-position: center;
    will-change: transform;
    transform: translate3d(0, ${props => props.offset/6}px, 0);
    z-index: 4;
`;
