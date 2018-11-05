import { EventEmitter } from 'events'
import { sessionHandler } from '../services/SessionHandler'
const aom = window.aom

class Store extends EventEmitter {
    constructor() {
        super()
        this.authenticated = false
        this.leads = []

        this.login = this.login.bind(this)
        this.loginSuccess = this.loginSuccess.bind(this)
        this.loadLeads = this.loadLeads.bind(this)

        this.init()
    }

    init() {
        this.checkAuthentication(this.loadLeads)
    }

    checkAuthentication(callback) {
        if (sessionHandler.getToken()) {
            const sessionToken = sessionHandler.getToken()
            aom.loginWithToken(sessionToken, () => {
                this.setAuthenticated()
                this.emit('storeChange')
                callback()
            })
        }
    }

    loadLeads() {
        aom.loadLeads(leads => {
            this.leads = leads
            this.emit('storeChange')
        })
    }

    login(username, password) {
        aom.login(
            username,
            password,
            this.loginSuccess
        )
    }

    loginSuccess(user) {
        this.setAuthenticated()
        this.loadLeads()
        sessionHandler.createSession(user)
        this.emit('storeChange')
    }

    logout() {
        sessionHandler.deleteSession()
        this.leads = []
        this.setUnauthenticated()
        this.emit('storeChange')
    }

    setAuthenticated() {
        this.authenticated = true
    }

    setUnauthenticated() {
        this.authenticated = false
    }
}

const store = new Store()

export default store
