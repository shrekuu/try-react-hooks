import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CounterWithoutHooks from './CounterWithoutHooks'
import CounterWithHooks from './CounterWithHooks'
import CounterWithUnstatedNext from './CounterWithUnstatedNext'
import CounterWithConstate from './CounterWithConstate'

export default class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home counter-without-hooks</Link>
              </li>
              <li>
                <Link to="/counter-with-hooks">counter-with-hooks</Link>
              </li>
              <li>
                <Link to="/counter-with-unstated-next">counter-with-unstated-next</Link>
              </li>
              <li>
                <Link to="/counter-with-constate">counter-with-constate</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" exact>
              <CounterWithoutHooks />
            </Route>
            <Route path="/counter-with-hooks">
              <CounterWithHooks />
            </Route>
            <Route path="/counter-with-unstated-next">
              <CounterWithUnstatedNext />
            </Route>
            <Route path="/counter-with-constate">
              <CounterWithConstate />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}