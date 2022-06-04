import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* overflow-x: scroll;
  display: grid;
  grid-template-columns: 150px 1fr 0.75fr;
  grid-template-rows: 90px; */
`;
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
