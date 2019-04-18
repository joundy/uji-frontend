import React from "react"
import styled from "styled-components"
import Loader from "react-loader-spinner"

const LoaderC = (props) => (
  
  <Wrapper className={props.className}>
    <Loader 
      type="TailSpin"
      color="#00BFFF"
      height="30"	
      width="30"
    />
    <LoaderTitle>Loading fetching data...</LoaderTitle>
  </Wrapper>
)

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoaderTitle = styled.p`
  font-size: 14px;
  color: #505565;
`

export default LoaderC
