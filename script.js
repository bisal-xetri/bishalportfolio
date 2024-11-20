function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", () => {
  const toggleDarkMode = document.getElementById("dark-mode-toggle");

  // Check local storage for saved preference and apply it
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleDarkMode.textContent = "☀️"; // Set the button text to Light
  } else {
    toggleDarkMode.textContent = "🌉"; // Default button text
  }

  // Event listener for the toggle button
  toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const darkModeEnabled = document.body.classList.contains("dark-mode");

    // Update localStorage based on the current mode
    localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");

    // Update button text based on the mode
    toggleDarkMode.textContent = darkModeEnabled ? "☀️" : "🌉";
  });
});

