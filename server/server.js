"use strict";

require('babel/register');

var express = require('express');
var React = require('react/addons')
var server = new express();

server.set("view engine","ejs");
server.set("views","./");
server.use('/bower_components',  express.static(__dirname + '/../bower_components'));
server.use('/',  express.static(__dirname + '/../.tmp'));

var items = require('./items.js');

var conversions = {
  USDtoCAD:1.5,
  USDtoGBP:0.9
};

var promotions = require("./promotions.json");

var locale = {
  country:"USA"
}


// simulate latency
//server.use(function(req,res,next){setTimeout(next,3000)});


server.get('/',function(req,res){
    var app = React.createFactory(require('./../app/main.js'));

    var generated = React.renderToString(app({
        items,
        conversions,
        promotions,
        locale
    }));
    res.render('app/index',{app:generated,defaults:JSON.stringify({items,conversions,promotions})});
})
.get("/rates",function(req,res){
  res.json(conversions);
})
.get("/items",function(req,res){
  res.json(items);
})
.get("/locale",function(req,res){
  res.json(locale);
})
.get("/promotions",function(req,res){
  res.json(promotions);
})

let instance = server.listen(80,()=>{console.info("Express listening on port 80.");});
module.exports = instance;
