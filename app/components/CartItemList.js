let React = require("react/addons");
let promotionsHelper = require('./../helpers/promotionsHelper.js');
let CartItem = require('./CartItem.js');

module.exports = React.createClass({
  render(){
    return (
      <div>
        {this.props.items.map((item, index)=>{
            return <CartItem key={"item-"+index} locale={this.props.locale} promotions={promotionsHelper.getPromotionsForItem(this.props.promotions,item)} item={item}/>
        })}
      </div>
    )
  }
});
