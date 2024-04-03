import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  padding: 0 4vh;
  gap: 10vh;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10vh;
`;

export const StyledImageAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  &:hover {
    cursor: var(--custom-cursor-hover);
  }
`;

export const StyledImage = styled.div<{ background: string; color: string }>`
  width: 45vh;
  height: 25vh;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  border: 1px solid rgb(80, 65, 55);
  ${StyledImageAndTitle}:hover & {
    border-color: ${(props) => props.color};
  }
`;

export const StyledTitle = styled.div<{ color: string }>`
  font-size: 3.5vh;
  font-weight: 100;
  width: 45vh;
  color: #fbee65;
  ${StyledImageAndTitle}:hover & {
    color: ${(props) => props.color};
  }
`;

export const StyledDescription = styled.div`
  width: 40vh;
  margin-top: 2.5vh;
  color: #e0d3b8;
  font-size: 2vh;
  line-height: 2vh;
`;

export const StyledBigImage = styled.div<{ background: string }>`
  width: 135vh;
  height: 75vh;
  background: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
`;
