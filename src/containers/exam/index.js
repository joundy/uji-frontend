import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { push } from "connected-react-router"
import { Parser } from "html-to-react"

import CountDown from "../../components/CountDown"

import Navbar from "../../components/Navbar"
import BoxC from "../../components/Box"
import AnswerRadio from "../../components/AnswerRadio"
import ModalC from "../../components/Modal"
import ButtonC from "../../components/Button"
import LineC from "../../components/Line"

import IconNextI from "../../images/icon-next.svg"
import IconPreviousI from "../../images/icon-previous.svg"
import IconCloseWhiteI from "../../images/icon-close-white.svg"
import IconPreviousWhiteI from "../../images/icon-previous-white.svg"

import actions from "../../redux/actions"
import models from "../../models"

const htmlToReactParser = new Parser()

// import "./exam.css"

class Exam extends React.Component{
  state = {
    isSideOpen: false,
    questionIndex: 0,
    modal: {
      isOpen: false
    },
    //for internal state only, prevent duplicate submit
    isSubmit: false
  }

  componentDidMount = async () => {
    this.getByIdAndStartExamLog()
  }

  componentWillReceiveProps = (nextProps) => {
    this.handleSubmitOnLoad(nextProps)
  }

  handleSubmitOnLoad = (nextProps) => {
     if(nextProps.examLog.payload.endTime !== "0" && new Date(nextProps.examLog.payload.endTime).getTime() < new Date().getTime() && this.state.isSubmit === false){
      this.setState({ isSubmit: true })
      this.submitExamLog(nextProps.examLog.payload.id)
    }
  }

  getByIdAndStartExamLog = () => {
    const examLogId = this.props.match.params.id
    const authorization = localStorage.getItem("accessToken")

    this.props.dispatch(actions.getByIdAndStartExamLogData(authorization, examLogId))
  }

  setQuestionIndex = (questionIndex) => {
    this.setState({
      questionIndex
    })
  }

  submitExamLog = async (examLogId) => {
    try{
      const authorization = localStorage.getItem("accessToken")
      await models.examLogs.mutation.submit(authorization, examLogId)

      //push to result container
      this.props.dispatch(push(`/exam-logs/${examLogId}/result`))
    }
    catch(e){
      
    }
  } 

  handleOnSubmit = (examLogId) => {
    this.submitExamLog(examLogId)
  }

  handleNextQuestion = () => {
    if (this.state.questionIndex !== this.props.examLog.payload.questions.length - 1){
      this.setState({
        questionIndex: this.state.  questionIndex + 1
      })
    }
  }

  handlePreviousQuestion = () => {
    if (this.state.questionIndex !== 0){
      this.setState({
        questionIndex: this.state.questionIndex - 1
      })
    }
  }
  
  setQuestionAnswers = (examLogId, questionId, answerId) => {
    if(!this.props.examLog.payload.isSubmit){
      const authorization = localStorage.getItem("accessToken")
      this.props.dispatch(actions.setQuestionAnswersExamLogData(authorization, examLogId, questionId, answerId))
    }
  }

  setQuestionIsMarked = (examLogId, questionId) => {
    if(!this.props.examLog.payload.isSubmit){
      const authorization = localStorage.getItem("accessToken")
      this.props.dispatch(actions.setQuestionIsMarkedExamLogData(authorization, examLogId, questionId, !this.props.examLog.payload.questions[this.state.questionIndex].isMarked))
    }
  }

  handleModalClose = () => {
    this.setState({
      modal: {
        ...this.state.modal,
        isOpen: false 
      }
    })
  }

  handleModalOpen = (v) => {
    if(!this.props.examLog.payload.isSubmit){
      this.setState({
        modal: {
          isOpen: true
        }
      })
    }
  }

