import styled, { keyframes } from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5vh;
`;

export const StyledClass = styled.div`
    margin: 3vh;
`;

export const StyledDescription = styled.h3<{ color: string}>`
    color: ${props => props.color};
    font-size: 4vh;
    text-shadow: 0 0 1px black;
    font-weight: 100;
`;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--pulse-shadow-color-red), var(--pulse-shadow-color-green), var(--pulse-shadow-color-blue), 0.5);
  }
  70% {
    box-shadow: 0 0 0 100px rgba(var(--pulse-shadow-color-red), var(--pulse-shadow-color-green), var(--pulse-shadow-color-blue), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--pulse-shadow-color-red), var(--pulse-shadow-color-green), var(--pulse-shadow-color-blue), 0);
  }
`;

export const StyledImage = styled.img<{ colorRed: number, colorGreen: number, colorBlue: number, cardImage: any }>`
    border-radius: 9vh;
    background-image: url(${props => props.cardImage});
    background-size: 25vh;
    background-position: center;
    background-repeat: no-repeat;
    width: 25vh;
    height: 25vh;
    margin: 1vh;
    transition: all 0.5s;
    box-shadow: 0 0 15px #fbee65;
    &:hover{
        cursor: var(--custom-cursor-hover);
        transform: scale(1.3);
        --pulse-shadow-color-red: ${props => props.colorRed};
        --pulse-shadow-color-green: ${props => props.colorGreen};
        --pulse-shadow-color-blue: ${props => props.colorBlue};
        animation: ${pulseAnimation} 1.5s infinite;
    }
`;
