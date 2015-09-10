module.exports = React.createClass({
    render:()=>{
        return (
            <div>
                <h4>A Cart Item</h4>
                <div>{this.props.item.name}</div>
            </div>
        )
    }
})
