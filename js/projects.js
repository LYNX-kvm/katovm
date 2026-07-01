const buttons = document.querySelectorAll(".filter-bar button");
const projects = document.querySelectorAll(".project-card");
const countText = document.querySelector("#projectCount");

let activeFilters = [];

function filterProjects() {
  let visibleCount = 0;

  projects.forEach((project) => {
    const techs = Array.from(project.querySelectorAll(".tech-stack li")).map(
      (li) => li.textContent.trim()
    );

    const isVisible =
      activeFilters.length === 0 ||
      activeFilters.some((filter) => techs.includes(filter));

    project.style.display = isVisible ? "block" : "none";
    if (isVisible) visibleCount++;
  });

  updateCount(visibleCount);
}

function updateCount(count) {
  countText.textContent = `> Found ${count} project${count !== 1 ? "s" : ""}`;
}

function updateButtonStyles() {
  buttons.forEach((btn) => {
    const filter = btn.dataset.filter;

    if (activeFilters.length === 0) {
      // ALL mode
      if (filter === "all") {
        btn.classList.remove("btn-outline");
      } else {
        btn.classList.add("btn-outline");
      }
    } else {
      // FILTER mode
      if (filter === "all") {
        btn.classList.add("btn-outline");
      } else if (activeFilters.includes(filter)) {
        btn.classList.remove("btn-outline");
      } else {
        btn.classList.add("btn-outline");
      }
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    if (filter === "all") {
      activeFilters = [];
    } else {
      if (activeFilters.includes(filter)) {
        activeFilters = activeFilters.filter((f) => f !== filter);
      } else {
        activeFilters.push(filter);
      }
    }

    updateButtonStyles();
    filterProjects();
  });
});
