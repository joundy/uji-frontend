import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Navbar from "../../components/Navbar"
import ButtonC from "../../components/Button"

import ResultC from "../../components/Result"

const Exam = props => (
  <Wrapper>
    <Navbar
      title=""
      // titleOnlick={() => props.changePage("/")}
      menus={[
        { 
          title: "Exit",
          // onClick: () => props.changePage("/signin")
        }
      ]}
    />
    <MainWrap>
      <ResultWrap>
        <ResultC/>
        <Button title="Exit"/>
        <Button title="Retake Exam" btn="outline"/>
      </ResultWrap>
    </MainWrap>
  </Wrapper>
)

const Wrapper = styled.section`
  display: flex; 
  align-items: center;
  flex-direction: column;
`
const MainWrap = styled.section`
  min-width: 960px;
  padding-top: 50px;
  display: flex;
  background-color: white;
  padding: 20px;
  border: 1px solid #F0F1F3;
  height: ${window.innerHeight - 60}px;
  justify-content: center;
`

const ResultWrap = styled.section`
  margin-top: 70px;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 10px;
  width: 300px;
  pading: 25px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;  
`

const Button = styled(ButtonC)`
  width: 250px;
  margin-bottom: 10px;
`

export default connect()(Exam)