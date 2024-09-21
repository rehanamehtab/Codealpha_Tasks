document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");

    let currentIndex = 0;
    function updateGallery(index) {
        galleryImages.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });
    }

    
    updateGallery(currentIndex);

  
    document.getElementById("next-btn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateGallery(currentIndex);
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateGallery(currentIndex);
    });


    galleryImages.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = image.src;
        });
    });

    close.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
