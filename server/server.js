"use strict";

require('babel-core/register');

var express = require('express');
var ReactDOMServer = require('react-dom/server');
var React = require('react');
var server = new express();

server.set("view engine","ejs");
server.set("views","./");
server.use('/bower_components',  express.static(__dirname + '/../bower_components'));
server.use('/',  express.static(__dirname + '/../.tmp'));
server.use('/',  express.static(__dirname + '/../app'));

var items = require('./items.js');

var conversions = {
  USDtoCAD:1.5,
  USDtoGBP:0.9
};


var locale = {
  country:"USA"
}


// simulate latency
//server.use(function(req,res,next){setTimeout(next,3000)});


server.get('/',function(req,res){
    var app = React.createFactory(require('./../app/main.js'));

    var generated = ReactDOMServer.renderToString(app({
        items,
        conversions,
        locale
    }));
	
    res.render('app/index',{app:generated,defaults:JSON.stringify({items,conversions})});
})
.get("/rates",function(req,res){
  res.json(conversions);
})
.get("/items",function(req,res){
  res.json(items);
})
.delete("/items/:id",function(req,res){
	items = items.filter(item => req.params.id !== item.id);
})
.get("/locale",function(req,res){
  res.json(locale);
});

let instance = server.listen(80,()=>{console.info("Express listening on port 80.");});
module.exports = instance;
