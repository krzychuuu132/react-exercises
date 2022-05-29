import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({ isSecondary }) => (isSecondary ? 'green' : 'grey')};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
