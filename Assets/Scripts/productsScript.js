const products = [
    //ID: Fromato XXXXXX, ej 010001. Primeros 2 digitos son el tipo. 01 = Pokemon | 02 = One Piece | 03 = Dragon Ball ... Los otros digitos suben a medida que se agreguen productos | LISTA COMPLETA EN DISCORD
    //SOBRES DESTACADOS (PRIMEROS 3)
    {
        id: 010015,
        name: "Pokémon TCG - VSTAR Universe (JP) Booster Pack",
        price: "36000",
        img: "Assets/Pics/Productos/Sobres/VSTARUNIVERSE_FOTO.png",
    },
    {
        id: 030001,
        name: "DBS Fusion World TCG - Beyond the Limits (JP) Booster Pack",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/DB_FB04_FOTO.webp",
    },
    {
        id: 020001,
        name: "One Piece TCG - Anime 25th Collection (JP) Booster Pack",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/OP_25TH_FOTO.webp",
    },
    //SOBRES HIGH-END
    {
        id: 010016,
        name: "Pokémon TCG - Pokémon GO (JP) - Booster Pack",
        price: "14000",
        img: "Assets/Pics/Productos/Sobres/POKEGO_FOTO.webp",
    },
    {
        id: 010012,
        name: "Pokémon TCG - 151 (JP) - Booster Pack",
        price: "26000",
        img: "Assets/Pics/Productos/Sobres/TERASTALFESTIVAL_FOTO.webp",
    },
    {
        id: 010013,
        name: "Pokémon TCG - Terastal Festival (JP) - Booster Pack",
        price: "30000",
        img: "Assets/Pics/Productos/Sobres/TERASTALFESTIVAL_FOTO.webp",
    },
    {
        id: 010014,
        name: "Pokémon TCG - Shiny Treasure ex (JP) - Booster Pack",
        price: "32000",
        img: "Assets/Pics/Productos/Sobres/TERASTALFESTIVAL_FOTO.webp",
    },
    //SOBRES NORMALES - ORDEN: POKEMON -> ONE PIECE -> DRAGON BALL
    {
        id: 010010,
        name: "Pokémon TCG - Black Bolt (JP) - Booster Pack",
        price: "12000",
        img: "Assets/Pics/Productos/Sobres/GLORYTEAMROCKET_FOTO.webp",
    },
    {
        id: 010011,
        name: "Pokémon TCG - White Flare (JP) - Booster Pack",
        price: "12000",
        img: "Assets/Pics/Productos/Sobres/GLORYTEAMROCKET_FOTO.webp",
    },
    {
        id: 010008,
        name: "Pokémon TCG - Glory of the Team Rocket (JP) - Booster Pack",
        price: "12000",
        img: "Assets/Pics/Productos/Sobres/GLORYTEAMROCKET_FOTO.webp",
    },
    {
        id: 010009,
        name: "Pokémon TCG - Mega Inferno X (JP) - Booster Pack",
        price: "12000",
        img: "Assets/Pics/Productos/Sobres/GLORYTEAMROCKET_FOTO.webp",
    },
    {
        id: 010006,
        name: "Pokémon TCG - Mega Brave (JP) - Booster Pack",
        price: "10000",
        img: "Assets/Pics/Productos/Sobres/GLORYTEAMROCKET_FOTO.webp",
    },
    {
        id: 010007,
        name: "Pokémon TCG - Mega Symphonia (JP) - Booster Pack",
        price: "10000",
        img: "Assets/Pics/Productos/Sobres/GLORYTEAMROCKET_FOTO.webp",
    },
    {
        id: 010004,
        name: "Pokémon TCG - Ruler of the Black Flame (JP) - Booster Pack",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/GLORYTEAMROCKET_FOTO.webp",
    },
    {
        id: 010005,
        name: "Pokémon TCG - Super Electric Breaker (JP) - Booster Pack",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/SUPERELECTRICBREAKER_FOTO.webp",
    },
    {
        id: 010003,
        name: "Pokémon TCG - Raging Surf (JP) - Booster Pack",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/GLORYTEAMROCKET_FOTO.webp",
    },
    {
        id: 010002,
        name: "Pokémon TCG - Battle Partners (JP) - Booster Pack",
        price: "7000",
        img: "Assets/Pics/Productos/Sobres/BATTLEPARTNERS_FOTO.webp",
    },
    {
        id: 010001,
        name: "Pokémon TCG - Night Wanderer (JP) - Booster Pack",
        price: "6000",
        img: "Assets/Pics/Productos/Sobres/NIGHTWANDERER_FOTO.webp",
    },
    /*
    {
        id: 10,
        name: "Surging Sparks (JP) - Booster",
        price: "9000",
        img: "Assets/Pics/Productos/Sobres/Super_Electric_Booster_Pack.webp",
    },
    {
        id: 9,
        name: "Shiny Treasure (JP) - Booster",
        price: "20000",
        img: "Assets/Pics/Productos/Sobres/Shining Treasures.webp",
    },
    {
        id:13,
        name:"Snow Hazard (JP) - Booster",
        price:"6000",
        img:"Assets/Pics/Productos/Sobres/snow-hazard-booster.webp",
    },*/
];

const extra = [
    {
        id: 1,
        name: "Figura Pokémon - Sylveon - Moncolle / Takara Tomy",
        price: "24999",
        img: "Assets/pics/Productos/Extras/SYLVEON_MONCOLLE_FOTO.webp",
    },
    {
        id: 2,
        name: "Figura Pokémon - Terrarium Collection Vol. 15 - Re-Ment (x1 Fig. Aleatoria)",
        price: "40000",
        img: "Assets/pics/Productos/Sobres/TERRARIUM15_FOTO.webp",
    },
    {
        id: 3,
        name: "Figura Pokémon - Terrarium Collection Vol. 13 - Re-Ment (x1 Fig. Aleatoria)",
        price: "30000",
        img: "Assets/pics/Productos/Sobres/TERRARIUM13_FOTO.webp",
    },
    /*{
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
    },*/
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
    productPrice.innerHTML = `$${productData.price}ARS`;

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
