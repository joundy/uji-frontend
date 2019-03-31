import React from 'react'
import styled from 'styled-components'

const ButtonC = (props) => (
  
  <Wrapper>
    {console.log(props)}
    <Button onClick={props.onClick}>{props.title}</Button>
  </Wrapper>
)

const Button = styled.button`
  border: none;
  background-color: #2A76E5;
  border-radius: 5px;
  color: white;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.5px;

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

const Wrapper = styled.section`

`;

export default ButtonC
