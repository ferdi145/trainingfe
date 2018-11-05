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
    goog.provide('Apiomat.KobilUser');
    goog.require('Apiomat.User');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.KobilUser = function(_username, _password) {
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
 * Callback required by getKobilUsers function.
 * callback name getKobilUsersCallback
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
 * @param {getKobilUsersCallback} callback
 */
Apiomat.KobilUser.getKobilUsers = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.KobilUser, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getKobilUsersAndRefHref function.
 * callback name getKobilUsersAndRefHrefCallback
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
 * @param {getKobilUsersAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.KobilUser.getKobilUsersAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.KobilUser, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getKobilUsersCount function.
 * callback name getKobilUsersCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getKobilUsersCountCallback} callback which is called when request finished
 */
Apiomat.KobilUser.getKobilUsersCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.KobilUser, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getKobilUsers() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.KobilUser.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.KobilUser, query, callback);
};

/**
 * Deletes the classes that have been fetched with getKobilUsersWithReferencedHref (or its async version) before
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
Apiomat.KobilUser.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.KobilUser, query, callback);
};


/* inheritance */
Apiomat.KobilUser.prototype = new Apiomat.User();
Apiomat.KobilUser.prototype.constructor = Apiomat.KobilUser;


Apiomat.KobilUser.prototype.init=function () {
        Apiomat.User.prototype.init.call(this);
    this.data["dynamicAttributes"] = {};
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.KobilUser.prototype.getSimpleName = function() {
    return "KobilUser";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.KobilUser.prototype.getModuleName = function() {
    return "KobilConnect";
};

/* easy getter and setter */


/**
 * get OTP
 * @return OTP
 */
Apiomat.KobilUser.prototype.getOTP = function() 
{
            return this.data.OTP !== null ? this.data.OTP : undefined;
    
};

/**
 * set OTP
 * @param OTP
 */
Apiomat.KobilUser.prototype.setOTP = function(_OTP) {
    this.data.OTP = _OTP;
};


/**
 * get CertHandle
 * @return CertHandle
 */
Apiomat.KobilUser.prototype.getCertHandle = function() 
{
            return this.data.certHandle !== null ? this.data.certHandle : undefined;
    
};

/**
 * set CertHandle
 * @param CertHandle
 */
Apiomat.KobilUser.prototype.setCertHandle = function(_certHandle) {
    this.data.certHandle = _certHandle;
};


/**
 * get KobilId
 * @return KobilId
 */
Apiomat.KobilUser.prototype.getKobilId = function() 
{
            return this.data.kobilId !== null ? this.data.kobilId : undefined;
    
};

/**
 * set KobilId
 * @param KobilId
 */
Apiomat.KobilUser.prototype.setKobilId = function(_kobilId) {
    this.data.kobilId = _kobilId;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
