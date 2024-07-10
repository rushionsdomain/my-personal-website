document.addEventListener("DOMContentLoaded", () => {
  const h2 = document.createElement("h2");
  h2.textContent = "This content added by JavaScript";
  document.getElementById("js-content").appendChild(h2);

  const button = document.getElementById("toggle-button");
  button.addEventListener("click", () => {
    h2.style.display = h2.style.display === "none" ? "block" : "none";
  });
});