  render(){
    const { examLog } = this.props
    const { selectedIds } = examLog.payload.questions[this.state.questionIndex].answer
    const question = examLog.payload.questions[this.state.questionIndex]
    return (
      <Wrapper>
        <Navbar
          title={examLog.payload.isSubmit ? "Review" : <CountDown 
          endTime={examLog.payload.endTime}
          onComplete={() => this.handleOnSubmit(examLog.payload.id)}
        />}
          menus={[
            { 
              title: examLog.payload.isSubmit ? "Exit" : "",
              onClick: () => this.props.dispatch(push(this.props.common.lastUrlBeforeExam))
            }
          ]}
        />

        <Modal
          isOpen={this.state.modal.isOpen} 
          width={300} 
          height={210}
          onButtonCloseClick={() => this.handleModalClose()}
        >

        <SubmitConfirmWrap>
          <SubmitConfirmTitle>Confirm</SubmitConfirmTitle>
          <Line/>
          <SubmitDescription>Are you sure want to submit?</SubmitDescription>
          <Line/>
          <ButtonWrap>
            <Button title="Cancel" btn="outline" onClick={() => this.handleModalClose()} />
            <Button title="Submit" onClick={() => this.handleOnSubmit(examLog.payload.id)} />
          </ButtonWrap>
        </SubmitConfirmWrap>

        </Modal>

        <MainWrap>
          <QuestionWrap>
            <QAWrap>
              <QuestionNo>{this.state.questionIndex + 1} from {examLog.payload.questions.length}</QuestionNo>
              <QuestionTitle>{htmlToReactParser.parse(question.title)}</QuestionTitle>
              <AnswerWrap>
                {question.answer.list.map((v) => (
                  <AnswerRadio
                    key={v.id}
                    title={v.title}
                    isChecked={selectedIds.includes(v.id) || v.isCorrect}
                    isRadioChecked={selectedIds.includes(v.id)}
                    color={v.isCorrect ? "success" : (selectedIds.includes(v.id) && examLog.payload.isSubmit ? "danger" : "primary")}
                    onClick={() => this.setQuestionAnswers(examLog.payload.id, question.id, v.id)}
                  />
                ))}
              </AnswerWrap>
            </QAWrap>
    
            <BWrap>
              <ButtonNavWrap>
                <ButtonNavLeft onClick={() => this.handlePreviousQuestion()}>
                  {this.state.questionIndex !== 0 ? (
                    <IconPrevious/>

                  ): null}
                </ButtonNavLeft>
                {/* <ButtonNavMiddle onClick={() => this.submitExamLog(examLog.payload.id)}> */}
                <ButtonNavMiddle onClick={() => this.setQuestionIsMarked(examLog.payload.id, question.id)}>
                  <MarkForReviewText 
                    isMarked={question.isMarked}
                  >
                    { !examLog.payload.isSubmit ? (question.isMarked ? "Unmark" : "Mark for review"): "" }
                  </MarkForReviewText>
                </ButtonNavMiddle>

                <ButtonNavRight 
                  onClick={this.state.questionIndex === examLog.payload.questions.length - 1 
                    ? () => this.handleModalOpen()
                    : () => this.handleNextQuestion()}
                >
                  {this.state.questionIndex === examLog.payload.questions.length - 1 ? (
                    (!examLog.payload.isSubmit ? <SubmitText>Submit</SubmitText> : "")
                  ) : (
                    <IconNext/>
                  )}
                </ButtonNavRight>
              </ButtonNavWrap>
            </BWrap>
          </QuestionWrap>
  
          {this.state.isSideOpen ? (
            <ButtonClose onClick={() => this.setState({ isSideOpen: false })}>
              <IconCloseWhite/>
            </ButtonClose>
          ): (
            <ButtonOpen onClick={() => this.setState({ isSideOpen: true })}>
              <IconPreviousWhite/>
            </ButtonOpen>
          )}
          
          <SideWrap isSideOpen={this.state.isSideOpen}>
            <NCWrap>
              <NoWrap>
                {examLog.payload.questions.map((v, i) => (
                  <Box 
                    key={i}
                    isActive={i === this.state.questionIndex}
                    value={i + 1} 
                    onClick={() => this.setQuestionIndex(i)} 
                    isFill={examLog.payload.questions[i].answer.selectedIds.length !== 0 || examLog.payload.questions[i].isMarked || examLog.payload.isSubmit}
                    // color={examLog.payload.isSubmit ? (true ? "success" : "danger") : examLog.payload.questions[i].isMarked ? "warning" : "primary"}
                    color={examLog.payload.isSubmit ? (getCorrectIds(examLog.payload.questions[i].answer.list)[0] === examLog.payload.questions[i].answer.selectedIds[0] ? "success" : "danger") : examLog.payload.questions[i].isMarked ? "warning" : "primary"}
                  />
                ))}
                
                {/* fix flex wrap */}
                {numToArrList(5 - (examLog.payload.questions.length % 5)).map((v,i) => (
                  <BoxFake key={i}/>
                ))}
              </NoWrap>

              {!examLog.payload.isSubmit ? (
                <div>
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
                </div>
              ): null}
              
            </NCWrap>
            
    
          </SideWrap>
        </MainWrap>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ examLog, common }) => {
  return {
    examLog,
    common
  }
}

export default connect(mapStateToProps)(Exam)

const numToArrList = (number) => {
  let list = []

  for (let i = 0; i < number; i++) {
    list.push(i)
  }

  return list
}

const getCorrectIds = (answerList) => {
  let correctIds = []
  answerList.map((v) => {
    if(v.isCorrect){
      correctIds.push(v.id)
    }
  })

  return correctIds
}

const Wrapper = styled.section`
  display: flex; 
  align-items: center;
  flex-direction: column;
  height: calc(100% - 60px);
`
const Modal = styled(ModalC)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  right: 50%;
  margin-right: -125px;
  // padding-bottom: 20px;
`

const SubmitConfirmWrap = styled.section`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const SubmitConfirmTitle = styled.h3`
  margin: 0px;
  margin-bottom: 15px;
  color: #232735;
`

const SubmitDescription = styled.p`

`

const Line = styled(LineC)`
  width: 100%;
`

const ButtonWrap = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Button = styled(ButtonC)`
  width: 120px;
`

const MainWrap = styled.section`
  width: 960px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #F0F1F3;
  height: ${window.innerHeight - 60}px;

  @media (min-width: 481px) and (max-width: 960px) {
    width: 100%;
    padding-right: 20px; 
    padding-left: 20px; 

  } 

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
    width: 100%;
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

const QuestionTitle = styled.section`
  // color: #232735;
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
  user-select: none

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
  user-select: none

  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  :active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.0);
  }
`

const MarkForReviewText = styled.p`
  user-select: none
  color: #505565;  
  font-size: 14px;
  ${props => props.isMarked ? `
  color: #EF7923;
  font-weight: 600;
  `: null}
`

const SubmitText = styled.p`
  font-size: 14px;
  color: #2A76E5;
  font-weight: 600;
  user-select: none;

`

const ButtonNavRight = styled.section`
  cursor: pointer;
  flex: 1
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

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
  max-height: 300px;
  overflow: auto;
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

const BoxFake = styled.section`
  width: 35px;
  height: 35px;
  margin-bottom: 5px;
`