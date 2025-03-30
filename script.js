document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartContainer = document.getElementById("cart-items");

    
    const products = [
        { "id": 1, "name": "Shoes", "price": 50 },
        { "id": 2, "name": "Phones", "price": 700 },
        { "id": 3, "name": "Accessories", "price": 20 },
        { "id": 4, "name": "TV sets", "price": 500 }
    ];

    function renderCart() {
        cartContainer.innerHTML = "";
        cart.forEach((item, index) => {
            cartContainer.innerHTML += `
                <p>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>
            `;
        });
    }
    
    window.addToCart = (id) => {
        const product = products.find(p => p.id === id);
        if (product) {
            cart.push(product);
            renderCart();
        }
    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        renderCart();
    };


    const productGrid = document.querySelector(".product-grid");
    productGrid.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product-card");
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(div);
    });
});
