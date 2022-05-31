import React, { useState } from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import MainTemplate from 'components/templates/MainTemplate';
import AddUser from './AddUser';
import { users as usersData } from 'data/users';

const Wrapper = styled.div``;

const Root = () => {
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
    setUsers([...users, { ...newUserObject }]);
    console.log(...users);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/" element={<UsersList users={users} handleDeleteUser={handleDeleteUser} />}></Route>
              <Route
                path="/add-user"
                element={<AddUser handleInputChange={handleInputChange} handleAddUser={handleAddUser} formValues={formValues} />}
              ></Route>
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
