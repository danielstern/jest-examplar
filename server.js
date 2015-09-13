require('babel/register');

var express = require('express');
var React = require('react/addons')
var server = new express();

server.set("view engine","ejs");
server.set("views","./");

var items = require('./items.js');

var promotions = [{
    applyTo:[042089],
    reducePriceByUSD:5
}];

var conversions = {
    USDtoCAD:1.5,
    USDtoGBP:0.9
};

server.get('/',function(req,res){
    var app = React.createFactory(require('./app/main.jsx'));

    var generated = React.renderToString(app({
        items
    }));
    res.render('app/index',{app:generated});
});

server.listen(80);
