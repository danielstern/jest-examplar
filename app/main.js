let React = require("react/addons");

let CartItemList = require('./components/CartItemList.js');

let itemStore = require('./stores/itemStore.js');
let localizationStore = require('./stores/localizationStore.js');

let LocalizationBox = require('./components/LocalizationBox.js');


let CartApp = React.createClass({

    render(){
        return (
            <div>
                <LocalizationBox />
                <h3>{this.props.locale.country} Your Cart ({this.props.items.length})</h3>
                <CartItemList items={this.props.items} locale={this.props.locale}/>
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
