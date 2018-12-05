import styled from 'styled-components'
import { Box } from 'grid-styled'

import theme from 'Styled/Utils'

const Pane = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.black};
  border-radius: 10px;
  height: 25vh;
  width: 30vw;
  box-shadow: 7px 7px 0 0 ${theme.black};
  background: ${theme.lightTan};
`

const PaneExit = styled.img`
  position: absolute;
  margin-top: 2px;
  margin-left: 2px;
  padding: 2px;
  border: 2px solid ${theme.black};
  border-radius: 45px;

  &:hover {
    cursor: url('../assets/img/illu-pointer.svg'), auto;
    cursor: -webkit-image-set(url('../assets/img/illu-pointer.svg') 1x, url('../assets/img/illu-pointer.svg') 2x) 18 10, pointer;
  }
`

const PaneBody = styled.div`
  /* margin: 0 5%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PaneHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 0;
  border-bottom: 2px solid ${theme.black};
  font-family: Theinhardt-Bold;
`

const PaneFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
`

const FooterLeft = styled.div`
  display: flex;
`

const FooterRight = styled.div`
  display: flex;
`


const PaneImage = styled.img`
  margin: 0 2em 0 0;
`

const PaneTitleText = styled.h1`
  font-size: 1.25rem;
  font-family: Theinhardt-Bold;
`

const PaneBodyText = styled.h2`
  font-family: Theinhardt;
  font-weight: 400;
`

export {
  Pane,
  PaneExit,
  PaneBody,
  PaneHeader,
  PaneFooter,
  FooterLeft,
  FooterRight,
  PaneImage,
  PaneTitleText,
  PaneBodyText,
}
