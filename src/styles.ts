import { createGlobalStyle } from 'styled-components'

export const cores = {
  preto: '#111',
  branco: '#EEEEEE'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
  }
`
