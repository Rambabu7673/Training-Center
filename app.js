// input-box-show
 const hamburger = document.querySelector(".hamburger");
    const menuList = document.getElementById("menuList");

    hamburger.addEventListener("click", () => {
      menuList.classList.toggle("showMenu");
    });

    // Search toggle
    const searchBox = document.getElementById("searchBox");
    const searchIcon = document.getElementById("searchIcon");

    searchIcon.addEventListener("click", () => {
      searchBox.classList.toggle("active");
      if (searchBox.classList.contains("active")) {
        document.getElementById("searchInput").focus();
      }
    });

      //  Togggle button show
  

    // change  text and color section
     document.addEventListener("DOMContentLoaded", () => {
      const words = [
        { text: "FullStack development", color: "crimson" },
        { text: "Cyber security", color: "blueviolet" },
        { text: "Digital marketing", color: "teal" },
        { text: "Mern Stack Development ", color: "darkorange" },
    
      ];

      let index = 0;
      let charIndex = 0;
      let deleting = false;
      const changingText = document.getElementById("changingText");

      function typeEffect() {
        const currentWord = words[index];
        const fullText = currentWord.text;

        if (!deleting) {
          changingText.textContent = fullText.substring(0, charIndex + 1);
          changingText.style.color = currentWord.color;
          charIndex++;

          if (charIndex === fullText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500); // word show time
            return;
          }
        } else {
          changingText.textContent = fullText.substring(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            deleting = false;
            index = (index + 1) % words.length;
          }
        }

        setTimeout(typeEffect, deleting ? 100 : 150);
      }

      typeEffect();
     });
    
//  manu bar section tag 



    // count number set
const counters = document.querySelectorAll(".count");
let started = false; 

function startCounter() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 200; // speed control

      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

// Scroll par section viewport me aane par start hoga
window.addEventListener("scroll", () => {
  const section = document.querySelector(".overview-section");
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight && !started) {
    startCounter();
    started = true;
  }
});

function stp(element) {
    let dropdown = element.nextElementSibling; // uske baad wala .dropdown-content
    let arrow = element.querySelector("i");

    dropdown.classList.toggle("show");
    arrow.classList.toggle("rotate");
  }

// single page
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: "smooth" });
}


// home-section tag


document.getElementById('year').textContent = new Date().getFullYear();

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

    // Explore button scrolls smoothly to courses
    document.getElementById('exploreBtn').addEventListener('click', (e) => {
      e.preventDefault();
      const el = document.getElementById('courses-anchor');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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