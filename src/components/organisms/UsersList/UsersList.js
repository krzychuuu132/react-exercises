import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users, handleDeleteUser } = useContext(UsersContext);
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

export default UsersList;
