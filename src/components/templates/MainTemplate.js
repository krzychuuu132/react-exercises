import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';

const Wrapper = styled.div``;
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
