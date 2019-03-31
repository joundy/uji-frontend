import React from 'react'
import styled from 'styled-components'

import Button from "../../components/Button"
import ExamGroupCard from "../../components/ExamGroupCard"
import ExamCard from "../../components/ExamCard"
import Navbar from "../../components/Navbar"

const Wrapper = styled.section`
  padding: 20px;
  background-color: #FAFAFC;
`

const Play = () => (
  <Wrapper>
    <Navbar
      title="Uji Yuksinau"
      titleOnlick={() => console.log("title onlick")}
      menus={[
        {
          title: "My exams",
          onClick: () => console.log("my exams onlick")
        },
        {
          title: "SignIn",
          onClick: () => console.log("singin onlick")
        }
      ]}
    />
    <br/>
    <Button title="Hellow boy" onClick={() => console.log("hello boy")}/>
    <br/>
    <ExamGroupCard
      title="Tryout UN SMP 2019"
      tag={["UN"]}
      description="Contrary to popular belief, Lorem Ipsum is not simply random text. "
      level="SMA"
      class="12"
    />
    <br/>
    <ExamCard
      title="Matematika"
      description="Lorem ipsum dono dan si memet"
      source="http://pak-anang.blogpsot.com"
      passingGrade="50"
      duration="75"
      questionsTotal="25"
    />
  </Wrapper>
)

export default Play
