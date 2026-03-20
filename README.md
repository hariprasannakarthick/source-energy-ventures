# The Source-Company Website

This project presents a professional engineering website developed for **The Source-Company**, showcasing advanced energy systems, intelligent infrastructure, and modular technology solutions. The platform is designed to communicate complex engineering concepts through a clean and structured user interface.

---

## Components Used

- HTML5  
- CSS3  
- JavaScript  
- Responsive Web Design  
- Modular UI Design  

---

## Working Principle

The website is built using a modular frontend architecture:

- HTML structures the content and layout  
- CSS handles styling and responsiveness  
- JavaScript enables dynamic rendering of sections  
- Organized components improve scalability and maintenance  
- Smooth navigation ensures better user experience  

---

## Features

- Responsive and modern UI  
- Modular and scalable design  
- Dynamic content rendering  
- Clean engineering-focused presentation  
- Multi-section layout (Products, Technology, Applications, Contact)  

---

## Future Improvements

- Backend integration for contact forms  
- Advanced animations and UI interactions  
- Performance optimization  
- SEO and accessibility improvements  
- Analytics integration  

---

## Live Demo

🔗 https://www.thesource-company.com/

---

## Author

**Hari Prasanna**

---

## Code Preview
```html
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="The Source-Company builds intelligent systems for advanced engineering, sustainable infrastructure, and modular technology deployment.">
  <title>The Source-Company | Intelligent Systems Engineering</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body data-page="home">
  <div id="site-header"></div>
  <main>
    <section class="hero">
      <div class="container hero-content" data-reveal>
        <h1>
          <span class="hero-line">Engineering the</span>
          <span class="hero-line">Next Wave of Power</span>
        </h1>
      </div>
    </section>

    <section class="content-band showcase-section" id="product-showcase">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="eyebrow">Product Showcase</span>
          <h2>Our Portfolio of Energy Solutions is Categorized by the Planetary Domain where the Energy is Generated.</h2>
          <p>Each domain combines rigorous system design, modern control software, and elegant industrial packaging.</p>
        </div>
        <div class="showcase-list" data-render="home-showcase"></div>
      </div>
    </section>

    <section class="content-band" id="technology-highlights">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="eyebrow">Technology Highlights</span>
          <h2>Designed for scale, resilience, and operational clarity.</h2>
        </div>
        <div class="highlights-grid">
          <article class="info-card" data-reveal>
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 16l8-10 8 10M7 13h10M9 16h6" />
              </svg>
            </div>
            <h3>Advanced Engineering</h3>
            <p>High-performance system architectures with deterministic controls and precise instrumentation.</p>
          </article>
          <article class="info-card" data-reveal>
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3v18M5.5 7.5c1.8 1.6 4 2.4 6.5 2.4s4.7-.8 6.5-2.4M7.5 16.5c1.4-1.2 2.9-1.8 4.5-1.8s3.1.6 4.5 1.8" />
              </svg>
            </div>
            <h3>Sustainable Technology</h3>
            <p>Efficient energy pathways, lower system waste, and long lifecycle hardware strategies.</p>
          </article>
          <article class="info-card" data-reveal>
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 13a7 7 0 0 1 14 0M8 13a4 4 0 0 1 8 0M12 13v5M9 18h6" />
              </svg>
            </div>
            <h3>Smart Monitoring</h3>
            <p>Continuous visibility with edge telemetry, predictive diagnostics, and intelligent alerting.</p>
          </article>
          <article class="info-card" data-reveal>
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 7h14M5 12h14M5 17h14M8 4v16M16 4v16" />
              </svg>
            </div>
            <h3>Modular Architecture</h3>
            <p>Standardized subsystem layers that simplify deployment, upgrades, and cross-domain integration.</p>
          </article>
        </div>
      </div>
    </section>
<!--
    <section class="content-band metrics-band">
      <div class="container">
        <div class="metrics-grid">
          <article class="metric-card" data-reveal>
            <strong>100+</strong>
            <span>Systems Deployed</span>
          </article>
          <article class="metric-card" data-reveal>
            <strong>20+</strong>
            <span>Research Projects</span>
          </article>
          <article class="metric-card" data-reveal>
            <strong>10MW</strong>
            <span>Energy Capacity</span>
          </article>
          <article class="metric-card" data-reveal>
            <strong>15+</strong>
            <span>Industry Partners</span>
          </article>
        </div>
      </div>
    </section>
-->
    <section class="content-band">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="eyebrow">Application Preview</span>
          <h2>Systems shaped around real deployment environments.</h2>
        </div>
        <div class="card-grid applications-grid" data-render="application-preview"></div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-shell" data-reveal>
        <span class="eyebrow">Build With The Source-Company</span>
        <h2>Start a Conversation About Your Next Intelligent System Program.</h2>
        <p>From early system architecture to large-scale integration, we engineer technology platforms designed for reliable operation in complex environments.</p>
        <a class="button" href="contact.html">Contact the Company</a>
      </div>
    </section>
  </main>
  <div id="site-footer"></div>
  <script src="site.js" defer></script>
</body>
</html>

---
