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
    goog.provide('Apiomat.Employees');
    goog.require('Apiomat.MySQLModuleSqlTable');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Employees = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getEmployeess function.
 * callback name getEmployeessCallback
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
 * @param {getEmployeessCallback} callback
 */
Apiomat.Employees.getEmployeess = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Employees, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getEmployeessAndRefHref function.
 * callback name getEmployeessAndRefHrefCallback
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
 * @param {getEmployeessAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Employees.getEmployeessAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Employees, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getEmployeessCount function.
 * callback name getEmployeessCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getEmployeessCountCallback} callback which is called when request finished
 */
Apiomat.Employees.getEmployeessCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Employees, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getEmployeess() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Employees.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Employees, query, callback);
};

/**
 * Deletes the classes that have been fetched with getEmployeessWithReferencedHref (or its async version) before
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
Apiomat.Employees.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Employees, query, callback);
};


/* inheritance */
Apiomat.Employees.prototype = new Apiomat.MySQLModuleSqlTable();
Apiomat.Employees.prototype.constructor = Apiomat.Employees;


Apiomat.Employees.prototype.init=function () {
        Apiomat.MySQLModuleSqlTable.prototype.init.call(this);
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Employees.prototype.getSimpleName = function() {
    return "Employees";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Employees.prototype.getModuleName = function() {
    return "MySQLEmployeesSalesApp1";
};

/* easy getter and setter */

Apiomat.Employees.prototype.getBirthDate = function() 
{
    var retDate = this.data.birthDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Employees.prototype.setBirthDate = function(_birthDate) 
{
	if(_birthDate != null && _birthDate != undefined){
		this.data.birthDate = _birthDate.getTime();
	}
	else{
		this.data.birthDate = null;
	}
};
    

/**
 * get EmpNo
 * @return EmpNo
 */
Apiomat.Employees.prototype.getEmpNo = function() 
{
            return this.data.empNo !== null ? this.data.empNo : undefined;
    
};

/**
 * set EmpNo
 * @param EmpNo
 */
Apiomat.Employees.prototype.setEmpNo = function(_empNo) {
    this.data.empNo = _empNo;
};


/**
 * get FirstName
 * @return FirstName
 */
Apiomat.Employees.prototype.getFirstName = function() 
{
            return this.data.firstName !== null ? this.data.firstName : undefined;
    
};

/**
 * set FirstName
 * @param FirstName
 */
Apiomat.Employees.prototype.setFirstName = function(_firstName) {
    this.data.firstName = _firstName;
};


/**
 * get Gender
 * @return Gender
 */
Apiomat.Employees.prototype.getGender = function() 
{
            return this.data.gender !== null ? this.data.gender : undefined;
    
};

/**
 * set Gender
 * @param Gender
 */
Apiomat.Employees.prototype.setGender = function(_gender) {
    this.data.gender = _gender;
};

Apiomat.Employees.prototype.getHireDate = function() 
{
    var retDate = this.data.hireDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Employees.prototype.setHireDate = function(_hireDate) 
{
	if(_hireDate != null && _hireDate != undefined){
		this.data.hireDate = _hireDate.getTime();
	}
	else{
		this.data.hireDate = null;
	}
};
    

/**
 * get LastName
 * @return LastName
 */
Apiomat.Employees.prototype.getLastName = function() 
{
            return this.data.lastName !== null ? this.data.lastName : undefined;
    
};

/**
 * set LastName
 * @param LastName
 */
Apiomat.Employees.prototype.setLastName = function(_lastName) {
    this.data.lastName = _lastName;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
