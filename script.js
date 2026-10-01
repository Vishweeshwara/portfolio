const body = document.body;
const navMenu = document.getElementById("navMenu");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const copyProfile = document.getElementById("copyProfile");
const copyStatus = document.getElementById("copyStatus");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const dark = body.classList.contains("dark");
  themeToggle.textContent = dark ? "☀" : "☾";
  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
});

if (localStorage.getItem("portfolio-theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀";
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  document.getElementById("navbar").style.boxShadow =
    window.scrollY > 20 ? "0 8px 30px rgba(16,24,40,.08)" : "none";
});

copyProfile.addEventListener("click", async () => {
  const url = "https://www.linkedin.com/in/vishweeshwara-p-44705b396";
  try {
    await navigator.clipboard.writeText(url);
    copyStatus.textContent = "LinkedIn profile link copied!";
  } catch {
    copyStatus.textContent = url;
  }
  setTimeout(() => copyStatus.textContent = "", 3000);
});

document.getElementById("year").textContent = new Date().getFullYear();
