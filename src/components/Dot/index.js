import React from "react"
import styled from "styled-components"

const DotC = (props) => (
  
  <Wrapper height={props.height} width={props.width} className={props.className}>

  </Wrapper>
)

const Wrapper = styled.section`
  height: ${(props) => props.height || 1}px;
  width: ${(props) => props.width || 1}px;
  background-color: #F0F1F3;
  border-radius: 50%;
  background-color: #D3D4D8;
`;

export default DotC
