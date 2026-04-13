/* ============================================================
   NESTLED — Main JavaScript
   ============================================================ */

/* ---- MOBILE NAV ---- */
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobileNav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

/* ---- RENDER FEATURED PRODUCTS (homepage) ---- */
function renderProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <p class="product-room">${product.roomLabel}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <a href="${product.affiliateUrl}" target="_blank" rel="noopener noreferrer sponsored" class="btn-shop">
            Shop on Amazon
          </a>
        </div>
      </div>
    </div>
  `;
}

const productGrid = document.getElementById('productGrid');
if (productGrid && typeof PRODUCTS !== 'undefined') {
  /* Show first 8 featured products on homepage */
  const featured = PRODUCTS.slice(0, 8);
  productGrid.innerHTML = featured.map(renderProductCard).join('');
}

/* ---- NEWSLETTER FORM ---- */
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;

    /*
      TODO: Replace this section with your actual email service.
      Options:
        - Mailchimp: POST to your Mailchimp embed form action URL
        - Beehiiv: Use their embed form
        - ConvertKit: POST to their API endpoint
      
      For now, this simulates success.
    */

    newsletterForm.innerHTML = `
      <p class="newsletter-success">
        ✓ You're in! Welcome to Nestled. Check your inbox for a confirmation.
      </p>
    `;

    console.log('Newsletter signup:', email);
    /* Example Mailchimp fetch:
    fetch('https://YOUR-MAILCHIMP-FORM-ACTION', {
      method: 'POST',
      body: new FormData(newsletterForm)
    });
    */
  });
}

/* ---- SMOOTH SCROLL for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (mobileNav) mobileNav.classList.remove('open');
    }
  });
});

/* ---- HEADER SHADOW ON SCROLL ---- */
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(46,31,20,0.08)'
      : 'none';
  });
}
