// Open mobile sidebar menu
function openMobileMenu() {
  var sidebar = document.getElementById("mobileSidebar");
  var overlay = document.getElementById("mobileOverlay");
  if (sidebar && overlay) {
    sidebar.classList.add("show");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
  }
}

// Close mobile sidebar menu
function closeMobileMenu() {
  var sidebar = document.getElementById("mobileSidebar");
  var overlay = document.getElementById("mobileOverlay");
  if (sidebar && overlay) {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    document.body.style.overflow = ""; // Restore scrolling
  }
}

// Toggle mobile dropdown (for shop menu)
function toggleMobileDropdown(event) {
  event.preventDefault();
  event.stopPropagation();
  var dropdown = event.target.nextElementSibling;
  if (dropdown && dropdown.classList.contains("mobile-dropdown-content")) {
    dropdown.classList.toggle("show");
  }
}

// Close mobile menu when clicking overlay
document.addEventListener("DOMContentLoaded", function() {
  var overlay = document.getElementById("mobileOverlay");
  if (overlay) {
    overlay.addEventListener("click", closeMobileMenu);
  }
  
  // Close mobile menu when clicking a link
  var mobileLinks = document.querySelectorAll(".mobile-menu-link, .mobile-dropdown-item");
  mobileLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      // Don't close if it's a dropdown toggle
      if (!this.nextElementSibling || !this.nextElementSibling.classList.contains("mobile-dropdown-content")) {
        closeMobileMenu();
      }
    });
  });
});

