function goTo(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    inline: "center",
  });
}

window.addEventListener("load", () => {
  const middle = document.getElementById("home");
  middle.scrollIntoView({
    behavior: "auto",
    inline: "center",
    block: "nearest",
  });

  const bg = document.querySelector(".bg");
  const container = document.querySelector(".container");

  container.addEventListener("scroll", () => {
    const x = container.scrollLeft;
    bg.style.transform = `translate3d(${-x * 0.005}px, 0, 0) scale(1.05)`;
  });
});
