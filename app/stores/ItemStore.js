var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');
let dispatcher = require('./../dispatcher.js');

var items = {};
class ItemsStore extends GenericStore {
  constructor(){
    super();
    restHelper.get('items')
    .then((itemData)=>{
      items = itemData;
      this.triggerListeners();
    });

		dispatcher.register((e)=>{
      if (e.type==="items:change"){
        items = e.items;
        this.triggerListeners();
      }
    })
  }



  getItems(){
    return items;
  }
}

module.exports = new ItemsStore();
