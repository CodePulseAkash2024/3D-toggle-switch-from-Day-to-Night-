
const toggle = document.getElementById("themeToggle");
const text = document.getElementById("toggleText");

toggle.addEventListener("click", () => {

  const isLight = document.body.classList.toggle("light");

  document.body.classList.toggle("night", !isLight);

  text.textContent = isLight
    ? "Light mode"
    : "Night mode";

  toggle.setAttribute("aria-pressed", String(isLight));

  toggle.setAttribute(
    "aria-label",
    isLight ? "Switch to night mode" : "Switch to light mode"
  );

});
