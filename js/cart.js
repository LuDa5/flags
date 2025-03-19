document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-id");
      cart.push(productId);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.getElementById("cart-count").textContent = cart.length;
    });
  });

  if (document.getElementById("cart-items")) {
    const cartItems = document.getElementById("cart-items");
    cart.forEach((id) => {
      const li = document.createElement("li");
      li.textContent = "Product " + id;
      cartItems.appendChild(li);
    });

    document
      .getElementById("clear-cart")
      .addEventListener("click", function () {
        localStorage.removeItem("cart");
        location.reload();
      });
  }
});
