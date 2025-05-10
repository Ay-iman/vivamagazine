// Optional: Log image names on click
document.querySelectorAll(".image-item").forEach((item) => {
  item.addEventListener("click", () => {
    alert(item.querySelector(".name-tag").textContent);
  });
});
