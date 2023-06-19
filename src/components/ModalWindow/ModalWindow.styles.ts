import styled from 'styled-components';

export const StyledCover = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3vh;
  gap: 16px;
  background: #181818;
  border: 1px solid rgb(68, 68, 68);
`;

export const CloseButton = styled.button<{ big?: boolean }>`
  position: absolute;
  top: ${(props) => (props.big ?' -4vh' : '2vh')};
  right: ${(props) => (props.big ?' -4vh' : '2vh')};
  fill: rgb(248, 183, 0);
  padding: 0;
  background: transparent;
  border: none;
  &:hover {
    cursor: var(--custom-cursor-sword);
    fill: red;
  }

  & svg {
    pointer-events: none;
    width: ${(props) => (props.big ?' 3vh' : '2vh')};
    height: ${(props) => (props.big ?' 3vh' : '2vh')};
  }
`;
