import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import App from './App'
import Leads from '../pages/Leads'
import EditLead from '../pages/EditLead'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

import store from '../store/store'

export default class AppRouter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authenticated: false
    }
  }

  componentDidMount() {
    store.on('storeChange', () => {
      this.setState({ authenticated: store.authenticated })
    })
  }

  render() {
    return (
      <Router>
        <App authenticated={this.state.authenticated}>
          <MatchWhenAuthorized exactly path="/" component={Leads} />
          <MatchWhenAuthorized path="/editlead" component={EditLead} />
          <Route exactly path="/signup" component={SignUp} />
          <Route exactly path="/login" render={(props) => <Login authenticated={this.state.authenticated} {...props} />} />
        </App>
      </Router>
    )
  }
}


const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    store.authenticated ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)