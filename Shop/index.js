document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart');
    const inlineCart = document.querySelector('.inlinecart');
    const closeIcon = inlineCart.querySelector('.fa-square-xmark');
    const cartContent = inlineCart.querySelector('.cartContent');
    const cartBottom = inlineCart.querySelector('.cartBottom');
    let totalPrice = 0;
    const addedProducts = {}; 

    // ---------------Open the Cart---------------
    cartIcon.addEventListener('click', function() { 
        inlineCart.style.display = 'block';
    });

     // ---------------Close the Cart---------------
    closeIcon.addEventListener('click', function() {
        inlineCart.style.display = 'none';
    });

    // ----------------Total Price-------------------
    function calculateTotalPrice(quantity, price) {
        return (quantity * price).toFixed(2); // -----Round to 2 decimal places-----
    }

    // ---------------add product to the cart-----------------
    function updateCart(productName, quantity, price) {
        if (addedProducts[productName]) {
            alert("Product already added to the cart");
            return;
        }

        const itemTotalPrice = calculateTotalPrice(quantity, price);
        totalPrice += parseFloat(itemTotalPrice);

        const itemElement = document.createElement('div');
        itemElement.classList.add('cartItem');
        itemElement.innerHTML = `${productName}<br> Quantity: ${quantity}<br> Price: LKR ${itemTotalPrice}`;

        // ----------------Delete Item------------------
        const deleteButton = document.createElement('a');
        deleteButton.href = '#';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.classList.add('deleteItem');

        deleteButton.addEventListener('click', function() {
            totalPrice -= parseFloat(itemTotalPrice);
            cartContent.removeChild(itemElement);
            cartBottom.querySelector('.totalPrice').textContent = `Price: LKR ${totalPrice.toFixed(2)}`;
            delete addedProducts[productName]; 
        });

        itemElement.appendChild(deleteButton);
        cartContent.appendChild(itemElement);
        cartBottom.querySelector('.totalPrice').textContent = `Total Price: LKR ${totalPrice.toFixed(2)}`;
        addedProducts[productName] = true; 
    }

    // ------------------Add to cart------------------
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productContainer = this.closest('.product');
            const productName = productContainer.querySelector('.product-name').textContent;
            const productPrice = parseFloat(productContainer.querySelector('.price').textContent.slice(4)); // -- Geting the price without "LKR" -- 
            const productQuantity = parseInt(productContainer.querySelector('.quantity').value);
            
            updateCart(productName, productQuantity, productPrice);
        });
    });
});
