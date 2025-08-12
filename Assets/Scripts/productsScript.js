const products = [
    {
        id: 5,
        name: "151 JPN Booster",
        price: "22000",
        img: "Assets/Pics/Productos/Sobres/Pokemon-151-Booster-Pack.webp",
    },
    {
        id: 2,
        name: "Black Bolt JPN Booster",
        price: "10000",
        img: "Assets/Pics/Productos/Sobres/black-bolt-booster.webp",
    },
    /*{
        id: 12,
        name: "White Flare JPN Booster",
        price: "10000",
        img: "Assets/Pics/Productos/Sobres/White_Flare_Booster_Pack.webp",
    },*/
{
        id: 7,
        name: "Glorey of the Team Rocket JPN Booster",
        price: "10000",
        img: "Assets/Pics/Productos/Sobres/Rocket_Booster_Pack.webp",
    },
    {
        id: 1,
        name: "Journey Together JPN Booster",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/battle partners.webp",
    },
    
    {
        id: 3,
        name: "Heat Weave Arena JPN Booster",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/heat weave.webp",
    },
    {
        id: 4,
        name: "Night Wanderer JPN Booster",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/night wanderer booster pack.webp",
    },
    
    {
        id: 6,
        name: "Raging Surf JPN Booster",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/raging surf booster pack.webp",
    },
    
    {
        id: 8,
        name: "Black Flame JPN Booster",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/Ruler-of-the-black-flame-booster-pack.webp",
    },
    {
        id: 10,
        name: "Surging Sparks JPN Booster",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/Super_Electric_Booster_Pack.webp",
    },
    {
        id: 9,
        name: "Shining Treasures JPN Booster",
        price: "20000",
        img: "Assets/Pics/Productos/Sobres/Shining Treasures.webp",
    },
    {
        id: 11,
        name: "Vstar Universe JPN Booster",
        price: "25000",
        img: "Assets/Pics/Productos/Sobres/Vstar_Booster_Pack.webp",
    },
    
];

const extra = [
    {
        id: 1,
        name: "Bonsai Collection x1",
        price: "18000",
        img: "Assets/pics/Productos/Extras/Bonsai.webp",
    },
    {
        id: 2,
        name: "Victiny File Set Promo",
        price: "95000",
        img: "Assets/pics/Productos/Extras/file_set.webp",
    },
   /* {
        id: 3,
        name: "Journey Together ETB",
        price: "140000",
        img: "Assets/pics/Productos/Extras/journey_together.webp",
    },*/
    {
        id: 4,
        name: "Cartuchera Pikachu",
        price: "40000",
        img: "Assets/pics/Productos/Extras/cartuchera_pokemon.webp",
    },
    {
        id: 5,
        name: "Terrarium Collection x1 ",
        price: "22000",
        img: "Assets/pics/Productos/Extras/esferas.webp",
    },
];

// Funcion para crear un producto cualquiera ya sea un sobre o algunos de los "extra"

function createProduct(productData) {
    //creamos el contenedor donde va a estar el producto y
    //le damos su clase
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
        btn.classList.add("clicked");
        setTimeout(() => btn.classList.remove("clicked"), 300);

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
    const mediaQuery = window.matchMedia("(min-width: 760px)");

    // Productos
    const productSection = document.getElementById("product-section");
    const renderProduct = (item) => {
        const newProduct = createProduct(item);
        productSection.appendChild(newProduct);
    };

    if (mediaQuery.matches) {
        products.forEach(renderProduct);
    } else {
        products.slice(0, 2).forEach(renderProduct);

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
            products.slice(2).forEach((item) => {
                const newProduct = createProduct(item);
                newProduct.classList.add("extra");
                productSection.insertBefore(newProduct, viewLess);
            });
        });

        viewLess.addEventListener("click", () => {
            document.querySelectorAll(".extra").forEach((e) => e.remove());
            viewLess.style.display = "none";
            viewMore.style.display = "inline-block";
        });

        productSection.appendChild(viewMore);
        productSection.appendChild(viewLess);
    }

    // Extras
    const extraSection = document.getElementById("extras-section");
    const renderExtra = (item) => {
        const newExtra = createProduct(item);
        extraSection.appendChild(newExtra);
    };

    if (mediaQuery.matches) {
        extra.forEach(renderExtra);
    } else {
        extra.slice(0, 2).forEach(renderExtra);

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
            extra.slice(2).forEach((item) => {
                const newExtra = createProduct(item);
                newExtra.classList.add("extraE");
                extraSection.insertBefore(newExtra, viewLess);
            });
        });

        viewLess.addEventListener("click", () => {
            document.querySelectorAll(".extraE").forEach((e) => e.remove());
            viewLess.style.display = "none";
            viewMore.style.display = "inline-block";
        });

        extraSection.appendChild(viewMore);
        extraSection.appendChild(viewLess);
    }
    mediaQuery.addEventListener("change", (e) => {
        location.reload(); // Reload si cambia de mobile a desktop o viceversa
    });
});
