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
    goog.provide('Apiomat.TableInfo');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.TableInfo = function() {
    this.init();
    /* referenced object methods */
    
    var foreignKey = [];
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getForeignKey = function()
    {
           return this.foreignKey;
     
    };
	
    /**
     * Callback required by loadForeignKey function.
     * callback name loadForeignKeyCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced objects as {array})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
 * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)	 * @param {loadForeignKeyCallback} callback
	 */
    this.loadForeignKey = function(query,callback, usePersistentStorage) 
    {
        var refUrl = this.data.foreignKeyHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                                if(Apiomat.Datastore.getInstance().getUseDeltaSync()) {
					this.parent.foreignKey = Apiomat.Datastore.getInstance().syncCollection(this.parent.foreignKey, obj, meta ? meta.deletedItems : undefined);
				}
				else {
					this.parent.foreignKey = obj;
				}
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.foreignKey = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, query, Apiomat.ForeignKeyInfo, true, usePersistentStorage);
    };
	
    /**
     * Callback required by loadForeignKeyAndRefHref function.
     * callback name loadForeignKeyAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {array})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
 * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)	 * @param {loadForeignKeyAndRefHrefCallback} callback
     */
    this.loadForeignKeyAndRefHref = function(query,callback, usePersistentStorage)
    {
        var refUrl = this.data.foreignKeyHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                                if(Apiomat.Datastore.getInstance().getUseDeltaSync()) {
                    this.parent.foreignKey = Apiomat.Datastore.getInstance().syncCollection(this.parent.foreignKey, obj, meta ? meta.deletedItems : undefined);
				}
				else {
					this.parent.foreignKey = obj;
				}
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, query, Apiomat.ForeignKeyInfo, true, usePersistentStorage);
    };
    
    /**
     * Callback required by postForeignKey function.
     * callback name postForeignKeyCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postForeignKeyCallback} _callback
     */
    this.postForeignKey = function(_refData, _callback, usePersistentStorage) 
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
                    if( this.parent.foreignKey.filter(function(_elem) {
                        return _elem.getHref() && refHref && _elem.getHref() === refHref;
                    }).length < 1)
                    {
                        this.parent.foreignKey.push(_refData);
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "foreignKey", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.foreignKeyHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeForeignKey function.
     * callback name removeForeignKeyCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeForeignKeyCallback} _callback
     */
    this.removeForeignKey = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.foreignKeyHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                            /* Find and remove reference from local list */
                var i=-1;
                if(typeof this.parent.foreignKey !="undefined" && typeof this.parent.foreignKey.length!="undefined" && this.parent.foreignKey.length>0) {
                    for (var k=0;k<this.parent.foreignKey.length;k++) {
                        if (this.parent.foreignKey[k].data.href===_refData.data.href) {
                            i=k;
                            break;
                        }
                    }
                }
                
                if(i != -1) {
                    this.parent.foreignKey.splice(i, 1);
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
     * Callback required by getForeignKeyCount function.
     * callback name getForeignKeyCountCallback
     * @param {function} onOk Function is called when everything is ok. (containg count as {number})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Returns a count of referenced objects of this class filtered by the given query from server
     * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
     * @param {getForeignKeyCountCallback} _callback
	 */
    this.getForeignKeyCount = function(_query, _callback, usePersistentStorage) 
    {
        Apiomat.Datastore.getInstance().loadCountFromServer(this.getHref(), 'foreignKey', _query, _callback, usePersistentStorage);
    };
    
};
/* static methods */

/**
 * Callback required by getTableInfos function.
 * callback name getTableInfosCallback
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
 * @param {getTableInfosCallback} callback
 */
Apiomat.TableInfo.getTableInfos = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.TableInfo, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getTableInfosAndRefHref function.
 * callback name getTableInfosAndRefHrefCallback
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
 * @param {getTableInfosAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.TableInfo.getTableInfosAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.TableInfo, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getTableInfosCount function.
 * callback name getTableInfosCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getTableInfosCountCallback} callback which is called when request finished
 */
Apiomat.TableInfo.getTableInfosCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.TableInfo, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getTableInfos() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.TableInfo.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.TableInfo, query, callback);
};

/**
 * Deletes the classes that have been fetched with getTableInfosWithReferencedHref (or its async version) before
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
Apiomat.TableInfo.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.TableInfo, query, callback);
};


/* inheritance */
Apiomat.TableInfo.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.TableInfo.prototype.constructor = Apiomat.TableInfo;


