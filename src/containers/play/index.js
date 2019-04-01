import React from "react"
import styled from "styled-components"

import Button from "../../components/Button"
import ExamGroupCard from "../../components/ExamGroupCard"
import ExamCard from "../../components/ExamCard"
import Navbar from "../../components/Navbar"
import BreadCrumb from "../../components/BreadCrumb"
import Title from "../../components/Title"
import Box from "../../components/Box"
import Pagination from "../../components/Pagination"
import Filter from "../../components/Filter"

const Wrapper = styled.section`
  padding: 20px;
  background-color: #FAFAFC;
`

const handleChange = (e) => {
  console.log(e.target.value)
}

const Play = () => (
  <Wrapper>
    <Filter
      title="Level"
      options={[
        {
          title: "UN 2019",
          value: "UN 2019"
        }
      ]}
      onChange={handleChange}
    />
    <br/>
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
    <br/>
    <Title title="Exam Groups"/>
    <br/>
    <Box
      value="12"
      // color="warning"
      isFill={false}
      onClick={() => console.log("onlick 12")}
    />
    <br/>
    <BreadCrumb
      links={[
        {
          title:"my-blogs",
          link:"#"
        },
        {
          title:"Tryout-UN-SMA-2019",
          link:"#"
        }
      ]}
    />
    <br/>
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
    <Button title="Hellow boy" onClick={() => console.log("hello boy")} width={500}/>
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
