/**
 * Created by luyi on 2016/1/18.
 */

'use strict';

/*
const BaseController = require('./BaseController');

module.exports =  class TestController extends BaseController{

}*/

const express = require('express');

let app1 = express();
app1.get('/asd', function(request, response){
    response.send('good');
}).listen(10000);