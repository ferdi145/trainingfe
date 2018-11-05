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
    goog.provide('Apiomat.Departments');
    goog.require('Apiomat.MySQLModuleSqlTable');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Departments = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getDepartmentss function.
 * callback name getDepartmentssCallback
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
 * @param {getDepartmentssCallback} callback
 */
Apiomat.Departments.getDepartmentss = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Departments, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getDepartmentssAndRefHref function.
 * callback name getDepartmentssAndRefHrefCallback
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
 * @param {getDepartmentssAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Departments.getDepartmentssAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Departments, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getDepartmentssCount function.
 * callback name getDepartmentssCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getDepartmentssCountCallback} callback which is called when request finished
 */
Apiomat.Departments.getDepartmentssCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Departments, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getDepartmentss() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Departments.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Departments, query, callback);
};

/**
 * Deletes the classes that have been fetched with getDepartmentssWithReferencedHref (or its async version) before
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
Apiomat.Departments.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Departments, query, callback);
};


/* inheritance */
Apiomat.Departments.prototype = new Apiomat.MySQLModuleSqlTable();
Apiomat.Departments.prototype.constructor = Apiomat.Departments;


Apiomat.Departments.prototype.init=function () {
        Apiomat.MySQLModuleSqlTable.prototype.init.call(this);
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Departments.prototype.getSimpleName = function() {
    return "Departments";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Departments.prototype.getModuleName = function() {
    return "MySQLEmployeesSalesApp1";
};

/* easy getter and setter */


/**
 * get DeptName
 * @return DeptName
 */
Apiomat.Departments.prototype.getDeptName = function() 
{
            return this.data.deptName !== null ? this.data.deptName : undefined;
    
};

/**
 * set DeptName
 * @param DeptName
 */
Apiomat.Departments.prototype.setDeptName = function(_deptName) {
    this.data.deptName = _deptName;
};


/**
 * get DeptNo
 * @return DeptNo
 */
Apiomat.Departments.prototype.getDeptNo = function() 
{
            return this.data.deptNo !== null ? this.data.deptNo : undefined;
    
};

/**
 * set DeptNo
 * @param DeptNo
 */
Apiomat.Departments.prototype.setDeptNo = function(_deptNo) {
    this.data.deptNo = _deptNo;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
