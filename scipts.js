let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
const checkoutButton = document.getElementById('checkout');


function updateCart() {
    cartCountElement.textContent = cart.length;
    cartItemsElement.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = Product ${item.id} - $${item.price.toFixed(2)};
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}


function addToCart(productId, price) {
    cart.push({ id: productId, price: parseFloat(price) });
    updateCart();
}


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const price = productElement.getAttribute('data-price');

        addToCart(productId, price);
    });
});


checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    
    alert('Checkout is not implemented in this demo. Your cart contains ' + cart.length + ' items.');
    cart = [];
    updateCart();
});