// Read more toggle
    const readBtn = document.getElementById('readMoreBtn');
    const card = document.getElementById('about-card');
    const extra = document.getElementById('extraParagraph');

    readBtn.addEventListener('click', () => {
      const expanded = readBtn.getAttribute('aria-expanded') === 'true';
      readBtn.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        // show more
        extra.style.display = 'block';
        readBtn.textContent = 'Show less';
      } else {
        extra.style.display = 'none';
        readBtn.textContent = 'Read more';
      }
    });


    // Reveal on load / intersection
    function revealOnIntersect() {
      const els = document.querySelectorAll('.reveal');
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(el => obs.observe(el));
    }
    revealOnIntersect();

    // Accessibility: hide extra paragraph initially for screen readers too
    extra.style.display = 'none';