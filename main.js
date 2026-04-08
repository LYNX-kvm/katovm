// main.js

// Load header
fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    const bodyClass = document.body.className; // e.g., "page-home"
    const navLinks = document.querySelectorAll('#header nav a');

    // Map logical page names to href
    const pageMap = {
      home: 'index.html',
      about: 'about.html',
      projects: 'projects.html',
      contact: 'contact.html'
    };

    const currentHref = pageMap[bodyClass.replace('page-', '')];

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentHref) {
        link.classList.add('active');
      }
    });
  });

// Load footer
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });