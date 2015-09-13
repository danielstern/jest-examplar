export default class GenericStore {
  constructor(){
    this.changeListeners = [];
  }



  triggerListeners(){
      changeListeners.forEach(function(listener){
          listener(groceryItems)	;
      })
  };

  onChange(listener){
      changeListeners.push(listener);
  }

}

