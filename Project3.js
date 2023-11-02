const food_data = require("./food.json")
console.log("Food items in Groceries: ")
console.table(food_data);
console.log();

const vegetables = food_data.filter((groceries) => groceries.category == "Vegetable");
console.log("Food items with category Vegetable: ");
console.table(vegetables);
console.log();

const fruits = food_data.filter((groceries) => groceries.category == "Fruit");
console.log("Food items with category Fruits: ");
console.table(fruits);
console.log();

const protein = food_data.filter((groceries) => groceries.category == "Protein");
console.log("Food items with category Protein: ");
console.table(protein);
console.log();

const nuts = food_data.filter((groceries) => groceries.category == "Nuts");
console.log("Food items with category Nuts: ");
console.table(nuts);
console.log();

const grains = food_data.filter((groceries) => groceries.category == "Grain");
console.log("Food items with category Grains: ");
console.table(grains);
console.log();

const dairy = food_data.filter((groceries) => groceries.category == "Dairy");
console.log("Food items with category Dairy: ");
console.table(dairy);
console.log();

const cal_above_100 = food_data.filter((groceries) => groceries.calorie > 100);
console.log("Food items with calorie above 100: ");
console.table(cal_above_100);
console.log();

const cal_below_100 = food_data.filter((groceries) => groceries.calorie < 100);
console.log("Food items with calorie below 100: ");
console.table(cal_below_100);
console.log();


function compareProteinData(a, b){
    return b.protiens-a.protiens;
}
const  sort_by_pretiens = food_data.sort((compareProteinData));
console.log("List of all the food items from highest protein content to lowest: ");
console.table(sort_by_pretiens);
console.log();


function compareCarbData(a,b){
    return a.cab-b.cab;
}
const sort_by_carbs = food_data.sort((compareCarbData));
console.log("List of all food items with lowest carb content to highest: ");
console.table(sort_by_carbs);
console.log();