// Carousel functionality
document.querySelectorAll(".carousel-container").forEach((container) => {
  const carousel = container.querySelector(".carousel");
  const leftBtn = container.querySelector(".arrow.left");
  const rightBtn = container.querySelector(".arrow.right");

  // largura do scroll = largura visível do container
  const scrollAmount = carousel.clientWidth;

  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

