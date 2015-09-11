let React = require('react/addons');

module.exports = React.createClass({
    render(){
        return (
            <div>
                <div>{this.props.item.name}</div>
                <div>{this.props.item.priceUSD}</div>
            </div>
        )
    }
})
