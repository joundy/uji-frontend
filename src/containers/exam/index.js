import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Navbar from "../../components/Navbar"
import BoxC from "../../components/Box"
import Answer from "../../components/Answer"

import IconNextI from "../../images/icon-next.svg"
import IconPreviousI from "../../images/icon-previous.svg"


const Exam = props => (
  <Wrapper>
    <Navbar
      title="12 : 23"
      // titleOnlick={() => props.changePage("/")}
      menus={[
        { 
          title: "Exit",
          // onClick: () => props.changePage("/signin")
        }
      ]}
    />
    <MainWrap>
      <QuestionWrap>
        <QuestionNo>No. 12 / 25</QuestionNo>
        <QuestionTitle>Lorem ipsum dono dan simemet berman bersama sama ?</QuestionTitle>

        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>

        <ButtonNavWrap>
          <ButtonNavLeft>
            <IconPrevious/>
          </ButtonNavLeft>
          <ButtonNavMiddle>
            <MarkForReviewText>Mark for review</MarkForReviewText>
          </ButtonNavMiddle>
          <ButtonNavRight>
            <IconNext/>
          </ButtonNavRight>
        </ButtonNavWrap>

      </QuestionWrap>
      <NavWrap>
        <NCWrap>
          <NoWrap>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map((v) => (
              <Box value={v}/>
            ))}
          </NoWrap>
          
          <ColorDescTBWrap>
            <ColorDescBoxOutline/>
            <ColorDescTitle>Not answered</ColorDescTitle>
          </ColorDescTBWrap>
          
          <ColorDescTBWrap>
            <ColorDescBoxFill/>
            <ColorDescTitle>Answered</ColorDescTitle>
          </ColorDescTBWrap>

          <ColorDescTBWrap>
            <ColorDescBoxWarning/>
            <ColorDescTitle>Marked for review</ColorDescTitle>
          </ColorDescTBWrap>
          
          
        </NCWrap>
        

      </NavWrap>
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
  justify-content: space-between;
  background-color: white;
  padding: 20px;
  border: 1px solid #F0F1F3;
  height: ${window.innerHeight - 60}px;
`

const Box = styled(BoxC)`
  margin-bottom: 5px;
`

const QuestionWrap = styled.section`
  display: flex;
  flex-direction: column;
  flex: 3;
`

const QuestionNo = styled.p`
  line-height: 24px;
  color: #505565;
  margin: 0px;
  margin-bottom: 15px;
  border-bottom: 1px solid #F0F1F3;
  padding-bottom: 10px;
`

const QuestionTitle = styled.h3`
  color: #232735;
  margin: 0px;
  margin-bottom: 40px;
` 

const NavWrap = styled.section`
  display: flex;
  flex: 1
`

// const AnswersWrap = styled.section`

// `

// const AnswerTitle = styled.p`

// `

// const Radio = styled.section`

// `

// const ARWrap = styled.section`

// `

const ButtonNavWrap = styled.section`
  width: 100%;
  height: 40px;
  border: 1px solid #F0F1F3;
  margin-top: auto;
  border-radius: 5px
  display: flex;
  cursor: pointer;
`
const ButtonNavLeft = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  :active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0);
  }
`

const ButtonNavMiddle = styled.section`
  flex: 1;
  border-left: 1px solid #F0F1F3;
  border-right: 1px solid #F0F1F3;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  :active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0);
  }
`

const MarkForReviewText = styled.p`
   color: #505565;  
   font-size: 14px;
`

const ButtonNavRight = styled.section`
  flex: 1
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  :active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0);
  }
`

const IconPrevious = styled.img.attrs({
  src: IconPreviousI
})`
  width: 15px;
`

const IconNext = styled.img.attrs({
  src: IconNextI
})`
  width: 15px;
`

const NoWrap = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 200px;
  justify-content: space-between;
  margin-bottom: 50px;
`

const NCWrap = styled.section`
  margin-left: 20px;
  border-left: 1px solid #F0F1F3;
  padding-left: 20px;
`

const ColorDescTitle = styled.p`
  font-size: 14px;
  margin: 0px;
  color: #505565;
  margin-left: 5px
`

const ColorDescBoxOutline = styled.section`
  border: 1px solid #2A76E5;
  box-sizing: border-box;
  border-radius: 2px;
  width: 15px;
  height: 15px;
`

const ColorDescBoxFill= styled.section`
  background: #2A76E5;
  box-sizing: border-box;
  border-radius: 2px;
  width: 15px;
  height: 15px;
`

const ColorDescBoxWarning = styled.section`
  background: #EF7923;
  box-sizing: border-box;
  border-radius: 2px;
  width: 15px;
  height: 15px;
`

const ColorDescTBWrap = styled.section`
  display: flex;
  margin-bottom: 10px;
`

export default connect()(Exam)