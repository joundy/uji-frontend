import React from "react"
import { Route, Redirect } from "react-router-dom"
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
import SignIn from "../signin"
// import SignUp from "../signup"
import Exam from "../exam"
import ExamResult from "../examResult"

class App extends React.Component {

  componentDidMount = () => {

  }

  render() {
    return (
      <div>
        <header>
          {/* exclude navbar in /exams/:exam container */}
          {!RegExp("/exam-logs/.+").test(this.props.router.location.pathname) ? (
            <Navbar
              title="Uji Yuksinau"
              titleOnlick={() => this.props.changePage("/")}
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
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <PrivateRoute exact path="/exam-groups/:examGroupSlug" component={Exams} />
          <PrivateRoute exact path="/exam-logs/:id" component={Exam}/>
          <Route exact path="/exam-logs/:id/result" component={ExamResult}/>
          {/* <Route exact path="/my-exams" component={MyExams} /> */}
          {/* <Route exact path="/play" component={Play} /> */}
        </main>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAccessToken()  ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const isAccessToken = () => {
  if (!localStorage.getItem("accessToken")){
    return false
  }
  return true
}

const mapStateToPops = ({ router }) => {
  return{
    router
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      changePage: (url) => push(url)
    },
    dispatch
) 

const Navbar = styled(NavbarC)`
  position: fixed;
  top: 0px;
`

// const Bar = styled(BarC)`
//   position: fixed;
//   top: 0px;
// `


export default connect(mapStateToPops, mapDispatchToProps)(App)
