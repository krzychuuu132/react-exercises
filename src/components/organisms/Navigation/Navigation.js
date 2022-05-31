import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  padding: 2rem 3rem;
  text-decoration: none;
  text-transform: uppercase;
  &.${activeClassName} {
    color: red;
  }
`;

const StyledNav = styled.nav`
  margin: 2rem 0;
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
