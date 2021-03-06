import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
  * {
  
  
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color:inherit;
  text-decoration: none;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
body{

background-color : ${({ theme }) => theme.primaryLight};


}
`;
