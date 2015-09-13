let React = require("react/addons");

let CartItem = require('./components/CartItem.jsx');

let CartApp = React.createClass({
    getPromotionsForItem(item){
      return this.props.promotions.filter(p => p.applyTo.find(i => +i === +item.id));
    },
    render(){
        return (
            <div>
                <h3>Your Cart ({this.props.items.length})</h3>
                <div>
                {this.props.items.map((item, index)=>{
                    return <CartItem key={"item-"+index} promotions={this.getPromotionsForItem(item)} item={item}/>
                })}
                </div>
            </div>
        )
    }
});

module.exports = CartApp;
