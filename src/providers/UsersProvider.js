import { createContext, useState } from 'react';
import { users as usersData } from 'data/users';

export const UsersContext = createContext({
  users: [],
  handleAddUser: () => {},
  handleDeleteUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (formValues) => {
    const { name, attendance, average } = formValues;
    const newUserObject = {
      name,
      attendance,
      average,
    };

    setUsers([...users, { ...newUserObject }]);
  };
  return <UsersContext.Provider value={{ users, handleAddUser, handleDeleteUser }}>{children}</UsersContext.Provider>;
};
