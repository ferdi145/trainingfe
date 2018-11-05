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
    goog.provide('Apiomat.ContactProtocol');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.ContactProtocol = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getContactProtocols function.
 * callback name getContactProtocolsCallback
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
 * @param {getContactProtocolsCallback} callback
 */
Apiomat.ContactProtocol.getContactProtocols = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.ContactProtocol, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getContactProtocolsAndRefHref function.
 * callback name getContactProtocolsAndRefHrefCallback
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
 * @param {getContactProtocolsAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.ContactProtocol.getContactProtocolsAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.ContactProtocol, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getContactProtocolsCount function.
 * callback name getContactProtocolsCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getContactProtocolsCountCallback} callback which is called when request finished
 */
Apiomat.ContactProtocol.getContactProtocolsCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.ContactProtocol, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getContactProtocols() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.ContactProtocol.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.ContactProtocol, query, callback);
};

/**
 * Deletes the classes that have been fetched with getContactProtocolsWithReferencedHref (or its async version) before
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
Apiomat.ContactProtocol.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.ContactProtocol, query, callback);
};


/* inheritance */
Apiomat.ContactProtocol.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.ContactProtocol.prototype.constructor = Apiomat.ContactProtocol;


Apiomat.ContactProtocol.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.ContactProtocol.prototype.getSimpleName = function() {
    return "ContactProtocol";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.ContactProtocol.prototype.getModuleName = function() {
    return "SalesModule1";
};

/* easy getter and setter */


/**
 * get Notes
 * @return Notes
 */
Apiomat.ContactProtocol.prototype.getNotes = function() 
{
            return this.data.notes !== null ? this.data.notes : undefined;
    
};

/**
 * set Notes
 * @param Notes
 */
Apiomat.ContactProtocol.prototype.setNotes = function(_notes) {
    this.data.notes = _notes;
};

Apiomat.ContactProtocol.prototype.getTimeOfContact = function() 
{
    var retDate = this.data.timeOfContact;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.ContactProtocol.prototype.setTimeOfContact = function(_timeOfContact) 
{
	if(_timeOfContact != null && _timeOfContact != undefined){
		this.data.timeOfContact = _timeOfContact.getTime();
	}
	else{
		this.data.timeOfContact = null;
	}
};
    

})(typeof exports === 'undefined' ? Apiomat
        : exports);
