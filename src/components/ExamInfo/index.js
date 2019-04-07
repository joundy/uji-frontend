import React from "react"
import styled from "styled-components"
import LineC from "../Line"

const ExamInfo = (props) => (
  
  <Wrapper className={props.className}>
    <HeaderTitle>Exam Info</HeaderTitle>
    <Line/>
    <MainWrap>
      <ListWrap>
        <ListTitle>Title</ListTitle>
        <ListValue>Matematika</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Description</ListTitle>
        <ListValue>Lorem ipsum dono dan si memet bermain bersama sama dan mereka sangat akrab.</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Total Questions</ListTitle>
        <ListValue>23</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Duration</ListTitle>
        <ListValue>60 minutes</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Source</ListTitle>
        <ListValue>http://pak-anang.blogspot.com</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Passing Grade</ListTitle>
        <ListValue>23</ListValue>
      </ListWrap>
      <Line/>
    </MainWrap>
  </Wrapper>
)

const Wrapper = styled.section`
  width: 300px;
  background: #FFFFFF;
`;

const HeaderTitle = styled.h2`
  text-align: center;
  margin: 0px;
  margin-bottom: 15px;
  color: #232735;
`
const ListTitle = styled.p`
  font-size: 14px;
  color: #505565;
  margin: 0px;
  margin-bottom: 5px;
`
const ListValue = styled.p`
  color: #232735;
  margin: 0px;
`
const ListWrap = styled.section`
  margin-bottom: 15px;
`
const MainWrap = styled.section`

`

const Line = styled(LineC)`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`

export default ExamInfo
