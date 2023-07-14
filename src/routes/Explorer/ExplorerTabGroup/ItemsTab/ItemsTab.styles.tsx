import styled from "styled-components";
import background from '../../../../assets/images/background/explorer/explorer_tabs/items.jpg';
import bottomBackground from '../../../../assets/images/background/explorer/second_background.jpg';
import ground from '../../../../assets/images/ground.png';

export const StyledContainer = styled.div`
  height: 100vh;
  margin-top: 34.5vh;
  width: 100%;
`;

export const StyledTopContent = styled.div`
  width: 100%;
  height: 49vh;
  position: relative;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  ::after {
    content: '';
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 1vh;
    background-image: url(${ground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    bottom: -0.5vh;
    left: 0px;
  }
`;

export const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12vh;
  font-weight: 100;
  color: #fbee65;
  text-shadow: 7px 7px 3px black;
`;

export const StyledBottomContent = styled.div`
  display: flex;
  width: 100%;
  height: 200vh;
  background-image: url(${bottomBackground});
  background-size: cover;
  background-position: center;
`;

export const StyledItems = styled.div`
  display: flex;
  position: relative;
  margin-top: 10vh;
  width: 80vh;
  gap: 2vh;
`;

export const StyledItemIcon = styled.img<{ color: string}>`
  width: 56px;
  height: 56px;
  border: 1px solid ${props => {
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

export const StyledItemName = styled.div<{ color: string }>`
  font-size: 3vh;
  font-weight: 100;
  color: ${props => {
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

export const StyledItemLevel = styled.div`
  color: rgb(255, 209, 0);
  font-size: 2.5vh;
  line-height: 2vh;
  margin-top: 2vh;
`;

export const StyledItemMainText = styled.div<{ color?: any}>`
  color: ${(props) => props.color? props.color : '#E0D3B8'};
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledSpellsText = styled.div`
  color: #1eff00;
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledItemClassAndSubclass = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledItemDamageAndSpeed = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3vh;
  color: #E0D3B8;
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledPriceIcon = styled.img`
  width: 13px;
  height: 13px; 
  margin-right: 0.5vh;
`;

export const StyledSockeBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 0;
  gap: 1vh;
`;

export const StyledSocket = styled.div`
  display: flex;
  gap: 1vh;
  color: #9d9d9d;
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledSocketImage = styled.img`
  width: 14px;
  height: 14px; 
  margin-right: 0.5vh;
`;

export const StyledSocketBonus = styled.div`
  color: #9d9d9d;
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledSetBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 0;
  gap: 1vh;
`;

export const StyledSetName = styled.div`
  color: #ffd100;
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledSet = styled.div`
  margin-left: 1vh;
  color: #9d9d9d;
  font-size: 2vh;
  line-height: 2vh;
`;

export const StyledSetBonusBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  gap: 1vh;
`;

export const StyledSetBonus = styled.div`
  color: #9d9d9d;
  font-size: 2vh;
  line-height: 2vh;
`;

export const StyledDescription = styled.div<{ recipe? : boolean }>`
  color: ${(props) => props.recipe? '#1eff00' : 'rgb(255, 209, 0)'};
  font-size: 2.5vh;
  line-height: 2vh;
`;
