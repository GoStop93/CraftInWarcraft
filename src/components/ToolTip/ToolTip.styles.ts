import styled, { css } from 'styled-components';


export const StyledWrapper = styled.div`
  &:hover > div:first-child {
    display: flex;
  }
`;

export const StyledToolTip = styled.div<{ tooltipPosition: any; dungeons?: boolean }>`
  position: absolute;
  max-width: 40vh;
  display: none;
  background-color: #141010;
  padding: 1.5vh 2.5vh;
  border-radius: 2px;
  text-align: left;
  border-radius: 1vh;
  z-index: 2;
  border: 1px solid rgb(80, 65, 55);
  box-shadow: 7px 7px 3px black;
  opacity: 0.9;

  ${({ tooltipPosition, dungeons }) => css`
    top: calc(${tooltipPosition.y}px - ${dungeons ? '450%' : '45%'});
    left: calc(${tooltipPosition.x}px + ${dungeons ? '0%' : '2%'});
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
    color: #E0D3B8;
    font-size: 2vh;
    line-height: 2vh;
`;
