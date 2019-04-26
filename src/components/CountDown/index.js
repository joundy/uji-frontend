import React from "react"

class CountDown extends React.Component{

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
    return <CountDownMain remainingTime={this.state.remainingTime} />
  }
}

class CountDownMain extends React.Component{
  state = {
    countDownDate: 0, 
    now: 0
  }

  componentDidMount = () => {
    this.setCountDownDate()
    this.setTimeNow()
  }

  setCountDownDate = () => {
    this.setState({
      countDownDate: new Date().getTime()
    })
  }

  setTimeNow = () => {

    const setNow = () => {
      this.setState({
        now: new Date().getTime()
      })
    }
    
    setNow()
    setInterval(() => {
      setNow()
    }, 1000)
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.remainingTime !== 0) {
      this.setState({
        countDownDate: new Date().getTime() + (nextProps.remainingTime * 1000)
      })
    }
  }

  render() {

    // const distance = this.state.countDownDate === 0 ? 0 : this.state.countDownDate - this.state.now === 0 ? 0 : this.state.now
    const distance = this.state.countDownDate - this.state.now

    // const days = Math.floor(this.state.distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    return (
      <div>
        <p>{addDigit(hours)}:{addDigit(minutes)}:{addDigit(seconds)}</p>
      </div>
    )
  }
}

const addDigit = (v) => {
  return ("0" + v).slice(-2)
}

export default CountDown