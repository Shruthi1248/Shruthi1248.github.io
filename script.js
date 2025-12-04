const username = "Shruthi1248";
const projectGrid = document.getElementById("project-grid");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      if (!repo.fork) {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
          <h3>${repo.name.replace(/-/g, " ")}</h3>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank" class="btn-outline" style="margin-top:10px; display:inline-block;">View on GitHub</a>
        `;

        projectGrid.appendChild(card);
      }
    });
  })
  .catch(error => console.error("Error loading repos:", error));
