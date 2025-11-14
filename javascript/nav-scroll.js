document.addEventListener("DOMContentLoaded", () => {
  const currentLink = document.querySelector(".current-nav-location");
  if (currentLink) {
    currentLink.scrollIntoView({
      behavior: "auto", inline: "center"
    });
  }
 });