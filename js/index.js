// Hamburger menü işlevselliği
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
  this.classList.toggle("active");
});

// Menü linklerine tıklandığında menüyü kapat
document.querySelector(".nav-links").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("active");
  document.querySelector(".hamburger").classList.remove("active");
});

// Sayfa kaydırma animasyonu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const headerOffset = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
      duration: 1000,
    });
  });
});
