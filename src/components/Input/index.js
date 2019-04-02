import React from "react"
import styled from "styled-components"

const InputC = (props) => (
  
  <Wrapper className={props.className}>
    <Title>{props.title}</Title>
    <Input type={props.type}/>
  </Wrapper>
)

const Wrapper = styled.section`
  
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid #D3D4D8;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;

  width: 100%;

  :focus {
    outline: none;
    border: 1px solid #2A76E5;
  }

  color: #232735;
`
const Title = styled.p`
  font-size: 12px;
  color: #505565;
  margin-bottom: 5px;
  margin-top: 0px;  
`


export default InputC
