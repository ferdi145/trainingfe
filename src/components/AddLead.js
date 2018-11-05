import React, { Component } from 'react'
const aom = window.aom

export default class AddLead extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: ''
        }

        this.addLead = this.addLead.bind(this)
        this._onChangeFirstName = this._onChangeFirstName.bind(this)
        this._onChangeLastName = this._onChangeLastName.bind(this)
    }

    addLead(ev) {

        aom.newLead(
            this.state.firstname,
            this.state.lastname,
            this.props.callback
        )

        this.setState({
            firstname: '',
            lastname: ''
        })

        ev.preventDefault()
    }

    _onChangeFirstName(ev) {
        this.setState({ firstname: ev.target.value })
    }

    _onChangeLastName(ev) {
        this.setState({ lastname: ev.target.value })
    }

    render() {
        return (
            <tr>
                <td>
                    <div className="profile-pic profile-pic--placeholder"></div>
                </td>
                <td>
                    <input
                        className="form-control inline-form"
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        onChange={this._onChangeFirstName}
                        value={this.state.firstname}
                    />
                </td>
                <td>
                    <input
                        className="form-control inline-form"
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        onChange={this._onChangeLastName}
                        value={this.state.lastname}
                    />
                </td>
                <td>
                    <button
                        className="btn btn-sm btn-info"
                        onClick={this.addLead}
                    >
                        Add
                    </button>
                </td>
            </tr>
        )
    }
}