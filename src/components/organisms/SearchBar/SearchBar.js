import { Input } from 'components/atoms/Input/Input';
import React, { useContext, useState } from 'react';
import { SearchBarWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { UsersContext } from 'providers/UsersProvider';

export const SearchBar = () => {
  const { users } = useContext(UsersContext);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const handleChangeSearch = (e) => {
    const { value } = e.target;
    const getUsersByName = users.filter((user) => user.name.toLowerCase().includes(value) && value !== '');
    setFilteredUsers(getUsersByName);
  };
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input onChange={handleChangeSearch} />
      {filteredUsers.length
        ? filteredUsers.map((filteredUser, index) => (
            <div>
              <h3>{filteredUser.name}</h3>
            </div>
          ))
        : null}
    </SearchBarWrapper>
  );
};
