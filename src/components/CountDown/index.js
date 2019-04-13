import React from "react"

import Countdown from "react-countdown-now"

class CountDownC extends React.Component{
  state = {
    remainingTime: 0
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
      <Countdown date={Date.now() + (1000 * this.props.remainingTime)} />
    )
  }
}

export default CountDownC