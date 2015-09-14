let React = require("react/addons");

let CartItem = require('./components/CartItem.jsx');
let promotionsHelper = require('./helpers/promotionsHelper.js');

let itemStore = require('./stores/ItemStore.js');

let LocalizationBox = require('./components/LocalizationBox.js');


let CartApp = React.createClass({

    render(){
        return (
            <div>
                <LocalizationBox />
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

let items = [];
itemStore.onChange(()=>{
  items = itemStore.getItems();
  render();
});

let render = ()=>{
    if (typeof window !== 'undefined') {
      React.render(<CartApp items={items}/>,document.getElementById('mount'));
    }
}







module.exports = CartApp;
