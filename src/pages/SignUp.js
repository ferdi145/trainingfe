import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
const aom = window.aom

export default class SignUp extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password1: '',
      password2: '',
      redirect: false
    }

    this.signIn = this.signIn.bind(this)
    this._onChangeUsername = this._onChangeUsername.bind(this)
    this._onChangePassword1 = this._onChangePassword1.bind(this)
    this._onChangePassword2 = this._onChangePassword2.bind(this)
    this._redirect = this._redirect.bind(this)
  }

  signIn(ev) {
    ev.preventDefault()

    aom.signUp(
      this.state.username,
      this.state.password1,
      this.state.password2,
      this._redirect
    )
  }

  _redirect() {
    this.setState({ redirect: true })
  }

  _onChangeUsername(ev) {
    this.setState({ username: ev.target.value })
  }

  _onChangePassword1(ev) {
    this.setState({ password1: ev.target.value })
  }

  _onChangePassword2(ev) {
    this.setState({ password2: ev.target.value })
  }

  render() {
    return (
      <div className="page-container">
        <div className="big-logo"></div>

        <form onSubmit={this.signIn}>
          <input
            className="form-control"
            type="text"
            name="username"
            onChange={this._onChangeUsername}
            placeholder="Username"
            />
          <input
            className="form-control"
            name="password1"
            onChange={this._onChangePassword1}
            placeholder="Password"
            type="password"
            />
          <input
            className="form-control"
            name="password2"
            onChange={this._onChangePassword2}
            placeholder="Password"
            type="password"
            />

          <button className="btn btn-primary">
            Sign In
          </button>
        </form>
        {this.state.redirect ? (<Redirect to="/" />) : ''}
      </div>
    )
  }
}
