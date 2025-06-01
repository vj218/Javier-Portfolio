const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".project-card img").forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("show");

    document.body.style.overflow = "hidden";
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("show");
  modalImg.src = "";

  document.body.style.overflow = "auto";
});
