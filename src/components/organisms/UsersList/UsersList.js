import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import { UserShape } from 'types';

const UsersList = ({ users, handleDeleteUser }) => {
  return (
    <>
      <Wrapper>
        <ul>
          {users.map((user, index) => (
            <UsersListItem user={user} key={user.name} index={index} handleDeleteUser={handleDeleteUser} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  user: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  handleDeleteUser: PropTypes.func,
};

export default UsersList;
