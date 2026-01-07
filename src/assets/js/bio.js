document.addEventListener("DOMContentLoaded", () => {
  const MAX_CHARS = 500;

  document.querySelectorAll(".feature.bio .description p").forEach(p => {
    const fullText = p.textContent.trim();
    if (fullText.length <= MAX_CHARS) return;

    const truncatedText = fullText.slice(0, MAX_CHARS);

    const spanTruncated = document.createElement("span");
    spanTruncated.textContent = truncatedText;

    const spanEllipsis = document.createElement("span");
    spanEllipsis.textContent = "... ";

    const spanFull = document.createElement("span");
    spanFull.textContent = fullText.slice(MAX_CHARS);
    spanFull.style.display = "none";

    const toggle = document.createElement("a");
    toggle.href = "#";
    toggle.textContent = "more";
    toggle.style.marginLeft = "4px";

    toggle.addEventListener("click", e => {
      e.preventDefault();
      const expanded = spanFull.style.display === "inline";
      spanFull.style.display = expanded ? "none" : "inline";
      spanEllipsis.style.display = expanded ? "inline" : "none";
      toggle.textContent = expanded ? "more" : "less";
    });

    p.textContent = "";
    p.append(spanTruncated, spanEllipsis, spanFull, toggle);
  });
});
