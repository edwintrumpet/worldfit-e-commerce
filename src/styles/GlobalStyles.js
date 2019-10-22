import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 100%;
    }

    body {
        font-family: "Open Sans", sans-serif;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;


export default GlobalStyles;
