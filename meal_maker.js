const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get getAppetizers(){
    return this._courses.appetizers;
  },
  set setAppetizers(newApp){
    this._courses.appetizers.push(newApp);
  },

  get getMains(){
    return this.mains;
  },
  set setMains(newMain){
    this._courses.mains.push(newMain);
  },

  get getDesserts(){
    return this._courses.desserts;
  },
  set setDesserts(newDessert){
    this._courses.mains.push(newDessert);
  },

  get getCourses(){
    return {
      appetizers: this.getAppetizers(),
      mains: this.getMains(),
      dessers: this.getDesserts()
    }
  },

  addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      dishName,
      dishPrice
    }
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName];
    let num = Math.floor(Math.random() * dishes.length);
    return dishes[num];
  },

  generateRandomMeal(){
    let app = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    let price = app.dishPrice + main.dishPrice + dessert.dishPrice;

    return `Your meal is ${app.dishName}, ${main.dishName}, and ${dessert.dishName}. The price is \$${price}`;
  }
}

menu.addDishToCourse("appetizers", "Bread Sticks", 2.00);
menu.addDishToCourse("appetizers", "Tacquitos", 3.50);
menu.addDishToCourse("appetizers", "Salad", 3.00);

menu.addDishToCourse("mains", "Sirloin Steak", 15.25);
menu.addDishToCourse("mains", "Potatoes Au Gratin", 12.00);
menu.addDishToCourse("mains", "Fish & Chips", 10.00);

menu.addDishToCourse("desserts", "Ice Cream", 7.00);
menu.addDishToCourse("desserts", "Cake", 8.00);
menu.addDishToCourse("desserts", "Quackers", 9.00);

let meal = menu.generateRandomMeal();

console.log(meal);













