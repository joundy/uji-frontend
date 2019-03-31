import React from 'react'
import styled from 'styled-components'

const LineC = (props) => (
  
  <Wrapper width={props.width} height={props.height}>

  </Wrapper>
)

const Wrapper = styled.section`
  height: ${(props) => props.height || 1}px;
  width: ${(props) => props.width}px;
  background-color: #F0F1F3;
`;

export default LineC
