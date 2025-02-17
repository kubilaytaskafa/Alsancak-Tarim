// Tüm galeri resimlerini seç
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImageIndex = 0;
const imagesArray = Array.from(galleryImages);

// Her resme tıklama olayı ekle
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.style.display = "flex";
  });
});

// Önceki resme git
prevBtn.addEventListener("click", () => {
  currentImageIndex =
    (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
  updateLightboxImage();
});

// Sonraki resme git
nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
  updateLightboxImage();
});

// Lightbox resmini güncelle
function updateLightboxImage() {
  const currentImage = imagesArray[currentImageIndex];
  lightboxImg.src = currentImage.src;
  lightboxImg.alt = currentImage.alt;
}

// Klavye ile gezinme
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowLeft") {
      prevBtn.click();
    } else if (e.key === "ArrowRight") {
      nextBtn.click();
    } else if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  }
});

// Lightbox'ı kapatma işlemleri
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
