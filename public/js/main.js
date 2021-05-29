addEventListener("load", (e) => {
  setTimeout(() => {
    const loader = document.querySelector("#loader");
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 300);
  }, 0);
});
