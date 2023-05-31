import styled from "styled-components";

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

export const StyledImage = styled.img<{ color: string, cardImage: any}>`
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
        box-shadow: 0 0 100px ${props => props.color};
    }
`;
