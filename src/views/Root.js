import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';

import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const Wrapper = styled.div``;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
