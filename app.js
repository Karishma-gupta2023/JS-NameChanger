const names = [
  "Aarav",
  "Sanya",
  "Vikram",
  "Neha",
  "Rohan",
  "Priya",
  "Amit",
  "Meera",
  "Rajiv",
  "Ananya",
];
let currentIndex = 0;

const nameDisplay = document.getElementById("name-display");

// Function to update the displayed name
function updateName() {
  nameDisplay.textContent = names[currentIndex];
}

// Initial display
updateName();

// Function for the Next button
function next() {
  currentIndex = (currentIndex + 1) % names.length;
  updateName();
}

// Function for the Previous button
function previous() {
  currentIndex = (currentIndex - 1 + names.length) % names.length;
  updateName();
}
