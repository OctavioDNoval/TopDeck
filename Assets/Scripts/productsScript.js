const products = [
    {
        id: 1,
        name: "Battle Partenrs Booster Pack",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/battle partners.webp",
    },
    {
        id: 2,
        name: "Black Bolt Booster Pack",
        price: "10000",
        img: "Assets/Pics/Productos/Sobres/black-bolt-booster.png",
    },
    {
        id: 3,
        name: "Heat Weave Booster Pack",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/heat weave.png",
    },
    {
        id: 4,
        name: "Night Wanderer Booster Pack",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/night wanderer booster pack.png",
    },
    {
        id: 5,
        name: "151 Booster Pack",
        price: "22000",
        img: "Assets/Pics/Productos/Sobres/Pokemon-151-Booster-Pack.webp",
    },
    {
        id: 6,
        name: "Raging Surf",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/raging surf booster pack.png",
    },
    {
        id: 7,
        name: "Team Rocket",
        price: "10000",
        img: "Assets/Pics/Productos/Sobres/Rocket_Booster_Pack.jpg",
    },
    {
        id: 8,
        name: "Black Flame",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/Ruler-of-the-black-flame-booster-pack.webp",
    },
    {
        id: 9,
        name: "Shining Treasures",
        price: "20000",
        img: "Assets/Pics/Productos/Sobres/Shining Treasures.webp",
    },
    {
        id: 10,
        name: "Super Electric",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/Super_Electric_Booster_Pack.webp",
    },
    {
        id: 11,
        name: "Vstar Universe",
        price: "25000",
        img: "Assets/Pics/Productos/Sobres/Vstar_Booster_Pack.webp",
    },
    {
        id: 12,
        name: "White Flare",
        price: "10000",
        img: "Assets/Pics/Productos/Sobres/White_Flare_Booster_Pack.png",
    },
];

function createProduct(productData) {
    const container = document.createElement("div");
    container.classList.add("product-container");

    const img = document.createElement("img");
    img.classList.add("product-img");
    img.src = productData.img;
    img.alt = productData.name;

    const productName = document.createElement("h4");
    productName.classList.add("product-name");
    productName.innerHTML = productData.name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.innerHTML = `$${productData.price}`;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("add-product-btn");
    btn.dataset.id = productData.id;
    btn.dataset.img = productData.img;
    btn.dataset.name = productData.name;
    btn.dataset.price = productData.price;
    btn.innerHTML = "+";
    btn.addEventListener("click", () => {
        const product = {
            id: btn.dataset.id,
            img: btn.dataset.img,
            name: btn.dataset.name,
            price: parseInt(btn.dataset.price),
            quantity: 1,
        };

        //Agarramos el carrito del local storage y si es nulo
        //hace un carrito (array) vacio
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find((item) => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push(product);
        }

        //Agarramos y guardamos en la key "cart" los datos del array
        //cart que tenemos ya actualizados
        localStorage.setItem("cart", JSON.stringify(cart));
        actualizarBotonCarrito(cart);

        console.log(cart);
    });

    container.appendChild(img);
    container.appendChild(productName);
    container.appendChild(productPrice);
    container.appendChild(btn);

    return container;
}

document.addEventListener("DOMContentLoaded", () => {
    const productSection = document.getElementById("product-section");

    for (let i = 0; i < 2; i++) {
        const newProduct = createProduct(products[i]);
        productSection.appendChild(newProduct);
    }

    const viewMore = document.createElement("button");
    viewMore.innerHTML = "Ver más";
    viewMore.classList.add("view-btn");

    const viewLess = document.createElement("button");
    viewLess.innerHTML = "Ver menos";
    viewLess.classList.add("view-btn");
    viewLess.style.display = "none";

    viewMore.addEventListener("click", () => {
        viewMore.style.display = "none";
        viewLess.style.display = "inline-block";
        for (let i = 2; i < products.length; i++) {
            const newProduct = createProduct(products[i]);
            newProduct.classList.add("extra");
            productSection.insertBefore(newProduct, viewLess);
        }
    });

    viewLess.addEventListener("click", () => {
        const extras = document.querySelectorAll(".extra");
        extras.forEach((e) => e.remove());

        viewLess.style.display = "none";
        viewMore.style.display = "inline-block";
    });

    productSection.appendChild(viewMore);
    productSection.appendChild(viewLess);
});
