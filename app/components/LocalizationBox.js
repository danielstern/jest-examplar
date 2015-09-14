let React = require("react/addons");

let LocalizationBox = React.createClass({
  handleCountryChange(event){
    console.log("Change country.");
    this.setState({country:event.target.value});
  },
  getInitialState(){
    console.log("Init locale box.");
    return {
      country:"USA",
    }
  },
  render(){
    return (
      <form role="Language and Currency Preferences">
      <h4>Select Country</h4>
      <select name="country" id="countrySelect" onChange={this.handleCountryChange} value={this.state.country}>
          <option value="USA">United States</option>
          <option value="GB">Great Britain</option>
      </select>
    </form>
    )
  }
});

module.exports = LocalizationBox;
