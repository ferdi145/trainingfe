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
    goog.provide('Apiomat.ForeignKeyInfo');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.ForeignKeyInfo = function() {
    this.init();
    /* referenced object methods */
    
    var columns = [];
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getColumns = function()
    {
           return this.columns;
     
    };
	
    /**
     * Callback required by loadColumns function.
     * callback name loadColumnsCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced objects as {array})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
 * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)	 * @param {loadColumnsCallback} callback
	 */
    this.loadColumns = function(query,callback, usePersistentStorage) 
    {
        var refUrl = this.data.columnsHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                                if(Apiomat.Datastore.getInstance().getUseDeltaSync()) {
					this.parent.columns = Apiomat.Datastore.getInstance().syncCollection(this.parent.columns, obj, meta ? meta.deletedItems : undefined);
				}
				else {
					this.parent.columns = obj;
				}
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.columns = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, query, Apiomat.ReferenceColumnInfo, true, usePersistentStorage);
    };
	
    /**
     * Callback required by loadColumnsAndRefHref function.
     * callback name loadColumnsAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {array})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
 * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)	 * @param {loadColumnsAndRefHrefCallback} callback
     */
    this.loadColumnsAndRefHref = function(query,callback, usePersistentStorage)
    {
        var refUrl = this.data.columnsHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                                if(Apiomat.Datastore.getInstance().getUseDeltaSync()) {
                    this.parent.columns = Apiomat.Datastore.getInstance().syncCollection(this.parent.columns, obj, meta ? meta.deletedItems : undefined);
				}
				else {
					this.parent.columns = obj;
				}
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, query, Apiomat.ReferenceColumnInfo, true, usePersistentStorage);
    };
    
    /**
     * Callback required by postColumns function.
     * callback name postColumnsCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postColumnsCallback} _callback
     */
    this.postColumns = function(_refData, _callback, usePersistentStorage) 
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
                                    /* only add reference data if not already in local list */
                    if( this.parent.columns.filter(function(_elem) {
                        return _elem.getHref() && refHref && _elem.getHref() === refHref;
                    }).length < 1)
                    {
                        this.parent.columns.push(_refData);
                    } 
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "columns", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.columnsHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeColumns function.
     * callback name removeColumnsCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeColumnsCallback} _callback
     */
    this.removeColumns = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.columnsHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                            /* Find and remove reference from local list */
                var i=-1;
                if(typeof this.parent.columns !="undefined" && typeof this.parent.columns.length!="undefined" && this.parent.columns.length>0) {
                    for (var k=0;k<this.parent.columns.length;k++) {
                        if (this.parent.columns[k].data.href===_refData.data.href) {
                            i=k;
                            break;
                        }
                    }
                }
                
                if(i != -1) {
                    this.parent.columns.splice(i, 1);
                }
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
    
        /**
     * Callback required by getColumnsCount function.
     * callback name getColumnsCountCallback
     * @param {function} onOk Function is called when everything is ok. (containg count as {number})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Returns a count of referenced objects of this class filtered by the given query from server
     * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
     * @param {getColumnsCountCallback} _callback
	 */
    this.getColumnsCount = function(_query, _callback, usePersistentStorage) 
    {
        Apiomat.Datastore.getInstance().loadCountFromServer(this.getHref(), 'columns', _query, _callback, usePersistentStorage);
    };
    
};
/* static methods */

/**
 * Callback required by getForeignKeyInfos function.
 * callback name getForeignKeyInfosCallback
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
 * @param {getForeignKeyInfosCallback} callback
 */
Apiomat.ForeignKeyInfo.getForeignKeyInfos = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.ForeignKeyInfo, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getForeignKeyInfosAndRefHref function.
 * callback name getForeignKeyInfosAndRefHrefCallback
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
 * @param {getForeignKeyInfosAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.ForeignKeyInfo.getForeignKeyInfosAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.ForeignKeyInfo, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getForeignKeyInfosCount function.
 * callback name getForeignKeyInfosCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getForeignKeyInfosCountCallback} callback which is called when request finished
 */
Apiomat.ForeignKeyInfo.getForeignKeyInfosCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.ForeignKeyInfo, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getForeignKeyInfos() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.ForeignKeyInfo.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.ForeignKeyInfo, query, callback);
};

/**
 * Deletes the classes that have been fetched with getForeignKeyInfosWithReferencedHref (or its async version) before
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
Apiomat.ForeignKeyInfo.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.ForeignKeyInfo, query, callback);
};


/* inheritance */
Apiomat.ForeignKeyInfo.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.ForeignKeyInfo.prototype.constructor = Apiomat.ForeignKeyInfo;


Apiomat.ForeignKeyInfo.prototype.init=function () {
        this.data = new Object();
    this.columns = [];
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.ForeignKeyInfo.prototype.getSimpleName = function() {
    return "ForeignKeyInfo";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.ForeignKeyInfo.prototype.getModuleName = function() {
    return "JDBC";
};

/* easy getter and setter */


/**
 * get Columns
 * @return Columns
 */
Apiomat.ForeignKeyInfo.prototype.getColumns = function() 
{
            return this.data.columns;
    
};

/**
 * set Columns
 * @param Columns
 */
Apiomat.ForeignKeyInfo.prototype.setColumns = function(_columns) {
    this.data.columns = _columns;
};


/**
 * get ForeignKeyName
 * @return ForeignKeyName
 */
Apiomat.ForeignKeyInfo.prototype.getForeignKeyName = function() 
{
            return this.data.foreignKeyName !== null ? this.data.foreignKeyName : undefined;
    
};

/**
 * set ForeignKeyName
 * @param ForeignKeyName
 */
Apiomat.ForeignKeyInfo.prototype.setForeignKeyName = function(_foreignKeyName) {
    this.data.foreignKeyName = _foreignKeyName;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
