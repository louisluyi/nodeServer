'use strict';
import {port} from '../config/Server';
import http from 'http';

var controllers = [];
export default class BaseController{

    constructor(option){
        if(!option) return;
        this.basePath = option.basePath ? option.basePath + '' : '';
        this.port = port;
    }
}
console.log(port);
BaseController.begin = function(){
    http.createServer(function(request, response){
        console.log(request);
    }).listen(port);
}