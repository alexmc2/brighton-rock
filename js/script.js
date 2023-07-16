function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);
document.getElementById('theme-toggle').addEventListener('click', function () {
  // Toggle the 'dark-theme' class on the body element
  document.body.classList.toggle('dark-theme');

  // Check if the body now has the 'dark-theme' class
  if (document.body.classList.contains('dark-theme')) {
    // If it does, save 'dark' as the theme in local storage
    localStorage.setItem('theme', 'dark');
  } else {
    // If it doesn't, save 'light' as the theme in local storage
    localStorage.setItem('theme', 'light');
  }
});

// When the page loads, check local storage to see if a theme was saved
window.addEventListener('DOMContentLoaded', (event) => {
  // Get the saved theme from local storage
  const savedTheme = localStorage.getItem('theme');

  // If a theme was saved, and it's 'dark'
  if (savedTheme === 'dark') {
    // Add the 'dark-theme' class to the body
    document.body.classList.add('dark-theme');
  } else if (savedTheme === 'light') {
    // If the saved theme is 'light', make sure the 'dark-theme' class is not on the body
    document.body.classList.remove('dark-theme');
  }
});
