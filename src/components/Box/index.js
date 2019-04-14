import React from "react"
import styled from "styled-components"

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
  
  <Wrapper className={props.className} color={setColor(props.color)} isFill={props.isFill} onClick={props.onClick} isActive={props.isActive}>
    {console.log(props)}
    <Value isFill={props.isFill}>{props.value}</Value>
  </Wrapper>
)

const Wrapper = styled.section`
  width: 35px;
  height: 35px;
  background-color: transparent;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #505565;

  ${props => props.isActive ? `
    border: 1px solid #2A76E5
  ` : null}

  ${(props) => props.isFill ? `
    background-color: ${props.color};
    border: 1px solid ${props.color};
    box-sizing: border-box;
  `: null}
`;

const Value = styled.p`
  color: ${(props) => props.isFill ? `white`: `#505565`};
  margin: 0px;
  user-select: none;
`
export default BoxC
