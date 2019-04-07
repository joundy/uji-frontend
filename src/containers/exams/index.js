import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import BreadCrumbC from "../../components/BreadCrumb"
import TitleC from "../../components/Title"
import ExamCardC from "../../components/ExamCard"
import PaginationC from "../../components/Pagination"

const Exams = props => (
  <Wrapper>
    <MainWrap>
      <BreadCrumb
        links={[
          {
            title:"exam-groups",
            link:"#"
          },
          {
            title:"tryout-un-smp-2019",
            link:"#"
          }
        ]}
      />
      <Title title="Tryout UN SMP 2019"/>
      <ExamCardWrap>
        {[1,2,3,4,5,6].map((v) => (
          <ExamCard
            title="Matematika"
            description="Lorem ipsum dono dan si memet"
            source="http://pak-anang.blogpsot.com"
            passingGrade="50"
            duration="75"
            questionsTotal="25"
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

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 1000px;
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

export default connect()(Exams)