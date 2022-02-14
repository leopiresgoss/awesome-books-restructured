export const navToSection = (element, sectionName) => {
  const navLinks = document.querySelectorAll('.navlinks li a');
  navLinks.forEach((link) => {
    link.classList.remove('selected');
  });
  element.classList.add('selected');
  const section = document.querySelector(sectionName);
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.classList.remove('active');
  });
  section.classList.add('active');
}