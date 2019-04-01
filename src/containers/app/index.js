import React from "react"
import { Route } from "react-router-dom"
import Home from "../home"
import Exams from "../exams"
import MyExams from "../myExam"
import Play from "../play"
import Navbar from "../../components/Navbar"

const App = () => (
  <div>
    <header>
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
      {/* <Link to="/">Home </Link>
      <Link to="/play"> play</Link> */}
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/exams" component={Exams} />
      <Route exact path="/my-exams" component={MyExams} />
      <Route exact path="/play" component={Play} />
    </main>
  </div>
)

export default App
