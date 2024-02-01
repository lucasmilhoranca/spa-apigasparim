import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
        font-family: "Sora", Arial;
    }

    html {
        width: auto;
    }

    body {
        max-width: 100vw;
        height: 100vh;
        background-color: #F0F8FF;
    }
`