import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button, svg{
        cursor: pointer;
    }

    body{
        min-height: 100vh;
        max-width: 100vw;

        background-color: #f3f3f3;
    }
`;

export default GlobalStyle;
