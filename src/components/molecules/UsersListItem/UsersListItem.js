import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import Average from 'components/atoms/Average/Average';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 0 2rem;
`;

const UsersListItem = ({ user: { average, name, attendance }, handleDeleteUser }) => {
  return (
    <Wrapper>
      <Average average={average} />
      <div>{name}</div>
      <p>{attendance}</p>
      <Button isSecondary onClick={() => handleDeleteUser(name)}>
        X
      </Button>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  user: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
