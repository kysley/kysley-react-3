import styled from 'styled-components'

import theme from 'Styled/Utils'

const BaseButton = styled.button`
  padding: 0.5em 1em;
  font-size: 1rem;
  position: relative;
  display: inline-flex;
  justify-content: center;
  flex-wrap: nowrap;
  border: 0;
  outline: 0;
  border-radius: 3px;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  transition: .2s all ease-out;
  background: none;

  &:not(:last-of-type) {
    margin-right: 0.25em;
  }
`

const ButtonOutline = BaseButton.extend`
  border: 2px solid ${theme.black};

  &:hover {
    border: 2px dotted ${theme.black};
  }
`

const SalmonButton = BaseButton.extend`
  color: ${theme.lightTan};
  background: ${theme.salmon};
  font-family: Theinhardt-Bold;
  border: 2px solid ${theme.salmon};

  &:hover{
    color: ${theme.salmon};
    background: ${theme.lightTan};
  }
`

const GreenButton = BaseButton.extend`
  color: ${theme.lightTan};
  background: ${theme.lightGreen};
  font-family: Theinhardt-Bold;
  border: 2px solid ${theme.lightGreen};

  &:hover {
    background: ${theme.darkGreen};
    border: 2px solid ${theme.lightGreen};
  }
`

export {
  ButtonOutline,
  SalmonButton,
  GreenButton,
}
