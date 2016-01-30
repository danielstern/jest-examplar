let React = require("react");
let CartItem = require('./CartItem.js');

module.exports = React.createClass({
  render(){
    return (
      <div>
        {this.props.items.map((item, index)=>{
            return <CartItem key={"item-"+index} locale={this.props.locale} item={item}/>
        })}
      </div>
    )
  }
});
