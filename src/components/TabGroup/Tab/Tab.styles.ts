import styled from 'styled-components';
import background from '../../../assets/images/background/explorer/tab_background.jpg';

export const StyledContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  height: 40.9vh;
  width: 30.7vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  border: ${(props) => (props.isActive ? '1px solid #f8b700' : '1px solid rgb(68, 68, 68)')};
  transition: all 0.3s;
  transform: ${(props) => (props.isActive ? 'translateY(-5vh)' : null)};

  &:hover {
    cursor: var(--custom-cursor-gear);
    border-color: #f8b700;
  }
`;

export const StyledIcon = styled.img<{ isActive?: boolean }>`
  width: 11.9vh;
  height: 11.9vh;
  margin: 3.28vh auto;
  transition: all 0.3s;
  transform: ${(props) => (props.isActive ? 'scale(1.2)' : 'scale(1)')};
  ${StyledContainer}:hover & {
    transform: ${(props) => (props.isActive ? 'scale(1)' : 'scale(1.2)')};
  }
`;

export const StyledTitle = styled.div<{ isActive?: boolean }>`
  font-size: 3.5vh;
  font-weight: 100;
  color: ${(props) => (props.isActive ? '#f8b700' : '#fbee65')};
  transition: all 0.3s;
  ${StyledContainer}:hover & {
    color: #f8b700;
  }
`;

export const StyledDescription = styled.div`
  margin: 2.5vh auto;
  width: 25vh;
  color: #e0d3b8;
  font-size: 2vh;
  line-height: 2vh;
`;
