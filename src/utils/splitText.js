// Split element text into per-char spans for stagger animation.
// Returns array of char spans.
export function splitChars(el) {
  if (!el) return [];
  const text = el.textContent;
  el.textContent = "";
  el.setAttribute("aria-label", text);
  const spans = [];
  text.split("").forEach((ch) => {
    const s = document.createElement("span");
    s.className = "inline-block will-change-transform";
    s.textContent = ch === " " ? "\u00A0" : ch;
    s.setAttribute("aria-hidden", "true");
    el.appendChild(s);
    spans.push(s);
  });
  return spans;
}
