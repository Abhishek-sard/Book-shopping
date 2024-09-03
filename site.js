// Initialize an empty cart
let cart = [];

// Function to add books to the cart
function addToCart(bookTitle, bookPrice) {
    cart.push({ title: bookTitle, price: bookPrice });
    alert(`${bookTitle} has been added to your cart.`);
    updateCart();
}

// Function to update the cart display on the cart page
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    if (!cartItemsContainer || !totalPriceElement) return; // Check if elements are on the page

    cartItemsContainer.innerHTML = ''; // Clear previous cart items
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.title} - $${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2); // Update total price
}
