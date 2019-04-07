import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import InputC from "../../components/Input"
import ButtonC from "../../components/Button"
import CheckboxC from "../../components/Checkbox"


const SignIn = props => (
  <Wrapper>
    <MainWrap>
      <Title>Signin Uji Yuksinau</Title>
      <Input title="Email"/>
      <Input type="password" title="Password"/>
      <RememberMeWrap>
        <Checkbox/>
        <RememberMeTitle>Remember Me</RememberMeTitle>
      </RememberMeWrap>
      <Button title="SignIn"/>
    </MainWrap>
  </Wrapper>
)

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`

const Input = styled(InputC)`
  width: 100%;
  margin-bottom: 20px;
`

const MainWrap = styled.section`
  margin-top: 50px;
  width: 320px;
  background-color: white;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 45px 25px 45px 25px;
`

const Title = styled.h2`
  color: #232735;
  text-align: center;
  margin: 0px;
  margin-bottom: 50px;
`

const Button = styled(ButtonC)`
  width: 100%;
`

const Checkbox = styled(CheckboxC)`

`

const RememberMeTitle = styled.p`
  margin: 0px;
  color: #505565;
  margin-left: 5px;  
  font-size: 14px;
`

const RememberMeWrap = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`

export default connect()(SignIn)