  // Typed text animation with null check
const typedTextEl = document.querySelector('.typed-text');
if (typedTextEl) {
  const phrases = ['Web Developer', 'Learner', 'Creator', 'Educationist'];
  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = '';
  let isDeleting = false;
  let typingSpeed = 120;

  function type() {
    if (phraseIndex >= phrases.length) phraseIndex = 0;
    currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
      typedTextEl.textContent = currentPhrase.substring(0, letterIndex + 1);
      letterIndex++;
      if (letterIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      typedTextEl.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      if (letterIndex === 0) {
        isDeleting = false;
        phraseIndex++;
      }
    }
    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
  }
  type();
}

// Intersection observer fixes
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, {threshold: 0.1});

const sections = document.querySelectorAll('section');
sections.forEach(section => observer.observe(section));

const skillBars = document.querySelectorAll('.progress-bar');
const skillsSection = document.getElementById('skills');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }
  });
}, {threshold: 0.5});
skillObserver.observe(skillsSection);
