import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import Play from '../play'

const App = () => (
  <div>
    <header>
      <Link to="/">Home </Link>
      <Link to="/play"> play</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/play" component={Play} />
    </main>
  </div>
)

export default App
