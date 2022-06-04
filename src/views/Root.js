import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import UsersList from 'components/organisms/UsersList/UsersList';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import { UsersProvider } from 'providers/UsersProvider';

const Wrapper = styled.div``;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <UsersProvider>
              <Routes>
                <Route path="/" element={<UsersList />}></Route>
                <Route path="/add-user" element={<AddUser />}></Route>
                <Route path="*" element={<h1>404</h1>} />
              </Routes>
            </UsersProvider>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
