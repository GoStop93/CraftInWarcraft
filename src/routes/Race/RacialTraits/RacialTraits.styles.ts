import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3vh;
`;

export const StyledTitle = styled.div`
    font-size: 3.5vh;
    font-weight: 100;
    color: #fbee65;
`;

export const StyledIconsBlock = styled.div`
    display: flex;
    width: 40vh;
    gap: 2vh;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledIcon = styled.img<{ modal?: boolean}>`
    width: 6vh;
    border: ${(props) => (props.modal ? '1px solid rgb(68, 68, 68)' : '1px solid rgb(80, 65, 55)'  )} ;
    ${(props) => props.modal ? '' : `
        &:hover {
            border-color: #f8b700;
            cursor: var(--custom-cursor-gear);
        }
    ` }
`;

export const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   width: 77vh;
   gap: 3vh;
   font-family: warcraft;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 2vh;
`;

export const ModalTitle = styled.div`
    font-size: 3vh;
    font-weight: 100;
    color: #fbee65;
`;

export const ModalText = styled.div`
    color: #E0D3B8;
    font-size: 2.5vh;
    line-height: 2vh;
`;
