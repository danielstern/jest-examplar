let React = require("react/addons");

let CartItem = require('./CartItem.jsx');

let CartApp = React.createClass({
    render:function(){
        return (
            <div>
                <h3>Your Cart ({this.props.items.length})</h3>
                <div>
                {this.props.items.map(function(item, index){
                    <div>
                        An Item.
                        <CartItem key={index} item={item}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
});

module.exports = CartApp;
