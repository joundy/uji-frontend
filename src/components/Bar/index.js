import React from "react"
import styled from "styled-components"

class BarC extends React.Component{
  state = {
    progress: 0
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        progress: 100
      })
    }, 1)
  }

  render() {
    return (
      <Wrapper className={this.props.className}>
        <Bar progress={this.state.progress}/>
      </Wrapper>
    )
  }

}

const Wrapper = styled.section`
  width: 100%;
  height: 2px;
  background-color: white;
`;

const Bar = styled.section`
  height: 2px;
  background-color: #2A76E5;
  width: ${(props) => props.progress}%;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
  
  :hover {
    width: 100%;
  }
`

export default BarC
