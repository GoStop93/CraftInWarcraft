import styled from 'styled-components';
import { TabGroup } from '../../../components/TabGroup/TabGroup';

export const StyledTabGroup = styled(TabGroup)`
  text-align: center;
  margin-top: 35vh;
  width: 100%;

  & > div {
    margin-top: 32px;
    justify-content: space-around;
  }
`;
