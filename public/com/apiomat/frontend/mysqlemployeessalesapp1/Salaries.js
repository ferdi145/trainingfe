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
    goog.provide('Apiomat.Salaries');
    goog.require('Apiomat.MySQLModuleSqlTable');
    }
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Salaries = function() {
    this.init();
    /* referenced object methods */
    
    var salariesIbfk1 = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getSalariesIbfk1 = function()
    {
           return this.salariesIbfk1 !== null? this.salariesIbfk1 : undefined;
     
    };
	
    /**
     * Callback required by loadSalariesIbfk1 function.
     * callback name loadSalariesIbfk1Callback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadSalariesIbfk1Callback} callback
	 */
    this.loadSalariesIbfk1 = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.salariesIbfk1Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.salariesIbfk1 = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.salariesIbfk1 = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Employees, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadSalariesIbfk1AndRefHref function.
     * callback name loadSalariesIbfk1AndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadSalariesIbfk1AndRefHrefCallback} callback
     */
    this.loadSalariesIbfk1AndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.salariesIbfk1Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.salariesIbfk1 = obj;
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, undefined, Apiomat.Employees, false, usePersistentStorage);
    };
    
    /**
     * Callback required by postSalariesIbfk1 function.
     * callback name postSalariesIbfk1Callback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postSalariesIbfk1Callback} _callback
     */
    this.postSalariesIbfk1 = function(_refData, _callback, usePersistentStorage) 
    {
        if(_refData == false || typeof _refData.getHref() === 'undefined') {
            var error = new Apiomat.ApiomatRequestError(Apiomat.Status.SAVE_REFERENECE_BEFORE_REFERENCING);
            if (_callback) {
                    Apiomat.Datastore.negativeCallback(_callback,error);
            } else if(console && console.log) {
                    console.log("Error occured: " + error);
            }
            return;
        }
        
        var callback = {
            onOk : function(refHref) {
                if (refHref) {
                                     this.parent.salariesIbfk1 = _refData;
                                }
                Apiomat.Datastore.positiveCallback(_callback,refHref);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
        };
        callback.parent=this;
        if(Apiomat.Datastore.getInstance().shouldSendOffline("POST"))
        {
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "salariesIbfk1", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.salariesIbfk1Href, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeSalariesIbfk1 function.
     * callback name removeSalariesIbfk1Callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeSalariesIbfk1Callback} _callback
     */
    this.removeSalariesIbfk1 = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.salariesIbfk1Href + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.salariesIbfk1 = undefined
            ;                 
                Apiomat.Datastore.positiveCallback(_callback);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
        };
        callback.parent=this;
        Apiomat.Datastore.getInstance().deleteOnServer(deleteHref, callback, usePersistentStorage);
    };
    
    
};
/* static methods */

/**
 * Callback required by getSalariess function.
 * callback name getSalariessCallback
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
 * @param {getSalariessCallback} callback
 */
Apiomat.Salaries.getSalariess = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Salaries, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getSalariessAndRefHref function.
 * callback name getSalariessAndRefHrefCallback
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
 * @param {getSalariessAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Salaries.getSalariessAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Salaries, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getSalariessCount function.
 * callback name getSalariessCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getSalariessCountCallback} callback which is called when request finished
 */
Apiomat.Salaries.getSalariessCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Salaries, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getSalariess() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Salaries.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Salaries, query, callback);
};

/**
 * Deletes the classes that have been fetched with getSalariessWithReferencedHref (or its async version) before
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
Apiomat.Salaries.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Salaries, query, callback);
};


/* inheritance */
Apiomat.Salaries.prototype = new Apiomat.MySQLModuleSqlTable();
Apiomat.Salaries.prototype.constructor = Apiomat.Salaries;


Apiomat.Salaries.prototype.init=function () {
        Apiomat.MySQLModuleSqlTable.prototype.init.call(this);
    this.salariesIbfk1 = undefined;
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Salaries.prototype.getSimpleName = function() {
    return "Salaries";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Salaries.prototype.getModuleName = function() {
    return "MySQLEmployeesSalesApp1";
};

/* easy getter and setter */

Apiomat.Salaries.prototype.getFromDate = function() 
{
    var retDate = this.data.fromDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Salaries.prototype.setFromDate = function(_fromDate) 
{
	if(_fromDate != null && _fromDate != undefined){
		this.data.fromDate = _fromDate.getTime();
	}
	else{
		this.data.fromDate = null;
	}
};
    

/**
 * get SalariesIbfk1
 * @return SalariesIbfk1
 */
Apiomat.Salaries.prototype.getSalariesIbfk1 = function() 
{
            return this.data.salariesIbfk1 !== null ? this.data.salariesIbfk1 : undefined;
    
};

/**
 * set SalariesIbfk1
 * @param SalariesIbfk1
 */
Apiomat.Salaries.prototype.setSalariesIbfk1 = function(_salariesIbfk1) {
    this.data.salariesIbfk1 = _salariesIbfk1;
};


/**
 * get Salary
 * @return Salary
 */
Apiomat.Salaries.prototype.getSalary = function() 
{
            return this.data.salary !== null ? this.data.salary : undefined;
    
};

/**
 * set Salary
 * @param Salary
 */
Apiomat.Salaries.prototype.setSalary = function(_salary) {
    this.data.salary = _salary;
};

Apiomat.Salaries.prototype.getToDate = function() 
{
    var retDate = this.data.toDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Salaries.prototype.setToDate = function(_toDate) 
{
	if(_toDate != null && _toDate != undefined){
		this.data.toDate = _toDate.getTime();
	}
	else{
		this.data.toDate = null;
	}
};
    

})(typeof exports === 'undefined' ? Apiomat
        : exports);
