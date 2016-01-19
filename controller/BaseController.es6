'use strict';
import * as Server from '../config/Server';
var http = require('http');
export default class BaseController{

    constructor(option){
        if(!option) return;
        this.basePath = option.basePath ? option.basePath + '' : '';
        this.port = Server.port;
    }
}

BaseController.listen = function(port){
    http.createServer(function(request, response){
        
    }).listen(Server.port);
}