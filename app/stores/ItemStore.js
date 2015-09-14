var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');

var items = {};
class ItemsStore extends GenericStore {
  constructor(){
    super();
    console.log("Getting item.");
    restHelper.get('items')
    .then((itemData)=>{
      console.info("Got items...",itemData);
      items = itemData;
      this.triggerListeners();
    });
  }

  getItems(){
    return items;
  }
}

module.exports = new ItemsStore();
