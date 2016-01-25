'use strict';
const server = require('../config/Server.js');
const http = require('http');

class BaseController{
    constructor(){
        if(!this.path) return;
        controllerDispatch.addController(this);
    }
}

const controllerDispatch = function(){
    let cMap = new Map();
    return {
        addController:function(controller){
            cMap.set(controller.path, controller);
        },
        getController:function(path){
            return cMap.get(path);
        }
    }
}();
BaseController.begin = function(){
    http.createServer(function(request, response){
        if(!request.uri) return;
        const path = request.uri.match(/(\/[^?^#]+)+/)[1];

    }).listen(server.port);
}

module.exports = BaseController;