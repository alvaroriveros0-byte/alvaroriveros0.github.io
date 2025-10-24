// Modal Login
const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");
const submitLogin = document.getElementById("submitLogin");
const loginMessage = document.getElementById("loginMessage");

loginBtn.onclick = () => {
    modal.style.display = "block";
};

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

submitLogin.onclick = () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        loginMessage.textContent = `Bienvenido, ${user}!`;
        loginMessage.style.color = "#0f0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 1000);
    } else {
        loginMessage.textContent = "Usuario o contraseña incorrectos.";
        loginMessage.style.color = "#f00";
    }
};

// Botones de Me gusta
const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const countSpan = btn.querySelector(".like-count");
        let count = parseInt(countSpan.textContent);
        countSpan.textContent = count + 1;
    });
});

// Buscador
const searchInput = document.getElementById("search-input");
const cochesContainer = document.getElementById("coches-container");
const coches = cochesContainer.children;

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();

    Array.from(coches).forEach((coche) => {
        const nombre = coche.getAttribute("data-nombre").toLowerCase();
        const marca = coche.getAttribute("data-marca").toLowerCase();
        const modelo = coche.getAttribute("data-modelo").toLowerCase();

        if (nombre.includes(searchTerm) || marca.includes(searchTerm) || modelo.includes(searchTerm)) {
            coche.style.display = "block";
        } else {
            coche.style.display = "none";
        }
    });
});