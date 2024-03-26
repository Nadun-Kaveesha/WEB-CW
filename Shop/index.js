document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart');
    const inlineCart = document.querySelector('.inlinecart');
    const closeIcon = inlineCart.querySelector('.fa-square-xmark');
    const cartContent = inlineCart.querySelector('.cartContent');
    const cartBottom = inlineCart.querySelector('.cartBottom');
    let totalPrice = 0;
    const addedProducts = {}; // Store added products

    cartIcon.addEventListener('click', function() {
        inlineCart.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        inlineCart.style.display = 'none';
    });

    // Function to calculate total price based on quantity
    function calculateTotalPrice(quantity, price) {
        return (quantity * price).toFixed(2); // Round to 2 decimal places
    }

    // Function to update cart content and total price
    function updateCart(productName, quantity, price) {
        if (addedProducts[productName]) {
            alert("Product already added to the cart");
            return;
        }

        const itemTotalPrice = calculateTotalPrice(quantity, price);
        totalPrice += parseFloat(itemTotalPrice);

        const itemElement = document.createElement('div');
        itemElement.classList.add('cartItem');
        itemElement.innerHTML = `${productName} - Qty: ${quantity} - Price: $${itemTotalPrice}`;

        const deleteButton = document.createElement('a');
        deleteButton.href = '#';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add('deleteItem');

        deleteButton.addEventListener('click', function() {
            totalPrice -= parseFloat(itemTotalPrice);
            cartContent.removeChild(itemElement);
            cartBottom.querySelector('.totalPrice').textContent = `Price: $${totalPrice.toFixed(2)}`;
            delete addedProducts[productName]; // Remove product from addedProducts object
        });

        itemElement.appendChild(deleteButton);
        cartContent.appendChild(itemElement);
        cartBottom.querySelector('.totalPrice').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        addedProducts[productName] = true; // Add product to addedProducts object
    }

    // Handle add to cart button click
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productContainer = this.closest('.product');
            const productName = productContainer.querySelector('.product-name').textContent;
            const productPrice = parseFloat(productContainer.querySelector('.price').textContent.slice(1)); // Extracting price without '$'
            const productQuantity = parseInt(productContainer.querySelector('.quantity').value);
            
            updateCart(productName, productQuantity, productPrice);
        });
    });
});
