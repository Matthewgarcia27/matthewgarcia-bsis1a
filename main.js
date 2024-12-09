// Add "fade-in" animation to all sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("fade-in");
    }, index * 300); // Delay for staggered animation
  });
});
// Example: Add animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.contact-info ul li a');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'scale(1)';
    });
  });
});