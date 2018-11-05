import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import store from '../store/store'


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.login = this.login.bind(this)
        this._onChangeUsername = this._onChangeUsername.bind(this)
        this._onChangePassword = this._onChangePassword.bind(this)
    }

    login(ev) {
        ev.preventDefault()
        store.login(this.state.username, this.state.password)
    }

    _onChangeUsername(ev) {
        this.setState({ username: ev.target.value })
    }

    _onChangePassword(ev) {
        this.setState({ password: ev.target.value })
    }

    render() {
        return (
            <div className="page-container">
                <div className="big-logo"></div>

                <form onSubmit={this.login}>
                    <input
                        className="form-control"
                        type="text"
                        name="Username"
                        onChange={this._onChangeUsername}
                        placeholder="Username"
                        />
                    <input
                        className="form-control"
                        type="password"
                        name="Password"
                        onChange={this._onChangePassword}
                        placeholder="Password"
                        />

                    <button className="btn btn-primary">
                        Log In
                    </button>
                    <Link
                        className="btn btn-info"
                        to="/signup"
                        >
                        Sign Up
                    </Link>
                </form>
                {this.props.authenticated ? (<Redirect to="/" />) : ''}
            </div>
        )
    }
}
