const imageLightbox = document.getElementById("image-lightbox");
const imageLightboxImage = imageLightbox?.querySelector(".image-lightbox__image");
const imageLightboxClose = imageLightbox?.querySelector(".image-lightbox__close");
const projectImageButtons = document.querySelectorAll(".project-image-button");

function openImageLightbox(image) {
    if (!imageLightbox || !imageLightboxImage) return;

    imageLightboxImage.src = image.src;
    imageLightboxImage.alt = image.alt;
    imageLightbox.classList.add("is-open");
    imageLightbox.setAttribute("aria-hidden", "false");
}

function closeImageLightbox() {
    if (!imageLightbox || !imageLightboxImage) return;

    imageLightbox.classList.remove("is-open");
    imageLightbox.setAttribute("aria-hidden", "true");
    imageLightboxImage.src = "";
    imageLightboxImage.alt = "";
}

projectImageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const image = button.querySelector("img");

        if (image) {
            openImageLightbox(image);
        }
    });
});

imageLightboxClose?.addEventListener("click", closeImageLightbox);

imageLightbox?.addEventListener("click", (event) => {
    if (event.target === imageLightbox) {
        closeImageLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeImageLightbox();
    }
});
