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
        <ListValue>{props.title}</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Description</ListTitle>
        <ListValue>{props.description}</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Total Questions</ListTitle>
        <ListValue>{props.totalQuestion}</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Duration</ListTitle>
        <ListValue>{props.duration}</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Source</ListTitle>
        <ListValue>{props.source}</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Passing Grade</ListTitle>
        <ListValue>{props.passingGrade}</ListValue>
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
