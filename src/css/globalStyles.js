import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle
"," ::before, "::after{
    margin: 0;
    box-sizing: border-box;
}

body{
    background:${({theme})=> theme.bg2}
    color: ${{theme}};
    /* font-family: */
    letter-spacing: .6px;
}
