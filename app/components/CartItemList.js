let React = require("react/addons");
let promotionsHelper = require('./../helpers/promotionsHelper.js');
let CartItem = require('./CartItem.js');

module.exports = React.createClass({
	getPromotions(item){
		return promotionsHelper.getPromotionsForItem(this.props.promotions,item);
	},
  render(){
		//debugger;
    return (
      <div>
        {this.props.items.map((item, index)=>{
            return <CartItem key={"item-"+index} locale={this.props.locale} promotions={this.getPromotions(item)} item={item}/>
        })}
      </div>
    )
  }
});
