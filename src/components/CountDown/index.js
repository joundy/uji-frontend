import React from "react"

import Countdown from "react-countdown-now"

class CountDownC extends React.Component{
  state = {
    remainingTime: 0
  }

  renderer = ({ hours, minutes, seconds }) => {
    return <span style={{letterSpacing: "2px"}}>{addDigit(hours)}:{addDigit(minutes)}:{addDigit(seconds)}</span>
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps.remainingTime !== 0 && nextProps.remainingTime > this.state.remainingTime){
      this.setState({
        remainingTime: this.props.remainingTime
      })
      return true
    }
    return false
  } 

  render() {
    return (
      <Countdown 
        date={Date.now() + (1000 * this.props.remainingTime)} 
        renderer={this.renderer}
        zeroPadTime={2}
      />
    )
  }
}

const addDigit = (v) => {
  return ("0" + v).slice(-2)
}

export default CountDownC