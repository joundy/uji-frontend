import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { push } from "connected-react-router"
import styled from "styled-components"

import Home from "../home"
import Exams from "../exams"
// import MyExams from "../myExam"
import NavbarC from "../../components/Navbar"
// import BarC from "../../components/Bar"
import SignIn from "../signin"
// import SignUp from "../signup"
import Exam from "../exam"
import ExamResult from "../examResult"

import actions from "../../redux/actions"

class App extends React.Component {

  componentDidMount = () => {
    const {pathname, search} = this.props.router.location
    this.props.setLastUrl(pathname + search)
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
        isAuthorize()  ? (
          <Component {...props} />
        ) :(
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

const isAuthorize = () => {
  if (!localStorage.getItem("accessToken")){
    return false
  }

  const jwtData = JSON.parse(atob(localStorage.getItem("accessToken").split(" ")[1].split(".")[1]))
  if(new Date().getTime() > (jwtData.exp * 1000)){
    localStorage.removeItem("accessToken")
    return false
  }

  return true
}

const mapStateToPops = ({ router,location }) => {
  return{
    router,
    location
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(
    {
      changePage: (url) => push(url),
      setLastUrl: (url) => actions.setLastUrl(url)
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
