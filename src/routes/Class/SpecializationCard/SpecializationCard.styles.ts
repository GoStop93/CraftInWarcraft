import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2vh 2vh;
    text-align: start;
    gap: 2vh;
`;

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 2vh;
`;

export const StyledTitile = styled.div`
    font-size: 4vh;
    color: #10263D;
    text-shadow: rgb(251, 238, 101) 0px 0px 5px;
`;

export const StyledIcon = styled.img`
    width: 4vh;
    border-radius: 5px;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.3);
        box-shadow: 0 0 0 2px #FDE905;
        cursor: var(--custom-cursor-hover);
    }
`;

export const StyledText = styled.div`
    font-size: 2vh;
    color: #10263D;
`;
