if (module.hot) {
  module.hot.accept();
}

import SmootParallax from './lib/smooth-parallax.js';
document.addEventListener('DOMContentLoaded', (event) => {
  const wrappers = document.querySelectorAll('.sp-image');

  wrappers.forEach(wrapper => {
    const parallax = new SmootParallax(wrapper);
    let revealed = false;

    parallax.on('reveal', (element, scrollY) => {
      if (!revealed && (scrollY + window.innerHeight) > (element.offsetTop + element.offsetHeight / 2)) {
        element.classList.remove('anim-block');
        revealed = true;
      }
    });
  });
});


