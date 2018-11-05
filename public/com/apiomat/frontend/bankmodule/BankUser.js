/*
 * Copyright (c) 2011 - 2018, Apinauten GmbH
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 *
 *  * Redistributions of source code must retain the above copyright notice, this 
 *    list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice, 
 *    this list of conditions and the following disclaimer in the documentation 
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF 
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE 
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * THIS FILE IS GENERATED AUTOMATICALLY. DON'T MODIFY IT.
 */
 
/* define namespace */

if(typeof goog !== 'undefined')
{
    goog.provide('Apiomat.BankUser');
    goog.require('Apiomat.KobilUser');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.BankUser = function(_username, _password) {
    this.init();
    if(typeof _username !== 'undefined')
    {
        this.setUserName(_username);
    }
    
    if(typeof _password !== 'undefined')
    {
        this.setPassword(_password);
    }
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getBankUsers function.
 * callback name getBankUsersCallback
 * @param {function} onOk Function is called when everything is ok. (containing a list of object as {array})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns a list of objects of this class from server.
 * The size of the resultset is limited to an installation specific value ('maxResults') and defaults to 1000. 
 * Use limit and offset to return all results if the expected size is larger.
 *
 * If query is given then returned list will be filtered by the given query
 *
 * @param {string} query (optional) a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getBankUsersCallback} callback
 */
Apiomat.BankUser.getBankUsers = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.BankUser, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getBankUsersAndRefHref function.
 * callback name getBankUsersAndRefHrefCallback
 * @param {function} onOk Function is called when everything is ok. (containing a list of object as {array})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns a list of objects of this class from server.
 * The size of the resultset is limited to an installation specific value ('maxResults') and defaults to 1000. 
 * Use limit and offset to return all results if the expected size is larger.
 * If query is given then returned list will be filtered by the given query
 *
 * @param {string} query (optional) a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {boolean} withReferencedHrefs set to true to get also all HREFs of referenced class instances
 * @param {getBankUsersAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.BankUser.getBankUsersAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.BankUser, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getBankUsersCount function.
 * callback name getBankUsersCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getBankUsersCountCallback} callback which is called when request finished
 */
Apiomat.BankUser.getBankUsersCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.BankUser, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getBankUsers() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.BankUser.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.BankUser, query, callback);
};

/**
 * Deletes the classes that have been fetched with getBankUsersWithReferencedHref (or its async version) before
 *
 * Note:
 * - The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * - Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 * - Lastly, if objects of this class were fetched in the context of loading a reference collection,
 *   those objects won't be deleted as well (use the respective delete..FromStorage method for that).
 *
 * @param {string} query 
 * @param {deleteAllFromStorageWithReferencedHrefsCallback} callback to be called after request is done
 */
Apiomat.BankUser.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.BankUser, query, callback);
};


/* inheritance */
Apiomat.BankUser.prototype = new Apiomat.KobilUser();
Apiomat.BankUser.prototype.constructor = Apiomat.BankUser;


Apiomat.BankUser.prototype.init=function () {
        Apiomat.KobilUser.prototype.init.call(this);
    this.data["dynamicAttributes"] = {};
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.BankUser.prototype.getSimpleName = function() {
    return "BankUser";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.BankUser.prototype.getModuleName = function() {
    return "BankModule";
};

/* easy getter and setter */


/**
 * get Adress
 * @return Adress
 */
Apiomat.BankUser.prototype.getAdress = function() 
{
            return this.data.adress !== null ? this.data.adress : undefined;
    
};

/**
 * set Adress
 * @param Adress
 */
Apiomat.BankUser.prototype.setAdress = function(_adress) {
    this.data.adress = _adress;
};


/**
 * get Email
 * @return Email
 */
Apiomat.BankUser.prototype.getEmail = function() 
{
            return this.data.email !== null ? this.data.email : undefined;
    
};

/**
 * set Email
 * @param Email
 */
Apiomat.BankUser.prototype.setEmail = function(_email) {
    this.data.email = _email;
};


/**
 * get Filters
 * @return Filters
 */
Apiomat.BankUser.prototype.getFilters = function() 
{
            return this.data.filters !== null ? this.data.filters : undefined;
    
};

/**
 * set Filters
 * @param Filters
 */
Apiomat.BankUser.prototype.setFilters = function(_filters) {
    this.data.filters = _filters;
};


/**
 * get Force_reset
 * @return Force_reset
 */
Apiomat.BankUser.prototype.getForce_reset = function() 
{
            return this.data.force_reset !== null ? this.data.force_reset : undefined;
    
};

/**
 * set Force_reset
 * @param Force_reset
 */
Apiomat.BankUser.prototype.setForce_reset = function(_force_reset) {
    this.data.force_reset = _force_reset;
};

Apiomat.BankUser.prototype.getJoin_date = function() 
{
    var retDate = this.data.join_date;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.BankUser.prototype.setJoin_date = function(_join_date) 
{
	if(_join_date != null && _join_date != undefined){
		this.data.join_date = _join_date.getTime();
	}
	else{
		this.data.join_date = null;
	}
};
    

/**
 * get Language
 * @return Language
 */
Apiomat.BankUser.prototype.getLanguage = function() 
{
            return this.data.language !== null ? this.data.language : undefined;
    
};

/**
 * set Language
 * @param Language
 */
Apiomat.BankUser.prototype.setLanguage = function(_language) {
    this.data.language = _language;
};


/**
 * get Name
 * @return Name
 */
Apiomat.BankUser.prototype.getName = function() 
{
            return this.data.name !== null ? this.data.name : undefined;
    
};

/**
 * set Name
 * @param Name
 */
Apiomat.BankUser.prototype.setName = function(_name) {
    this.data.name = _name;
};


/**
 * get Recovery_password
 * @return Recovery_password
 */
Apiomat.BankUser.prototype.getRecovery_password = function() 
{
            return this.data.recovery_password !== null ? this.data.recovery_password : undefined;
    
};

/**
 * set Recovery_password
 * @param Recovery_password
 */
Apiomat.BankUser.prototype.setRecovery_password = function(_recovery_password) {
    this.data.recovery_password = _recovery_password;
};


/**
 * get Send_newsletter
 * @return Send_newsletter
 */
Apiomat.BankUser.prototype.getSend_newsletter = function() 
{
            return this.data.send_newsletter !== null ? this.data.send_newsletter : undefined;
    
};

/**
 * set Send_newsletter
 * @param Send_newsletter
 */
Apiomat.BankUser.prototype.setSend_newsletter = function(_send_newsletter) {
    this.data.send_newsletter = _send_newsletter;
};


/**
 * get Verified_email
 * @return Verified_email
 */
Apiomat.BankUser.prototype.getVerified_email = function() 
{
            return this.data.verified_email !== null ? this.data.verified_email : undefined;
    
};

/**
 * set Verified_email
 * @param Verified_email
 */
Apiomat.BankUser.prototype.setVerified_email = function(_verified_email) {
    this.data.verified_email = _verified_email;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
