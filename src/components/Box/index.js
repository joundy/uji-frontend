import React from 'react'
import styled from 'styled-components'

const setColor = (color = "") => {
  switch (color) {
    case "warning":
      return "#EF7923"
    case "primary":
      return "#2A76E5"
    default:
      return "#2A76E5"
  }
}

const BoxC = (props) => (
  
  <Wrapper color={setColor(props.color)} isFill={props.isFill} onClick={props.onClick}>
    <Value isFill={props.isFill}>{props.value}</Value>
  </Wrapper>
)

const Wrapper = styled.section`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) => !props.isFill ? `
    background-color: transparent;
    border: 1px solid ${props.color};
    box-sizing: border-box;
  `: null}
`;

const Value = styled.p`
  color: ${(props) => props.isFill ? `white`: `#505565`};
`
export default BoxC
