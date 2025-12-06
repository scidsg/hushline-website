const owner = "scidsg";
const repo = "hushline";

const listEl = document.getElementById("contributors");

fetch(`https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100`)
  .then(res => {
    if (!res.ok) throw new Error("GitHub API error " + res.status);
    return res.json();
  })
  .then(contributors => {
    listEl.innerHTML = "";

    contributors.forEach(c => {
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

    if (contributors.length === 0) {
      listEl.textContent = "No contributors found.";
    }
  })
  .catch(err => {
    console.error(err);
    listEl.textContent = "Failed to load contributors.";
  });
