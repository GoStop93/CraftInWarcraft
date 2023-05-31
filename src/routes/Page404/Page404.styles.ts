import styled from 'styled-components';
import background from '../../assets/images/background/page404/404.jpg';

export const StyledContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url(${background});
    position: absolute;
    background-size: cover;
    background-position: center;
`;

export const StyledContent = styled.div`
    display: table;
    width: 80%;
    margin-top: 40vh;
`;

export const StyledTitle = styled.div`
    margin: 0 auto;
    width: 60vh;
    font-size: 9vh;
    color: #5EFD01;
    text-shadow: 0px 0 15px black;
`;

export const StyledSubtitle = styled.div`
    font-size: 6vh;
    color: #5EFD01;
    text-shadow: 0px 0px 5px black;
    animation: beat 2s ease infinite;
    margin: 5vh;
`;

export const StyledButton = styled.button`
    background-image: linear-gradient(green, #5EFD01);
    background-color: #5EFD01;
    width: 20vh;
    height: 3.2vh;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    font-family: warcraft;
    font-size: 2vh;
    &:hover {
        cursor: var(--custom-cursor-go);
        background-color: green;
        background-image: -webkit-gradient(linear, left top, left bottom, from(green), to(#5EFD01));
        background-image: linear-gradient(green, green);
    }
`;
