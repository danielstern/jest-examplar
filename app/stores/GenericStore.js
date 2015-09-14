"use strict";

var changeListeners = [];

export default class GenericStore {
  constructor(){

  }

  triggerListeners(){
      changeListeners.forEach(function(listener){
          listener();
      })
  };

  onChange(listener){
      changeListeners.push(listener);
  }

}

