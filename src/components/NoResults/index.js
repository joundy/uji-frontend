import React from "react"
import styled from "styled-components"

const NoResultsC = (props) => (
  
  <Wrapper className={props.className}>
      <NoResultsTitle>No results ...</NoResultsTitle>
  </Wrapper>
)

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoResultsTitle = styled.p`
  font-size: 14px;
  color: #505565;
`

export default NoResultsC
