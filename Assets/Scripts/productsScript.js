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
        name: "Glory of the Team Rocket JPN Booster",
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
        name: "Shiny Treasure JPN Booster",
        price: "20000",
        img: "Assets/Pics/Productos/Sobres/Shining Treasures.webp",
    },
    {
        id: 11,
        name: "VSTAR Universe (JP) - Booster",
        price: "$24.999ARS",
        img: "Assets/Pics/Productos/Sobres/VSTARUNIVERSE_FOTO.png",
    },
    {
        id:13,
        name:"Snow Hazard JPN Booster",
        price:"6000",
        img:"Assets/Pics/Productos/Sobres/snow-hazard-booster.webp",
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

const mediaQuery = window.matchMedia("(min-width: 760px)");
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

function createViewMoreButton(dataArray, section, startIndex, extraClass) {
    const viewMore = document.createElement("button");
    viewMore.innerHTML = "Ver más";
    viewMore.classList.add("view-btn");

    viewMore.addEventListener("click", () => {
        viewMore.style.display = "none";

        // Mostrar el botón "Ver menos"
        const viewLess = section.querySelector(".view-less-btn");
        viewLess.style.display = "inline-block";

        // Agregar los elementos extra
        dataArray.slice(startIndex).forEach((item) => {
            const newItem = createProduct(item);
            newItem.classList.add(extraClass);
            section.insertBefore(newItem, viewLess);
        });
    });

    return viewMore;
}

function createViewLessButton(section, extraClass) {
    const viewLess = document.createElement("button");
    viewLess.innerHTML = "Ver menos";
    viewLess.classList.add("view-btn", "view-less-btn");
    viewLess.style.display = "none";

    viewLess.addEventListener("click", () => {
        // Eliminar los elementos extra
        section.querySelectorAll(`.${extraClass}`).forEach((e) => e.remove());

        viewLess.style.display = "none";

        // Volver a mostrar el botón "Ver más"
        const viewMore = section.querySelector(".view-btn:not(.view-less-btn)");
        viewMore.style.display = "inline-block";
    });

    return viewLess;
}

document.addEventListener("DOMContentLoaded", () => {
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

        viewMore = createViewMoreButton(products, productSection, 2, "extra");
        viewLess = createViewLessButton(productSection, "extra");

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

        viewMore = createViewMoreButton(extra, extraSection, 2, "extraE");
        viewLess = createViewLessButton(extraSection, "extraE");

        extraSection.appendChild(viewMore);
        extraSection.appendChild(viewLess);
    }
    mediaQuery.addEventListener("change", (e) => {
        location.reload(); // Reload si cambia de mobile a desktop o viceversa
    });
});

const sortProducts = document.getElementById("sort-products");
sortProducts.addEventListener("change", (e) => {
    sortAndRenderProducts(e.target.value);
});

const sortExtra = document.getElementById("sort-extra");
sortExtra.addEventListener("change", (e) => {
    sortAndRenderExtras(e.target.value);
});

function sortAndRenderProducts(option) {
    let sortedProducts = [...products];
    const productSection = document.getElementById("product-section");

    switch (option) {
        case "Precio-mayor":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "Precio-menor":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "nombre":
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "relevancia":
        default:
            sortedProducts = [...products];
            break;
    }

    const renderProduct = (item) => {
        const newProduct = createProduct(item);
        productSection.appendChild(newProduct);
    };

    productSection.innerHTML = "";
    if (mediaQuery.matches) {
        sortedProducts.forEach(renderProduct);
    } else {
        sortedProducts.slice(0, 2).forEach(renderProduct);

        viewMore = createViewMoreButton(sortedProducts, productSection, 2, "extra");
        viewLess = createViewLessButton(productSection, "extra");

        productSection.appendChild(viewMore);
        productSection.appendChild(viewLess);
    }
}

function sortAndRenderExtras(option) {
    let sortedExtras = [...extra];
    const extraSection = document.getElementById("extras-section");

    switch (option) {
        case "Precio-mayor":
            sortedExtras.sort((a, b) => b.price - a.price);
            break;
        case "Precio-menor":
            sortedExtras.sort((a, b) => a.price - b.price);
            break;
        case "nombre":
            sortedExtras.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "relevancia":
        default:
            sortedExtras = [...products];
            break;
    }

    const renderExtra = (item) => {
        const newExtra = createProduct(item);
        extraSection.appendChild(newExtra);
    };

    extraSection.innerHTML = "";
    if (mediaQuery.matches) {
        sortedExtras.forEach(renderExtra);
    } else {
        sortedExtras.slice(0, 2).forEach(renderExtra);

        viewMore = createViewMoreButton(sortedExtras, extraSection, 2, "extraE");
        viewLess = createViewLessButton(extraSection, "extraE");

        extraSection.appendChild(viewMore);
        extraSection.appendChild(viewLess);
    }
}
