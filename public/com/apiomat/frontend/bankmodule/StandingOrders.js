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
    goog.provide('Apiomat.StandingOrders');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.StandingOrders = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getStandingOrderss function.
 * callback name getStandingOrderssCallback
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
 * @param {getStandingOrderssCallback} callback
 */
Apiomat.StandingOrders.getStandingOrderss = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.StandingOrders, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getStandingOrderssAndRefHref function.
 * callback name getStandingOrderssAndRefHrefCallback
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
 * @param {getStandingOrderssAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.StandingOrders.getStandingOrderssAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.StandingOrders, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getStandingOrderssCount function.
 * callback name getStandingOrderssCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getStandingOrderssCountCallback} callback which is called when request finished
 */
Apiomat.StandingOrders.getStandingOrderssCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.StandingOrders, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getStandingOrderss() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.StandingOrders.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.StandingOrders, query, callback);
};

/**
 * Deletes the classes that have been fetched with getStandingOrderssWithReferencedHref (or its async version) before
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
Apiomat.StandingOrders.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.StandingOrders, query, callback);
};


/* inheritance */
Apiomat.StandingOrders.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.StandingOrders.prototype.constructor = Apiomat.StandingOrders;


Apiomat.StandingOrders.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.StandingOrders.prototype.getSimpleName = function() {
    return "StandingOrders";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.StandingOrders.prototype.getModuleName = function() {
    return "BankModule";
};

/* easy getter and setter */


/**
 * get Account_id
 * @return Account_id
 */
Apiomat.StandingOrders.prototype.getAccount_id = function() 
{
            return this.data.account_id !== null ? this.data.account_id : undefined;
    
};

/**
 * set Account_id
 * @param Account_id
 */
Apiomat.StandingOrders.prototype.setAccount_id = function(_account_id) {
    this.data.account_id = _account_id;
};


/**
 * get Account_number
 * @return Account_number
 */
Apiomat.StandingOrders.prototype.getAccount_number = function() 
{
            return this.data.account_number !== null ? this.data.account_number : undefined;
    
};

/**
 * set Account_number
 * @param Account_number
 */
Apiomat.StandingOrders.prototype.setAccount_number = function(_account_number) {
    this.data.account_number = _account_number;
};


/**
 * get Amount
 * @return Amount
 */
Apiomat.StandingOrders.prototype.getAmount = function() 
{
            return this.data.amount !== null ? this.data.amount : undefined;
    
};

/**
 * set Amount
 * @param Amount
 */
Apiomat.StandingOrders.prototype.setAmount = function(_amount) {
    this.data.amount = _amount;
};


/**
 * get Bank_code
 * @return Bank_code
 */
Apiomat.StandingOrders.prototype.getBank_code = function() 
{
            return this.data.bank_code !== null ? this.data.bank_code : undefined;
    
};

/**
 * set Bank_code
 * @param Bank_code
 */
Apiomat.StandingOrders.prototype.setBank_code = function(_bank_code) {
    this.data.bank_code = _bank_code;
};


/**
 * get Bank_name
 * @return Bank_name
 */
Apiomat.StandingOrders.prototype.getBank_name = function() 
{
            return this.data.bank_name !== null ? this.data.bank_name : undefined;
    
};

/**
 * set Bank_name
 * @param Bank_name
 */
Apiomat.StandingOrders.prototype.setBank_name = function(_bank_name) {
    this.data.bank_name = _bank_name;
};

Apiomat.StandingOrders.prototype.getCreation_timestamp = function() 
{
    var retDate = this.data.creation_timestamp;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.StandingOrders.prototype.setCreation_timestamp = function(_creation_timestamp) 
{
	if(_creation_timestamp != null && _creation_timestamp != undefined){
		this.data.creation_timestamp = _creation_timestamp.getTime();
	}
	else{
		this.data.creation_timestamp = null;
	}
};
    

/**
 * get Currency
 * @return Currency
 */
Apiomat.StandingOrders.prototype.getCurrency = function() 
{
            return this.data.currency !== null ? this.data.currency : undefined;
    
};

/**
 * set Currency
 * @param Currency
 */
Apiomat.StandingOrders.prototype.setCurrency = function(_currency) {
    this.data.currency = _currency;
};

Apiomat.StandingOrders.prototype.getExecution_day = function() 
{
    var retDate = this.data.execution_day;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.StandingOrders.prototype.setExecution_day = function(_execution_day) 
{
	if(_execution_day != null && _execution_day != undefined){
		this.data.execution_day = _execution_day.getTime();
	}
	else{
		this.data.execution_day = null;
	}
};
    
Apiomat.StandingOrders.prototype.getFirst_execution_date = function() 
{
    var retDate = this.data.first_execution_date;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.StandingOrders.prototype.setFirst_execution_date = function(_first_execution_date) 
{
	if(_first_execution_date != null && _first_execution_date != undefined){
		this.data.first_execution_date = _first_execution_date.getTime();
	}
	else{
		this.data.first_execution_date = null;
	}
};
    

/**
 * get Interval
 * @return Interval
 */
Apiomat.StandingOrders.prototype.getInterval = function() 
{
            return this.data.interval !== null ? this.data.interval : undefined;
    
};

/**
 * set Interval
 * @param Interval
 */
Apiomat.StandingOrders.prototype.setInterval = function(_interval) {
    this.data.interval = _interval;
};

Apiomat.StandingOrders.prototype.getLast_execution_date = function() 
{
    var retDate = this.data.last_execution_date;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.StandingOrders.prototype.setLast_execution_date = function(_last_execution_date) 
{
	if(_last_execution_date != null && _last_execution_date != undefined){
		this.data.last_execution_date = _last_execution_date.getTime();
	}
	else{
		this.data.last_execution_date = null;
	}
};
    
Apiomat.StandingOrders.prototype.getModification_timestamp = function() 
{
    var retDate = this.data.modification_timestamp;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.StandingOrders.prototype.setModification_timestamp = function(_modification_timestamp) 
{
	if(_modification_timestamp != null && _modification_timestamp != undefined){
		this.data.modification_timestamp = _modification_timestamp.getTime();
	}
	else{
		this.data.modification_timestamp = null;
	}
};
    

/**
 * get Name
 * @return Name
 */
Apiomat.StandingOrders.prototype.getName = function() 
{
            return this.data.name !== null ? this.data.name : undefined;
    
};

/**
 * set Name
 * @param Name
 */
Apiomat.StandingOrders.prototype.setName = function(_name) {
    this.data.name = _name;
};


/**
 * get Purpose
 * @return Purpose
 */
Apiomat.StandingOrders.prototype.getPurpose = function() 
{
            return this.data.purpose !== null ? this.data.purpose : undefined;
    
};

/**
 * set Purpose
 * @param Purpose
 */
Apiomat.StandingOrders.prototype.setPurpose = function(_purpose) {
    this.data.purpose = _purpose;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
