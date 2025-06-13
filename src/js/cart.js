// cart.js
import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import { renderHeader } from "./utils.mjs";

renderHeader(); // Optional: if you're injecting header content dynamically

const cartItemsContainer = document.createElement("div");
cartItemsContainer.classList.add("cart-items");
document.body.appendChild(cartItemsContainer);

function displayCart() {
  const cart = getLocalStorage("so-cart") || [];

  cartItemsContainer.innerHTML = ""; // Clear any existing content

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");

    itemElement.innerHTML = `
      <img src="${item.Images.PrimaryMedium}" alt="${item.Name}" />
      <h2>${item.Name}</h2>
      <p>$${item.FinalPrice.toFixed(2)}</p>
      <button data-index="${index}">Remove</button>
    `;

    cartItemsContainer.appendChild(itemElement);
    total += item.FinalPrice;
  });

  const totalElement = document.createElement("p");
  totalElement.classList.add("cart-total");
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
  cartItemsContainer.appendChild(totalElement);

  // Add event listeners to "Remove" buttons
  cartItemsContainer.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      removeItem(index);
    });
  });
}

function removeItem(index) {
  const cart = getLocalStorage("so-cart") || [];
  cart.splice(index, 1);
  setLocalStorage("so-cart", cart);
  displayCart(); // Re-render cart
}

// Initialize cart display
displayCart();
