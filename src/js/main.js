document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js loaded!");

  const cartButtons = document.querySelectorAll(".add-to-cart");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const itemId = button.getAttribute("data-id") || "unknown-item";

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(itemId);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert("✅ Item added to cart!");
    });
  });
});
