import styled from 'styled-components';

export const StyledEncounter = styled.div`
  display: inline;
  padding: 0.7vh 1.5vh;
  background-color: #2b2b2b;
  width: fit-content;
  border-radius: 10vh;
  color: rgb(224, 211, 184);
  border: 1px solid rgb(225, 164, 46);
  transition: all 0.3s;
  &:hover {
    cursor: var(--custom-cursor-gear);
    background: rgba(221, 221, 221, 0.2);
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 77vh;
  gap: 3vh;
  font-family: warcraft;
`;

export const ModalTitle = styled.div`
  font-size: 3vh;
  font-weight: 100;
  color: #fbee65;
`;

export const ModalText = styled.div`
  color: #e0d3b8;
  font-size: 2.5vh;
  line-height: 2vh;
`;
