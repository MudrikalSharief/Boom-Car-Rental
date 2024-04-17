document.addEventListener('DOMContentLoaded', function() {
    const activebutton = document.getElementsByClassName('active-button')[0];
    const nav1 = document.getElementsByClassName('nav_a')[0];
    const navul = document.getElementsByClassName('navul')[0];
  
    activebutton.addEventListener('click', () => {
        navul.classList.toggle('active');
    });
    navul.addEventListener('click', () => {
        navul.classList.toggle('active');
    });

  });
  