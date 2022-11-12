import { createGlobalStyle } from "styled-components";
import BackgroundCircle1 from "../assets/circle2.png";
import BackgroundCircle2 from "../assets/circle1.png";

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
    background: url(${BackgroundCircle1}) no-repeat 1010px , url(${BackgroundCircle2}) no-repeat 931px;
    /* background-repeat: no-repeat; */
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
    --Blue-400: #5236FF;
    --Blue-200: #EFF3FE;
    //Cyan
    --Cyan-400: #17a4d0;
    --Cyan-200: #BACCFD;

    /* Fonts */
    --Poppins: 'Poppins', sans-serif;
}

`;

export default globalStyle;
