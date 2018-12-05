import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Draggable extends React.Component {
  static defaultProps = {
    x: 0,
    y: 0,
  }

  static propTypes = {
    onMove: PropTypes.func,
    onStop: PropTypes.func,
    x: PropTypes.number,
    y: PropTypes.number,
    gridX: PropTypes.number,
    gridY: PropTypes.number,
  }

  state = {
    relX: 0,
    relY: 0,
    x: this.props.x,
    y: this.props.y,
  }

  gridX = 1

  gridY = 1

  onStart = (e) => {
    const ref = ReactDOM.findDOMNode(this.handle)
    const body = document.body
    const box = ref.getBoundingClientRect()
    this.setState({
      relX: e.pageX - (box.left + body.scrollLeft - body.clientLeft),
      relY: e.pageY - (box.top + body.scrollTop - body.clientTop),
    })
  }

  onMove = (e) => {
    const { x, y, relX, relY } = this.state
    const { onMove } = this.props
    const dx = Math.trunc((e.pageX - relX) / this.gridX) * this.gridX
    const dy = Math.trunc((e.pageY - relY) / this.gridY) * this.gridY
    if (dx !== x || dy !== y) {
      this.setState({ x: dx, y: dy })
      onMove && onMove(x, y)
    }
  }

  onMouseDown = (e) => {
    if (e.button !== 0) return
    this.onStart(e)
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
    e.preventDefault()
  }

  onMouseUp = (e) => {
    const { x, y } = this.state
    const { onStop } = this.props
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
    onStop && onStop(x, y)
    e.preventDefault()
  }

  onMouseMove = (e) => {
    this.onMove(e)
    e.preventDefault()
  }

  onTouchStart = (e) => {
    this.onStart(e.touches[0])
    document.addEventListener('touchmove', this.onTouchMove, { passive: false })
    document.addEventListener('touchend', this.onTouchEnd, { passive: false })
    e.preventDefault()
  }

  onTouchMove = (e) => {
    this.onMove(e.touches[0])
    e.preventDefault()
  }

  onTouchEnd = (e) => {
    const { x, y } = this.state
    const { onStop } = this.props
    document.removeEventListener('touchmove', this.onTouchMove)
    document.removeEventListener('touchend', this.onTouchEnd)
    onStop && onStop(x, y)
    e.preventDefault()
  }

  render() {
    const { children } = this.props
    const { x, y } = this.state

    return (
      <div
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        style={{
          position: 'absolute',
          left: x,
          top: y,
          touchAction: 'none',
        }}
        ref={(div) => { this.handle = div }}>
        {children}
      </div>
    )
  }
}

export default Draggable
