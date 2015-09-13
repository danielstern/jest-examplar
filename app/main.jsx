let React = require("react/addons");

let CartItem = require('./components/CartItem.jsx');

let CartApp = React.createClass({
    render(){
        return (
            <div>
                <h3>Your Cart ({this.props.items.length})</h3>
                <div>
                {this.props.items.map(function(item, index){
                    return <CartItem key={"item-"+index} item={item}/>
                })}
                </div>
            </div>
        )
    }
});

module.exports = CartApp;
