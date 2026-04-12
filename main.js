// main.js

// Load header
fetch('/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    const navLinks = document.querySelectorAll('#header nav a');
    const currentPath = window.location.pathname.split('/').pop(); // get current page file

    // First, remove any existing active classes
    navLinks.forEach(link => link.classList.remove('active'));

    // Then, add active to the current page
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href').split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add('active');
      }
    });
  });

// Load footer 
fetch('/footer.html') .then(res => res.text()) .then(data => { document.getElementById('footer').innerHTML = data; });

function toggleMenu() {
  const nav = document.getElementById("nav");
  const btn = document.querySelector(".menu-toggle");

  nav.classList.toggle("show");
  btn.classList.toggle("active");
}