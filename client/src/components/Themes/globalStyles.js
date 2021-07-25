import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;

  }
  h1{
    color: ${({ theme }) => theme.h1};
  }
  
  a{
    color: ${({ theme }) => theme.acolor};
    background: ${({ theme }) => theme.abackground};
  }
  button{
    color: ${({ theme }) => theme.button};
  }
  p{
    color: ${({ theme }) => theme.p};
  }
  h2{    color: ${({ theme }) => theme.h2};
}
`;
