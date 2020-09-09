import styled from 'styled-components';

export const StyleBtn = styled.button`
  min-width: 150px;
  height: 30px;
  font-family: $font-family;
  background-color: ${(props) =>
    props.color === 'green' ? 'var(--green)' : '#04a9ff'};
  padding: 5px 5px 5px 5px;
  color: white;
  border: none;
  border-radius: 4px;
`;
