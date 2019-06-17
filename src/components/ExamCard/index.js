import React from "react"
import styled from "styled-components"
import ButtonC from "../Button"
import LineC from "../Line"

const ExamCardC = (props) => (
  <Wrapper className={props.className}>
    <LeftWrap>
      <Header>{props.title}</Header>
      {/* <Desc>{props.description}</Desc> */}
      <Detail>Source: {props.source} | Passing grade: {props.passingGrade}</Detail>
    </LeftWrap>

    <CentertWrap>
      <LineH height={65}/>
      <LineV/>
    </CentertWrap>

    <RightWrap>
      <MBWrap>
        <MainDetailWrap>
          <MainDetailTitle>{props.status === "started" || props.status === "submited" ? "Rem. time (min)" : "Duration(sec)"}</MainDetailTitle>
          <MainDetailValueWrap>
            <MainDetailValue>{props.status === "started" || props.status === "submited" ? props.remainingTime : props.duration}</MainDetailValue>
          </MainDetailValueWrap>
        </MainDetailWrap>

        <MainDetailWrap>
          <MainDetailTitle>{props.status === "started" || props.status === "submited" ? "Stat. questions" : "Max Question"}</MainDetailTitle>
          <MainDetailValueWrap>
            <MainDetailValue>{props.status === "started" || props.status === "submited" ? props.statQuestion : props.questionsTotal}</MainDetailValue>
          </MainDetailValueWrap>
        </MainDetailWrap>

        <Button isLoading={props.isLoading} onClick={props.onClickButton} title={props.status === "submited" ? "Review Exam" : (props.status === "started" ? "Continue" : "Take Exam")} color={props.status === "started" ? "warning" : "primary"} btn={props.status === "submited" ? "outline" : ""}/>
      </MBWrap>
    </RightWrap>

    
  </Wrapper>
)


const Wrapper = styled.section`
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #FFFFFF;
  height: 105px;
  width: 960px;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 481px) and (max-width: 960px) {
    width: 100%;
  }

  @media (min-width: 0px) and (max-width: 480px) {
    align-items: flex-start;
    width: 100%;
    height: auto;
    flex-direction: column;
  } 
`

const Header = styled.h3`
  margin: 0px;
  margin-bottom: 10px;
  color: #232735;
`

// const Desc = styled.p`
//   font-weight: normal;
//   font-size: 14px;
//   color: #8B90A0;
//   margin-top: 13px;
//   margin-bottom: 7px;
// `

const Detail = styled.p`
  font-weight: normal;
  font-size: 14px;
  color: #505565;
  margin: 0px;

  @media (min-width: 0px) and (max-width: 480px) {
    display: none;
  } 
`

const MainDetailTitle = styled.p`
  font-size: 12px;
  color: #505565;
  margin-bottom: 5px;
  margin-top: 0px;
`
const MainDetailValue = styled.h2`
  color: #505565;
`

const MainDetailValueWrap = styled.section`
  height: 40px;
  // width: 100px;
  // border: 1px solid #D3D4D8;
  background-color: #e9f3ff;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainDetailWrap = styled.section`
  padding-bottom: 18px;
  margin-right: 10px;
  @media (min-width: 400px) and (max-width: 480px) {
    flex: 1;
  } 
`

const Button = styled(ButtonC)`
  // width: 100%;
  min-width: 100px;
  @media (min-width: 320px) and (max-width: 480px) {
    min-width: auto;
    flex: 1;
  } 
`

const MBWrap = styled.section`
  display: flex;
  align-items: center;
  @media (min-width: 0px) and (max-width: 480px) {
    justify-content: space-between;
  } 
`

const LeftWrap = styled.section`
  @media (min-width: 0px) and (max-width: 480px) {
    margin-bottom: 5px;
  } 
`

const CentertWrap = styled.section`
  @media (min-width: 0px) and (max-width: 480px) {
    align-self: center;
    width: 100%;
  } 
`

const RightWrap = styled.section`
  @media (min-width: 0px) and (max-width: 480px) {
    width: 100%;
  } 
`

const LineH = styled(LineC)`
  @media (min-width: 0px) and (max-width: 480px) {
    display: none;
  } 
`

const LineV = styled(LineC)`
  display: none;
  @media (min-width: 0px) and (max-width: 480px) {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  } 
`


export default ExamCardC
