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

const chapterItems = document.querySelectorAll(".chapter-item");

function setChapterOpen(item, isOpen) {
  const button = item.querySelector(".chapter-toggle");
  item.classList.toggle("open", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
}

function openChapterFromHash() {
  const id = window.location.hash.slice(1);
  if (!id) return;

  const item = document.getElementById(id);
  if (!item || !item.classList.contains("chapter-item")) return;

  chapterItems.forEach((chapterItem) => {
    setChapterOpen(chapterItem, chapterItem === item);
  });

  item.scrollIntoView({ block: "start" });
  updateProgress();
}

chapterItems.forEach((item) => {
  const button = item.querySelector(".chapter-toggle");
  button.addEventListener("click", () => {
    setChapterOpen(item, !item.classList.contains("open"));
    updateProgress();
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
window.addEventListener("hashchange", openChapterFromHash);
openChapterFromHash();
updateProgress();
