import styled from 'styled-components';

export const StyledItemName = styled.div<{ color: string }>`
  font-size: 3vh;
  font-weight: 100;
  color: ${(props) => {
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

export const StyledItemMainText = styled.div<{ color?: any }>`
  color: ${(props) => (props.color ? props.color : '#E0D3B8')};
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
  color: #e0d3b8;
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
  display: flex;
  width: fit-content;
  margin-left: 1vh;
  color: #9d9d9d;
  font-size: 2vh;
  line-height: 2vh;
  &:hover {
    cursor: var(--custom-cursor-gear);
    text-decoration: underline;
  }
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

export const StyledDescription = styled.div<{ recipe?: boolean }>`
  color: ${(props) => (props.recipe ? '#1eff00' : 'rgb(255, 209, 0)')};
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledReagents = styled.div`
  display: flex;
  gap: 1vh;
  flex-wrap: wrap;
`;

export const StyledToy = styled.div`
  color: #66bbff;
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledItemNameDescription = styled.div<{ r?: string; g?: string; b?: string }>`
  color: ${(props) => `rgb(${props.r}, ${props.g}, ${props.b})`};
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledPlayableClassesContainer = styled.div`
  display: flex;
  color: #e0d3b8;
  font-size: 2.5vh;
  line-height: 2vh;
  gap: 0.5vh;
`;

export const StyledPlayableClass = styled.div<{ playableClasse: string }>`
  color: ${({ playableClasse }) => {
    switch (playableClasse) {
      case 'Warrior':
        return '#c69b6d';
      case 'Paladin':
        return '#f48cba';
      case 'Hunter':
        return '#aad372';
      case 'Rogue':
        return '#fff468';
      case 'Priest':
        return '#fff';
      case 'Shaman':
        return '#0070dd';
      case 'Mage':
        return '#3fc7eb';
      case 'Warlock':
        return '#8788ee';
      case 'Monk':
        return '#00ff98';
      case 'Druid':
        return '#ff7c0a';
      case 'Demon Hunter':
        return '#a330c9';
      case 'Death Knight':
        return '#c41e3a';
      default:
        return '#E0D3B8';
    }
  }};
  font-size: 2.5vh;
  line-height: 2vh;
`;

export const StyledToolTipContainer = styled.div`
  transform: scale(0.8);
`;

export const StyledLoading = styled.img`
  height: 60vh;
`;
