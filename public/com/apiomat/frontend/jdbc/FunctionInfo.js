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
    goog.provide('Apiomat.FunctionInfo');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.FunctionInfo = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getFunctionInfos function.
 * callback name getFunctionInfosCallback
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
 * @param {getFunctionInfosCallback} callback
 */
Apiomat.FunctionInfo.getFunctionInfos = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.FunctionInfo, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getFunctionInfosAndRefHref function.
 * callback name getFunctionInfosAndRefHrefCallback
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
 * @param {getFunctionInfosAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.FunctionInfo.getFunctionInfosAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.FunctionInfo, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getFunctionInfosCount function.
 * callback name getFunctionInfosCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getFunctionInfosCountCallback} callback which is called when request finished
 */
Apiomat.FunctionInfo.getFunctionInfosCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.FunctionInfo, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getFunctionInfos() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.FunctionInfo.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.FunctionInfo, query, callback);
};

/**
 * Deletes the classes that have been fetched with getFunctionInfosWithReferencedHref (or its async version) before
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
Apiomat.FunctionInfo.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.FunctionInfo, query, callback);
};


/* inheritance */
Apiomat.FunctionInfo.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.FunctionInfo.prototype.constructor = Apiomat.FunctionInfo;


Apiomat.FunctionInfo.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.FunctionInfo.prototype.getSimpleName = function() {
    return "FunctionInfo";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.FunctionInfo.prototype.getModuleName = function() {
    return "JDBC";
};

/* easy getter and setter */


/**
 * get AttributeMapping
 * @return AttributeMapping
 */
Apiomat.FunctionInfo.prototype.getAttributeMapping = function() 
{
            return this.data.attributeMapping !== null ? this.data.attributeMapping : undefined;
    
};

/**
 * set AttributeMapping
 * @param AttributeMapping
 */
Apiomat.FunctionInfo.prototype.setAttributeMapping = function(_attributeMapping) {
    this.data.attributeMapping = _attributeMapping;
};


/**
 * get MetaModelAOMName
 * @return MetaModelAOMName
 */
Apiomat.FunctionInfo.prototype.getMetaModelAOMName = function() 
{
            return this.data.metaModelAOMName !== null ? this.data.metaModelAOMName : undefined;
    
};

/**
 * set MetaModelAOMName
 * @param MetaModelAOMName
 */
Apiomat.FunctionInfo.prototype.setMetaModelAOMName = function(_metaModelAOMName) {
    this.data.metaModelAOMName = _metaModelAOMName;
};


/**
 * get ModuleAOMName
 * @return ModuleAOMName
 */
Apiomat.FunctionInfo.prototype.getModuleAOMName = function() 
{
            return this.data.moduleAOMName !== null ? this.data.moduleAOMName : undefined;
    
};

/**
 * set ModuleAOMName
 * @param ModuleAOMName
 */
Apiomat.FunctionInfo.prototype.setModuleAOMName = function(_moduleAOMName) {
    this.data.moduleAOMName = _moduleAOMName;
};


/**
 * get ParameterTypes
 * @return ParameterTypes
 */
Apiomat.FunctionInfo.prototype.getParameterTypes = function() 
{
            return this.data.parameterTypes !== null ? this.data.parameterTypes : undefined;
    
};

/**
 * set ParameterTypes
 * @param ParameterTypes
 */
Apiomat.FunctionInfo.prototype.setParameterTypes = function(_parameterTypes) {
    this.data.parameterTypes = _parameterTypes;
};


/**
 * get PrimaryKeyTypes
 * @return PrimaryKeyTypes
 */
Apiomat.FunctionInfo.prototype.getPrimaryKeyTypes = function() 
{
            return this.data.primaryKeyTypes !== null ? this.data.primaryKeyTypes : undefined;
    
};

/**
 * set PrimaryKeyTypes
 * @param PrimaryKeyTypes
 */
Apiomat.FunctionInfo.prototype.setPrimaryKeyTypes = function(_primaryKeyTypes) {
    this.data.primaryKeyTypes = _primaryKeyTypes;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
