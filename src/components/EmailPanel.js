import React from 'react'

import Bang from '../assets/img/illu-bang.svg'
import Exit from '../assets/img/illu-exit.svg'

import Draggable from 'Components/Draggable'
import {
  Pane, PaneExit, PaneBody, PaneImage, PaneHeader,
  PaneFooter, FooterLeft, FooterRight,
  PaneTitleText, PaneBodyText,
} from 'Styled/Panels'
import { ButtonOutline, SalmonButton, GreenButton } from 'Styled/Buttons'

const EmailPanel = ({ handleClose, show }) => (
  <>
    {show && (
      <Draggable x={600} y={200}>
        <Pane>
          <PaneExit src={Exit} onClick={() => handleClose('email')} />
          <PaneHeader>send me maaaaail</PaneHeader>
          <PaneBody>
            <PaneImage src={Bang} />
            <div>
              <PaneTitleText>wanna get in touch?</PaneTitleText>
              <PaneBodyText>sling me some [e]-mail & let's chat!</PaneBodyText>
            </div>
          </PaneBody>
          <PaneFooter>
            <FooterLeft>
              <GreenButton>email in 2018?</GreenButton>
            </FooterLeft>
            <FooterRight>
              <ButtonOutline>sure!</ButtonOutline>
              <SalmonButton>LinkedIn</SalmonButton>
            </FooterRight>
          </PaneFooter>
        </Pane>
      </Draggable>
    )}
  </>
)

export default EmailPanel
