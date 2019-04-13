import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Navbar from "../../components/Navbar"
import ButtonC from "../../components/Button"
import ResultC from "../../components/Result"

import actions from "../../redux/actions"

class ExamLogResult extends React.Component{

  componentDidMount = () =>{
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
        {console.log(examLog)}
        <Navbar
          title=""
          // titleOnlick={() => props.changePage("/")}
          menus={[
          ]}
        />
        <MainWrap>
          <ResultWrap>
            <Result
              score={100 / (examLog.payload.result.pass + examLog.payload.result.failed) * examLog.payload.result.pass}
              passingGrade={examLog.payload.exam.passingGrade}
              timeSpent={examLog.payload.timeSpent}
              correctAnswer={examLog.payload.result.pass}
              incCorrectAnswer={examLog.payload.result.failed}
              // notAnswered="unknown"
            />
            <Button title="Exit"/>
            <Button title="Retake Exam" btn="outline"/>
          </ResultWrap>
        </MainWrap>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ examLog }) => {
  return {
    examLog
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
