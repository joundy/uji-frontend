import React from "react"
import styled from "styled-components"
import LineC from "../Line"

const ResultC = (props) => (
  
  <Wrapper className={props.className}>
    <HeaderTitle>Passed</HeaderTitle>
    <SubHeaderTitle>Your Score {props.score} from 100</SubHeaderTitle>
    <Line/>
    <MainWrap>
      <ListWrap>
        <ListTitle>Passing grade</ListTitle>
        <ListValue>{props.passingGrade}</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Time spent</ListTitle>
        <ListValue>{props.timeSpent} sec</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Correct answer</ListTitle>
        <ListValue>{props.correctAnswer}</ListValue>
      </ListWrap>
      <ListWrap>
        <ListTitle>Incorrect answer</ListTitle>
        <ListValue>{props.incCorrectAnswer}</ListValue>
      </ListWrap>
      {/* <ListWrap>
        <ListTitle>Not answered</ListTitle>
        <ListValue>{props.notAnswered}</ListValue>
      </ListWrap> */}
      <Line/>
    </MainWrap>
  </Wrapper>
)

const Wrapper = styled.section`
  width: 250px;
  background: #FFFFFF;
`;

const HeaderTitle = styled.h2`
  text-align: center;
  margin: 0px;
  margin-bottom: 15px;
  color: #2A76E5;
`

const SubHeaderTitle = styled.h4`
  text-align: center;
  color: #232735;
  margin: 0px;
  margin-bottom: 15px;
`
const ListTitle = styled.p`
  font-size: 14px;
  color: #505565;
  margin: 0px;
`
const ListValue = styled.h4`
  font-size: 18px;
  color: #232735;
  margin: 0px;
`
const ListWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  margin-bottom: 15px;
`
const MainWrap = styled.section`

`

const Line = styled(LineC)`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`

export default ResultC
