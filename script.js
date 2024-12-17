// Function to remove an item from the cart
function removeItem(button) {
    // Remove the parent cart-item element of the button clicked
    const cartItem = button.closest('.cart-item');
    cartItem.remove();

    // Update total price after item removal
    updateTotalPrice();
}

// Function to update the total price after an item is removed
function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

    cartItems.forEach(item => {
        const priceText = item.querySelector('.item-info p').textContent;
        const price = parseFloat(priceText.replace('$', '').trim());
        totalPrice += price;
    });

    // Update total in the summary
    const totalElement = document.querySelector('.cart-summary p');
    totalElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Placeholder function for checkout button
function checkout() {
    alert("Proceeding to checkout...");
}

// Placeholder function for payment button
function pay() {
    alert("Proceeding to payment...");
}
