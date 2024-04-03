import styled from 'styled-components';

export const StyledImage = styled.img<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? '51vh' : '18vh')};
  z-index: 4;
  transition: all 0.3s;
  &:hover {
    cursor: var(--custom-cursor-hover);
    transform: scale(${({ isActive }) => (isActive ? null : '1.15')});
  }
  &:first-child {
    margin-left: 8%;
  }
`;
