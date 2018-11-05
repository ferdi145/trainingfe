import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const aom = window.aom

export default class Lead extends Component {
    constructor() {
        super()

        this.state = {
            imgUrl: ''
        }

        this.getImageUrl = this.getImageUrl.bind(this)
        this.updateUrl = this.updateUrl.bind(this)
        this.setSelectedLead = this.setSelectedLead.bind(this)
    }

    componentDidMount() {
        this.getImageUrl()
    }

    getImageUrl() {
        aom.getProfilePic(this.props.lead, this.updateUrl)
    }

    updateUrl(imgUrl) {
        if (imgUrl)
            this.setState({ imgUrl })
    }

    setSelectedLead() {
        aom.setSelectedLead(this.props.lead)
    }

    render() {
        const lead = this.props.lead

        return (
            <tr key={lead.getID()}>
                <td>
                    <div
                        className="profile-pic"
                        style={{
                            backgroundImage: `url(${this.state.imgUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                    </div>
                </td>
                <td>{lead.getFirstName()}</td>
                <td>{lead.getLastName()}</td>
                <td>
                    <Link
                        to={`/editlead`}
                        className="btn btn-sm btn-success"
                        onClick={this.setSelectedLead}
                    >
                        Edit
                    </Link>
                </td>
            </tr>
        )
    }
}