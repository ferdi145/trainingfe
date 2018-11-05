/*
 * Copyright (c) 2011 - 2017, Apinauten GmbH
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
    goog.provide('Apiomat.Salesman');
    goog.require('Apiomat.User');
    }
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Salesman = function(_username, _password) {
    this.init();
    if(typeof _username !== 'undefined')
    {
        this.setUserName(_username);
    }
    
    if(typeof _password !== 'undefined')
    {
        this.setPassword(_password);
    }
    /* referenced object methods */
    
    var listOfLeads = [];
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getListOfLeads = function() 
    {
           return this.listOfLeads;
     
    };
	
    /**
     * Callback required by loadListOfLeads function.
     * callback name loadListOfLeadsCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced objects as {array})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
 * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)	 * @param {loadListOfLeadsCallback} callback
	 */
    this.loadListOfLeads = function(query,callback, usePersistentStorage) 
    {
        var refUrl = this.data.listOfLeadsHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                                if(Apiomat.Datastore.getInstance().getUseDeltaSync()) {
					this.parent.listOfLeads = Apiomat.Datastore.getInstance().syncCollection(this.parent.listOfLeads, obj, meta ? meta.deletedItems : undefined);
				}
				else {
					this.parent.listOfLeads = obj;
				}
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.listOfLeads = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, query, Apiomat.Lead, true, usePersistentStorage);
    };
	
    /**
     * Callback required by loadListOfLeadsAndRefHref function.
     * callback name loadListOfLeadsAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {array})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
 * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)	 * @param {loadListOfLeadsAndRefHrefCallback} callback
     */
    this.loadListOfLeadsAndRefHref = function(query,callback, usePersistentStorage)
    {
        var refUrl = this.data.listOfLeadsHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                                if(Apiomat.Datastore.getInstance().getUseDeltaSync()) {
                    this.parent.listOfLeads = Apiomat.Datastore.getInstance().syncCollection(this.parent.listOfLeads, obj, meta ? meta.deletedItems : undefined);
				}
				else {
					this.parent.listOfLeads = obj;
				}
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, query, Apiomat.Lead, true, usePersistentStorage);
    };
    
    /**
     * Callback required by postListOfLeads function.
     * callback name postListOfLeadsCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postListOfLeadsCallback} _callback
     */
    this.postListOfLeads = function(_refData, _callback, usePersistentStorage) 
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
                    if( this.parent.listOfLeads.filter(function(_elem) {
                        return _elem.getHref() && refHref && _elem.getHref() === refHref;
                    }).length < 1)
                    {
                        this.parent.listOfLeads.push(_refData);
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "listOfLeads", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.listOfLeadsHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeListOfLeads function.
     * callback name removeListOfLeadsCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeListOfLeadsCallback} _callback
     */
    this.removeListOfLeads = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.listOfLeadsHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                            /* Find and remove reference from local list */
                var i=-1;
                if(typeof this.parent.listOfLeads !="undefined" && typeof this.parent.listOfLeads.length!="undefined" && this.parent.listOfLeads.length>0) {
                    for (var k=0;k<this.parent.listOfLeads.length;k++) {
                        if (this.parent.listOfLeads[k].data.href===_refData.data.href) {
                            i=k;
                            break;
                        }
                    }
                }
                
                if(i != -1) {
                    this.parent.listOfLeads.splice(i, 1);
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
     * Callback required by getListOfLeadsCount function.
     * callback name getListOfLeadsCountCallback
     * @param {function} onOk Function is called when everything is ok. (containg count as {number})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Returns a count of referenced objects of this class filtered by the given query from server
     * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
     * @param {getListOfLeadsCountCallback} _callback
	 */
    this.getListOfLeadsCount = function(_query, _callback, usePersistentStorage) 
    {
        Apiomat.Datastore.getInstance().loadCountFromServer(this.getHref(), 'listOfLeads', _query, _callback, usePersistentStorage);
    };
    
};
/* static methods */

/**
 * Callback required by getSalesmans function.
 * callback name getSalesmansCallback
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
 * @param {getSalesmansCallback} callback
 */
Apiomat.Salesman.getSalesmans = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Salesman, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getSalesmansAndRefHref function.
 * callback name getSalesmansAndRefHrefCallback
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
 * @param {getSalesmansAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Salesman.getSalesmansAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Salesman, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getSalesmansCount function.
 * callback name getSalesmansCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getSalesmansCountCallback} callback which is called when request finished
 */
Apiomat.Salesman.getSalesmansCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Salesman, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getSalesmans() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Salesman.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Salesman, query, callback);
};

/**
 * Deletes the classes that have been fetched with getSalesmansWithReferencedHref (or its async version) before
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
Apiomat.Salesman.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Salesman, query, callback);
};


/* inheritance */
Apiomat.Salesman.prototype = new Apiomat.User();
Apiomat.Salesman.prototype.constructor = Apiomat.Salesman;


Apiomat.Salesman.prototype.init=function () {
        Apiomat.User.prototype.init.call(this);
    this.data["dynamicAttributes"] = {};
    this.listOfLeads = [];
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Salesman.prototype.getSimpleName = function() {
    return "Salesman";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Salesman.prototype.getModuleName = function() {
    return "SalesModule1";
};

/* easy getter and setter */


/**
 * get ListOfLeads
 * @return ListOfLeads
 */
Apiomat.Salesman.prototype.getListOfLeads = function() 
{
            return this.data.listOfLeads;
    
};

/**
 * set ListOfLeads
 * @param ListOfLeads
 */
Apiomat.Salesman.prototype.setListOfLeads = function(_listOfLeads) {
    this.data.listOfLeads = _listOfLeads;
};


/**
 * get SalesArea latitude
 * @return latitude as {floating number}
 */
Apiomat.Salesman.prototype.getSalesAreaLatitude = function() 
{
    var locArr = this.data.salesArea;
    if(locArr)
    {
        return locArr[0];
    }
};

/**
 * get SalesArea longitude
 * @return longitude as {floating number}
 */
Apiomat.Salesman.prototype.getSalesAreaLongitude = function() 
{
    var locArr = this.data.salesArea;
    if(locArr)
    {
        return locArr[1];
    }
};

/**
 * set latitude
 * @param latitude
 */
Apiomat.Salesman.prototype.setSalesAreaLatitude = function(_latitude) 
{
    var locArr = this.data.salesArea;
    if(!locArr)
    {
        locArr = [_latitude, undefined];
    }
    else
    {
        locArr[0] = _latitude;
    }
    this.data.salesArea = locArr;
};

/**
 * set longitude
 * @param longitude
 */
Apiomat.Salesman.prototype.setSalesAreaLongitude = function(_longitude) 
{
    var locArr = this.data.salesArea;
    if(!locArr)
    {
        locArr = [0, _longitude];
    }
    else
    {
        locArr[1] = _longitude;
    }
    this.data.salesArea = locArr;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
