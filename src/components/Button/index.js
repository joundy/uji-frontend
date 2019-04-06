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

const ButtonC = (props) => (
    <Button className={props.className} btn={props.btn} onClick={props.onClick} color={setColor(props.color)} width={props.width}>{props.title}</Button>
)

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  color: white;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;

  ${(props) => props.btn === "outline" ? `
    border: 1px solid #2A76E5;
    box-sizing: border-box;
    background-color: transparent;
    color: ${props.color}
  ` : null}

  ${(props) => props.width ? `min-width: ${props.width}px` : null}

  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

  :focus {
    outline: none;
  }

  :active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

export default ButtonC
