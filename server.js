require('babel/register');

var express = require('express');
var React = require('react/addons')
var server = new express();

server.set("view engine","ejs");
server.set("views","./");

var items = [{
    id:042089,
    name:"Box",
    description:"This stylish cardboard box will hide you from all sorts of tactical personnel",
    priceUSD:"34.95"
},{
    id:042030,
    name:"Camera",
    description:"What better way to share that beautiful Costa Rican vista with your friends?",
    priceUSD:"155.95"
},{
    id:042031,
    name:"Magazine",
    description:"One can't help but be distracted by this magazine.",
    priceUSD:"9.00"
}];

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
