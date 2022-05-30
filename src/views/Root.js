import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const Wrapper = styled.div``;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">homepage</Link>
            <Link to="/test">test</Link>
          </nav>
          <Routes>
            <Route path="/" element={<UsersList />}></Route>
            <Route path="/test" element={<h1>działa</h1>}></Route>
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
