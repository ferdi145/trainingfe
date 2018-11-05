import cookieParse from 'cookie'
const aom = window.aom

class SessionHandler {
	constructor() {
		this.token = ''
		this._initFromCookie()
	}

	setToken(token) {
		this.token = token
	}

	getToken() {
		return this.token
	}

	createSession(user) {
		aom.getSessionToken(this._saveToken.bind(this))
	}

	deleteSession() {
		this._deleteToken()
		const cookie = cookieParse.serialize('sessionID', '', { maxAge: 0 })
		document.cookie = cookie
		console.log('Cookie deleted.')
	}

	_readToken() {
		const cookieObj = cookieParse.parse(document.cookie)
		return cookieObj.sessionID
	}

	_saveToken(token) {
		this.setToken(token)
		const options = {
			maxAge: 60 * 60 * 48
		}
		const cookie = cookieParse.serialize('sessionID', token, options)
		document.cookie = cookie
		console.log('Cookie written.')
	}

	_deleteToken() {
		this.setToken('')
	}

	_initFromCookie() {
		if (this._readToken()) {
			const token = this._readToken()
			this.setToken(token)
		}
	}
}

export const sessionHandler = new SessionHandler()

