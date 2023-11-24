import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Open Sans', sans-serif;
        overflow-x: hidden;
    } 

    section {
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
    }
`
