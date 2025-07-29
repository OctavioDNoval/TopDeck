const cartElemnt = document.getElementById("cart");
const cartSection = document.getElementById("carrito-section");

function isEmptyArray(array) {
    return array.length === 0;
}

function actualizarBotonCarrito(cart) {
    if (!isEmptyArray(cart)) {
        cartElemnt.style.right = "5%";
    } else {
        cartElemnt.style.right = "-20%";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let cart = localStorage.getItem("cart") || [];
    actualizarBotonCarrito(cart);
});

document.querySelectorAll(".add-product-btn").forEach((btn) => {
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
});

function abrirCarrito() {
    //Usamos getcomputstyle para poder acceder
    //a los estilos del elemento de la hoja de estilos
    const height = parseInt(getComputedStyle(cartSection).height);
    const img = document.getElementById("img-cart");

    if (height <= 0) {
        // el carrito está cerrado
        cartSection.style.height = "90%";
        cartSection.style.width = "90%";
        img.src = "Assets/Pics/Iconos/x.webp";
        cartSection.innerHTML = "";
        mostrarProductos();
    } else {
        // el carrito está abierto
        cartSection.style.height = "0px";
        cartSection.style.width = "0px";
        img.src = "Assets/Pics/Iconos/cart.webp";
        setTimeout(() => {
            if (
                cartSection.querySelectorAll(".cart-product").length === 0 &&
                parseFloat(getComputedStyle(cartSection).height) <= 0
            ) {
                cartElemnt.style.right = "-20%";
            }
        }, 400);
    }
}

function mostrarProductos() {
    const mensajeVacio = document.getElementById("mensaje-vacio");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartTitle = document.createElement("h3");
    cartTitle.innerHTML = "Carrito";

    const emptyMsg = document.createElement("p");
    emptyMsg.innerHTML = "El carrito esta vacio";
    emptyMsg.classList.add("mensaje-vacio");

    const cartResume = document.createElement("div");
    cartResume.classList.add("cart-resume");
    const sendBtn = document.createElement("button");
    sendBtn.type = "button";
    sendBtn.innerHTML = "Enviar";
    sendBtn.classList.add("cart-product-btn");
    cartResume.appendChild(sendBtn);

    cartSection.appendChild(cartTitle);
    cartSection.appendChild(emptyMsg);
    cartSection.appendChild(cartResume);

    if (!isEmptyArray(cart)) {
        //hay datos en el carrito
        setTimeout(() => {
            cart.forEach((item, index) => {
                setTimeout(() => {
                    const product = document.createElement("div");
                    product.classList.add("cart-product");

                    const img = document.createElement("img");
                    img.src = item.img;
                    img.alt = item.name;
                    img.classList.add("cart-product-img");

                    const name = document.createElement("p");
                    name.innerHTML = item.name;
                    name.classList.add("cart-product-name");

                    const price = document.createElement("p");
                    price.innerHTML = `$ ${item.price}`;
                    price.classList.add("cart-product-price");

                    const deleteBtn = document.createElement("button");
                    deleteBtn.innerHTML = "X";
                    deleteBtn.classList.add("delete-product");
                    deleteBtn.addEventListener("click", (e) => {
                        const padre = e.target.parentElement;
                        const nombreProducto = padre.querySelector(".cart-product-name").innerHTML;
                        cart = cart.filter((item) => item.name !== nombreProducto);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        padre.remove();
                    });

                    product.appendChild(img);
                    product.appendChild(name);
                    product.appendChild(price);
                    product.appendChild(deleteBtn);

                    cartSection.insertBefore(product, cartResume);
                    void product.offsetWidth;
                    product.classList.add("visible");
                }, index * 150);
            });
            emptyMsg.style.opacity = "1";
        }, 500);
    } else {
        //no hay datos en el carrito
        mensajeVacio.innerHTML = "No hay productos en el carrito";
    }
}
