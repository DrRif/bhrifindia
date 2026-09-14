(function () {
  var toggle = document.querySelector('.nav__toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.textContent = open ? 'Menu' : 'Close';
    });
  }

  // Mark the current page in the nav without hand-editing every file.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#primary-nav a').forEach(function (a) {
    var target = a.getAttribute('href');
    if (target === here || (here === 'index.html' && target === './')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  // On narrow screens the full 1200-unit span would shrink the icons to noise.
  // Crop to the centre of the bridge instead of scaling the whole thing down.
  var span = document.querySelector('.bridge svg');
  if (span && window.matchMedia) {
    var mq = window.matchMedia('(max-width: 720px)');
    var fit = function () {
      if (mq.matches) {
        span.setAttribute('preserveAspectRatio', 'xMidYMax slice');
        span.style.height = '210px';
      } else {
        span.setAttribute('preserveAspectRatio', 'xMidYMax meet');
        span.style.height = '';
      }
    };
    fit();
    if (mq.addEventListener) { mq.addEventListener('change', fit); }
    else if (mq.addListener) { mq.addListener(fit); }
  }
})();
