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
}];

server.get('/',function(req,res){
    var app = React.createFactory(require('./app/main.jsx'));

    var generated = React.renderToString(app({
        items
    }));
    res.render('app/index',{app:generated});
});
server.listen(80);
