import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import FormField from 'components/molecules/FormField/FormField';
import { Wrapper } from './UsersListy.styles';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: '',
  });
  const handleDeleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const { name, attendance, average } = formValues;
    const newUserObject = {
      name,
      attendance,
      average,
    };
    setUsers([...users, { newUserObject }]);
  };
  <>
    <Wrapper>
      <form onSubmit={handleAddUser}>
        <FormField label="name" id="name" name="name" onChange={handleInputChange} value={formValues.name} />
        <FormField label="attendance" id="attendance" name="attendance" onChange={handleInputChange} value={formValues.attendance} />
        <FormField label="average" id="average" name="average" onChange={handleInputChange} value={formValues.average} />
        <button type="submit">Dodaj</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <UsersListItem user={user} key={user.name} index={index} handleDeleteUser={handleDeleteUser} />
        ))}
      </ul>
    </Wrapper>
  </>;
};

UsersList.propTypes = {};

export default UsersList;
