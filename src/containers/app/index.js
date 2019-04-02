import React from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { push } from "connected-react-router"
import Home from "../home"
import Exams from "../exams"
import MyExams from "../myExam"
import Play from "../play"
import Navbar from "../../components/Navbar"
import SignIn from "../signin"
import SignUp from "../signup"

const App = (props) => (
  <div>
    <header>
      <Navbar
        title="Uji Yuksinau"
        titleOnlick={() => props.changePage("/")}
        menus={[
          {
            title: "My exams",
            onClick: () => props.changePage("/my-exams")
          },
          { 
            title: "SignIn",
            onClick: () => props.changePage("/signin")
          }
        ]}
      />
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/exams" component={Exams} />
      <Route exact path="/my-exams" component={MyExams} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/play" component={Play} />
    </main>
  </div>
)

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      changePage: (url) => push(url)
    },
    dispatch
)

export default connect(null, mapDispatchToProps)(App)
