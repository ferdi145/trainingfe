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
    goog.provide('Apiomat.Accounts');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Accounts = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getAccountss function.
 * callback name getAccountssCallback
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
 * @param {getAccountssCallback} callback
 */
Apiomat.Accounts.getAccountss = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Accounts, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getAccountssAndRefHref function.
 * callback name getAccountssAndRefHrefCallback
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
 * @param {getAccountssAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Accounts.getAccountssAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Accounts, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getAccountssCount function.
 * callback name getAccountssCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getAccountssCountCallback} callback which is called when request finished
 */
Apiomat.Accounts.getAccountssCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Accounts, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getAccountss() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Accounts.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Accounts, query, callback);
};

/**
 * Deletes the classes that have been fetched with getAccountssWithReferencedHref (or its async version) before
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
Apiomat.Accounts.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Accounts, query, callback);
};


/* inheritance */
Apiomat.Accounts.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.Accounts.prototype.constructor = Apiomat.Accounts;


Apiomat.Accounts.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Accounts.prototype.getSimpleName = function() {
    return "Accounts";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Accounts.prototype.getModuleName = function() {
    return "BankModule";
};

/* easy getter and setter */


/**
 * get Acc_type
 * @return Acc_type
 */
Apiomat.Accounts.prototype.getAcc_type = function() 
{
            return this.data.acc_type !== null ? this.data.acc_type : undefined;
    
};

/**
 * set Acc_type
 * @param Acc_type
 */
Apiomat.Accounts.prototype.setAcc_type = function(_acc_type) {
    this.data.acc_type = _acc_type;
};


/**
 * get Account_number
 * @return Account_number
 */
Apiomat.Accounts.prototype.getAccount_number = function() 
{
            return this.data.account_number !== null ? this.data.account_number : undefined;
    
};

/**
 * set Account_number
 * @param Account_number
 */
Apiomat.Accounts.prototype.setAccount_number = function(_account_number) {
    this.data.account_number = _account_number;
};


/**
 * get Additional_icons
 * @return Additional_icons
 */
Apiomat.Accounts.prototype.getAdditional_icons = function() 
{
            return this.data.additional_icons !== null ? this.data.additional_icons : undefined;
    
};

/**
 * set Additional_icons
 * @param Additional_icons
 */
Apiomat.Accounts.prototype.setAdditional_icons = function(_additional_icons) {
    this.data.additional_icons = _additional_icons;
};


/**
 * get Auto_sync
 * @return Auto_sync
 */
Apiomat.Accounts.prototype.getAuto_sync = function() 
{
            return this.data.auto_sync !== null ? this.data.auto_sync : undefined;
    
};

/**
 * set Auto_sync
 * @param Auto_sync
 */
Apiomat.Accounts.prototype.setAuto_sync = function(_auto_sync) {
    this.data.auto_sync = _auto_sync;
};


/**
 * get Bank_code
 * @return Bank_code
 */
Apiomat.Accounts.prototype.getBank_code = function() 
{
            return this.data.bank_code !== null ? this.data.bank_code : undefined;
    
};

/**
 * set Bank_code
 * @param Bank_code
 */
Apiomat.Accounts.prototype.setBank_code = function(_bank_code) {
    this.data.bank_code = _bank_code;
};


/**
 * get Bank_id
 * @return Bank_id
 */
Apiomat.Accounts.prototype.getBank_id = function() 
{
            return this.data.bank_id !== null ? this.data.bank_id : undefined;
    
};

/**
 * set Bank_id
 * @param Bank_id
 */
Apiomat.Accounts.prototype.setBank_id = function(_bank_id) {
    this.data.bank_id = _bank_id;
};


/**
 * get Bank_name
 * @return Bank_name
 */
Apiomat.Accounts.prototype.getBank_name = function() 
{
            return this.data.bank_name !== null ? this.data.bank_name : undefined;
    
};

/**
 * set Bank_name
 * @param Bank_name
 */
Apiomat.Accounts.prototype.setBank_name = function(_bank_name) {
    this.data.bank_name = _bank_name;
};


/**
 * get Bic
 * @return Bic
 */
Apiomat.Accounts.prototype.getBic = function() 
{
            return this.data.bic !== null ? this.data.bic : undefined;
    
};

/**
 * set Bic
 * @param Bic
 */
Apiomat.Accounts.prototype.setBic = function(_bic) {
    this.data.bic = _bic;
};


/**
 * get Currency
 * @return Currency
 */
Apiomat.Accounts.prototype.getCurrency = function() 
{
            return this.data.currency !== null ? this.data.currency : undefined;
    
};

/**
 * set Currency
 * @param Currency
 */
Apiomat.Accounts.prototype.setCurrency = function(_currency) {
    this.data.currency = _currency;
};


/**
 * get Iban
 * @return Iban
 */
Apiomat.Accounts.prototype.getIban = function() 
{
            return this.data.iban !== null ? this.data.iban : undefined;
    
};

/**
 * set Iban
 * @param Iban
 */
Apiomat.Accounts.prototype.setIban = function(_iban) {
    this.data.iban = _iban;
};


/**
 * get Icon_url
 * @return Icon_url
 */
Apiomat.Accounts.prototype.getIcon_url = function() 
{
            return this.data.icon_url !== null ? this.data.icon_url : undefined;
    
};

/**
 * set Icon_url
 * @param Icon_url
 */
Apiomat.Accounts.prototype.setIcon_url = function(_icon_url) {
    this.data.icon_url = _icon_url;
};


/**
 * get In_total_balance
 * @return In_total_balance
 */
Apiomat.Accounts.prototype.getIn_total_balance = function() 
{
            return this.data.in_total_balance !== null ? this.data.in_total_balance : undefined;
    
};

/**
 * set In_total_balance
 * @param In_total_balance
 */
Apiomat.Accounts.prototype.setIn_total_balance = function(_in_total_balance) {
    this.data.in_total_balance = _in_total_balance;
};


/**
 * get Name
 * @return Name
 */
Apiomat.Accounts.prototype.getName = function() 
{
            return this.data.name !== null ? this.data.name : undefined;
    
};

/**
 * set Name
 * @param Name
 */
Apiomat.Accounts.prototype.setName = function(_name) {
    this.data.name = _name;
};


/**
 * get Owner
 * @return Owner
 */
Apiomat.Accounts.prototype.getOwner = function() 
{
            return this.data.owner !== null ? this.data.owner : undefined;
    
};

/**
 * set Owner
 * @param Owner
 */
Apiomat.Accounts.prototype.setOwner = function(_owner) {
    this.data.owner = _owner;
};


/**
 * get Preferred_tan_scheme
 * @return Preferred_tan_scheme
 */
Apiomat.Accounts.prototype.getPreferred_tan_scheme = function() 
{
            return this.data.preferred_tan_scheme !== null ? this.data.preferred_tan_scheme : undefined;
    
};

/**
 * set Preferred_tan_scheme
 * @param Preferred_tan_scheme
 */
Apiomat.Accounts.prototype.setPreferred_tan_scheme = function(_preferred_tan_scheme) {
    this.data.preferred_tan_scheme = _preferred_tan_scheme;
};


/**
 * get Save_pin
 * @return Save_pin
 */
Apiomat.Accounts.prototype.getSave_pin = function() 
{
            return this.data.save_pin !== null ? this.data.save_pin : undefined;
    
};

/**
 * set Save_pin
 * @param Save_pin
 */
Apiomat.Accounts.prototype.setSave_pin = function(_save_pin) {
    this.data.save_pin = _save_pin;
};


/**
 * get Status
 * @return Status
 */
Apiomat.Accounts.prototype.getStatus = function() 
{
            return this.data.status !== null ? this.data.status : undefined;
    
};

/**
 * set Status
 * @param Status
 */
Apiomat.Accounts.prototype.setStatus = function(_status) {
    this.data.status = _status;
};


/**
 * get Supported_payments
 * @return Supported_payments
 */
Apiomat.Accounts.prototype.getSupported_payments = function() 
{
            return this.data.supported_payments !== null ? this.data.supported_payments : undefined;
    
};

/**
 * set Supported_payments
 * @param Supported_payments
 */
Apiomat.Accounts.prototype.setSupported_payments = function(_supported_payments) {
    this.data.supported_payments = _supported_payments;
};


/**
 * get Supported_tan_schemes
 * @return Supported_tan_schemes
 */
Apiomat.Accounts.prototype.getSupported_tan_schemes = function() 
{
            return this.data.supported_tan_schemes !== null ? this.data.supported_tan_schemes : undefined;
    
};

/**
 * set Supported_tan_schemes
 * @param Supported_tan_schemes
 */
Apiomat.Accounts.prototype.setSupported_tan_schemes = function(_supported_tan_schemes) {
    this.data.supported_tan_schemes = _supported_tan_schemes;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
