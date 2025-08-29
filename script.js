// 🎯 Part 1: Basics

// Variables & conditionals
let username = prompt("Enter your name:");
if (username) {
  document.getElementById("greeting").textContent = `Hello, ${username}!`;
} else {
  document.getElementById("greeting").textContent = "Hello, guest!";
}

//  Part 2: Functions

function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(50, 3); // Example: price=50, qty=3
  document.getElementById("total").textContent = `Total is $${total}`;
}

// Another function example
function formatName(name) {
  return name.trim().toUpperCase();
}
console.log(formatName("  JavaScript  ")); // "JAVASCRIPT"

// Part 3: Loops

let fruits = ["🍎 Apple", "🍌 Banana", "🍒 Cherry"];

function listFruits() {
  let list = document.getElementById("fruit-list");
  list.innerHTML = ""; // clear before re-adding
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
}

// Another loop example: countdown
for (let i = 3; i > 0; i--) {
  console.log(`Countdown: ${i}`);
}

// 🌐Part 4: DOM Manipulation

document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

function changeText() {
  document.getElementById("domText").textContent =
    "Text changed by JavaScript!";
}
changeText(); // Run on load
