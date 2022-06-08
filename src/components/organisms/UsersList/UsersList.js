import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

const UsersList = ({ users = [] }) => {
  return (
    <>
      <Wrapper>
        <ul>
          {users.map((user, index) => (
            <UsersListItem user={user} key={user.name} index={index} />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};

export default UsersList;
