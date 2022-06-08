import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import { UsersProvider } from 'providers/UsersProvider';
import Dashboard from './Dashboard';

const Wrapper = styled.div``;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UsersProvider>
          <MainTemplate>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Navigate to="/group" />}></Route>
                <Route path="/group/:id" element={<Dashboard />}></Route>
                <Route path="/group" element={<Dashboard group="default" />}></Route>
                <Route path="/add-user" element={<AddUser />}></Route>
                <Route path="*" element={<h1>404</h1>} />
              </Routes>
            </Wrapper>
          </MainTemplate>
        </UsersProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
