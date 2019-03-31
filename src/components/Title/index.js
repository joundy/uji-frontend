import React from 'react'
import styled from 'styled-components'

const TitleC = (props) => (
  
  <Wrapper>
    <Title>{props.title}</Title>
    <UnderLine/>
  </Wrapper>
)

const Wrapper = styled.section`
  
`;

const Title = styled.h2`
  color: #232735;
  margin: 0px;
  margin-bottom: 8px;
`

const UnderLine = styled.section`
  height: 3px;
  width: 50px;
  background-color: #2A76E5;
`

export default TitleC
