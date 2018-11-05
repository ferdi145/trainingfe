function AOM() {
    this.salesman = {};
    this.selectedLead = {};

    this.setSalesman = function (salesman) {
        this.salesman = salesman;
    }

    this.getSalesman = function () {
        return this.salesman;
    }

    // gets called when the edit button is pressed
    this.setSelectedLead = function (selectedLead) {
        this.selectedLead = selectedLead;
    }

    this.getSelectedLead = function () {
        return this.selectedLead;
    }

    // Aufgabe 2.3.1: Registrierung und Login
    // Callback "cb" needs to be called with no arguments on successful save
    this.signUp = function (username, password1, password2, cb) {

    }

    // Aufgabe 2.3.1: Registrierung und Login
    // Callback "cb" needs to be called with salesman object as argument
    this.login = function (username, password, cb) {

    }

    // Aufgabe 2.3.2: Abholen von Token
    // Callback "cb" needs to be called with sessionToken as argument
    this.getSessionToken = function (cb) {

    }

    // Aufgabe 2.3.2: Login mit Token
    // Callback "cb" needs to be called with no arguments 
    this.loginWithToken = function (sessionToken, cb) {

    }

    // Aufgabe 2.3.3: Laden von Listen und Referenzen
    // Aufgabe 2.3.5: Query
    // Aufgabe 2.3.6: Query
    // Callback "cb" needs to be called with result returned by ApiOmat
    this.loadLeads = function (cb) {

    }


    // Aufgabe 2.3.3: Erstellen und updaten von Objekten
    // callback "cb" needs to be called with no arguments on successful add to listOfLeads
    this.newLead = function (firstname, lastname, cb) {

    }

    // Aufgabe 2.3.3: Erstellen und updaten von Objekten
    // Callback "cb" needs to be called with no arguments on successful save
    this.updateLead = function (firstname, lastname, cb) {

    }

    // Aufgabe 2.3.3: Abholen von Bildern
    // Callback needs to be called with image URL as single argument
    this.getProfilePic = function (lead, cb) {

    }

    // Aufgabe 2.3.3: Hochladen von Bildern
    // function receives event object created by file input field on change event
    this.uploadProfilePic = function (event) {

    }
}

var aom = new AOM();