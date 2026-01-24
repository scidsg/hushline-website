document.addEventListener("DOMContentLoaded", () => {
  const MAX_CHARS = 550;

  document.querySelectorAll(".feature.bio .description p").forEach((p, index) => {
    const fullText = p.textContent.trim();
    if (fullText.length <= MAX_CHARS) return;

    const truncatedText = fullText.slice(0, MAX_CHARS);

    const spanTruncated = document.createElement("span");
    spanTruncated.textContent = truncatedText;

    const spanEllipsis = document.createElement("span");
    spanEllipsis.textContent = "... ";

    const spanFull = document.createElement("span");
    const fullId = `bio-full-${index}`;
    spanFull.id = fullId;
    spanFull.textContent = fullText.slice(MAX_CHARS);
    spanFull.style.display = "none";
    spanFull.setAttribute("aria-hidden", "true");

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "bio-toggle";
    toggle.textContent = "more";
    toggle.style.marginLeft = "4px";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", fullId);

    toggle.addEventListener("click", e => {
      const expanded = spanFull.style.display === "inline";
      spanFull.style.display = expanded ? "none" : "inline";
      spanEllipsis.style.display = expanded ? "inline" : "none";
      toggle.textContent = expanded ? "more" : "less";
      toggle.setAttribute("aria-expanded", (!expanded).toString());
      spanFull.setAttribute("aria-hidden", expanded.toString());
    });

    p.textContent = "";
    p.append(spanTruncated, spanEllipsis, spanFull, toggle);
  });
});
