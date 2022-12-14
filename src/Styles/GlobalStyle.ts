import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --background: #121216;
        --background-second: #121016;
        --background2: #5F86A5;
        --purple-black: #5A0E5C;
        --purple-light: #A84088;
        --white: #f5f5f5;
        --blue: #98C1D9;
        --blue-light: #E0FBFC;
        --text: #8385D1;
        --Poppins: font-family: 'Poppins', sans-serif;
        --Roboto: font-family: 'Roboto Condensed', sans-serif;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    body, html{
        background-color: var(--background);
        font-size: 16px;
        font-size: var(--Poppins);
    }

    ::-webkit-scrollbar{
    width: 0.5rem;
    background-color: var(--blue);
    }
    ::-webkit-scrollbar-thumb{
    border-radius: 0.5rem;
    background-color: var(--blue-light);
    }
    ::-webkit-scrollbar-thumb:hover{
    background-color: var(--text);
    }
`;
