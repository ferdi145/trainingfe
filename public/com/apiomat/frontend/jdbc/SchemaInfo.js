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
    goog.provide('Apiomat.SchemaInfo');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.SchemaInfo = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getSchemaInfos function.
 * callback name getSchemaInfosCallback
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
 * @param {getSchemaInfosCallback} callback
 */
Apiomat.SchemaInfo.getSchemaInfos = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.SchemaInfo, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getSchemaInfosAndRefHref function.
 * callback name getSchemaInfosAndRefHrefCallback
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
 * @param {getSchemaInfosAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.SchemaInfo.getSchemaInfosAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.SchemaInfo, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getSchemaInfosCount function.
 * callback name getSchemaInfosCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getSchemaInfosCountCallback} callback which is called when request finished
 */
Apiomat.SchemaInfo.getSchemaInfosCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.SchemaInfo, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getSchemaInfos() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.SchemaInfo.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.SchemaInfo, query, callback);
};

/**
 * Deletes the classes that have been fetched with getSchemaInfosWithReferencedHref (or its async version) before
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
Apiomat.SchemaInfo.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.SchemaInfo, query, callback);
};


/* inheritance */
Apiomat.SchemaInfo.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.SchemaInfo.prototype.constructor = Apiomat.SchemaInfo;


Apiomat.SchemaInfo.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.SchemaInfo.prototype.getSimpleName = function() {
    return "SchemaInfo";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.SchemaInfo.prototype.getModuleName = function() {
    return "JDBC";
};

/* easy getter and setter */


/**
 * get DbPassword
 * @return DbPassword
 */
Apiomat.SchemaInfo.prototype.getDbPassword = function() 
{
            return this.data.dbPassword !== null ? this.data.dbPassword : undefined;
    
};

/**
 * set DbPassword
 * @param DbPassword
 */
Apiomat.SchemaInfo.prototype.setDbPassword = function(_dbPassword) {
    this.data.dbPassword = _dbPassword;
};


/**
 * get DbSchemaName
 * @return DbSchemaName
 */
Apiomat.SchemaInfo.prototype.getDbSchemaName = function() 
{
            return this.data.dbSchemaName !== null ? this.data.dbSchemaName : undefined;
    
};

/**
 * set DbSchemaName
 * @param DbSchemaName
 */
Apiomat.SchemaInfo.prototype.setDbSchemaName = function(_dbSchemaName) {
    this.data.dbSchemaName = _dbSchemaName;
};


/**
 * get DbURL
 * @return DbURL
 */
Apiomat.SchemaInfo.prototype.getDbURL = function() 
{
            return this.data.dbURL !== null ? this.data.dbURL : undefined;
    
};

/**
 * set DbURL
 * @param DbURL
 */
Apiomat.SchemaInfo.prototype.setDbURL = function(_dbURL) {
    this.data.dbURL = _dbURL;
};


/**
 * get DbUserName
 * @return DbUserName
 */
Apiomat.SchemaInfo.prototype.getDbUserName = function() 
{
            return this.data.dbUserName !== null ? this.data.dbUserName : undefined;
    
};

/**
 * set DbUserName
 * @param DbUserName
 */
Apiomat.SchemaInfo.prototype.setDbUserName = function(_dbUserName) {
    this.data.dbUserName = _dbUserName;
};


/**
 * get FunctionMetaModelMapping
 * @return FunctionMetaModelMapping
 */
Apiomat.SchemaInfo.prototype.getFunctionMetaModelMapping = function() 
{
            return this.data.functionMetaModelMapping !== null ? this.data.functionMetaModelMapping : undefined;
    
};

/**
 * set FunctionMetaModelMapping
 * @param FunctionMetaModelMapping
 */
Apiomat.SchemaInfo.prototype.setFunctionMetaModelMapping = function(_functionMetaModelMapping) {
    this.data.functionMetaModelMapping = _functionMetaModelMapping;
};


/**
 * get JdbcDriverClass
 * @return JdbcDriverClass
 */
Apiomat.SchemaInfo.prototype.getJdbcDriverClass = function() 
{
            return this.data.jdbcDriverClass !== null ? this.data.jdbcDriverClass : undefined;
    
};

/**
 * set JdbcDriverClass
 * @param JdbcDriverClass
 */
Apiomat.SchemaInfo.prototype.setJdbcDriverClass = function(_jdbcDriverClass) {
    this.data.jdbcDriverClass = _jdbcDriverClass;
};


/**
 * get ModuleAOMName
 * @return ModuleAOMName
 */
Apiomat.SchemaInfo.prototype.getModuleAOMName = function() 
{
            return this.data.moduleAOMName !== null ? this.data.moduleAOMName : undefined;
    
};

/**
 * set ModuleAOMName
 * @param ModuleAOMName
 */
Apiomat.SchemaInfo.prototype.setModuleAOMName = function(_moduleAOMName) {
    this.data.moduleAOMName = _moduleAOMName;
};


/**
 * get TableMetaModelMapping
 * @return TableMetaModelMapping
 */
Apiomat.SchemaInfo.prototype.getTableMetaModelMapping = function() 
{
            return this.data.tableMetaModelMapping !== null ? this.data.tableMetaModelMapping : undefined;
    
};

/**
 * set TableMetaModelMapping
 * @param TableMetaModelMapping
 */
Apiomat.SchemaInfo.prototype.setTableMetaModelMapping = function(_tableMetaModelMapping) {
    this.data.tableMetaModelMapping = _tableMetaModelMapping;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
