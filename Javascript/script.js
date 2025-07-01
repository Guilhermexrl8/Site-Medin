// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    }
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// Add animation to stats when in viewport
const stats = document.querySelectorAll('.stat-item h3');
let animated = false;

function animateStats() {
    if (animated) return;
    
    const windowHeight = window.innerHeight;
    const statsSection = document.getElementById('stats');
    const statsSectionTop = statsSection.getBoundingClientRect().top;
    
    if (statsSectionTop < windowHeight * 0.75) {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                stat.textContent = Math.round(current);
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                }
            }, 20);
        });
        animated = true;
    }
}
function toggleCookieBox() {
  const box = document.getElementById('cookie-box');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
}

function acceptCookies() {
  alert("Cookies aceitos.");
  document.getElementById('cookie-box').style.display = 'none';
}

function closeCookieBox() {
  alert("Cookies recusados.");
  document.getElementById('cookie-box').style.display = 'none';
}



