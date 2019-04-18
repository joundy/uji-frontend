import React from "react"
import styled from "styled-components"

const ErrorDataC = (props) => (
  
  <Wrapper className={props.className}>
      <ErrorDataTitle>{props.error}</ErrorDataTitle>
  </Wrapper>
)

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorDataTitle = styled.p`
  font-size: 14px;
  color: #505565;
`

export default ErrorDataC
