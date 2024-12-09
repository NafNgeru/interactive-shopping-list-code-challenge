//Access the HTML buttons, shopping list, and user input
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const shoppingList = document.getElementById('shoppingList');
const clearListButton = document.getElementById('clearListButton');

// Declaring the array to store shopping list items
let items = [];

// Function to create the shopping list that will be displayed
function createList(arr) {
  shoppingList.innerHTML = '';
  //Create a for loop to include each item added to the shopping list/items array
  for (let i = 0; i < arr.length; i++) {
        const newItem = document.createElement('li'); // Create a new list item
        newItem.textContent = arr[i].text; // Set the new array item's text content
        
        shoppingList.appendChild(newItem); // Add the list item to the DOM

    }    
    
  };

// Event listeners for the two 'Add Item' and 'Clear List' buttons

//Add item to the list
addItemButton.addEventListener('click', () => {
  //Create a variable to hold each user input
  const userInput = itemInput.value.trim(); 
  if (userInput != '') {
    items.push({text: userInput});
    createList(items);
    itemInput.value = ''; //Ensure the item input box is empty after adding each input
  } else {
    alert("Invalid item. Try Again.");
  }
});

// Clear the list when the user presses the clear button
clearListButton.addEventListener('click', () => {
  items = []; //Empty the array
  createList(items);
});