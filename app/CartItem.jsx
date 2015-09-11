let React = require('react/addons');

module.exports = React.createClass({
    render(){
        return (
            <section>
                <h4>{this.props.item.name}</h4>
                <p role="price">Your price - <span id="CartItemPriceDisplay">${this.props.item.priceUSD}</span></p>
                <p role="description">{this.props.item.description}</p>
                <form>
                    <button role="remove">Remove this item from the cart</button>
                </form>
            </section>
        )
    }
})
