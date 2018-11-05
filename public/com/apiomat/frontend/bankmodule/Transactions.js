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
    goog.provide('Apiomat.Transactions');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Transactions = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getTransactionss function.
 * callback name getTransactionssCallback
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
 * @param {getTransactionssCallback} callback
 */
Apiomat.Transactions.getTransactionss = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Transactions, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getTransactionssAndRefHref function.
 * callback name getTransactionssAndRefHrefCallback
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
 * @param {getTransactionssAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Transactions.getTransactionssAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Transactions, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getTransactionssCount function.
 * callback name getTransactionssCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getTransactionssCountCallback} callback which is called when request finished
 */
Apiomat.Transactions.getTransactionssCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Transactions, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getTransactionss() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Transactions.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Transactions, query, callback);
};

/**
 * Deletes the classes that have been fetched with getTransactionssWithReferencedHref (or its async version) before
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
Apiomat.Transactions.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Transactions, query, callback);
};


/* inheritance */
Apiomat.Transactions.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.Transactions.prototype.constructor = Apiomat.Transactions;


Apiomat.Transactions.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Transactions.prototype.getSimpleName = function() {
    return "Transactions";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Transactions.prototype.getModuleName = function() {
    return "BankModule";
};

/* easy getter and setter */


/**
 * get Account_id
 * @return Account_id
 */
Apiomat.Transactions.prototype.getAccount_id = function() 
{
            return this.data.account_id !== null ? this.data.account_id : undefined;
    
};

/**
 * set Account_id
 * @param Account_id
 */
Apiomat.Transactions.prototype.setAccount_id = function(_account_id) {
    this.data.account_id = _account_id;
};


/**
 * get Account_number
 * @return Account_number
 */
Apiomat.Transactions.prototype.getAccount_number = function() 
{
            return this.data.account_number !== null ? this.data.account_number : undefined;
    
};

/**
 * set Account_number
 * @param Account_number
 */
Apiomat.Transactions.prototype.setAccount_number = function(_account_number) {
    this.data.account_number = _account_number;
};


/**
 * get Additional_info
 * @return Additional_info
 */
Apiomat.Transactions.prototype.getAdditional_info = function() 
{
            return this.data.additional_info !== null ? this.data.additional_info : undefined;
    
};

/**
 * set Additional_info
 * @param Additional_info
 */
Apiomat.Transactions.prototype.setAdditional_info = function(_additional_info) {
    this.data.additional_info = _additional_info;
};


/**
 * get Amount
 * @return Amount
 */
Apiomat.Transactions.prototype.getAmount = function() 
{
            return this.data.amount !== null ? this.data.amount : undefined;
    
};

/**
 * set Amount
 * @param Amount
 */
Apiomat.Transactions.prototype.setAmount = function(_amount) {
    this.data.amount = _amount;
};


/**
 * get Bank_code
 * @return Bank_code
 */
Apiomat.Transactions.prototype.getBank_code = function() 
{
            return this.data.bank_code !== null ? this.data.bank_code : undefined;
    
};

/**
 * set Bank_code
 * @param Bank_code
 */
Apiomat.Transactions.prototype.setBank_code = function(_bank_code) {
    this.data.bank_code = _bank_code;
};


/**
 * get Bank_name
 * @return Bank_name
 */
Apiomat.Transactions.prototype.getBank_name = function() 
{
            return this.data.bank_name !== null ? this.data.bank_name : undefined;
    
};

/**
 * set Bank_name
 * @param Bank_name
 */
Apiomat.Transactions.prototype.setBank_name = function(_bank_name) {
    this.data.bank_name = _bank_name;
};


/**
 * get Booked
 * @return Booked
 */
Apiomat.Transactions.prototype.getBooked = function() 
{
            return this.data.booked !== null ? this.data.booked : undefined;
    
};

/**
 * set Booked
 * @param Booked
 */
Apiomat.Transactions.prototype.setBooked = function(_booked) {
    this.data.booked = _booked;
};

Apiomat.Transactions.prototype.getBooking_date = function() 
{
    var retDate = this.data.booking_date;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Transactions.prototype.setBooking_date = function(_booking_date) 
{
	if(_booking_date != null && _booking_date != undefined){
		this.data.booking_date = _booking_date.getTime();
	}
	else{
		this.data.booking_date = null;
	}
};
    

/**
 * get Booking_text
 * @return Booking_text
 */
Apiomat.Transactions.prototype.getBooking_text = function() 
{
            return this.data.booking_text !== null ? this.data.booking_text : undefined;
    
};

/**
 * set Booking_text
 * @param Booking_text
 */
Apiomat.Transactions.prototype.setBooking_text = function(_booking_text) {
    this.data.booking_text = _booking_text;
};

Apiomat.Transactions.prototype.getCreation_timestamp = function() 
{
    var retDate = this.data.creation_timestamp;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Transactions.prototype.setCreation_timestamp = function(_creation_timestamp) 
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
Apiomat.Transactions.prototype.getCurrency = function() 
{
            return this.data.currency !== null ? this.data.currency : undefined;
    
};

/**
 * set Currency
 * @param Currency
 */
Apiomat.Transactions.prototype.setCurrency = function(_currency) {
    this.data.currency = _currency;
};

Apiomat.Transactions.prototype.getModification_timestamp = function() 
{
    var retDate = this.data.modification_timestamp;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Transactions.prototype.setModification_timestamp = function(_modification_timestamp) 
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
Apiomat.Transactions.prototype.getName = function() 
{
            return this.data.name !== null ? this.data.name : undefined;
    
};

/**
 * set Name
 * @param Name
 */
Apiomat.Transactions.prototype.setName = function(_name) {
    this.data.name = _name;
};


/**
 * get Purpose
 * @return Purpose
 */
Apiomat.Transactions.prototype.getPurpose = function() 
{
            return this.data.purpose !== null ? this.data.purpose : undefined;
    
};

/**
 * set Purpose
 * @param Purpose
 */
Apiomat.Transactions.prototype.setPurpose = function(_purpose) {
    this.data.purpose = _purpose;
};


/**
 * get Transaction_type
 * @return Transaction_type
 */
Apiomat.Transactions.prototype.getTransaction_type = function() 
{
            return this.data.transaction_type !== null ? this.data.transaction_type : undefined;
    
};

/**
 * set Transaction_type
 * @param Transaction_type
 */
Apiomat.Transactions.prototype.setTransaction_type = function(_transaction_type) {
    this.data.transaction_type = _transaction_type;
};

Apiomat.Transactions.prototype.getValue_date = function() 
{
    var retDate = this.data.value_date;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Transactions.prototype.setValue_date = function(_value_date) 
{
	if(_value_date != null && _value_date != undefined){
		this.data.value_date = _value_date.getTime();
	}
	else{
		this.data.value_date = null;
	}
};
    

/**
 * get Visited
 * @return Visited
 */
Apiomat.Transactions.prototype.getVisited = function() 
{
            return this.data.visited !== null ? this.data.visited : undefined;
    
};

/**
 * set Visited
 * @param Visited
 */
Apiomat.Transactions.prototype.setVisited = function(_visited) {
    this.data.visited = _visited;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
