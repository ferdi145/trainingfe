import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store/store'

class App extends Component {

    logout() {
        store.logout()
    }

    render() {
        return (
            <div className="app">
                <div className="status-bar">
                    <Link className="status-bar__logo" to="/" ></Link>
                    {this.props.authenticated ?
                        <a className="status-bar__logout" onClick={this.logout} href="/"></a> : ''}
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default App
