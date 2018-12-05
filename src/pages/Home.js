import React from 'react'

import IntroPanel from 'Components/IntroPanel'
import EmailPanel from 'Components/EmailPanel'

class Home extends React.Component {
  state = {
    openPanels: {
      intro: true,
      email: false,
    },
  }

  handleClosePanel = (type) => {
    const { openPanels: { intro } } = this.state
    if (intro) {
      console.log('inside')
      this.setState(prevState => ({ openPanels: { ...prevState.openPanels, [type]: false, email: true } }))
      return
    }
    this.setState(prevState => ({ openPanels: { ...prevState.openPanels, [type]: false } }))
  }

  handleOpenPanel = (type) => {
    this.setState(prevState => ({ openPanels: { ...prevState.openPanels, [type]: true } }))
  }

  render() {
    const { openPanels: { intro, email } } = this.state
    return (
      <>
        <IntroPanel handleClose={this.handleClosePanel} show={intro} />
        <EmailPanel handleClose={this.handleClosePanel} show={email} />
      </>
    )
  }
}

export default Home
