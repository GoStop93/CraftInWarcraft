import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  &:hover > div:first-child {
    display: flex;
  }
`;

export const StyledToolTip = styled.div<{ tooltipPosition: any; items?: boolean }>`
  position: absolute;
  max-width: 40vh;
  display: none;
  background-color: ${(props) => (props.items ? null : '#141010')};
  padding: 1.5vh 2.5vh;
  border-radius: 2px;
  text-align: left;
  border-radius: 1vh;
  z-index: 2;
  border: ${(props) => (props.items ? null : '1px solid rgb(80, 65, 55)')};
  box-shadow: ${(props) => (props.items ? null : '7px 7px 3px black')};
  opacity: ${(props) => (props.items ? '1' : '0.9')};

  ${({ tooltipPosition, items }) => css`
    top: calc(${tooltipPosition.y}px - ${items ? '290%' : '45%'});
    left: calc(${tooltipPosition.x}px + ${items ? '-30%' : '2%'});
  `}
`;

export const StyledToolTipContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

export const StyledToolTipTitle = styled.div`
  font-size: 2.7vh;
  font-weight: 100;
  color: #fbee65;
`;

export const StyledToolTipText = styled.div`
  color: #e0d3b8;
  font-size: 2vh;
  line-height: 2vh;
`;
