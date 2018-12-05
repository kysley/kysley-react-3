import styled from 'styled-components'
import { Flex } from 'grid-styled'


const theme = {
  lightTan: '#F5E9CC',
  darkTan: '#ECD5AB',
  black: '#0F0E0C',
  salmon: '#EEADA4',
  lightGreen: '#8FCEC6',
  darkGreen: '#86C2BB',
}

const AppWrapper = styled(Flex)`
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
`

export default theme

export {
  AppWrapper,
}
