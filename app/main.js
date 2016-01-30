let React = require("react");

let CartItemList = require('./components/CartItemList.js');

let itemStore = require('./stores/itemStore.js');
let localizationStore = require('./stores/localizationStore.js');

let LocalizationBox = require('./components/LocalizationBox.js');
let TotalBox = require('./components/TotalBox.js');


let CartApp = React.createClass({

    render(){
        return (
            <div>
                <LocalizationBox />
                <h3>Your Cart ({this.props.items.length})</h3>
                <CartItemList {...this.props}/>
								<TotalBox {...this.props}/>
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
});

let render = ()=>{
    if (typeof window !== 'undefined') {
      React.render(<CartApp items={items} locale={locale}/>, document.getElementById('mount'));
    }
}

module.exports = CartApp;
