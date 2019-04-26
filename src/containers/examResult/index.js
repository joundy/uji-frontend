import React from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router"

import styled from "styled-components"
import Navbar from "../../components/Navbar"
import ButtonC from "../../components/Button"
import ResultC from "../../components/Result"

import actions from "../../redux/actions"

class ExamLogResult extends React.Component{

  componentDidMount = () => {
    this.getByIdExamLog()
  }

  getByIdExamLog = () => {
    const examLogId = this.props.match.params.id
    const authorization = localStorage.getItem("accessToken")

    this.props.dispatch(actions.getByIdAndStartExamLogData(authorization, examLogId))
  }

  render(){
    const { examLog } = this.props
    return (
      <Wrapper>
        <Navbar
          title=""
          // titleOnlick={() => props.changePage("/")}
          menus={[
          ]}
        />
        <MainWrap>
          <ResultWrap>
            <Result
              score={parseFloat(100 / (examLog.payload.result.pass + examLog.payload.result.failed) * examLog.payload.result.pass).toFixed(2)}
              passingGrade={examLog.payload.exam.passingGrade}
              timeSpent={parseFloat(examLog.payload.timeSpent).toFixed(2)}
              correctAnswer={examLog.payload.result.pass}
              incCorrectAnswer={examLog.payload.result.failed}
              isLoading={examLog.isLoading}
              // notAnswered="unknown"
            />
            <Button title="Review" onClick={() => this.props.dispatch(push(`/exam-logs/${this.props.match.params.id}`))}/>
            <Button title="Exit" btn="outline" onClick={() => this.props.dispatch(push(this.props.common.lastUrlBeforeExam))}/>
            {/* <Button title="Retake Exam" btn="outline"/> */}
          </ResultWrap>
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
 
export default connect(mapStateToProps)(ExamLogResult)

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

const Result = styled(ResultC)`

`
