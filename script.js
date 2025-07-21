
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video-frame");
  const button = document.getElementById("continue-button");
  const formSection = document.getElementById("form-section");

  // Fake video completion logic (replace with YT API later)
  setTimeout(() => {
    button.disabled = false;
  }, 15000); // simulates 15 sec watch

  button.addEventListener("click", () => {
    formSection.classList.remove("hidden");
    button.classList.add("hidden");
  });
});
