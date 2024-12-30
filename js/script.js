const headerItem = document.querySelectorAll(".header ul li:not(:first-child)");
console.log(headerItem);
headerItem.forEach((item) => {
  console.log(item);
  item.addEventListener("mouseenter", () => {
    item.classList.add("show");
  });

  item.addEventListener("mouseleave", (e) => {
    const relatedTarget = e.relatedTarget; // Phần tử liên quan khi chuột rời đi
    console.log(relatedTarget);
    if (!item.contains(relatedTarget)) {
      item.classList.remove("show"); // Ẩn menu
    }
  });
});
