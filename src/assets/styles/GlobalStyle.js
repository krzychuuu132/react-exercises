import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}
body {
    background-color: ${({ theme: { colors } }) => colors.grey};
}
`;
