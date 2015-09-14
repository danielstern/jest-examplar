var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');

var items = {};
class ItemsStore extends GenericStore {
  constructor(){
    super();
    restHelper.get('items')
    .then((itemData)=>{
      items = itemData;
      this.onChange();
    });
  }

  getItems(){
    return items;
  }
}

module.exports = new ItemsStore();
