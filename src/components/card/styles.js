import styled from 'styled-components';
import { mediaQueries } from '../../assets/mediaQueries';

export const SCard = styled.div`
  background: white;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  ${mediaQueries('phone')`
    margin:20px;
  `};
`;
