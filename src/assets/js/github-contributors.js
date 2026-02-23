const owner = "scidsg";
const repo = "hushline";

const listEl = document.getElementById("contributors");
if (listEl) {
  fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`)
    .then(res => {
      if (!res.ok) throw new Error("GitHub API error " + res.status);
      return res.json();
    })
    .then(contributors => {
      listEl.innerHTML = "";

      const filtered = contributors.filter(c => {
        const login = c.login.toLowerCase();
        return login !== "dependabot[bot]" && login !== "hushline-dev" && login !== "github-actions[bot]";
      });

      if (filtered.length === 0) {
        listEl.textContent = "No contributors found.";
        return;
      }

      filtered.forEach(c => {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${c.html_url}" target="_blank" rel="noopener noreferrer">
            <img src="${c.avatar_url}" alt="${c.login}">
          </a>
          <a href="${c.html_url}" target="_blank" rel="noopener noreferrer">
            ${c.login}
          </a>
          <span>(${c.contributions} commits)</span>
        `;
        listEl.appendChild(li);
      });
    })
    .catch(err => {
      console.error(err);
      listEl.textContent = "Failed to load contributors.";
    });
}
