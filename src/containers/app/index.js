import React, {Component} from "react"
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
// import SignIn from "../signin"
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
          {!RegExp("/exams/.+").test(this.props.router.location.pathname) ? (
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
          {/* <Route exact path="/" component={Home} /> */}
          <PrivateRoute exact path="/" component={Home} />
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
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

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

const Navbar = styled(NavbarC)`
  position: fixed;
  top: 0px;
`

// const Bar = styled(BarC)`
//   position: fixed;
//   top: 0px;
// `


export default connect(mapStateToPops, mapDispatchToProps)(App)
