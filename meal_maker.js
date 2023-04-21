const menu = {
  _meal: '',
  _price: 0, 

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string'){
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number'){
      return this._price = priceToCheck;
    }
  },

  get todaysSpecial(){
    if (this._meal != '' && typeof this._price === 'number') {
      return 'Today\'s special is Spaghetti for $5!'
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
};

menu.meal = 'Spaghetti';
menu.price = 20;

console.log(menu);
console.log(menu.todaysSpecial)
