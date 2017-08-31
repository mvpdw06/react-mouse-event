import React, { PureComponent } from 'react'
import logo from './logo.svg'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      mouseX: 0,
      mouseY: 0,
      iconClicked: false
    }
  }

  // Keep track of the mouse position.
  handleMouseMove(event) {
    this.setState({
      mouseX: event.pageX,
      mouseY: event.pageY
    })
  }

  handleMouseClick = () => {
    this.setState({
      iconClicked: true
    })
    setTimeout(() => {
      this.setState({
        iconClicked: false
      })
    }, 3000)
  }

  // Get some initial movement on first mount.
  componentWillMount() {
    this.setState({
      mouseX: 300,
      mouseY: 300
    })
  }

  componentDidMount() {
    document.addEventListener('mousemove', event => this.handleMouseMove(event))
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', event =>
      this.handleMouseMove(event)
    )
  }

  render() {
    const { mouseX, mouseY, iconClicked } = this.state

    // const iconStyle = iconClicked ? {
    //   // 'animation': `App-logo-spin-speedup infinite 3s linear`
    //   'animation-duration': '5s',
    //   'animation-timing-function': 'cubic-bezier(0.005, 0.970, 0.225, 0.990)'
    // } : null 

    return (
      <div>
        <div
          className="imgContainer"
          style={{
            top: mouseY - 42,
            left: mouseX - 50
          }}
          onClick={() => this.handleMouseClick()}
        >
          <img src={logo} className="App-logo" style={iconStyle} alt="logo" />
        </div>

        <div className="instructions">
          <p>I will follow your mouse move.</p>
        </div>
      </div>
    )
  }
}

module.exports = App
