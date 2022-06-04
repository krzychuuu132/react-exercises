import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  padding: 2rem 2rem;
  text-decoration: none;
  text-transform: uppercase;
  &.${activeClassName} {
    color: red;
  }
`;

const StyledNav = styled.nav`
  margin: 2rem 0;
  grid-column: 1/2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">homepage</StyledNavLink>
      <StyledNavLink to="/add-user">Add user</StyledNavLink>
    </StyledNav>
  );
};

Navigation.propTypes = {};

export default Navigation;
