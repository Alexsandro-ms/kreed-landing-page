import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
  -webkit-font-smoothing: antialised;
}

html, body, #root{
    height: 100%;
}

body{
    background-color: var(--White-200);
    font-family: var(--Poppins);
}

button{
    background-color: none;
    border: none;
    outline: none;
}

a{
    text-decoration: none;
    outline: none;
}

:root{
    /* Colors */
    --Transparent: --transparent;
    //White
    --White-500: #FFFFFF;
    --White-200: #F8FDFF;
    //Blue
    --Blue-700: #1e255e;
    //Cyan
    --Cyan-400: #17a4d0;

    /* Fonts */
    --Poppins: 'Poppins', sans-serif;
}

`;

export default globalStyle;
