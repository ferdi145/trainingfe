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
    goog.provide('Apiomat.ReferenceColumnInfo');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.ReferenceColumnInfo = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getReferenceColumnInfos function.
 * callback name getReferenceColumnInfosCallback
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
 * @param {getReferenceColumnInfosCallback} callback
 */
Apiomat.ReferenceColumnInfo.getReferenceColumnInfos = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.ReferenceColumnInfo, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getReferenceColumnInfosAndRefHref function.
 * callback name getReferenceColumnInfosAndRefHrefCallback
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
 * @param {getReferenceColumnInfosAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.ReferenceColumnInfo.getReferenceColumnInfosAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.ReferenceColumnInfo, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getReferenceColumnInfosCount function.
 * callback name getReferenceColumnInfosCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getReferenceColumnInfosCountCallback} callback which is called when request finished
 */
Apiomat.ReferenceColumnInfo.getReferenceColumnInfosCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.ReferenceColumnInfo, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getReferenceColumnInfos() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.ReferenceColumnInfo.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.ReferenceColumnInfo, query, callback);
};

/**
 * Deletes the classes that have been fetched with getReferenceColumnInfosWithReferencedHref (or its async version) before
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
Apiomat.ReferenceColumnInfo.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.ReferenceColumnInfo, query, callback);
};


/* inheritance */
Apiomat.ReferenceColumnInfo.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.ReferenceColumnInfo.prototype.constructor = Apiomat.ReferenceColumnInfo;


Apiomat.ReferenceColumnInfo.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.ReferenceColumnInfo.prototype.getSimpleName = function() {
    return "ReferenceColumnInfo";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.ReferenceColumnInfo.prototype.getModuleName = function() {
    return "JDBC";
};

/* easy getter and setter */


/**
 * get ColumnJdbcType
 * @return ColumnJdbcType
 */
Apiomat.ReferenceColumnInfo.prototype.getColumnJdbcType = function() 
{
            return this.data.columnJdbcType !== null ? this.data.columnJdbcType : undefined;
    
};

/**
 * set ColumnJdbcType
 * @param ColumnJdbcType
 */
Apiomat.ReferenceColumnInfo.prototype.setColumnJdbcType = function(_columnJdbcType) {
    this.data.columnJdbcType = _columnJdbcType;
};


/**
 * get ColumnName
 * @return ColumnName
 */
Apiomat.ReferenceColumnInfo.prototype.getColumnName = function() 
{
            return this.data.columnName !== null ? this.data.columnName : undefined;
    
};

/**
 * set ColumnName
 * @param ColumnName
 */
Apiomat.ReferenceColumnInfo.prototype.setColumnName = function(_columnName) {
    this.data.columnName = _columnName;
};


/**
 * get ReferenceColumnName
 * @return ReferenceColumnName
 */
Apiomat.ReferenceColumnInfo.prototype.getReferenceColumnName = function() 
{
            return this.data.referenceColumnName !== null ? this.data.referenceColumnName : undefined;
    
};

/**
 * set ReferenceColumnName
 * @param ReferenceColumnName
 */
Apiomat.ReferenceColumnInfo.prototype.setReferenceColumnName = function(_referenceColumnName) {
    this.data.referenceColumnName = _referenceColumnName;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
