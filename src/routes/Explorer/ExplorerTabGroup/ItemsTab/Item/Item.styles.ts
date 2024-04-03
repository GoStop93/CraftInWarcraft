import styled from 'styled-components';

export const StyledItemsInformation = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  min-width: 45vh;
  height: fit-content;
  padding: 2vh;
  gap: 0.7vh;
  background: rgba(221, 221, 221, 0.1);
  border: 1px solid rgba(221, 221, 221, 0.15);
`;

export const StyledItems = styled.div`
  display: flex;
  position: relative;
  margin-top: 5vh;
  width: 80vh;
  gap: 2vh;
`;

export const StyledItemIcon = styled.img<{ color?: string }>`
  width: 56px;
  height: 56px;
  border: 1px solid
    ${(props) => {
      switch (props.color) {
        case 'Common':
          return '#fff';
        case 'Poor':
          return '#9d9d9d';
        case 'Uncommon':
          return '#1eff00';
        case 'Rare':
          return '#0070dd';
        case 'Epic':
          return '#a335ee';
        case 'Legendary':
          return '#ff8000';
        default:
          return '#fff';
      }
    }};
`;

export const StyledRecipeItem = styled.div`
  margin: 3vh 0;
`;
