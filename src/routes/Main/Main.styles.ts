import styled from "styled-components";
import front from '../../assets/images/background/main/front.png';
import middle from '../../assets/images/background/main/middle.png';
import back from '../../assets/images/background/main/back.jpg';

export const StyledContainer = styled.div`
    position: relative;
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

export const UpButton = styled.button`
    position: fixed;
    right: 5vh;
    bottom: 5vh;
    z-index: 200;
    width: 6vh;
    height: 6vh;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(0.4rem);
    transform: rotateX(180deg);
    border: 2px solid rgb(248, 183, 0);
    fill: rgb(248, 183, 0);
    transition: all 0.3s;
    &:hover {
        cursor: var(--custom-cursor-sword);
        fill: red;
        border-color: red;
        transform: rotateX(180deg) scale(1.2);
    }
    & svg {
        width: 100%;
        height: 100%;
    }
`;
