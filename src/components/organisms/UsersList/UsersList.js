import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <UsersListItem user={user} key={user.name} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {};

export default UsersList;
