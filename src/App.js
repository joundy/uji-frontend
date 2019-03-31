import React, { Component} from "react"
import {hot} from "react-hot-loader"
import { connect } from 'react-redux'

import { simpleAction } from './actions/simpleAction';

import "./App.css"

class App extends Component{

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render(){
    return(
      <div className="App">
        <h1>Welcome to uji yuksinau, tempat sinau paling oke!</h1>
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = (dispatch )=> ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App))