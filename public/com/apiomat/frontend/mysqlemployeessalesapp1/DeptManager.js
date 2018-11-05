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
    goog.provide('Apiomat.DeptManager');
    goog.require('Apiomat.MySQLModuleSqlTable');
        }
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.DeptManager = function() {
    this.init();
    /* referenced object methods */
    
    var deptManagerIbfk1 = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getDeptManagerIbfk1 = function()
    {
           return this.deptManagerIbfk1 !== null? this.deptManagerIbfk1 : undefined;
     
    };
	
    /**
     * Callback required by loadDeptManagerIbfk1 function.
     * callback name loadDeptManagerIbfk1Callback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadDeptManagerIbfk1Callback} callback
	 */
    this.loadDeptManagerIbfk1 = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.deptManagerIbfk1Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.deptManagerIbfk1 = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.deptManagerIbfk1 = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Employees, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadDeptManagerIbfk1AndRefHref function.
     * callback name loadDeptManagerIbfk1AndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadDeptManagerIbfk1AndRefHrefCallback} callback
     */
    this.loadDeptManagerIbfk1AndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.deptManagerIbfk1Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.deptManagerIbfk1 = obj;
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
     * Callback required by postDeptManagerIbfk1 function.
     * callback name postDeptManagerIbfk1Callback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postDeptManagerIbfk1Callback} _callback
     */
    this.postDeptManagerIbfk1 = function(_refData, _callback, usePersistentStorage) 
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
                                     this.parent.deptManagerIbfk1 = _refData;
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "deptManagerIbfk1", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.deptManagerIbfk1Href, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeDeptManagerIbfk1 function.
     * callback name removeDeptManagerIbfk1Callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeDeptManagerIbfk1Callback} _callback
     */
    this.removeDeptManagerIbfk1 = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.deptManagerIbfk1Href + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.deptManagerIbfk1 = undefined
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
    
        
    var deptManagerIbfk2 = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getDeptManagerIbfk2 = function()
    {
           return this.deptManagerIbfk2 !== null? this.deptManagerIbfk2 : undefined;
     
    };
	
    /**
     * Callback required by loadDeptManagerIbfk2 function.
     * callback name loadDeptManagerIbfk2Callback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadDeptManagerIbfk2Callback} callback
	 */
    this.loadDeptManagerIbfk2 = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.deptManagerIbfk2Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.deptManagerIbfk2 = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.deptManagerIbfk2 = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Departments, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadDeptManagerIbfk2AndRefHref function.
     * callback name loadDeptManagerIbfk2AndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadDeptManagerIbfk2AndRefHrefCallback} callback
     */
    this.loadDeptManagerIbfk2AndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.deptManagerIbfk2Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.deptManagerIbfk2 = obj;
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, undefined, Apiomat.Departments, false, usePersistentStorage);
    };
    
    /**
     * Callback required by postDeptManagerIbfk2 function.
     * callback name postDeptManagerIbfk2Callback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postDeptManagerIbfk2Callback} _callback
     */
    this.postDeptManagerIbfk2 = function(_refData, _callback, usePersistentStorage) 
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
                                     this.parent.deptManagerIbfk2 = _refData;
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "deptManagerIbfk2", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.deptManagerIbfk2Href, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeDeptManagerIbfk2 function.
     * callback name removeDeptManagerIbfk2Callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeDeptManagerIbfk2Callback} _callback
     */
    this.removeDeptManagerIbfk2 = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.deptManagerIbfk2Href + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.deptManagerIbfk2 = undefined
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
 * Callback required by getDeptManagers function.
 * callback name getDeptManagersCallback
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
 * @param {getDeptManagersCallback} callback
 */
Apiomat.DeptManager.getDeptManagers = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.DeptManager, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getDeptManagersAndRefHref function.
 * callback name getDeptManagersAndRefHrefCallback
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
 * @param {getDeptManagersAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.DeptManager.getDeptManagersAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.DeptManager, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getDeptManagersCount function.
 * callback name getDeptManagersCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getDeptManagersCountCallback} callback which is called when request finished
 */
Apiomat.DeptManager.getDeptManagersCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.DeptManager, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getDeptManagers() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.DeptManager.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.DeptManager, query, callback);
};

/**
 * Deletes the classes that have been fetched with getDeptManagersWithReferencedHref (or its async version) before
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
Apiomat.DeptManager.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.DeptManager, query, callback);
};


/* inheritance */
Apiomat.DeptManager.prototype = new Apiomat.MySQLModuleSqlTable();
Apiomat.DeptManager.prototype.constructor = Apiomat.DeptManager;


Apiomat.DeptManager.prototype.init=function () {
        Apiomat.MySQLModuleSqlTable.prototype.init.call(this);
    this.deptManagerIbfk1 = undefined;
    this.deptManagerIbfk2 = undefined;
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.DeptManager.prototype.getSimpleName = function() {
    return "DeptManager";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.DeptManager.prototype.getModuleName = function() {
    return "MySQLEmployeesSalesApp1";
};

/* easy getter and setter */


/**
 * get DeptManagerIbfk1
 * @return DeptManagerIbfk1
 */
Apiomat.DeptManager.prototype.getDeptManagerIbfk1 = function() 
{
            return this.data.deptManagerIbfk1 !== null ? this.data.deptManagerIbfk1 : undefined;
    
};

/**
 * set DeptManagerIbfk1
 * @param DeptManagerIbfk1
 */
Apiomat.DeptManager.prototype.setDeptManagerIbfk1 = function(_deptManagerIbfk1) {
    this.data.deptManagerIbfk1 = _deptManagerIbfk1;
};


/**
 * get DeptManagerIbfk2
 * @return DeptManagerIbfk2
 */
Apiomat.DeptManager.prototype.getDeptManagerIbfk2 = function() 
{
            return this.data.deptManagerIbfk2 !== null ? this.data.deptManagerIbfk2 : undefined;
    
};

/**
 * set DeptManagerIbfk2
 * @param DeptManagerIbfk2
 */
Apiomat.DeptManager.prototype.setDeptManagerIbfk2 = function(_deptManagerIbfk2) {
    this.data.deptManagerIbfk2 = _deptManagerIbfk2;
};

Apiomat.DeptManager.prototype.getFromDate = function() 
{
    var retDate = this.data.fromDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.DeptManager.prototype.setFromDate = function(_fromDate) 
{
	if(_fromDate != null && _fromDate != undefined){
		this.data.fromDate = _fromDate.getTime();
	}
	else{
		this.data.fromDate = null;
	}
};
    
Apiomat.DeptManager.prototype.getToDate = function() 
{
    var retDate = this.data.toDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.DeptManager.prototype.setToDate = function(_toDate) 
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
