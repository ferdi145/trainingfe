import React, { Component } from 'react'
import Lead from '../components/Lead'
import AddLead from '../components/AddLead'
import store from '../store/store'

export default class Leads extends Component {
  constructor() {
    super()
    this.state = {
      leads: []
    }

    this.updateState = this.updateState.bind(this)
  }

  componentDidMount() {
    this.updateState()
    store.on('storeChange', this.updateState)
  }

  componentWillUnmount() {
    store.removeListener('storeChange', this.updateState)
  }

  updateState() {
    this.setState({ leads: store.leads })
  }

  getLeads() {
    store.loadLeads()
  }

  render() {

    const leads = this.state.leads.map((lead, i) => {
      return (
        <Lead
          key={lead.getID()}
          lead={lead}
        />
      )
    })

    return (
      <div className="page-container">
        <table>
          <tbody>
            <AddLead callback={this.getLeads} />
            {leads}
          </tbody>
        </table>
      </div>
    )
  }
}
