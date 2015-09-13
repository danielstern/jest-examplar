let React = require("react/addons");

let CartItem = require('./components/CartItem.jsx');
let promotionsHelper = require('./helpers/promotionsHelper.js');

let CartApp = React.createClass({

    render(){
        return (
            <div>
                <h3>Your Cart ({this.props.items.length})</h3>
                <div>
                {this.props.items.map((item, index)=>{
                    return <CartItem key={"item-"+index} promotions={promotionsHelper.getPromotionsForItem(this.props.promotions,item)} item={item}/>
                })}
                </div>
            </div>
        )
    }
});

module.exports = CartApp;
