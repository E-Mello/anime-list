// Carrossel simples usando flexbox + scroll

document.querySelectorAll(".carousel").forEach((carousel) => {
  const leftBtn = carousel.querySelector(".left-arrow");
  const rightBtn = carousel.querySelector(".right-arrow");

  rightBtn?.addEventListener("click", () => {
    carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
  });

  leftBtn?.addEventListener("click", () => {
    carousel.scrollBy({ left: -carousel.clientWidth, behavior: "smooth" });
  });
});
