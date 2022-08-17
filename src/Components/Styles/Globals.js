import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{box-sizing:border-box;}
body{
background:${({ theme }) => theme.colors.body};
color:hsl(192,100%,9%);
font-family:"ubuntu",sans-serif;
font-size:1.15em;
margin:0;
}

`;
