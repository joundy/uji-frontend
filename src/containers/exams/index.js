import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { push } from "connected-react-router"
import qs from 'querystring'

import BreadCrumbC from "../../components/BreadCrumb"
import TitleC from "../../components/Title"
import ExamCardC from "../../components/ExamCard"
import PaginationC from "../../components/Pagination"
import ModalC from "../../components/Modal"
import ExamInfoC from "../../components/ExamInfo"
import ButtonC from "../../components/Button"
import LineC from "../../components/Line"
import LoaderC from "../../components/Loader"
import NoResultsC from "../../components/NoResults"
import ErrorDataC from "../../components/ErrorData"


import models from "../../models"

import actions from "../../redux/actions"

class Exams extends React.Component{
  state = {
    modal: {
      isOpen: false,
      data: {}
    },
    limitItems: 2,
    totalPage: 10,
    page: 1
  }

  componentDidMount = async () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    await this.setFilterExamGroupSlug()
    await this.getPage()
  }

  componentWillReceiveProps = (nextProps) => {
    this.getTotalPage(nextProps.exams.payload.count)
  }

  fetchExams = async () => {  
    await this.props.dispatch(actions.fetchExamsData(this.props.exams.filter))
  }

  setFilterExamGroupSlug = async () => {
    const examGroupSlug = this.props.match.params.examGroupSlug
    const filter = {
      examGroupSlug
    }
    await this.props.dispatch(actions.setExamsFilter(filter))
  }

  generateExamLog = async (examId) => {
    try{
      const authorization = localStorage.getItem("accessToken")
      return (await models.examLogs.mutation.generate(authorization, examId)).id
    }
    catch(e){
      console.log(e)
    }
  }

  handleStartExam = async (examId) => {
    //set last url
    this.props.dispatch(actions.setLastUrl(this.props.location.pathname + this.props.location.search))

    const examLogId = await this.generateExamLog(examId)
    this.props.dispatch(push(`/exam-logs/${examLogId}`))
  }

  //pagination
  getTotalPage = (count) => {
    this.setState({
      totalPage: Math.ceil(count / this.state.limitItems)
    })
  }
    
  getPage = async () => {
    const params = qs.parse(this.props.location.search.replace("?",""))
    await this.setState({
      page: parseInt(params.page || 1)
    })

    await this.setFilterPageAndFetchExams()
  }

  setFilterPageAndFetchExams = async () => {
    const filter = {
      start: this.state.limitItems * (this.state.page - 1),
      limit: this.state.limitItems
    }

    await this.props.dispatch(actions.setExamsFilter(filter))

    this.fetchExams()
  }

  onClickPage = async (v) => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    const examGroupSlug = this.props.match.params.examGroupSlug

    this.props.dispatch(push(`/exam-groups/${examGroupSlug}/?page=${v}`))

    //set state Page
    await this.setState({
      page: v
    })

    this.setFilterPageAndFetchExams()
  }
  //end pagination

  //handle modal
  handleModalOpen = (v) => {
    this.setState({
      modal: {
        isOpen: true,
        data: v
      }
    })
  }

  handleModalClose = () => {
    this.setState({
      modal: {
        ...this.state.modal,
        isOpen: false 
      }
    })
  }
  //end modal

  render(){
    const { examGroupSlug } = this.props.match.params
    const { data } = this.state.modal
    return (
      <Wrapper>
        <Modal width={350} height={450} isOpen={this.state.modal.isOpen} onButtonCloseClick={() => this.handleModalClose()}>
          <ExamInfo
            title={data.title}
            description={data.description}
            totalQuestion={data.maxQuestion}
            duration={data.duration}
            source={data.source}
            passingGrade={data.passingGrade}
          />
          <Button title="Start" onClick={() => this.handleStartExam(data.id)}/>
        </Modal>
  
        <MainWrap>
          <BreadCrumb
            links={[
              {
                title:"exam-groups",
                onClick: () => this.props.dispatch(push("/"))
              },
              {
                title: examGroupSlug,
                onClick: () => this.props.dispatch(push(`/exam-groups/${examGroupSlug}`))
              }
            ]}
          />
          {/* <Title title={examGroupSlug}/> */}
          <Title title="Exams"/>
          <Line/>

          <ExamCardWrap>
            {this.props.exams.isLoading ? (
              <Loader/>
            ): (this.props.exams.error !== null ? (
              <ErrorData error={this.props.exams.error.message}/>
            ): this.props.exams.payload.data.length === 0 ? (
              <NoResults/>
            ): this.props.exams.payload.data.map((v) => (
                <ExamCard
                  title={v.title}
                  description={v.description}
                  source={v.source}
                  passingGrade={v.passingGrade}
                  duration={v.duration}
                  questionsTotal={v.maxQuestion}
                  onClickButton ={() => this.handleModalOpen(v)}
                />
              ))
            )}
          </ExamCardWrap>

          <Line/> 
          <Pagination
            activePage={this.state.page}
            totalPage={this.state.totalPage}
            onClickPage={this.onClickPage}
          />
        </MainWrap>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({exams, router}) => {
  return {
    exams,
    router
  }
}

export default connect(mapStateToProps)(Exams)


const Wrapper = styled.section`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`

const Button = styled(ButtonC)`
  width: 100%;
`

const ExamInfo = styled(ExamInfoC)`
  overflow: auto;
  height: 350px;
`

const Modal = styled(ModalC)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  right: 50%;
  margin-right: -150px;
  padding-bottom: 20px;
`
const MainWrap = styled.section`
  width: 960px;
  align-self: center;
  display: flex; 
  flex-direction: column;
  margin-bottom: 150px;

  @media (min-width: 0px) and (max-width: 480px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  } 
`
const BreadCrumb = styled(BreadCrumbC)`
  margin-top: 20px;
  margin-bottom: 10px;
`
const Title = styled(TitleC)`
  margin-bottom: 50px;
`
const Line = styled(LineC)`
  width: 100%;
`

const Loader = styled(LoaderC)`
  margin-top: auto;
  margin-bottom: 60px;
`

const NoResults = styled(NoResultsC)`
  margin-top: auto;
  margin-bottom: 70px;
`

const ErrorData = styled(ErrorDataC)`
  margin-top: auto;
  margin-bottom: 70px;
`

const ExamCard = styled(ExamCardC)`
  margin-bottom: 15px;
`
const ExamCardWrap = styled.section`
  padding-top: 15px;
  min-height: 190px;
  display: flex;
  flex-direction: column;
  @media (min-width: 0px) and (max-width: 480px) {
    width: 100%;
  } 
`

const Pagination = styled(PaginationC)`
  align-self: center;
  margin-top: 50px;
`