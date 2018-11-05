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
    goog.provide('Apiomat.DeptEmp');
    goog.require('Apiomat.MySQLModuleSqlTable');
        }
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.DeptEmp = function() {
    this.init();
    /* referenced object methods */
    
    var deptEmpIbfk1 = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getDeptEmpIbfk1 = function()
    {
           return this.deptEmpIbfk1 !== null? this.deptEmpIbfk1 : undefined;
     
    };
	
    /**
     * Callback required by loadDeptEmpIbfk1 function.
     * callback name loadDeptEmpIbfk1Callback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadDeptEmpIbfk1Callback} callback
	 */
    this.loadDeptEmpIbfk1 = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.deptEmpIbfk1Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.deptEmpIbfk1 = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.deptEmpIbfk1 = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Employees, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadDeptEmpIbfk1AndRefHref function.
     * callback name loadDeptEmpIbfk1AndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadDeptEmpIbfk1AndRefHrefCallback} callback
     */
    this.loadDeptEmpIbfk1AndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.deptEmpIbfk1Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.deptEmpIbfk1 = obj;
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
     * Callback required by postDeptEmpIbfk1 function.
     * callback name postDeptEmpIbfk1Callback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postDeptEmpIbfk1Callback} _callback
     */
    this.postDeptEmpIbfk1 = function(_refData, _callback, usePersistentStorage) 
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
                                     this.parent.deptEmpIbfk1 = _refData;
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "deptEmpIbfk1", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.deptEmpIbfk1Href, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeDeptEmpIbfk1 function.
     * callback name removeDeptEmpIbfk1Callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeDeptEmpIbfk1Callback} _callback
     */
    this.removeDeptEmpIbfk1 = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.deptEmpIbfk1Href + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.deptEmpIbfk1 = undefined
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
    
        
    var deptEmpIbfk2 = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getDeptEmpIbfk2 = function()
    {
           return this.deptEmpIbfk2 !== null? this.deptEmpIbfk2 : undefined;
     
    };
	
    /**
     * Callback required by loadDeptEmpIbfk2 function.
     * callback name loadDeptEmpIbfk2Callback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadDeptEmpIbfk2Callback} callback
	 */
    this.loadDeptEmpIbfk2 = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.deptEmpIbfk2Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.deptEmpIbfk2 = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.deptEmpIbfk2 = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Departments, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadDeptEmpIbfk2AndRefHref function.
     * callback name loadDeptEmpIbfk2AndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadDeptEmpIbfk2AndRefHrefCallback} callback
     */
    this.loadDeptEmpIbfk2AndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.deptEmpIbfk2Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.deptEmpIbfk2 = obj;
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
     * Callback required by postDeptEmpIbfk2 function.
     * callback name postDeptEmpIbfk2Callback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postDeptEmpIbfk2Callback} _callback
     */
    this.postDeptEmpIbfk2 = function(_refData, _callback, usePersistentStorage) 
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
                                     this.parent.deptEmpIbfk2 = _refData;
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "deptEmpIbfk2", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.deptEmpIbfk2Href, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeDeptEmpIbfk2 function.
     * callback name removeDeptEmpIbfk2Callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeDeptEmpIbfk2Callback} _callback
     */
    this.removeDeptEmpIbfk2 = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.deptEmpIbfk2Href + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.deptEmpIbfk2 = undefined
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
 * Callback required by getDeptEmps function.
 * callback name getDeptEmpsCallback
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
 * @param {getDeptEmpsCallback} callback
 */
Apiomat.DeptEmp.getDeptEmps = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.DeptEmp, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getDeptEmpsAndRefHref function.
 * callback name getDeptEmpsAndRefHrefCallback
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
 * @param {getDeptEmpsAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.DeptEmp.getDeptEmpsAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.DeptEmp, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getDeptEmpsCount function.
 * callback name getDeptEmpsCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getDeptEmpsCountCallback} callback which is called when request finished
 */
Apiomat.DeptEmp.getDeptEmpsCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.DeptEmp, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getDeptEmps() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.DeptEmp.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.DeptEmp, query, callback);
};

/**
 * Deletes the classes that have been fetched with getDeptEmpsWithReferencedHref (or its async version) before
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
Apiomat.DeptEmp.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.DeptEmp, query, callback);
};


/* inheritance */
Apiomat.DeptEmp.prototype = new Apiomat.MySQLModuleSqlTable();
Apiomat.DeptEmp.prototype.constructor = Apiomat.DeptEmp;


Apiomat.DeptEmp.prototype.init=function () {
        Apiomat.MySQLModuleSqlTable.prototype.init.call(this);
    this.deptEmpIbfk1 = undefined;
    this.deptEmpIbfk2 = undefined;
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.DeptEmp.prototype.getSimpleName = function() {
    return "DeptEmp";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.DeptEmp.prototype.getModuleName = function() {
    return "MySQLEmployeesSalesApp1";
};

/* easy getter and setter */


/**
 * get DeptEmpIbfk1
 * @return DeptEmpIbfk1
 */
Apiomat.DeptEmp.prototype.getDeptEmpIbfk1 = function() 
{
            return this.data.deptEmpIbfk1 !== null ? this.data.deptEmpIbfk1 : undefined;
    
};

/**
 * set DeptEmpIbfk1
 * @param DeptEmpIbfk1
 */
Apiomat.DeptEmp.prototype.setDeptEmpIbfk1 = function(_deptEmpIbfk1) {
    this.data.deptEmpIbfk1 = _deptEmpIbfk1;
};


/**
 * get DeptEmpIbfk2
 * @return DeptEmpIbfk2
 */
Apiomat.DeptEmp.prototype.getDeptEmpIbfk2 = function() 
{
            return this.data.deptEmpIbfk2 !== null ? this.data.deptEmpIbfk2 : undefined;
    
};

/**
 * set DeptEmpIbfk2
 * @param DeptEmpIbfk2
 */
Apiomat.DeptEmp.prototype.setDeptEmpIbfk2 = function(_deptEmpIbfk2) {
    this.data.deptEmpIbfk2 = _deptEmpIbfk2;
};

Apiomat.DeptEmp.prototype.getFromDate = function() 
{
    var retDate = this.data.fromDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.DeptEmp.prototype.setFromDate = function(_fromDate) 
{
	if(_fromDate != null && _fromDate != undefined){
		this.data.fromDate = _fromDate.getTime();
	}
	else{
		this.data.fromDate = null;
	}
};
    
Apiomat.DeptEmp.prototype.getToDate = function() 
{
    var retDate = this.data.toDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.DeptEmp.prototype.setToDate = function(_toDate) 
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
