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
    goog.provide('Apiomat.Titles');
    goog.require('Apiomat.MySQLModuleSqlTable');
    }
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Titles = function() {
    this.init();
    /* referenced object methods */
    
    var titlesIbfk1 = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getTitlesIbfk1 = function()
    {
           return this.titlesIbfk1 !== null? this.titlesIbfk1 : undefined;
     
    };
	
    /**
     * Callback required by loadTitlesIbfk1 function.
     * callback name loadTitlesIbfk1Callback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadTitlesIbfk1Callback} callback
	 */
    this.loadTitlesIbfk1 = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.titlesIbfk1Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.titlesIbfk1 = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.titlesIbfk1 = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Employees, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadTitlesIbfk1AndRefHref function.
     * callback name loadTitlesIbfk1AndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadTitlesIbfk1AndRefHrefCallback} callback
     */
    this.loadTitlesIbfk1AndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.titlesIbfk1Href;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.titlesIbfk1 = obj;
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
     * Callback required by postTitlesIbfk1 function.
     * callback name postTitlesIbfk1Callback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postTitlesIbfk1Callback} _callback
     */
    this.postTitlesIbfk1 = function(_refData, _callback, usePersistentStorage) 
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
                                     this.parent.titlesIbfk1 = _refData;
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "titlesIbfk1", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.titlesIbfk1Href, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeTitlesIbfk1 function.
     * callback name removeTitlesIbfk1Callback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeTitlesIbfk1Callback} _callback
     */
    this.removeTitlesIbfk1 = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.titlesIbfk1Href + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.titlesIbfk1 = undefined
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
 * Callback required by getTitless function.
 * callback name getTitlessCallback
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
 * @param {getTitlessCallback} callback
 */
Apiomat.Titles.getTitless = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Titles, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getTitlessAndRefHref function.
 * callback name getTitlessAndRefHrefCallback
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
 * @param {getTitlessAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Titles.getTitlessAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Titles, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getTitlessCount function.
 * callback name getTitlessCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getTitlessCountCallback} callback which is called when request finished
 */
Apiomat.Titles.getTitlessCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Titles, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getTitless() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Titles.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Titles, query, callback);
};

/**
 * Deletes the classes that have been fetched with getTitlessWithReferencedHref (or its async version) before
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
Apiomat.Titles.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Titles, query, callback);
};


/* inheritance */
Apiomat.Titles.prototype = new Apiomat.MySQLModuleSqlTable();
Apiomat.Titles.prototype.constructor = Apiomat.Titles;


Apiomat.Titles.prototype.init=function () {
        Apiomat.MySQLModuleSqlTable.prototype.init.call(this);
    this.titlesIbfk1 = undefined;
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Titles.prototype.getSimpleName = function() {
    return "Titles";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Titles.prototype.getModuleName = function() {
    return "MySQLEmployeesSalesApp1";
};

/* easy getter and setter */

Apiomat.Titles.prototype.getFromDate = function() 
{
    var retDate = this.data.fromDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Titles.prototype.setFromDate = function(_fromDate) 
{
	if(_fromDate != null && _fromDate != undefined){
		this.data.fromDate = _fromDate.getTime();
	}
	else{
		this.data.fromDate = null;
	}
};
    

/**
 * get Title
 * @return Title
 */
Apiomat.Titles.prototype.getTitle = function() 
{
            return this.data.title !== null ? this.data.title : undefined;
    
};

/**
 * set Title
 * @param Title
 */
Apiomat.Titles.prototype.setTitle = function(_title) {
    this.data.title = _title;
};


/**
 * get TitlesIbfk1
 * @return TitlesIbfk1
 */
Apiomat.Titles.prototype.getTitlesIbfk1 = function() 
{
            return this.data.titlesIbfk1 !== null ? this.data.titlesIbfk1 : undefined;
    
};

/**
 * set TitlesIbfk1
 * @param TitlesIbfk1
 */
Apiomat.Titles.prototype.setTitlesIbfk1 = function(_titlesIbfk1) {
    this.data.titlesIbfk1 = _titlesIbfk1;
};

Apiomat.Titles.prototype.getToDate = function() 
{
    var retDate = this.data.toDate;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Titles.prototype.setToDate = function(_toDate) 
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
