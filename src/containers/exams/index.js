import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { push } from "connected-react-router"

import BreadCrumbC from "../../components/BreadCrumb"
import TitleC from "../../components/Title"
import ExamCardC from "../../components/ExamCard"
import PaginationC from "../../components/Pagination"
import ModalC from "../../components/Modal"
import ExamInfoC from "../../components/ExamInfo"
import ButtonC from "../../components/Button"

import actions from "../../redux/actions"

class Exams extends React.Component{
  state = {
    isModalOpen: false
  }

  componentDidMount = async () => {

    await this.fetchExams()
    if(this.props.exams.payload.data.length === 0){
      this.props.dispatch(push("/"))
    }
  }

  fetchExams = async () => {  
    const examGroupSlug = this.props.match.params.examGroupSlug

    const filter = {
      examGroupSlug
    }

    await this.props.dispatch(actions.setExamsFilter({ ...filter }))
    await this.props.dispatch(actions.fetchExamsData(this.props.exams.filter))
  }

  render(){
    const { examGroupSlug } = this.props.match.params
    return (
      <Wrapper>
        {console.log(this.props.match)}
        <Modal width={350} height={450} isOpen={this.state.isModalOpen} onButtonCloseClick={() => this.setState({isModalOpen: false})}>
          <ExamInfo/>
          <Button title="Start"/>
        </Modal>
  
        <MainWrap>
          <BreadCrumb
            links={[
              {
                title:"exam-groups",
                link:"/"
              },
              {
                title: examGroupSlug,
                link:`/${examGroupSlug}`
              }
            ]}
          />
          <Title title={examGroupSlug}/>
          <ExamCardWrap>
            {this.props.exams.payload.data.map((v) => (
              <ExamCard
                title={v.title}
                description={v.description}
                source={v.source}
                passingGrade={v.passingGrade}
                duration={v.duration}
                questionsTotal={v.maxQuestion}
                onClickButton ={() => this.setState({isModalOpen: true})}
              />
            ))}
          </ExamCardWrap>
          <Pagination
          pages={[
            {
              value: "1",
              isFill: true
            },
            {
              value: "2",
              isFill: false
            },
            {
              value: "3",
              isFill: false
            },
            {
              value: "4",
              isFill: false
            },
            {
              value: "5",
              isFill: false
            }
          ]}
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
  min-height: 1000px;
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

const ExamCard = styled(ExamCardC)`
  margin-bottom: 15px;
`
const ExamCardWrap = styled.section`
  margin-bottom: 50px;

  @media (min-width: 0px) and (max-width: 480px) {
    width: 100%;
  } 
`

const Pagination = styled(PaginationC)`
  align-self: center;
  margin-bottom: 100px;
`