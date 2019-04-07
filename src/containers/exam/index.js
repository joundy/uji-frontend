import React, {useState} from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Navbar from "../../components/Navbar"
import BoxC from "../../components/Box"
import Answer from "../../components/Answer"

import IconNextI from "../../images/icon-next.svg"
import IconPreviousI from "../../images/icon-previous.svg"
import IconCloseWhiteI from "../../images/icon-close-white.svg"
import IconPreviousWhiteI from "../../images/icon-previous-white.svg"

const Exam = props => {

  const [isSideOpen, setIsSideOpen] = useState(false)
  
  return (
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
          <QAWrap>
            <QuestionNo>No. 12 / 25</QuestionNo>
            <QuestionTitle>Lorem ipsum dono dan simemet berman bersama sama ?</QuestionTitle>
  
            <AnswerWrap>
              <Answer/>
              <Answer/> 
              <Answer/> 
              <Answer/> 
              <Answer/> 
              <Answer/> 
              <Answer/> 
              <Answer/> 
              <Answer/> 
              <Answer/> 
            </AnswerWrap>
          </QAWrap>
  
          <BWrap>
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
          </BWrap>
        </QuestionWrap>

        {isSideOpen ? (
          <ButtonClose onClick={() => setIsSideOpen(false)}>
            <IconCloseWhite/>
          </ButtonClose>
        ): (
          <ButtonOpen onClick={() => setIsSideOpen(true)}>
            <IconPreviousWhite/>
          </ButtonOpen>
        )}
        
        <SideWrap isSideOpen={isSideOpen}>
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
          
  
        </SideWrap>
      </MainWrap>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex; 
  align-items: center;
  flex-direction: column;
  height: calc(100% - 60px);
`
const MainWrap = styled.section`
  width: 960px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #F0F1F3;
  height: ${window.innerHeight - 60}px;

  @media (min-width: 0px) and (max-width: 480px) {
    height: auto;
    width: 100%;
    display: block;
    padding-top: 0px;
    padding-right: 20px; 
    border: none;
    justify-content: unset;
  } 
`

const Box = styled(BoxC)`
  margin-bottom: 5px;
`

const QuestionWrap = styled.section`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 20px;
  background-color: white;
  height: ${window.innerHeight - 60}px;

  @media (min-width: 0px) and (max-width: 480px) {
    height: calc(100% - 60px);
    position: absolute;
    z-index: 0;
    display: flex:
    flex-direction: column
  } 
`

const QuestionNo = styled.p`
  line-height: 24px;
  color: #505565;
  margin: 0px;
  margin-bottom: 15px;
  border-bottom: 1px solid #F0F1F3;
  padding-bottom: 10px;

  @media (min-width: 0px) and (max-width: 480px) {
    // border: none;
  } 

`

const QuestionTitle = styled.h3`
  color: #232735;
  margin: 0px;
  margin-bottom: 40px;
` 

const SideWrap = styled.section`
  display: flex;
  flex: 1;
  height:100%;
  padding: 20px;

  @media (min-width: 0px) and (max-width: 480px) {
    height: auto;
    padding: 0px;
    ${(props) => props.isSideOpen ? `` : `display: none;`}
    position: absolute;
    z-index: 1;
    right: 0;
    border-radius: 5px;
    padding-right: 20px;
    padding-top: 20px;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  } 
`
const ButtonClose = styled.section`
  display: none;
  cursor: pointer;

  @media (min-width: 0px) and (max-width: 480px) {
    display: block;
    width: 30px;
    height: 30px;
    background-color: #2A76E5;
    position: absolute;
    z-index: 2
    margin-top: 20px;
    border-radius:50%;
    right: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const ButtonOpen = styled.section`
  display: none;
  cursor: pointer;

  @media (min-width: 0px) and (max-width: 480px) {
    display: block;
    width: 30px;
    height: 30px;
    background-color: #2A76E5;
    position: absolute;
    z-index: 1
    margin-top: 20px;
    border-radius:50%;
    right: 10px
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const IconCloseWhite = styled.img.attrs({src: IconCloseWhiteI})`
  width: 15px;
  height: 15px
`

const IconPreviousWhite = styled.img.attrs({src: IconPreviousWhiteI})`
  width: 15px;
  height: 15px
`

const ButtonNavWrap = styled.section`
  width: 100%;
  height: 40px;
  border: 1px solid #F0F1F3;
  border-radius: 5px
  display: flex;
  flex: 1;

  @media (min-width: 0px) and (max-width: 480px) {
  } 
`
const QAWrap = styled.section`
  flex: 10
  overflow: scroll;
`

const BWrap = styled.section`
  @media (min-width: 0px) and (max-width: 480px) {
    
  } 
`

const ButtonNavLeft = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  :active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0);
  }
`

const ButtonNavMiddle = styled.section`
  flex: 1;
  cursor: pointer;
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
  cursor: pointer;
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

  @media (min-width: 0px) and (max-width: 480px) {
    margin-left: 0px;
    border: none;
    padding-bottom: 10px;
  } 
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

const AnswerWrap = styled.section`

`


export default connect()(Exam)