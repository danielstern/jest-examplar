require('babel/register');

var express = require('express');
var React = require('react/addons')
var server = new express();

server.set("view engine","ejs");
server.set("views","./");
server.use('/bower_components',  express.static(__dirname + '/bower_components'));

var items = require('./items.js');

var conversions = {
  USDtoCAD:1.5,
  USDtoGBP:0.9

};

var promotions = [{
    applyTo:[042089],
    reducePriceByUSD:5
}];


server.get('/',function(req,res){
    var app = React.createFactory(require('./app/main.jsx'));

    var generated = React.renderToString(app({
        items
    }));
    res.render('app/index',{app:generated});
})
.get("/rates",function(req,res){
  res.json(conversions);
})

server.listen(80);
