import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const handleDeleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <UsersListItem user={user} key={user.name} index={index} handleDeleteUser={handleDeleteUser} />
        ))}
      </ul>
    </div>
  );
};

UsersList.propTypes = {};

export default UsersList;
