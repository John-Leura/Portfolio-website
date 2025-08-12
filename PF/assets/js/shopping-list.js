// JavaScript Document

// Bind HTML elements to variables
var addBtn = document.getElementById('addToList');
var elList = document.getElementById('list');
var counter = document.getElementById('counter'); // Counter span element

// Function to update the counter based on number of items
function updateCount() {
  // Only count <div> children inside #list
  var itemCount = elList.getElementsByClassName('alert').length;
  counter.textContent = itemCount;
}

// Function to add an item to the shopping list
function addItem() {
  var newEl, newElText;
  var itemName = document.getElementById('itemName');

  // Check if input is empty
  if (itemName.value.trim() === '') {
    window.alert('Item name cannot be blank');
    return; // Stop function early if empty
  }

  // Create new div element and text node
  newEl = document.createElement('div');
  newElText = document.createTextNode(itemName.value);

  // Add Bootstrap classes to style
  newEl.classList.add('alert', 'alert-info');

  // Add text to new div
  newEl.appendChild(newElText);

  // Extra credit: clicking the item removes it and updates count
  newEl.addEventListener('click', function () {
    elList.removeChild(newEl);
    updateCount();
  }, false);

  // Append to shopping list and clear input
  elList.appendChild(newEl);
  itemName.value = ''; // Clear the input box

  // Update the counter
  updateCount();
}

// When "Add Item" button is clicked, run addItem()
addBtn.addEventListener('click', addItem, false);

// Initial count (if Tomatoes are there)
updateCount();
