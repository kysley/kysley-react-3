import React from 'react'

import Bang from '../assets/img/illu-bang.svg'
import Exit from '../assets/img/illu-exit.svg'

import Draggable from 'Components/Draggable'
import {
  Pane, PaneExit, PaneBody, PaneImage, PaneHeader,
  PaneFooter, FooterLeft, FooterRight,
  PaneTitleText, PaneBodyText,
} from 'Styled/Panels'
import { ButtonOutline, SalmonButton } from 'Styled/Buttons'

const IntroPanel = ({ handleClose, show }) => (
  <>
    {show && (
      <Draggable x={250} y={250}>
        <Pane>
          <PaneExit src={Exit} onClick={() => handleClose('intro')} />
          <PaneHeader>whats this?</PaneHeader>
          <PaneBody>
            <PaneImage src={Bang} />
            <div>
              <PaneTitleText>welcome to my 2018 q3 portfolio</PaneTitleText>
              <PaneBodyText>thanks for clicking around :)</PaneBodyText>
            </div>
          </PaneBody>
          <PaneFooter>
            <FooterLeft>
              <SalmonButton>Later</SalmonButton>
            </FooterLeft>
            <FooterRight>
              <ButtonOutline>cool cool</ButtonOutline>
              <ButtonOutline>cool</ButtonOutline>
            </FooterRight>
          </PaneFooter>
        </Pane>
      </Draggable>
    )}
  </>
)

export default IntroPanel
