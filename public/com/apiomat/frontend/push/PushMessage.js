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
    goog.provide('Apiomat.PushMessage');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.PushMessage = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getPushMessages function.
 * callback name getPushMessagesCallback
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
 * @param {getPushMessagesCallback} callback
 */
Apiomat.PushMessage.getPushMessages = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.PushMessage, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getPushMessagesAndRefHref function.
 * callback name getPushMessagesAndRefHrefCallback
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
 * @param {getPushMessagesAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.PushMessage.getPushMessagesAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.PushMessage, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getPushMessagesCount function.
 * callback name getPushMessagesCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getPushMessagesCountCallback} callback which is called when request finished
 */
Apiomat.PushMessage.getPushMessagesCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.PushMessage, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getPushMessages() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.PushMessage.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.PushMessage, query, callback);
};

/**
 * Deletes the classes that have been fetched with getPushMessagesWithReferencedHref (or its async version) before
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
Apiomat.PushMessage.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.PushMessage, query, callback);
};


/* inheritance */
Apiomat.PushMessage.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.PushMessage.prototype.constructor = Apiomat.PushMessage;


Apiomat.PushMessage.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.PushMessage.prototype.getSimpleName = function() {
    return "PushMessage";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.PushMessage.prototype.getModuleName = function() {
    return "Push";
};

/* easy getter and setter */


/**
 * get ActionKey
 * @return ActionKey
 */
Apiomat.PushMessage.prototype.getActionKey = function() 
{
            return this.data.actionKey !== null ? this.data.actionKey : undefined;
    
};

/**
 * set ActionKey
 * @param ActionKey
 */
Apiomat.PushMessage.prototype.setActionKey = function(_actionKey) {
    this.data.actionKey = _actionKey;
};


/**
 * get AlertAction
 * @return AlertAction
 */
Apiomat.PushMessage.prototype.getAlertAction = function() 
{
            return this.data.alertAction !== null ? this.data.alertAction : undefined;
    
};

/**
 * set AlertAction
 * @param AlertAction
 */
Apiomat.PushMessage.prototype.setAlertAction = function(_alertAction) {
    this.data.alertAction = _alertAction;
};


/**
 * get AlertTitle
 * @return AlertTitle
 */
Apiomat.PushMessage.prototype.getAlertTitle = function() 
{
            return this.data.alertTitle !== null ? this.data.alertTitle : undefined;
    
};

/**
 * set AlertTitle
 * @param AlertTitle
 */
Apiomat.PushMessage.prototype.setAlertTitle = function(_alertTitle) {
    this.data.alertTitle = _alertTitle;
};


/**
 * get Badge
 * @return Badge
 */
Apiomat.PushMessage.prototype.getBadge = function() 
{
            return this.data.badge !== null ? this.data.badge : undefined;
    
};

/**
 * set Badge
 * @param Badge
 */
Apiomat.PushMessage.prototype.setBadge = function(_badge) {
    this.data.badge = _badge;
};


/**
 * get Category
 * @return Category
 */
Apiomat.PushMessage.prototype.getCategory = function() 
{
            return this.data.category !== null ? this.data.category : undefined;
    
};

/**
 * set Category
 * @param Category
 */
Apiomat.PushMessage.prototype.setCategory = function(_category) {
    this.data.category = _category;
};


/**
 * get ContentAvailable
 * @return ContentAvailable
 */
Apiomat.PushMessage.prototype.getContentAvailable = function() 
{
            return this.data.contentAvailable !== null ? this.data.contentAvailable : undefined;
    
};

/**
 * set ContentAvailable
 * @param ContentAvailable
 */
Apiomat.PushMessage.prototype.setContentAvailable = function(_contentAvailable) {
    this.data.contentAvailable = _contentAvailable;
};


/**
 * get CustomData
 * @return CustomData
 */
Apiomat.PushMessage.prototype.getCustomData = function() 
{
            return this.data.customData !== null ? this.data.customData : undefined;
    
};

/**
 * set CustomData
 * @param CustomData
 */
Apiomat.PushMessage.prototype.setCustomData = function(_customData) {
    this.data.customData = _customData;
};


/**
 * get FailureCount
 * @return FailureCount
 */
Apiomat.PushMessage.prototype.getFailureCount = function() 
{
            return this.data.failureCount !== null ? this.data.failureCount : undefined;
    
};



/**
 * get FailureReasons
 * @return FailureReasons
 */
Apiomat.PushMessage.prototype.getFailureReasons = function() 
{
            return this.data.failureReasons;
    
};


/**
 * Returns an URL of the file.
 
  * @return the URL of the file
 */
Apiomat.PushMessage.prototype.getFileURL = function() 
{
    var url = this.data.fileURL;
    if(!url)
    {
        return undefined;
    }
    url += ".img?apiKey=" + Apiomat.User.AOMAPIKEY + "&system=" + Apiomat.User.AOMSYS;
    return url;
}

/**
 * Callback required by loadFile function.
 * callback name loadFileCountCallback
   * @param {function} onOk Function is called when everything is ok. (containing referenced object(s))
  * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/** 
 * Load referenced object(s) and
 * add result from server to member variable of this class.  * @return the ressource URL of the file
 */
Apiomat.PushMessage.prototype.loadFile = function(_callback, usePersistentStorage)
{
    var resUrl = this.getFileURL();
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postFile functions.
 * callback name postFileCallback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add a file
 * @param _data file data as byte array
 * @param {postFileCallback} _callback
 */
Apiomat.PushMessage.prototype.postFile = function(_data, _callback, usePersistentStorage) 
{
	if(typeof _data === 'undefined' || _data === null){
	    var error = new Apiomat.ApiomatRequestError(Apiomat.Status.BAD_RESOURCE);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }
    var postCB = {
            onOk : function(_imgHref) {
                if (_imgHref) {
                    this.parent.data.fileURL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    /* update object again */
                    var saveCB = {
                        onOk : function() {
                            Apiomat.Datastore.positiveCallback(_callback);
                        },
                        onError : function(error) {
                            var deleteCB = {
                                onOk : function() {
                                    Apiomat.Datastore.negativeCallback(_callback,error);
                                },
                                onError : function(e) {
                                    Apiomat.Datastore.negativeCallback(_callback,error);
                                }
                            };
                            Apiomat.Datastore.getInstance().deleteOnServer(_imgHref, deleteCB);
                            if(this.parent.parent.wasLocalSave) {
                                delete this.parent.parent.data.fileURL;
                            }
                        }
                    }
                    saveCB.parent = this;
                    this.parent.save(saveCB, usePersistentStorage);
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
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, false, postCB, this.getOptionsForStaticData("file"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, false, postCB, usePersistentStorage, this.getOptionsForStaticData("file"));
    }
};

/**
 * Callback required by deleteFile functions.
 * callback name deleteFileCallback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteFileCallback} _callback
 */
Apiomat.PushMessage.prototype.deleteFile = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.fileURL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "files/"  + this.getModuleName() + "/PushMessage/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.fileURL;
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
		delete this.data.fileURL;
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
				this.parent.data.fileURL = dataUrl;
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		saveCB.parent=this;
		this.save(saveCB);
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
Apiomat.PushMessage.prototype.getImageURL = function(width, height, bgColorAsHex, alpha, format) 
{
    var url = this.data.imageURL;
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
 * Callback required by loadImage function.
 * callback name loadImageCountCallback
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
 * @param {loadImageCountCallback} _callback
  * @return the ressource URL of the image
 */
Apiomat.PushMessage.prototype.loadImage = function(width, height, bgColorAsHex, alpha, format,_callback, usePersistentStorage)
{
    var resUrl = this.getImageURL(width, height, bgColorAsHex, alpha, format);
    if (typeof resUrl === "undefined") {
        var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING, 200);
        Apiomat.Datastore.negativeCallback(_callback, error);
        return;
    }    
    return Apiomat.Datastore.getInstance().loadResource(resUrl, _callback, usePersistentStorage);
}

/**
 * Callback required by postImage functions.
 * callback name postImageCallback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * add an image
 * @param _data image data as byte array
 * @param {postImageCallback} _callback
 */
Apiomat.PushMessage.prototype.postImage = function(_data, _callback, usePersistentStorage) 
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
    var postCB = {
            onOk : function(_imgHref) {
                if (_imgHref) {
                    this.parent.data.imageURL = _imgHref;
					if(Apiomat.AOMNetworkHandler.isConnected() === false){
                		Apiomat.Datastore.getInstance().getStorageImpl(usePersistentStorage).addOrUpdateCollection(this.parent.data.href, this.parent.data);
                	}
                    /* object was not saved yet, this is needed for media push */
                    /* update object again */
                    var saveCB = {
                        onOk : function() {
                            Apiomat.Datastore.positiveCallback(_callback);
                        },
                        onError : function(error) {
                            var deleteCB = {
                                onOk : function() {
                                    Apiomat.Datastore.negativeCallback(_callback,error);
                                },
                                onError : function(e) {
                                    Apiomat.Datastore.negativeCallback(_callback,error);
                                }
                            };
                            Apiomat.Datastore.getInstance().deleteOnServer(_imgHref, deleteCB);
                            if(this.parent.parent.wasLocalSave) {
                                delete this.parent.parent.data.imageURL;
                            }
                        }
                    }
                    saveCB.parent = this;
                    this.parent.save(saveCB, usePersistentStorage);
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
        Apiomat.Datastore.getInstance( ).sendOffline( "POST", null, _data, true, postCB, this.getOptionsForStaticData("image"));
    }
    else {
    	this.wasLocalSave = false;
        Apiomat.Datastore.getInstance().postStaticDataOnServer(_data, true, postCB, usePersistentStorage, this.getOptionsForStaticData("image"));
    }
};

/**
 * Callback required by deleteImage functions.
 * callback name deleteImageCallback
 * @param {function} onOk Function is called when everything is ok.
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * delete a image
 * @param {deleteImageCallback} _callback
 */
Apiomat.PushMessage.prototype.deleteImage = function(_callback, usePersistentStorage) 
{
	var dataUrl = this.data.imageURL;
	if (dataUrl === undefined || dataUrl === "") {
		var error = new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING);
		Apiomat.Datastore.negativeCallback(_callback, error);
		return;
	}
	/* Decide whether to use the old or new data handling */
	if (dataUrl.indexOf( "/data/" +  "images/"  + this.getModuleName() + "/PushMessage/" ) !== -1)
	{
		var deleteCB = {
			onOk : function() {
				if(this.parent.wasLocalDelete) {
					delete this.parent.data.imageURL;
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
		delete this.data.imageURL;
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
				this.parent.data.imageURL = dataUrl;
				Apiomat.Datastore.negativeCallback(_callback, error);
			}
		};
		saveCB.parent=this;
		this.save(saveCB);
	}
};


/**
 * get LaunchImage
 * @return LaunchImage
 */
Apiomat.PushMessage.prototype.getLaunchImage = function() 
{
            return this.data.launchImage !== null ? this.data.launchImage : undefined;
    
};

/**
 * set LaunchImage
 * @param LaunchImage
 */
Apiomat.PushMessage.prototype.setLaunchImage = function(_launchImage) {
    this.data.launchImage = _launchImage;
};


/**
 * get Payload
 * @return Payload
 */
Apiomat.PushMessage.prototype.getPayload = function() 
{
            return this.data.payload !== null ? this.data.payload : undefined;
    
};

/**
 * set Payload
 * @param Payload
 */
Apiomat.PushMessage.prototype.setPayload = function(_payload) {
    this.data.payload = _payload;
};


/**
 * get PushWasSent
 * @return PushWasSent
 */
Apiomat.PushMessage.prototype.getPushWasSent = function() 
{
            return this.data.pushWasSent !== null ? this.data.pushWasSent : undefined;
    
};

/**
 * set PushWasSent
 * @param PushWasSent
 */
Apiomat.PushMessage.prototype.setPushWasSent = function(_pushWasSent) {
    this.data.pushWasSent = _pushWasSent;
};


/**
 * get Query
 * @return Query
 */
Apiomat.PushMessage.prototype.getQuery = function() 
{
            return this.data.query !== null ? this.data.query : undefined;
    
};

/**
 * set Query
 * @param Query
 */
Apiomat.PushMessage.prototype.setQuery = function(_query) {
    this.data.query = _query;
};


/**
 * get ReceiverUserNames
 * @return ReceiverUserNames
 */
Apiomat.PushMessage.prototype.getReceiverUserNames = function() 
{
            return this.data.receiverUserNames;
    
};

/**
 * set ReceiverUserNames
 * @param ReceiverUserNames
 */
Apiomat.PushMessage.prototype.setReceiverUserNames = function(_receiverUserNames) {
    this.data.receiverUserNames = _receiverUserNames;
};


/**
 * get ScheduleTimestamp
 * @return ScheduleTimestamp
 */
Apiomat.PushMessage.prototype.getScheduleTimestamp = function() 
{
            return this.data.scheduleTimestamp !== null ? this.data.scheduleTimestamp : undefined;
    
};

/**
 * set ScheduleTimestamp
 * @param ScheduleTimestamp
 */
Apiomat.PushMessage.prototype.setScheduleTimestamp = function(_scheduleTimestamp) {
    this.data.scheduleTimestamp = _scheduleTimestamp;
};


/**
 * get SoundName
 * @return SoundName
 */
Apiomat.PushMessage.prototype.getSoundName = function() 
{
            return this.data.soundName !== null ? this.data.soundName : undefined;
    
};

/**
 * set SoundName
 * @param SoundName
 */
Apiomat.PushMessage.prototype.setSoundName = function(_soundName) {
    this.data.soundName = _soundName;
};


/**
 * get SuccessCount
 * @return SuccessCount
 */
Apiomat.PushMessage.prototype.getSuccessCount = function() 
{
            return this.data.successCount !== null ? this.data.successCount : undefined;
    
};



/**
 * get TimeToLive
 * @return TimeToLive
 */
Apiomat.PushMessage.prototype.getTimeToLive = function() 
{
            return this.data.timeToLive !== null ? this.data.timeToLive : undefined;
    
};

/**
 * set TimeToLive
 * @param TimeToLive
 */
Apiomat.PushMessage.prototype.setTimeToLive = function(_timeToLive) {
    this.data.timeToLive = _timeToLive;
};

        
Apiomat.PushMessage.prototype.send = function(callback, usePersistentStorage) {
    var dataArr = [];
    if(arguments.length > 1)
    {
        for(var i = 0; i < (arguments.length -1); i++)
        {
            dataArr.push(arguments[i]);
        }
    }
    Apiomat.Datastore.getInstance().updateOnServerWithJSON(this.getHref()+"/method/send", JSON.stringify(dataArr), callback, usePersistentStorage);
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
