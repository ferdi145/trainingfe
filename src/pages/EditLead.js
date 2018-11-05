import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
const aom = window.aom

export default class EditLead extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            imgUrl: '',
            updateSuccess: false
        }

        this.updateLead = this.updateLead.bind(this)
        this.handleImageAdd = this.handleImageAdd.bind(this)
        this._onChangeFirstName = this._onChangeFirstName.bind(this)
        this._onChangeLastName = this._onChangeLastName.bind(this)
        this._redirect = this._redirect.bind(this)
    }

    componentDidMount() {
        const lead = aom.getSelectedLead()
        this.setState({
            firstname: lead.getFirstName(),
            lastname: lead.getLastName(),
            imgUrl: lead.getProfilePicURL()
        })
    }

    _onChangeFirstName(ev) {
        this.setState({ firstname: ev.target.value })
    }

    _onChangeLastName(ev) {
        this.setState({ lastname: ev.target.value })
    }

    _redirect() {
        this.setState({ updateSuccess: true })
    }

    handleImageAdd(ev) {
        aom.uploadProfilePic(ev)
    }

    updateLead(ev) {
        ev.preventDefault()

        aom.updateLead(
            this.state.firstname,
            this.state.lastname,
            this._redirect
        )
    }

    render() {
        return (
            <div className="page-container">
                {
                    !!this.state.imgUrl &&
                    <div
                        className="profile-pic--big"
                        style={{
                            backgroundImage: `url(${this.state.imgUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}
                    >
                    </div>
                }
                {
                    !this.state.imgUrl &&
                    <div className="profile-pic--big profile-pic--button" >
                        <input type="file" onChange={this.handleImageAdd} />
                    </div>
                }
                <form onSubmit={this.updateLead}>
                    <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        placeholder="Firstname"
                        onChange={this._onChangeFirstName}
                        value={this.state.firstname}
                    />
                    <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        placeholder="Lastname"
                        onChange={this._onChangeLastName}
                        value={this.state.lastname}
                    />

                    <button className="btn btn-primary">
                        Update
          </button>
                </form>
                {this.state.updateSuccess ? <Redirect to="/" /> : ''}
            </div>
        )
    }
}
