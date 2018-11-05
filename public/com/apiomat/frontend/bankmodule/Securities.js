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
    goog.provide('Apiomat.Securities');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Securities = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getSecuritiess function.
 * callback name getSecuritiessCallback
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
 * @param {getSecuritiessCallback} callback
 */
Apiomat.Securities.getSecuritiess = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Securities, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getSecuritiessAndRefHref function.
 * callback name getSecuritiessAndRefHrefCallback
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
 * @param {getSecuritiessAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Securities.getSecuritiessAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Securities, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getSecuritiessCount function.
 * callback name getSecuritiessCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getSecuritiessCountCallback} callback which is called when request finished
 */
Apiomat.Securities.getSecuritiessCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Securities, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getSecuritiess() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Securities.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Securities, query, callback);
};

/**
 * Deletes the classes that have been fetched with getSecuritiessWithReferencedHref (or its async version) before
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
Apiomat.Securities.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Securities, query, callback);
};


/* inheritance */
Apiomat.Securities.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.Securities.prototype.constructor = Apiomat.Securities;


Apiomat.Securities.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Securities.prototype.getSimpleName = function() {
    return "Securities";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Securities.prototype.getModuleName = function() {
    return "BankModule";
};

/* easy getter and setter */


/**
 * get Account_id
 * @return Account_id
 */
Apiomat.Securities.prototype.getAccount_id = function() 
{
            return this.data.account_id !== null ? this.data.account_id : undefined;
    
};

/**
 * set Account_id
 * @param Account_id
 */
Apiomat.Securities.prototype.setAccount_id = function(_account_id) {
    this.data.account_id = _account_id;
};


/**
 * get Amount
 * @return Amount
 */
Apiomat.Securities.prototype.getAmount = function() 
{
            return this.data.amount !== null ? this.data.amount : undefined;
    
};

/**
 * set Amount
 * @param Amount
 */
Apiomat.Securities.prototype.setAmount = function(_amount) {
    this.data.amount = _amount;
};


/**
 * get Amount_original_currency
 * @return Amount_original_currency
 */
Apiomat.Securities.prototype.getAmount_original_currency = function() 
{
            return this.data.amount_original_currency !== null ? this.data.amount_original_currency : undefined;
    
};

/**
 * set Amount_original_currency
 * @param Amount_original_currency
 */
Apiomat.Securities.prototype.setAmount_original_currency = function(_amount_original_currency) {
    this.data.amount_original_currency = _amount_original_currency;
};

Apiomat.Securities.prototype.getCreation_timestamp = function() 
{
    var retDate = this.data.creation_timestamp;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Securities.prototype.setCreation_timestamp = function(_creation_timestamp) 
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
Apiomat.Securities.prototype.getCurrency = function() 
{
            return this.data.currency !== null ? this.data.currency : undefined;
    
};

/**
 * set Currency
 * @param Currency
 */
Apiomat.Securities.prototype.setCurrency = function(_currency) {
    this.data.currency = _currency;
};


/**
 * get Exchange_rate
 * @return Exchange_rate
 */
Apiomat.Securities.prototype.getExchange_rate = function() 
{
            return this.data.exchange_rate !== null ? this.data.exchange_rate : undefined;
    
};

/**
 * set Exchange_rate
 * @param Exchange_rate
 */
Apiomat.Securities.prototype.setExchange_rate = function(_exchange_rate) {
    this.data.exchange_rate = _exchange_rate;
};


/**
 * get Isin
 * @return Isin
 */
Apiomat.Securities.prototype.getIsin = function() 
{
            return this.data.isin !== null ? this.data.isin : undefined;
    
};

/**
 * set Isin
 * @param Isin
 */
Apiomat.Securities.prototype.setIsin = function(_isin) {
    this.data.isin = _isin;
};

Apiomat.Securities.prototype.getModification_timestamp = function() 
{
    var retDate = this.data.modification_timestamp;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Securities.prototype.setModification_timestamp = function(_modification_timestamp) 
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
Apiomat.Securities.prototype.getName = function() 
{
            return this.data.name !== null ? this.data.name : undefined;
    
};

/**
 * set Name
 * @param Name
 */
Apiomat.Securities.prototype.setName = function(_name) {
    this.data.name = _name;
};


/**
 * get Price
 * @return Price
 */
Apiomat.Securities.prototype.getPrice = function() 
{
            return this.data.price !== null ? this.data.price : undefined;
    
};

/**
 * set Price
 * @param Price
 */
Apiomat.Securities.prototype.setPrice = function(_price) {
    this.data.price = _price;
};


/**
 * get Price_currency
 * @return Price_currency
 */
Apiomat.Securities.prototype.getPrice_currency = function() 
{
            return this.data.price_currency !== null ? this.data.price_currency : undefined;
    
};

/**
 * set Price_currency
 * @param Price_currency
 */
Apiomat.Securities.prototype.setPrice_currency = function(_price_currency) {
    this.data.price_currency = _price_currency;
};


/**
 * get Purchase_price
 * @return Purchase_price
 */
Apiomat.Securities.prototype.getPurchase_price = function() 
{
            return this.data.purchase_price !== null ? this.data.purchase_price : undefined;
    
};

/**
 * set Purchase_price
 * @param Purchase_price
 */
Apiomat.Securities.prototype.setPurchase_price = function(_purchase_price) {
    this.data.purchase_price = _purchase_price;
};


/**
 * get Purchase_price_currency
 * @return Purchase_price_currency
 */
Apiomat.Securities.prototype.getPurchase_price_currency = function() 
{
            return this.data.purchase_price_currency !== null ? this.data.purchase_price_currency : undefined;
    
};

/**
 * set Purchase_price_currency
 * @param Purchase_price_currency
 */
Apiomat.Securities.prototype.setPurchase_price_currency = function(_purchase_price_currency) {
    this.data.purchase_price_currency = _purchase_price_currency;
};


/**
 * get Quantity
 * @return Quantity
 */
Apiomat.Securities.prototype.getQuantity = function() 
{
            return this.data.quantity !== null ? this.data.quantity : undefined;
    
};

/**
 * set Quantity
 * @param Quantity
 */
Apiomat.Securities.prototype.setQuantity = function(_quantity) {
    this.data.quantity = _quantity;
};

Apiomat.Securities.prototype.getTrade_timestamp = function() 
{
    var retDate = this.data.trade_timestamp;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Securities.prototype.setTrade_timestamp = function(_trade_timestamp) 
{
	if(_trade_timestamp != null && _trade_timestamp != undefined){
		this.data.trade_timestamp = _trade_timestamp.getTime();
	}
	else{
		this.data.trade_timestamp = null;
	}
};
    

/**
 * get Visited
 * @return Visited
 */
Apiomat.Securities.prototype.getVisited = function() 
{
            return this.data.visited !== null ? this.data.visited : undefined;
    
};

/**
 * set Visited
 * @param Visited
 */
Apiomat.Securities.prototype.setVisited = function(_visited) {
    this.data.visited = _visited;
};


/**
 * get Wkn
 * @return Wkn
 */
Apiomat.Securities.prototype.getWkn = function() 
{
            return this.data.wkn !== null ? this.data.wkn : undefined;
    
};

/**
 * set Wkn
 * @param Wkn
 */
Apiomat.Securities.prototype.setWkn = function(_wkn) {
    this.data.wkn = _wkn;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
