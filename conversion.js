let quantities = [];
let ingredients = [];

let quantitiesInput = document.getElementById("quantity-input");
let ingredientsInput = document.getElementById("ingredient-input");

function addItem() {
    let quantity = quantityInput.value;
    let ingredient = ingredientInput.value;

    if (quantity && ingredient) {
        quantities.push(quanitity);
        ingredient.push(ingredients);
        displayList();
        quantityInput.value = "";
        ingredientInput.value = "";
    }

}

function displayList() {

}