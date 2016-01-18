'use strict';
var Server = require('../config/Server');
var http = require('http');
class BaseController{

    basePath = '';
    successStatus = 200;
    notFoundStatus = 404;
    errorStatus = 500;

    constructor(option){
        if(!option) return;
        this.basePath = option.basePath ? option.basePath + '' : '';
    }
}

BaseController.listen = function(port){
    http.createServer(function(request, response){
        
    }).listen(Server.port);
}

module.exports = BaseController;