// Get the elements
let cartItemTextInput = document.getElementById("cartItemTextInput");
let addButton = document.getElementById("addBtn");
let cartItemsList = document.createElement("ul");

// Append the unordered list to the 'row' class div
let rowContainer = document.querySelector(".row");
rowContainer.appendChild(cartItemsList);

// Add event listener to the add button
addButton.addEventListener("click", function() {
  let inputValue = cartItemTextInput.value;

  // Only add item if input is not empty
  if (inputValue.trim() !== "") {
    let listItem = document.createElement("li");
    listItem.classList.add("cart-item");
    listItem.textContent = inputValue;
    cartItemsList.appendChild(listItem);

    // Clear input after adding the item
    cartItemTextInput.value = "";
  }
});
