import React from 'react'
import styled from 'styled-components'

// import Button from "../../components/Button"
import ExamGroupCard from "../../components/ExamGroupCard"
import ExamCard from "../../components/ExamCard"

const Wrapper = styled.section`
  padding: 20px;
  background-color: #FAFAFC;
`

const Play = () => (
  <Wrapper>
    {/* {/* <Button title="Hellow boy" onClick={() => console.log("hello boy")}/>
    <br/> */}
    <ExamGroupCard/>
    <br/>
    <ExamCard/>
  </Wrapper>
)

export default Play
