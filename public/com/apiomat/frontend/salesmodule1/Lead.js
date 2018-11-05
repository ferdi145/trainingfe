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
    goog.provide('Apiomat.Lead');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Lead = function() {
    this.init();
    /* referenced object methods */
    
    var contactAttempts = [];
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getContactAttempts = function()
    {
           return this.contactAttempts;
     
    };
	
    /**
     * Callback required by loadContactAttempts function.
     * callback name loadContactAttemptsCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced objects as {array})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
 * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)	 * @param {loadContactAttemptsCallback} callback
	 */
    this.loadContactAttempts = function(query,callback, usePersistentStorage) 
    {
        var refUrl = this.data.contactAttemptsHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                                if(Apiomat.Datastore.getInstance().getUseDeltaSync()) {
					this.parent.contactAttempts = Apiomat.Datastore.getInstance().syncCollection(this.parent.contactAttempts, obj, meta ? meta.deletedItems : undefined);
				}
				else {
					this.parent.contactAttempts = obj;
				}
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.contactAttempts = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, query, Apiomat.ContactProtocol, true, usePersistentStorage);
    };
	
    /**
     * Callback required by loadContactAttemptsAndRefHref function.
     * callback name loadContactAttemptsAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {array})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
 * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)	 * @param {loadContactAttemptsAndRefHrefCallback} callback
     */
    this.loadContactAttemptsAndRefHref = function(query,callback, usePersistentStorage)
    {
        var refUrl = this.data.contactAttemptsHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                                if(Apiomat.Datastore.getInstance().getUseDeltaSync()) {
                    this.parent.contactAttempts = Apiomat.Datastore.getInstance().syncCollection(this.parent.contactAttempts, obj, meta ? meta.deletedItems : undefined);
				}
				else {
					this.parent.contactAttempts = obj;
				}
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, query, Apiomat.ContactProtocol, true, usePersistentStorage);
    };
    
    /**
     * Callback required by postContactAttempts function.
     * callback name postContactAttemptsCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postContactAttemptsCallback} _callback
     */
    this.postContactAttempts = function(_refData, _callback, usePersistentStorage) 
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
                    if( this.parent.contactAttempts.filter(function(_elem) {
                        return _elem.getHref() && refHref && _elem.getHref() === refHref;
                    }).length < 1)
                    {
                        this.parent.contactAttempts.push(_refData);
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "contactAttempts", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.contactAttemptsHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeContactAttempts function.
     * callback name removeContactAttemptsCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeContactAttemptsCallback} _callback
     */
    this.removeContactAttempts = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.contactAttemptsHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                            /* Find and remove reference from local list */
                var i=-1;
                if(typeof this.parent.contactAttempts !="undefined" && typeof this.parent.contactAttempts.length!="undefined" && this.parent.contactAttempts.length>0) {
                    for (var k=0;k<this.parent.contactAttempts.length;k++) {
                        if (this.parent.contactAttempts[k].data.href===_refData.data.href) {
                            i=k;
                            break;
                        }
                    }
                }
                
                if(i != -1) {
                    this.parent.contactAttempts.splice(i, 1);
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
     * Callback required by getContactAttemptsCount function.
     * callback name getContactAttemptsCountCallback
     * @param {function} onOk Function is called when everything is ok. (containg count as {number})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Returns a count of referenced objects of this class filtered by the given query from server
     * @param a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
     * @param {getContactAttemptsCountCallback} _callback
	 */
    this.getContactAttemptsCount = function(_query, _callback, usePersistentStorage) 
    {
        Apiomat.Datastore.getInstance().loadCountFromServer(this.getHref(), 'contactAttempts', _query, _callback, usePersistentStorage);
    };
    
};
/* static methods */

/**
 * Callback required by getLeads function.
 * callback name getLeadsCallback
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
 * @param {getLeadsCallback} callback
 */
Apiomat.Lead.getLeads = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Lead, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getLeadsAndRefHref function.
 * callback name getLeadsAndRefHrefCallback
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
 * @param {getLeadsAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Lead.getLeadsAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Lead, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getLeadsCount function.
 * callback name getLeadsCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getLeadsCountCallback} callback which is called when request finished
 */
Apiomat.Lead.getLeadsCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Lead, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getLeads() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Lead.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Lead, query, callback);
};

