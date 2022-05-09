window.onscroll = function () {
    const navbar = document.querySelector('nav');
    const fixedNav = navbar.offsetTop;

    if (window.pageYOffset > fixedNav) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  };