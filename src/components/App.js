import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import theme, { AppWrapper } from 'Styled/Utils'
import Home from 'Pages/Home'

import TR from '../assets/fonts/Theinhardt-Regular.woff'
import TB from '../assets/fonts/Theinhardt-Bold.woff'

// eslint-disable-next-line
injectGlobal`
  @font-face {
    font-family: Theinhardt;
    src: url(${TR}) format('woff');
  }
  @font-face {
    font-family: Theinhardt-Bold;
    src: url(${TB}) format('woff');
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Theinhardt;
    letter-spacing: auto;
    line-height: 1.5em;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    overflow-x: hidden;
    background: ${theme.lightTan};
    cursor: url('../assets/img/illu-default.svg'), auto;
    cursor: -webkit-image-set(url('../assets/img/illu-default.svg') 1x, url('../assets/img/illu-default.svg') 2x) 10 0, pointer;

    & button {
      &:hover {
        cursor: url('../assets/img/illu-pointer.svg'), auto;
        cursor: -webkit-image-set(url('../assets/img/illu-pointer.svg') 1x, url('../assets/img/illu-pointer.svg') 2x) 18 10, pointer;
      }
    }
  }
`

const App = () => (
  <Router>
    <AppWrapper>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </AppWrapper>
  </Router>
)

export default App
