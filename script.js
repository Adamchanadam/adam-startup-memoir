const root = document.documentElement;
const progress = document.getElementById("readingProgress");
const modeToggle = document.getElementById("modeToggle");
let scale = 1;

function updateProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? Math.min(100, Math.max(0, (scrollTop / max) * 100)) : 0;
  progress.style.width = `${percent}%`;
}

document.querySelectorAll(".chapter-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".chapter-item");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll("[data-font]").forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.getAttribute("data-font");
    scale = direction === "larger" ? Math.min(1.18, scale + 0.06) : Math.max(0.92, scale - 0.06);
    root.style.setProperty("--reader-scale", scale.toFixed(2));
  });
});

modeToggle.addEventListener("click", () => {
  const nextMode = root.getAttribute("data-mode") === "dark" ? "light" : "dark";
  if (nextMode === "dark") {
    root.setAttribute("data-mode", "dark");
    modeToggle.textContent = "暖色";
  } else {
    root.removeAttribute("data-mode");
    modeToggle.textContent = "深色";
  }
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
