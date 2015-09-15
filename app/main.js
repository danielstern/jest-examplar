let React = require("react/addons");

let CartItem = require('./components/CartItem.js');
let promotionsHelper = require('./helpers/promotionsHelper.js');

let itemStore = require('./stores/itemStore.js');
let localizationStore = require('./stores/localizationStore.js');

let LocalizationBox = require('./components/LocalizationBox.js');


let CartApp = React.createClass({

    render(){
        return (
            <div>
                <LocalizationBox />
                <h3>{this.props.locale.country} Your Cart ({this.props.items.length})</h3>
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
let locale = {};

itemStore.onChange(()=>{
  items = itemStore.getItems();
  render();
});

localizationStore.onChange(()=>{
  locale = localizationStore.getLocale();
  render();
})

let render = ()=>{
    if (typeof window !== 'undefined') {
      React.render(<CartApp items={items} locale={locale}/>,document.getElementById('mount'));
    }
}


module.exports = CartApp;
