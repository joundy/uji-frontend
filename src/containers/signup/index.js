import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import InputC from "../../components/Input"
import ButtonC from "../../components/Button"

const SignUp = props => (
  <Wrapper>
    <MainWrap>
      <Title>Signup Uji Yuksinau</Title>
      <Input title="Fullname"/>
      <Input title="Schools"/>
      <Input title="Email"/>
      <Input title="Password" type="password"/>
      <Input title="Confirm your password" type="password"/>
      <Button title="SignUp"/>
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
  margin-top: 70px;
  width: 350px;
  background-color: white;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 45px 25px 45px 25px;
  margin-bottom: 100px;
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

export default connect()(SignUp)