Apiomat.TableInfo.prototype.init=function () {
        this.data = new Object();
    this.foreignKey = [];
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.TableInfo.prototype.getSimpleName = function() {
    return "TableInfo";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.TableInfo.prototype.getModuleName = function() {
    return "JDBC";
};

/* easy getter and setter */


/**
 * get AttributeMapping
 * @return AttributeMapping
 */
Apiomat.TableInfo.prototype.getAttributeMapping = function() 
{
            return this.data.attributeMapping !== null ? this.data.attributeMapping : undefined;
    
};

/**
 * set AttributeMapping
 * @param AttributeMapping
 */
Apiomat.TableInfo.prototype.setAttributeMapping = function(_attributeMapping) {
    this.data.attributeMapping = _attributeMapping;
};


/**
 * get ColumnJdbcTypes
 * @return ColumnJdbcTypes
 */
Apiomat.TableInfo.prototype.getColumnJdbcTypes = function() 
{
            return this.data.columnJdbcTypes !== null ? this.data.columnJdbcTypes : undefined;
    
};

/**
 * set ColumnJdbcTypes
 * @param ColumnJdbcTypes
 */
Apiomat.TableInfo.prototype.setColumnJdbcTypes = function(_columnJdbcTypes) {
    this.data.columnJdbcTypes = _columnJdbcTypes;
};


/**
 * get ColumnLengths
 * @return ColumnLengths
 */
Apiomat.TableInfo.prototype.getColumnLengths = function() 
{
            return this.data.columnLengths !== null ? this.data.columnLengths : undefined;
    
};

/**
 * set ColumnLengths
 * @param ColumnLengths
 */
Apiomat.TableInfo.prototype.setColumnLengths = function(_columnLengths) {
    this.data.columnLengths = _columnLengths;
};


/**
 * get ForeignKey
 * @return ForeignKey
 */
Apiomat.TableInfo.prototype.getForeignKey = function() 
{
            return this.data.foreignKey;
    
};

/**
 * set ForeignKey
 * @param ForeignKey
 */
Apiomat.TableInfo.prototype.setForeignKey = function(_foreignKey) {
    this.data.foreignKey = _foreignKey;
};


/**
 * get MetaModelAOMName
 * @return MetaModelAOMName
 */
Apiomat.TableInfo.prototype.getMetaModelAOMName = function() 
{
            return this.data.metaModelAOMName !== null ? this.data.metaModelAOMName : undefined;
    
};

/**
 * set MetaModelAOMName
 * @param MetaModelAOMName
 */
Apiomat.TableInfo.prototype.setMetaModelAOMName = function(_metaModelAOMName) {
    this.data.metaModelAOMName = _metaModelAOMName;
};


/**
 * get ModuleAOMName
 * @return ModuleAOMName
 */
Apiomat.TableInfo.prototype.getModuleAOMName = function() 
{
            return this.data.moduleAOMName !== null ? this.data.moduleAOMName : undefined;
    
};

/**
 * set ModuleAOMName
 * @param ModuleAOMName
 */
Apiomat.TableInfo.prototype.setModuleAOMName = function(_moduleAOMName) {
    this.data.moduleAOMName = _moduleAOMName;
};


/**
 * get NoPkIdColumns
 * @return NoPkIdColumns
 */
Apiomat.TableInfo.prototype.getNoPkIdColumns = function() 
{
            return this.data.noPkIdColumns;
    
};

/**
 * set NoPkIdColumns
 * @param NoPkIdColumns
 */
Apiomat.TableInfo.prototype.setNoPkIdColumns = function(_noPkIdColumns) {
    this.data.noPkIdColumns = _noPkIdColumns;
};


/**
 * get PrimaryKeyTypes
 * @return PrimaryKeyTypes
 */
Apiomat.TableInfo.prototype.getPrimaryKeyTypes = function() 
{
            return this.data.primaryKeyTypes !== null ? this.data.primaryKeyTypes : undefined;
    
};

/**
 * set PrimaryKeyTypes
 * @param PrimaryKeyTypes
 */
Apiomat.TableInfo.prototype.setPrimaryKeyTypes = function(_primaryKeyTypes) {
    this.data.primaryKeyTypes = _primaryKeyTypes;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
