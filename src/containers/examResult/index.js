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
  height: calc(100% - 60px);
`
const MainWrap = styled.section`
  display: flex;
  justify-content: center;

  @media (min-width: 0px) and (max-width: 480px) {
    width: 100%;
    height: auto;
  } 
`

const ResultWrap = styled.section`
  margin-top: 50px;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 10px;
  width: 320px;
  pading: 25px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;  
  background-color: white;
`

const Button = styled(ButtonC)`
  width: 250px;
  margin-bottom: 10px;
`

export default connect()(Exam)