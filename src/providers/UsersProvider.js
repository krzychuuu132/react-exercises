import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { groups as groupsData } from 'mocks/data/groups';

export const UsersContext = createContext({
  users: [],
  groups: [],
  handleAddUser: () => {},
  handleDeleteUser: () => {},
  handleChangeGroup: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [groups, setStudentGroups] = useState(groupsData);
  const [group, setGroup] = useState('default');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(group !== 'default' ? `/group/${group.toLowerCase()}` : 'group');
        setUsers(data.students);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [group]);
  const handleDeleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleChangeGroup = (id) => {
    setGroup(id);
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
  return <UsersContext.Provider value={{ users, handleAddUser, handleDeleteUser, groups, handleChangeGroup }}>{children}</UsersContext.Provider>;
};
