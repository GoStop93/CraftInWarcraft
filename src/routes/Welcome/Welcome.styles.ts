import styled from "styled-components";
import front from '../../assets/images/background/welcome/front.png';
import middle from '../../assets/images/background/welcome/middle.png';
import back from '../../assets/images/background/welcome/back.jpg';
import ground from '../../assets/images/ground.png';
import fromBackground from '../../assets/images/background/welcome/form_background.jpg';

export const StyledContainer = styled.div`
    background-color: #010101;
    color: #fff;
    line-height: 1.55;
`;

export const StyledGreetings = styled.div`
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
    }
`;

export const StyledLayers = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    position: relative;
`;

export const StyledLayerFront = styled.div<{ offset: number}>`
    height: 100%;
    width: 100%;
    position: absolute;
    background: url(${front});
    background-size: cover;
    background-position: center;
    will-change: transform;
    z-index: 4;
    transform: translate3d(0, ${props => props.offset/8}px, 0);
`;

export const StyledLayerMiddle = styled.div<{ offset: number}>`
    height: 100%;
    width: 100%;
    position: absolute;
    background: url(${middle});
    background-size: cover;
    background-position: center;
    will-change: transform;
    z-index: 2;
    transform: translate3d(0, ${props => props.offset/4}px, 0);
`;

export const StyledLayerBack = styled.div<{ offset: number}>`
    height: 100%;
    width: 100%;
    position: absolute;
    background: url(${back});
    background-size: cover;
    background-position: center;
    will-change: transform;
    z-index: 1;
    transform: translate3d(0, ${props => props.offset/1}px, 0);
`;

export const StyledHeader = styled.div<{ offset: number}>`
    z-index: 2;
    margin-top: 15vh;
    text-transform: uppercase;
    will-change: transform;
    font-weight: 400;
    color: #fbee65;
    text-shadow:  0 0 15px #FDE905;
    transform: translate3d(0, ${props => props.offset/2}px, 0);
`;

export const StyledTitle = styled.div`
    letter-spacing: 0.1vh;
    font-size: 12vh;
`;

export const StyledCaption = styled.div`
    letter-spacing: 0.1vh;
    font-size: 3vh;
`;

export const StyledContent = styled.div`
    min-height: 100vh;
    width: 100%;
    position: absolute;
    background: url(${fromBackground});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content:space-between;
    align-items: center;
`;

export const StyledSilvanaImage = styled.img`
    position: absolute;
    width: 55vh;
    top:  2vh;
    left: 5vh;
`;

export const StyledGarroshImage = styled.img`
    position: absolute;
    width: 50vh;
    bottom: 4vh;
    left: 30vh;
`;

export const StyledAnduinImage = styled.img`
    position: absolute;
    width: 20vh;
    bottom:  5vh;
    right: 4vh;
`;

export const StyledBranImage = styled.img`
    position: absolute;
    width: 40vh;
    top: 2vh;
    right: 40vh;
`;

export const StyledText = styled.div`
    margin: 0 1vh;
    width: 30%;
`;

export const StyledTextContent = styled.div`
    margin: 0 auto;
    font-size: 2.5vh;
`;

export const StyledSubtitle = styled.div`
    text-transform: uppercase;
    font-size: 5vh;
    letter-spacing: 0.2vh;
    color: #fbee65;
`;

export const StyledLogoContainer = styled.div`
    width: 40%;
`;

export const StyledLogo = styled.img`
    width: 54vh;
    transition: 1.2s;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 10px #FDE905);
    }
`;

export const StyledLoginContainer = styled.div`
    width: 30%;
`;

export const StyledCopy = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.45;
    font-size: 2.5vh;
    letter-spacing: 0.1vh;
`;
