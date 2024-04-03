import styled from 'styled-components';
import background from '../../../assets/images/background/explorerLink/sylvana-back.jpg';

export const StyledContainer = styled.div`
  margin-top: 506vh;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

export const StyledLayerBack = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const StyledImg = styled.img`
  position: absolute;
  width: 81.2vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.7s;
  z-index: 2;
  filter: drop-shadow(0 0 5px #a0a0a0);
  &:hover {
    cursor: var(--custom-cursor-go);
    filter: drop-shadow(0 0 10px red);
    transform: translate(-50%, -50%) scale(1.05);
  }
`;

export const StyledFristPartTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 8vh;
  font-weight: 100;
  color: #fbee65;
  filter: drop-shadow(0 0 3px red);
  text-shadow: 0 0 3px red;
`;

export const StyledSecondPartTitle = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  z-index: 1;
  font-size: 8vh;
  font-weight: 100;
  color: #fbee65;
  filter: drop-shadow(0 0 3px red);
  text-shadow: 0 0 3px red;
`;