/**
 * Deletes the classes that have been fetched with getLeadsWithReferencedHref (or its async version) before
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
Apiomat.Lead.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Lead, query, callback);
};


/* inheritance */
Apiomat.Lead.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.Lead.prototype.constructor = Apiomat.Lead;


Apiomat.Lead.prototype.init=function () {
        this.data = new Object();
    this.contactAttempts = [];
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Lead.prototype.getSimpleName = function() {
    return "Lead";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Lead.prototype.getModuleName = function() {
    return "SalesModule1";
};

/* easy getter and setter */


/**
 * get ContactAttempts
 * @return ContactAttempts
 */
Apiomat.Lead.prototype.getContactAttempts = function() 
{
            return this.data.contactAttempts;
    
};

/**
 * set ContactAttempts
 * @param ContactAttempts
 */
Apiomat.Lead.prototype.setContactAttempts = function(_contactAttempts) {
    this.data.contactAttempts = _contactAttempts;
};


/**
 * get FirstName
 * @return FirstName
 */
Apiomat.Lead.prototype.getFirstName = function() 
{
            return this.data.firstName !== null ? this.data.firstName : undefined;
    
};

/**
 * set FirstName
 * @param FirstName
 */
Apiomat.Lead.prototype.setFirstName = function(_firstName) {
    this.data.firstName = _firstName;
};


/**
 * get LastName
 * @return LastName
 */
Apiomat.Lead.prototype.getLastName = function() 
{
            return this.data.lastName !== null ? this.data.lastName : undefined;
    
};

/**
 * set LastName
 * @param LastName
 */
Apiomat.Lead.prototype.setLastName = function(_lastName) {
    this.data.lastName = _lastName;
};

Apiomat.Lead.prototype.getLastVisit = function() 
{
    var retDate = this.data.lastVisit;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Lead.prototype.setLastVisit = function(_lastVisit) 
{
	if(_lastVisit != null && _lastVisit != undefined){
		this.data.lastVisit = _lastVisit.getTime();
	}
	else{
		this.data.lastVisit = null;
	}
};
    
/**
 * Returns an URL of the image.
 
 <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param backgroundColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
  * @return the URL of the image
 */
Apiomat.Lead.prototype.getProfilePicURL = function(width, height, bgColorAsHex, alpha, format) 
{
    var url = this.data.profilePicURL;
    if(!url)
    {
        return undefined;
    }
    url += ".img?apiKey=" + Apiomat.User.AOMAPIKEY + "&system=" + Apiomat.User.AOMSYS;
    if (width) {
        url += "&width=" + width;
    }
    if (height) {
        url += "&height=" + height;
    }
    if (bgColorAsHex) {
        url += "&bgcolor=" + bgColorAsHex;
    }
    if (alpha) {
        url += "&alpha=" + alpha;
    }
    if (format) {
        url += "&format=" + format;
    }
    return url;
}

/**
 * Callback required by loadProfilePic function.
 * callback name loadProfilePicCountCallback
  * @param {function} onOk Function is called when everything is ok. (containg image as bytearray)
  * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/** 
 * Load referenced object(s) and
 * add result from server to member variable of this class. <br/> You can provide several optional parameters to
 * manipulate the image:
 * 
 * @param width (optional)
 *            the width of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param height (optional)
 *            the height of the image, 0 to use the original size. If only width
 *            or height are provided, the other value is computed.
 * @param bgColorAsHex (optional)
 *            the background color of the image, null or empty uses the original
 *            background color. Caution: Don't send the '#' symbol! Example:
 *            <i>ff0000</i>
 * @param alpha (optional)
 *            the alpha value of the image (between 0 and 1), null to take the original value.
 * @param format (optional)
 *            the file format of the image to return, e.g. <i>jpg</i> or <i>png</i>
 * @param {loadProfilePicCountCallback} _callback
  * @return the ressource URL of the image
 */
Apiomat.Lead.prototype.loadProfilePic = function(width, height, bgColorAsHex, alpha, format,_callback, usePersistentStorage)
{
    var resUrl = this.getProfilePicURL(width, height, bgColorAsHex, alpha, format);
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postProfilePic functions.
 * callback name postProfilePicCallback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add an image
 * @param _data image data as byte array
 * @param {postProfilePicCallback} _callback
 */
Apiomat.Lead.prototype.postProfilePic = function(_data, _callback, usePersistentStorage) 
{
	if(typeof _data === 'undefined' || _data === null){
	    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_RESOURCE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(_data.length <= 0){
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_IMAGE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    if(typeof this.getHref() === "undefined" || this.getHref() === "") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    var postCB = {
            onOk : function(_imgHref) {
                if (_imgHref) {
                    this.parent.data.profilePicURL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    if(this.parent.wasLocalSave) {
                        this.parent.data.profilePicURL = _imgHref;
                        this.parent.save(_callback, true, usePersistentStorage);
                    }
                    else {
                        this.parent.load(_callback, usePersistentStorage);
                    }
                }
                else {
                    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.HREF_NOT_FOUND);
                    if (_callback) {
                        Apiomat.Datastore.negativeCallback(_callback,error);
                    } else if(console && console.log) {
                        console.log("Error occurred: " + error);
                    }
                }
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
    };
    postCB.parent = this;
    if(Apiomat.Datastore.getInstance().shouldSendOffline("POST")) {
    	this.wasLocalSave = true;
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, true, postCB, this.getOptionsForStaticData("profilePic"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, true, postCB, usePersistentStorage, this.getOptionsForStaticData("profilePic"));
    }
};

/**
 * Callback required by deleteProfilePic functions.
 * callback name deleteProfilePicCallback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteProfilePicCallback} _callback
 */
Apiomat.Lead.prototype.deleteProfilePic = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.profilePicURL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "images/"  + this.getModuleName() + "/Lead/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.profilePicURL;
					this.parent.save(_callback, true, usePersistentStorage);
				}
				else {
					this.parent.load(_callback, usePersistentStorage);
				}
			},
			onError : function(error) {
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		deleteCB.parent = this;

		if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE")) {
			this.wasLocalDelete = true;
			Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
		}
		else {
			this.wasLocalDelete = false;
			Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
		}
	}
	else
	{
		// First try to delete the attribute and then save, to find out if the caller is allowed to do so
		delete this.data.profilePicURL;
		/* update object again and save deleted image reference in object */
		var saveCB = {
			onOk : function() {
				//save was successful, now call delete on server
				var deleteCB = {
					onOk : function() {
						Apiomat.Datastore.positiveCallback(_callback);
					},
					onError : function(error) {
						Apiomat.Datastore.negativeCallback(_callback, error);
					}
				};
				if(Apiomat.Datastore.getInstance().shouldSendOffline("DELETE"))
				{
					Apiomat.Datastore.getInstance( ).sendOffline( "DELETE", dataUrl, null, null, deleteCB );
				}
				else
				{
					Apiomat.Datastore.getInstance().deleteOnServer(dataUrl, deleteCB);
				}
			},
			onError : function(error) {
				//save was unsuccessful, reset data
				this.parent.data.profilePicURL = dataUrl;
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		saveCB.parent=this;
		this.save(saveCB);
	}
};


/**
 * get RegPlace latitude
 * @return latitude as {floating number}
 */
Apiomat.Lead.prototype.getRegPlaceLatitude = function() 
{
    var locArr = this.data.regPlace;
    if(locArr)
    {
        return locArr[0];
    }
};

/**
 * get RegPlace longitude
 * @return longitude as {floating number}
 */
Apiomat.Lead.prototype.getRegPlaceLongitude = function() 
{
    var locArr = this.data.regPlace;
    if(locArr)
    {
        return locArr[1];
    }
};

/**
 * set latitude
 * @param latitude
 */
Apiomat.Lead.prototype.setRegPlaceLatitude = function(_latitude) 
{
    var locArr = this.data.regPlace;
    if(!locArr)
    {
        locArr = [_latitude, undefined];
    }
    else
    {
        locArr[0] = _latitude;
    }
    this.data.regPlace = locArr;
};

/**
 * set longitude
 * @param longitude
 */
Apiomat.Lead.prototype.setRegPlaceLongitude = function(_longitude) 
{
    var locArr = this.data.regPlace;
    if(!locArr)
    {
        locArr = [0, _longitude];
    }
    else
    {
        locArr[1] = _longitude;
    }
    this.data.regPlace = locArr;
};


/**
 * get Score
 * @return Score
 */
Apiomat.Lead.prototype.getScore = function() 
{
            return this.data.score !== null ? this.data.score : undefined;
    
};

/**
 * set Score
 * @param Score
 */
Apiomat.Lead.prototype.setScore = function(_score) {
    this.data.score = _score;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
