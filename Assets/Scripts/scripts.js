const cartElemnt = document.getElementById("cart");
const cartSection = document.getElementById("carrito-section");
const footer = document.getElementById("footer");
const phoneNumber = "+5492236352642";

function isEmptyArray(array) {
    return array.length === 0;
}

function actualizarBotonCarrito(cart) {
    if (!isEmptyArray(cart)) {
        cartElemnt.classList.add("visible");
    } else {
        cartElemnt.classList.remove("visible");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    actualizarBotonCarrito(cart);
});

document.addEventListener("DOMContentLoaded", () => {
    const contact = document.getElementById("contact");
    const msg = "Hola, vengo de la pagina web y te queria hacer una consulta";
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;
    contact.href = url;
});

function abrirCarrito() {
    const height = parseInt(getComputedStyle(cartSection).height);
    const img = document.getElementById("img-cart");

    if (height <= 0) {
        // El carrito está cerrado, lo abrimos
        cartSection.style.height = "90%";
        cartSection.style.width = "90%";
        img.src = "Assets/Pics/Iconos/x.webp";
        cartSection.innerHTML = "";
        mostrarProductos();

        // Mostramos el icono del carrito por si estaba oculto
        cartElemnt.classList.add("visible");
    } else {
        // El carrito está abierto, lo cerramos
        cartSection.style.height = "0px";
        cartSection.style.width = "0px";
        img.src = "Assets/Pics/Iconos/cart.webp";

        // Esperamos que termine la animación (400ms o más si tu CSS lo define)
        setTimeout(() => {
            // Revisamos el localStorage directamente
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const isCartEmpty = cart.length === 0;

            // Si no hay productos, ocultamos el icono
            if (isCartEmpty) {
                cartElemnt.classList.remove("visible");
            }
        }, 500);
    }
}

function handleCartSubmit() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (isEmptyArray(cart)) {
        alert("No hay productos en el carrito.");
        return;
    }
    // Mensaje más orientado a compra
    let message = "Hola, estoy interesado en comprar los siguientes productos:\n\n";
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} x${item.quantity} - $${item.price * item.quantity}\n`;
    });
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    message += `\nTotal estimado: $${total}\n\n`;
    message += "Envío este mensaje como una orden de compra.";
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    // Redirige al usuario
    window.open(url, "_blank");
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
    sendBtn.addEventListener("click", handleCartSubmit);
    cartResume.appendChild(sendBtn);

    const cartProducts = document.createElement("div");
    cartProducts.classList.add("cart-items-container");

    cartSection.appendChild(cartTitle);
    cartSection.appendChild(emptyMsg);
    cartSection.appendChild(cartProducts);
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

                    const detail = document.createElement("p");
                    detail.classList.add("cart-product-detail");
                    detail.innerHTML = "Presione para detalles";

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
                    product.appendChild(detail);

                    const numberDiv = document.createElement("div");
                    numberDiv.classList.add("card-product-inputnum-container");
                    const btnRest = document.createElement("button");
                    btnRest.innerHTML = "-";
                    btnRest.classList.add("btn-input");
                    const inputNum = document.createElement("input");
                    inputNum.type = "number";
                    inputNum.min = 1;
                    inputNum.value = item.quantity;
                    const btnAdd = document.createElement("button");
                    btnAdd.innerHTML = "+";
                    btnAdd.classList.add("btn-input");

                    btnRest.addEventListener("click", () => {
                        const indexInCart = cart.findIndex((p) => p.name === item.name);
                        if (indexInCart !== -1 && cart[indexInCart].quantity > 1) {
                            cart[indexInCart].quantity -= 1;
                            inputNum.value = cart[indexInCart].quantity;
                            localStorage.setItem("cart", JSON.stringify(cart));
                        }
                    });

                    btnAdd.addEventListener("click", () => {
                        const indexInCart = cart.findIndex((p) => p.name === item.name);
                        if (indexInCart !== -1) {
                            cart[indexInCart].quantity += 1;
                            inputNum.value = cart[indexInCart].quantity;
                            localStorage.setItem("cart", JSON.stringify(cart));
                        }
                    });

                    numberDiv.appendChild(btnRest);
                    numberDiv.appendChild(inputNum);
                    numberDiv.appendChild(btnAdd);

                    numberDiv.addEventListener("click", (e) => {
                        e.stopPropagation();
                    });

                    product.appendChild(numberDiv);

                    product.addEventListener("click", () => {
                        const currentDisplay = getComputedStyle(numberDiv).display;
                        numberDiv.style.display = currentDisplay === "none" ? "flex" : "none";
                    });

                    cartProducts.appendChild(product);
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

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const cart = JSON.parse(localStorage.getItem("cart")) || [];
                const isCartEmpty = cart.length === 0;

                if (entry.isIntersecting && entry.intersectionRatio >= 0) {
                    // Footer visible → ocultar el carrito
                    cartElemnt.classList.remove("visible");
                } else {
                    // Footer no visible → mostrar solo si hay productos
                    if (!isCartEmpty) {
                        cartElemnt.classList.add("visible");
                    } else {
                        cartElemnt.classList.remove("visible");
                    }
                }
            });
        },
        {
            threshold: 0,
        }
    );

    observer.observe(footer);
});
