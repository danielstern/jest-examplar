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

var promotions = [{
    id:[501],
    applyTo:[401],
    reducePriceByUSD:5,
    name:"President's Day Sale"
}];

server.get('/',function(req,res){
    var app = React.createFactory(require('./../app/main.jsx'));

    var generated = React.renderToString(app({
        items,
        conversions,
        promotions
    }));
    res.render('app/index',{app:generated,defaults:JSON.stringify({items,conversions,promotions})});
})
.get("/rates",function(req,res){
  res.json(conversions);
})

let instance = server.listen(80,()=>{console.info("Express listening on port 80.");});
process.on('exit', ()=>{instance.close()});
