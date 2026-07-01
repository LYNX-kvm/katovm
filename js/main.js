// Load header
// Load header
fetch("/components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const navLinks = document.querySelectorAll("#header nav a");

    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

    navLinks.forEach((link) => {
      const linkPath = link.getAttribute("href").replace(/\/$/, "") || "/";

      link.classList.toggle("active", linkPath === currentPath);
    });
  });
// Load footer
fetch("../components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

function toggleMenu() {
  const nav = document.getElementById("nav");
  const btn = document.querySelector(".menu-toggle");

  nav.classList.toggle("show");
  btn.classList.toggle("active");
}
