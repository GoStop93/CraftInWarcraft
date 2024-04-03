import styled from 'styled-components';

export const StyledContainer = styled.div<{ collabsGroup?: boolean }>`
  display: flex;
  align-items: center;
  height: 0;
  gap: 5vh;
`;

export const StyledContent = styled.div`
  display: flex;
`;

export const TabContent = styled.div`
  margin-top: 50vh;
`;
