import React from 'react'
import styled from 'styled-components'

import Button from "../../components/Button"
import ExamGroupCard from "../../components/ExamGroupCard"

const Wrapper = styled.section`
  padding: 20px;
`

const Play = () => (
  <Wrapper>
    <Button title="Hellow boy" onClick={() => console.log("hello boy")}/>
    <br></br>
    <ExamGroupCard/>
  </Wrapper>
)

export default Play
