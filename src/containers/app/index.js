import React from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { push } from "connected-react-router"
import styled from "styled-components"
import Home from "../home"
import Exams from "../exams"
// import MyExams from "../myExam"
// import Play from "../play"
import NavbarC from "../../components/Navbar"
// import BarC from "../../components/Bar"
// import SignIn from "../signin"
// import SignUp from "../signup"
import Exam from "../exam"
import ExamResult from "../examResult"

const App = (props) => (
  <div>
    <header>
      {/* exclude navbar in /exams/:exam container */}
      {!RegExp("/exams/.+").test(props.router.location.pathname) ? (
        <Navbar
          title="Uji Yuksinau"
          titleOnlick={() => props.changePage("/")}
          menus={[
            // {
            //   title: "My exams",
            //   onClick: () => props.changePage("/my-exams")
            // },
            // { 
            //   title: "SignIn",
            //   onClick: () => props.changePage("/signin")
            // }
          ]}
        />
      ) : null}
      
      {/* <Bar/> */}
      
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/:examGroupSlug" component={Exams} />
      <Route exact path="/exam-logs/:id/guest" component={Exam}/>
      <Route exact path="/exams/:exam/result" component={ExamResult}/>
      {/* <Route exact path="/my-exams" component={MyExams} /> */}
      {/* <Route exact path="/signin" component={SignIn} /> */}
      {/* <Route exact path="/signup" component={SignUp} /> */}
      {/* <Route exact path="/play" component={Play} /> */}
    </main>
  </div>
)

const Navbar = styled(NavbarC)`
  position: fixed;
  top: 0px;
`

// const Bar = styled(BarC)`
//   position: fixed;
//   top: 0px;
// `

const mapStateToPops = (state) => {
  return{
    router: state.router
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      changePage: (url) => push(url)
    },
    dispatch
) 

export default connect(mapStateToPops, mapDispatchToProps)(App)
