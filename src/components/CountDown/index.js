import React from "react"

import Countdown from "react-countdown-now"

class CountDownC extends React.Component{
  state = {
    endTime: "0"
  }

  renderer = ({ hours, minutes, seconds }) => {
    return <span style={{letterSpacing: "2px"}}>{addDigit(hours)}:{addDigit(minutes)}:{addDigit(seconds)}</span>
  }

  shouldComponentUpdate = (nextProps) => {
      if (nextProps.endTime !== "0"){
      return true
    }
    return false
  } 

  render() {
    return (
      <Countdown
        date={new Date(this.props.endTime)} 
        renderer={this.renderer}
        zeroPadTime={2}
        onComplete={this.props.onComplete}
      />
    )
  }
}

const addDigit = (v) => {
  return ("0" + v).slice(-2)
}


export default CountDownC