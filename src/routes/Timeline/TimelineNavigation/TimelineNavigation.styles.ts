import styled from "styled-components";

export const StyledContainer = styled.div<{ activeIndex: number }>`
    display: flex;
    gap: 10vh;
    width: 500%;
    height: 9.3vh;
    background-color: #201510;
    align-items: center;
    border-top: 1px solid rgb(80, 65, 55);
    border-bottom: 1px solid rgb(80, 65, 55);
    transform: translateX(${({ activeIndex }) => -activeIndex * 28.5}vh);
    transition: transform 0.3s;
`;
