import styled from "styled-components";

export const StyledContainer = styled.div<{background: string}>`
    height: 100vh;
    width: 100%;
    position: absolute;
    background: url(${(porps) => porps.background});
    background-size: cover;
    background-position: center;
    overflow: hidden;
`;

export const StyledHeader = styled.div<{ color: string }>`
    margin-top: 10vh;
    color: ${(props) => props.color};
    text-shadow: 0 0 7px black;
    font-size: 8vh;
`;

export const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 2vh;
`;

export const StyledClassImage = styled.img<{ width: number, left: number, top: number }>`
    position: absolute;
    width: ${(props) => props.width}vh;
    left: ${(props) => props.left}%;
    top: ${(props) => props.top}%;;
    transform: translateX(-50%);
    transition: all 0.7s;
    z-index: 1;
    &:hover {
        transform: translateX(-50%) translateY(-12vh);
        cursor: var(--custom-cursor-hover);
    }
`;

export const StyledInfo = styled.div`
    margin-top: 20vh;
    margin-left: 2vh;
    z-index: 2;
`;

export const StyledInfoTitle = styled.div`
    margin: 0 auto;
    width: 45vh;
    color: #fbee65;
    font-size: 4vh;
`;

export const StyledInfoText = styled.div`
    margin-top: 2.5vh;
    width: 65vh;
    color: #E0D3B8;
    font-size: 2.3vh;
`;

export const StyledSpecializationContainer = styled.div`
    width: 55vh;
    background-color: #E0D3B8;
    margin-right: 2vh;
    margin-top: 10vh;
    border-radius: 2vh;
    opacity: 0.8;
    z-index: 2;
`;

export const StyledClassEmblem = styled.img`
    width: 30vh;
    margin-top: -20vh;
    &:hover {
        animation: shake 0.5s infinite;
        cursor: var(--custom-cursor-hover);
    }
`;

export const StyledSpecializationCards = styled.div`
    margin-top: -4vh;
`;
