import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-size: ${props => props.theme.font.size};
    user-select: none;
  }

  :root {
    --branco: ${(props) => props.theme.colors.white};
    --preto: ${(props) => props.theme.colors.black};
    --preto-secundario: ${(props) => props.theme.colors.blackSecondary};
    --azul: ${(props) => props.theme.colors.blue};
    --verde: ${(props) => props.theme.colors.green};
    --amarelo: ${(props) => props.theme.colors.yellow};
    --salmao: ${(props) => props.theme.colors.salmon};
    --verdeBg: ${(props) => props.theme.colors.greenBg};
    --container1: ${(props) => props.theme.colors.container1};
    --container2: ${(props) => props.theme.colors.container2};
    --scrollbarI: ${(props) => props.theme.colors.scrollbarI};
    --scrollbar: ${(props) => props.theme.colors.scrollbar};
  }
  `;
export default GlobalStyle;
