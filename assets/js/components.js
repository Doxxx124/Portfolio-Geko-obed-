async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    const response = await fetch(file);

    element.innerHTML = await response.text();

    return element;

}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar__link");

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute("href");
        link.classList.toggle("navbar__link--active", linkPage === currentPage);
    });
}

loadComponent("header", "components/navbar.html").then(setActiveNavLink);
loadComponent("footer", "components/footer.html");
