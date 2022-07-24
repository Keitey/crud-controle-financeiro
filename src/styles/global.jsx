import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

*{
    margin: 0;
    padding: 0;
}


html, body{
  height: 100%;
}

body{
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: #f2f2f2;
  font-family: 'Poppins', sans-serif;
}

img, picture, video, canvas, svg{
  max-width: 100%;
}

input, button, textarea, select{
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6{
  overflow-wrap: break-word;
}

#root, #__next{
  // aqui você estava deixando
  // "problematico" para telas maiores
  // por colocar o máximo como 1440px

  // esse link mostra isso:
  // https://prnt.sc/v4LKQCJ2GORg 
  
  isolation: isolate;
}
`;

export default Global;
