import styled from 'styled-components';

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

export const StyledIcon = styled.img`
  width: 6vh;
  border: 1px solid rgb(80, 65, 55);
  &:hover {
    border-color: #f8b700;
    cursor: var(--custom-cursor-gear);
  }
`;
