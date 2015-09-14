module.exports = {
  getPromotionsForItem(promotions = [],item){
    return promotions.filter(p => p.applyTo.find(i => +i === +item.id));
  },
};
