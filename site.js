const siteData = {
  brand: {
    name: "The Source-Company",
    tagline: "Engineering The next wave of Power",
    email: "support@thesource-company.com",
    phone: "+91 xxxxx-xxxxx",
    logo: "assets/images/logo.png",
    footerLogo: "assets/images/logo_white.png"
  },
  nav: [
    { key: "home", label: "Home", href: "index.html" },
    {
      key: "products",
      label: "Products",
      href: "products.html",
      children: [
        { label: "Terra Series", href: "domain.html?domain=terra" },
        { label: "Hydra Series", href: "domain.html?domain=hydra" },
        { label: "Aero Series", href: "domain.html?domain=aero" },
        { label: "Silo Series", href: "domain.html?domain=storage" }
      ]
    },
    {
      key: "services",
      label: "Services",
      href: "services.html",
      children: [
        { label: "System Design & Installation", href: "services.html#services-design" },
        { label: "Monitoring and Maintenance", href: "services.html#services-monitoring" }
      ]
    },
    { key: "applications", label: "Applications", href: "applications.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ],
  // Application cards use their own images so they can be updated without
  // changing the shared home/domain theme artwork.
  applicationsPreview: [
    {
      title: "High-Tension Power Lines",
      description: "Reinforced lightweight conductors withstand continuous mechanical tension and wind loading while delivering efficient power transmission.High fatigue resistance ensures stable long-duration operation of airborne platforms.",
      image: "assets/images/hight tension power lines.jpeg",
      imageAlt: "High-tension power infrastructure"
    },
    {
      title: "Water-Resistant Systems",
      description: "Marine-grade sealing and corrosion-resistant materials protect electrical systems from moisture and salt exposure. Water-based deployment improves efficiency through natural cooling and enables large-scale installation on unused water bodies.",
      image: "assets/images/water resistant systems.jpeg",
      imageAlt: "Water-resistant energy system deployment"
    },
    {
      title: "Multilayer Architectre",
      description: "Pressure-rated enclosures, redundant sealing, and relief mechanisms ensure reliability in extreme hydrostatic environments. Layered protection prevents structural failure and safeguards critical electronics from water ingress.",
      image: "assets/images/multilayerarchitecture.jpeg",
      imageAlt: "Multilayer marine system architecture"
    },
    {
      title: "Micropored FC systems",
      description: "Micro-porous electrodes increase reaction surface area, improving energy density and electrochemical efficiency. The design enables compact hydrogen storage with enhanced thermal stability and rapid energy conversion.",
      image: "assets/images/micropored fc.jpeg",
      imageAlt: "Microporous fuel cell systems"
    },
    {
      title: "Hydrogen-Lift Blimps",
      description: "Hydrogen provides higher lift capacity and significantly lower operational cost compared with helium. Modern multilayer gas cells and controlled safety systems enable practical and scalable hydrogen-based aerostat deployment.",
      image: "assets/images/hydrogen lift blimps.jpeg",
      imageAlt: "Hydrogen-lift aerial platform"
    }
  ],
  systemBlueprints: {
    helius: {
      name: "Helius",
      category: "Distributed Control Kernel",
      subsections: [
        {
          slug: "core",
          title: "Helius Core",
          summary: "Deterministic runtime logic and supervisory decision layers.",
          bullets: [
            "Active-active compute resilience",
            "Low-latency command arbitration",
            "Secure configuration baselines"
          ]
        },
        {
          slug: "control",
          title: "Helius Control",
          summary: "Operational command flows and autonomous policy execution.",
          bullets: [
            "Adaptive control scenes",
            "Exception routing and overrides",
            "Scenario-based orchestration"
          ]
        },
        {
          slug: "sensor",
          title: "Helius Sensor",
          summary: "Sensor fusion and confidence scoring across field inputs.",
          bullets: [
            "Cross-signal validation",
            "Fault-tolerant measurement paths",
            "Context-aware data tagging"
          ]
        },
        {
          slug: "grid",
          title: "Helius Grid",
          summary: "Multi-node coordination across remote sites and facility zones.",
          bullets: [
            "Peer-to-peer failover",
            "Fleet-wide synchronization",
            "Segmented network domains"
          ]
        }
      ],
      baseSpecs: [
        { label: "Runtime Topology", value: "Dual-redundant edge clusters" },
        { label: "Response Time", value: "Sub-20 ms control loop" }
      ]
    },
    thermus: {
      name: "Thermus",
      category: "Thermal Transfer Platform",
      subsections: [
        {
          slug: "core",
          title: "Thermus Core",
          summary: "Primary thermal balancing and load prediction logic.",
          bullets: [
            "Dynamic temperature profiling",
            "Thermal reserve forecasting",
            "Continuous heat path tuning"
          ]
        },
        {
          slug: "transfer",
          title: "Thermus Transfer",
          summary: "Energy exchange pathways for controlled heat movement.",
          bullets: [
            "Closed-loop transfer optimization",
            "Adaptive flow setpoints",
            "Multi-medium compatibility"
          ]
        },
        {
          slug: "monitor",
          title: "Thermus Monitor",
          summary: "High-density thermal observation with predictive alerts.",
          bullets: [
            "Hotspot detection layers",
            "Sensor confidence monitoring",
            "Thermal trend analytics"
          ]
        },
        {
          slug: "reactor",
          title: "Thermus Reactor",
          summary: "Protected control around thermal process events and transitions.",
          bullets: [
            "Guarded process envelopes",
            "Automated intervention thresholds",
            "Integrated safety responses"
          ]
        }
      ],
      baseSpecs: [
        { label: "Control Cadence", value: "Adaptive thermal loop management" },
        { label: "Safety Logic", value: "Multi-zone fail-safe intervention" }
      ]
    },
    dynamus: {
      name: "Dynamus",
      category: "Motion And Force System",
      subsections: [
        {
          slug: "drive",
          title: "Dynamus Drive",
          summary: "Drive control for torque, thrust, and multi-axis motion output.",
          bullets: [
            "Adaptive power delivery",
            "Dynamic load compensation",
            "Wear-aware drive calibration"
          ]
        },
        {
          slug: "control",
          title: "Dynamus Control",
          summary: "Sequencing logic for motion events, overrides, and safe transitions.",
          bullets: [
            "Scenario-based motion profiles",
            "Operator lockout safeguards",
            "Coordinated actuator timing"
          ]
        },
        {
          slug: "force",
          title: "Dynamus Force",
          summary: "Force management for constrained environments and precision handling.",
          bullets: [
            "Pressure and torque balancing",
            "Real-time resistance feedback",
            "High-cycle durability logic"
          ]
        },
        {
          slug: "motion",
          title: "Dynamus Motion",
          summary: "Path execution and position assurance across moving assemblies.",
          bullets: [
            "Sub-millimeter path correction",
            "Vibration-aware trajectory updates",
            "Closed-loop feedback stabilization"
          ]
        }
      ],
      baseSpecs: [
        { label: "Control Layer", value: "Closed-loop servo orchestration" },
        { label: "Service Model", value: "Modular actuator replacement" }
      ]
    },
    reactus: {
      name: "Reactus",
      category: "Reactive Process Platform",
      subsections: [
        {
          slug: "core",
          title: "Reactus Core",
          summary: "Recipe control and condition management for active processes.",
          bullets: [
            "Multi-stage process scheduling",
            "State-aware control transitions",
            "Integrated safety checkpoints"
          ]
        },
        {
          slug: "chamber",
          title: "Reactus Chamber",
          summary: "Protected operating environment for reaction stability and containment.",
          bullets: [
            "Pressure envelope protection",
            "Material-compatible chamber design",
            "Automated purge readiness"
          ]
        },
        {
          slug: "catalyst",
          title: "Reactus Catalyst",
          summary: "Catalyst and reagent handling for consistent output quality.",
          bullets: [
            "Precision dosing control",
            "Consumable lifecycle tracking",
            "Closed-loop quality assurance"
          ]
        },
        {
          slug: "control",
          title: "Reactus Control",
          summary: "Operator supervision, intervention logic, and compliance traceability.",
          bullets: [
            "Guided intervention paths",
            "Traceable event logging",
            "Exception response workflows"
          ]
        }
      ],
      baseSpecs: [
        { label: "Recipe Engine", value: "Stage-based process orchestration" },
        { label: "Quality Layer", value: "Traceable control and audit records" }
      ]
    }
  },
  domains: {
    terra: {
      name: "Terra",
      theme: "theme-terra",
      heading: "Terra Series",
      showcaseDescription: "To sustain your mainland power consumptions.",
      overview: "By combining high-efficiency solar generation with advanced hydrogen fuel cell systems, Terra strengthens grid reliability and ensures stable energy delivery. It intelligently balances power production and storage to manage fluctuations in modern energy networks. Built for long-term resilience, Terra future-proofs infrastructure for a cleaner and more dependable energy landscape.",
      stats: [
        { label: "Primary Focus", value: "Land-based infrastructure" },
        { label: "Deployment Model", value: "Remote distributed sites" },
        { label: "System Trait", value: "Space Efficiency" }
      ],
      systems: {
        helius: {
          summary: "Helius-T photovoltaic modules offer high energy conversion efficiency under both direct and low-irradiance conditions while utilizing lightweight, cost-efficient materials. Their ultra-thin, foldable architecture enables flexible deployment across large surfaces with minimal structural requirements while maintaining high power generation capability.",
          overview: "Terra Helius synchronizes field equipment, environmental telemetry, and remote operations across wide terrestrial footprints.",
          features: [
            "Terrain-aware orchestration for distributed devices",
            "Remote edge redundancy with clear operator visibility",
            "Coordinated sensing, switching, and dispatch logic",
            "Resilient control policies for variable site conditions"
          ],
          specs: [
            { label: "Environmental Rating", value: "IP67 field enclosures" },
            { label: "Network Architecture", value: "Segmented field mesh" },
            { label: "Power Profile", value: "48V DC resilient rail" },
            { label: "Operating Range", value: "-20C to 55C" }
          ],
          applications: [
            "Remote solar and storage sites",
            "Environmental observatories",
            "Autonomous land facilities"
          ]
        },
        reactus: {
          summary: "Reactus-T Fuel cell systems deliver high energy density in a compact footprint, enabling efficient power generation with minimal spatial requirements compared to conventional storage or generation systems. They provide stable, low-emission electricity with rapid response capability, making them ideal for continuous power supply, peak load support, and decentralized energy infrastructure.",
          overview: "Terra Reactus provides contained process control for field treatment, material conversion, and land-based environmental response systems.",
          features: [
            "Precision reagent metering for variable site inputs",
            "Chamber stability under changing process loads",
            "Safe shutdown logic with guided interventions",
            "Inline quality feedback for controlled output"
          ],
          specs: [
            { label: "Chamber Pressure", value: "Up to 25 bar" },
            { label: "Dosing Precision", value: "+/-0.2%" },
            { label: "Control Model", value: "Multi-stage recipe engine" },
            { label: "Containment", value: "Sealed service modules" }
          ],
          applications: [
            "Soil remediation systems",
            "Materials processing skids",
            "Environmental treatment programs"
          ]
        }
      }
    },
    hydra: {
      name: "Hydra",
      theme: "theme-hydra",
      heading: "Hydra Series",
      showcaseDescription: "Dependable supply of uninterrupted power.",
      overview: "Ocean energy provides one of the most consistent and predictable renewable power sources available on Earth. By harnessing tides, waves, and marine currents, Hydra delivers continuous energy generation with minimal environmental footprint. This reliability makes ocean-based systems a powerful foundation for long-term, sustainable power infrastructure.",
      stats: [
        { label: "Primary Focus", value: "Water and marine systems" },
        { label: "Deployment Model", value: "Treatment and coastal networks" },
        { label: "System Trait", value: "Corrosion-ready control layers" }
      ],
      systems: {
        helius: {
          summary: "Helius-H photovoltaic systems deployed over water bodies maximize unused surface area for energy generation while minimizing land utilization and infrastructure demand. The water layer naturally cools the panels, improving efficiency and reducing evaporation from the water body while enabling large-scale renewable power production.",
          overview: "Hydra Helius unifies pump stations, treatment lines, and basin telemetry into one resilient supervisory stack.",
          features: [
            "Distributed pump and gate coordination",
            "Basin-level dispatch with real-time telemetry",
            "Water quality inputs folded into live control logic",
            "Resilient remote supervision across coastal networks"
          ],
          specs: [
            { label: "Ingress Rating", value: "IP68 marine housings" },
            { label: "Network Architecture", value: "Fiber and wireless hybrid loop" },
            { label: "Power Profile", value: "Low-draw remote stations" },
            { label: "Environmental Hardening", value: "Salt and humidity tolerant" }
          ],
          applications: [
            "Desalination sites",
            "Flood control corridors",
            "Water treatment campuses"
          ]
        },
        dynamus: {
          summary: "Dynamus-H Wave and tidal power conversion systems harness the kinetic energy of ocean waves and the predictable motion of tides to generate renewable electricity with high reliability. These systems offer consistent marine energy production with minimal emissions while utilizing natural ocean dynamics to support large-scale coastal power generation",
          overview: "Hydra Dynamus coordinates fluid movement and mechanical actuation where pressure control, gate timing, and system stability are tightly linked.",
          features: [
            "Pump sequencing across multi-stage lines",
            "Pressure-aware actuation for gates and valves",
            "Cavitation mitigation under transient flow states",
            "Synchronized transitions between operating modes"
          ],
          specs: [
            { label: "Drive Topology", value: "Variable-speed pump arrays" },
            { label: "Force Envelope", value: "High-cycle gate actuation" },
            { label: "Feedback Resolution", value: "Millisecond valve response" },
            { label: "Durability", value: "Anti-corrosion assemblies" }
          ],
          applications: [
            "Canal automation",
            "Water treatment lines",
            "Offshore transfer systems"
          ]
        },
      }
    },
    aero: {
      name: "Aero",
      theme: "theme-aero",
      heading: "Aero Series",
      showcaseDescription: "Overhead power solutions for off-grid areas.",
      overview: "Aero harnesses the natural movement of air through advanced wind energy systems to generate clean, high-efficiency power. Its decentralized design allows reliable energy production in remote and hard-to-reach locations where conventional fuel supply chains and vehicles cannot operate. By delivering power directly at the point of need, Aero expands energy access while strengthening resilient, low-carbon infrastructure.",
      stats: [
        { label: "Primary Focus", value: "Airborne and aerial systems" },
        { label: "Deployment Model", value: "Mission-aware mobile platforms" },
        { label: "System Trait", value: "Low-latency lightweight control" }
      ],
      systems: {
        helius: {
          summary: "Helius-A Ultra-lightweight photovoltaic panels provide high energy conversion with minimal mass, enabling efficient onboard power generation for drones and aerial platforms. Their flexible thin-film architecture integrates seamlessly with wings and airframes, extending flight endurance while reducing reliance on conventional battery storage.",
          overview: "Aero Helius coordinates sensing, mission logic, and command execution for airborne systems where response time and weight both matter.",
          features: [
            "Sensor fusion for air data and payload telemetry",
            "Mission-state orchestration across autonomous routines",
            "Edge autonomy with fast supervisory response",
            "Low-latency command paths for active control surfaces"
          ],
          specs: [
            { label: "Network Architecture", value: "Low-latency avionics bus" },
            { label: "Weight Class", value: "Lightweight composite enclosures" },
            { label: "Power Profile", value: "28V DC aerospace rail" },
            { label: "Operating Range", value: "-40C to 70C" }
          ],
          applications: [
            "Autonomous survey craft",
            "Atmospheric sensing payloads",
            "Aerial infrastructure inspection"
          ]
        },
        dynamus: {
          summary: "Dynamus-A Aerostat wind turbine systems utilize tethered airborne platforms to access stronger and more consistent high-altitude winds, enabling efficient renewable power generation. Their elevated operation increases energy yield while reducing the need for large ground-based tower structures, allowing deployment in remote or space-constrained locations.",
          overview: "Aero Dynamus delivers precision motion for high-response assemblies, balancing force, vibration, and control timing in compact airframes.",
          features: [
            "Precision servo coordination for control surfaces",
            "Vibration suppression under changing flight loads",
            "Force balancing for articulated aerial assemblies",
            "Tight coupling between motion and mission control"
          ],
          specs: [
            { label: "Drive Topology", value: "Multi-axis actuator lattice" },
            { label: "Response Envelope", value: "Sub-millisecond servo sync" },
            { label: "Force Envelope", value: "Lightweight high-output actuation" },
            { label: "Maintenance Profile", value: "Hot-swap motion modules" }
          ],
          applications: [
            "Drone inspection fleets",
            "Robotic airframes",
            "Precision positioning rigs"
          ]
        }
      }
    },
    storage: {
      name: "Silo",
      theme: "theme-storage",
      heading: "Silo Series",
      showcaseDescription: "Power reserves for unexpected surges.",
      overview: "Silo provides advanced energy storage systems designed to capture surplus power and release it precisely when demand rises. By stabilizing supply across renewable sources, it ensures continuous energy delivery while effectively handling sudden power surges and generation fluctuations. Built for scalable grid integration, Silo strengthens long-term energy resilience and supports balanced power distribution across modern energy networks.",
      stats: [
        { label: "Primary Focus", value: "Energy reserve systems" },
        { label: "Deployment Model", value: "Grid and campus installations" },
        { label: "System Trait", value: "High-availability energy control" }
      ],
      systems: {
        thermus: {
          summary: "Sand-based energy storage systems store excess energy as thermal heat within high-capacity sand reservoirs, enabling efficient long-duration energy storage with low-cost and abundant materials. The stored heat can be retained for extended periods and converted back into usable energy, providing stable grid support and effective management of power surges.",
          overview: "Storage Thermus manages cell temperatures, cooling pathways, and anomaly detection to protect energy assets during charge, discharge, and standby modes.",
          features: [
            "Cell temperature equalization across pack groups",
            "Adaptive cooling for shifting load conditions",
            "Pre-conditioning logic for optimal dispatch readiness",
            "Thermal runaway detection with staged response"
          ],
          specs: [
            { label: "Thermal Range", value: "-20C to 120C" },
            { label: "Transfer Media", value: "Cold plate or refrigerant loop" },
            { label: "Sensor Density", value: "160 cell-group channels" },
            { label: "Safety Layer", value: "Emergency thermal purge" }
          ],
          applications: [
            "Grid battery facilities",
            "EV charging depots",
            "Critical backup power systems"
          ]
        },
        reactus: {
          summary: "Hydrogen fuel cell storage systems convert surplus electricity into hydrogen and deliver clean on-demand power, providing a zero-emission alternative to conventional diesel generators. Their high energy density and modular architecture enable quiet, reliable backup power and long-duration energy supply without fuel combustion or particulate emissions",
          overview: "Storage Reactus manages chemistry conditioning, gas handling, and controlled process transitions for advanced storage and conversion programs.",
          features: [
            "Chemistry stabilization under variable states of charge",
            "Gas handling and chamber protection workflows",
            "Controlled conversion routines for hybrid systems",
            "High-safety process transitions with traceable logic"
          ],
          specs: [
            { label: "Chamber Pressure", value: "Up to 30 bar" },
            { label: "Chemistry Support", value: "Lithium, sodium, hybrid lines" },
            { label: "Control Model", value: "Recipe-based conversion engine" },
            { label: "Containment", value: "Vented high-safety cabinets" }
          ],
          applications: [
            "Hybrid storage labs",
            "Conditioning skids",
            "Pilot chemistry programs"
          ]
        }
      }
    }
  }
};

const domainSystemCardSlides = {
  terra: {
    helius: [
      { src: "assets/images/SR-124.jpg", label: "Industry Solar", productId: "TH-552" },
      { src: "assets/images/TH-133.jpg", label: "Residency Solar", productId: "TH-133" },
    ],
    reactus: [
      { src: "assets/images/TR-342.jpg", label: "Industry Fuel Cells", productId: "TR-342" },
      { src: "assets/images/TR-233.jpeg", label: "Residency Fuel Cells", productId: "TR-233" },
    ]
  },
  hydra: {
    helius: [
      { src: "assets/images/HH-441.jpeg", label: "Solar Grid", productId: "HH-441" }
    ],
    dynamus: [
      { src: "assets/images/HD-541.jpeg", label: "Wave Energy Converter", productId: "HD-541" },
      { src: "assets/images/HD-551.jpeg", label: "Tidal Energy Converter", productId: "HD-551" }
    ]
  },
  aero: {
    helius: [
      { src: "assets/images/AH-231.png", label: "Aerial Solar", productId: "AH-231" }
    ],
    dynamus: [
      { src: "assets/images/AD-241.jpg", label: "Turbine to Industry", productId: "AD-341" },
      { src: "assets/images/AD-651.png", label: "Turbine to Grid", productId: "AD-651" }
    ]
  },
  storage: {
    thermus: [
      { src: "assets/images/sand battery.jpg", label: "Sand based Storage", productId: "ST-551" }
    ],
    reactus: [
      { src: "assets/images/SR-341.jpg", label: "Hydrogen Based Storage", productId: "SR-341" },
      { src: "assets/images/TR-233.jpeg", label: "Portable Hydrogen Based Storage", productId: "SR-124" }
    ]
  }
};

const THEME_STORAGE_KEY = "site-theme";
const COOKIE_CONSENT_KEY = "site-cookie-consent";
const COOKIE_LIFETIME_DAYS = 180;

function getCookie(name) {
  if (typeof document === "undefined" || !document.cookie) {
    return "";
  }

  const prefix = `${encodeURIComponent(name)}=`;
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(prefix));

  return match ? decodeURIComponent(match.slice(prefix.length)) : "";
}

function setCookie(name, value, days = COOKIE_LIFETIME_DAYS) {
  if (typeof document === "undefined") {
    return;
  }

  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function readStoredPreference(key) {
  const cookieValue = getCookie(key);
  if (cookieValue) {
    return cookieValue;
  }

  try {
    // Migrate legacy localStorage values into cookies so older visits keep
    // their saved theme without maintaining two separate preference systems.
    const legacyValue = window.localStorage.getItem(key);
    if (legacyValue) {
      setCookie(key, legacyValue);
      return legacyValue;
    }
  } catch (_error) {
    return "";
  }

  return "";
}

function persistPreference(key, value) {
  setCookie(key, value);

  try {
    window.localStorage.setItem(key, value);
  } catch (_error) {
    // Ignore private-mode storage failures and keep the cookie as the source of truth.
  }
}

function getSystemCardSlides(domainSlug, systemSlug) {
  return domainSystemCardSlides[domainSlug]?.[systemSlug] || [];
}

function renderSystemCardSlider(domainSlug, systemSlug) {
  const slides = getSystemCardSlides(domainSlug, systemSlug);
  if (slides.length === 0) {
    return "";
  }

  return `
    <div class="system-card-slider" data-system-card-slider>
      <div class="system-card-track">
        ${slides.map((slide) => `
          <figure class="system-card-slide">
            <img src="${slide.src}" alt="${slide.label} ${slide.productId}" loading="lazy" decoding="async">
            <span class="system-card-product-id">${slide.productId}</span>
            <figcaption>${slide.label}</figcaption>
          </figure>
        `).join("")}
      </div>
      <div class="system-card-controls">
        <button class="system-card-button" type="button" data-direction="-1" aria-label="Show previous image">
          <span aria-hidden="true">&larr;</span>
        </button>
        <button class="system-card-button" type="button" data-direction="1" aria-label="Show next image">
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  `;
}

function attachSystemCardSliders() {
  const sliders = document.querySelectorAll("[data-system-card-slider]");
  if (sliders.length === 0) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  sliders.forEach((slider) => {
    const track = slider.querySelector(".system-card-track");
    const slides = slider.querySelectorAll(".system-card-slide");
    const buttons = slider.querySelectorAll(".system-card-button");

    if (!track || slides.length === 0) {
      return;
    }

    if (slides.length === 1) {
      slides[0].classList.add("is-active");
      return;
    }

    let index = 0;
    let intervalId = null;
    let inViewport = true;

    function render() {
      track.style.transform = `translate3d(${-100 * index}%, 0, 0)`;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
      });
    }

    function step(direction) {
      index = (index + direction + slides.length) % slides.length;
      render();
    }

    function stopAutoRotate() {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    }

    function startAutoRotate() {
      if (prefersReducedMotion || intervalId || document.hidden || !inViewport) {
        return;
      }

      intervalId = window.setInterval(() => {
        step(1);
      }, 4800);
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = Number(button.dataset.direction || "1") === -1 ? -1 : 1;
        stopAutoRotate();
        step(direction);
        startAutoRotate();
      });
    });

    slider.addEventListener("mouseenter", stopAutoRotate);
    slider.addEventListener("mouseleave", startAutoRotate);
    slider.addEventListener("focusin", stopAutoRotate);
    slider.addEventListener("focusout", (event) => {
      if (!(event.relatedTarget instanceof Element) || !slider.contains(event.relatedTarget)) {
        startAutoRotate();
      }
    });

    // Pause background carousel work when the slider is off-screen so motion
    // remains smooth for the visible content.
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          inViewport = Boolean(entry?.isIntersecting);

          if (inViewport) {
            startAutoRotate();
          } else {
            stopAutoRotate();
          }
        },
        {
          threshold: 0.35
        }
      );

      observer.observe(slider);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopAutoRotate();
      } else {
        startAutoRotate();
      }
    });

    render();
    startAutoRotate();
  });
}

function preferredTheme() {
  const storedTheme = readStoredPreference(THEME_STORAGE_KEY);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.body.classList.toggle("theme-dark", nextTheme === "dark");
  document.body.classList.toggle("theme-light", nextTheme === "light");
  document.documentElement.style.colorScheme = nextTheme;
  persistPreference(THEME_STORAGE_KEY, nextTheme);

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    const isDark = nextTheme === "dark";
    const label = themeToggle.querySelector(".theme-toggle-label");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    if (label) {
      label.textContent = isDark ? "Light" : "Dark";
    }
  }
}

function renderCookieBanner() {
  if (typeof document === "undefined" || document.querySelector("[data-cookie-banner]")) {
    return;
  }

  const hasSavedChoice = Boolean(getCookie(COOKIE_CONSENT_KEY));

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <aside class="cookie-banner${hasSavedChoice ? " is-hidden" : ""}" data-cookie-banner role="dialog" aria-label="Cookie preferences" aria-hidden="${hasSavedChoice ? "true" : "false"}">
        <div class="cookie-banner-copy">
          <strong>Cookie preferences</strong>
          <p>We use cookies to remember your theme and core site settings so the experience stays consistent across every page.</p>
        </div>
        <div class="cookie-banner-actions">
          <button class="cookie-banner-button is-secondary" type="button" data-cookie-choice="essential">Essential only</button>
          <button class="cookie-banner-button" type="button" data-cookie-choice="accepted">Allow cookies</button>
        </div>
      </aside>
      <button class="cookie-settings-toggle${hasSavedChoice ? " is-visible" : ""}" type="button" data-open-cookie-banner aria-label="Open cookie settings">
        Cookie settings
      </button>
    `
  );
}

function attachCookieBanner() {
  const banner = document.querySelector("[data-cookie-banner]");
  const openButton = document.querySelector("[data-open-cookie-banner]");
  const choiceButtons = document.querySelectorAll("[data-cookie-choice]");

  if (!banner || !openButton || choiceButtons.length === 0) {
    return;
  }

  function syncCookieUI(isVisible) {
    banner.classList.toggle("is-hidden", !isVisible);
    banner.setAttribute("aria-hidden", String(!isVisible));
    openButton.classList.toggle("is-visible", !isVisible);
  }

  // Keep the floating settings control available after a decision so visitors
  // can reopen the banner and update their preference later.
  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.getAttribute("data-cookie-choice") === "accepted" ? "accepted" : "essential";
      setCookie(COOKIE_CONSENT_KEY, choice);
      syncCookieUI(false);
    });
  });

  openButton.addEventListener("click", () => {
    syncCookieUI(true);
  });

  syncCookieUI(!getCookie(COOKIE_CONSENT_KEY));
}

function pageKey() {
  const raw = document.body.dataset.page || "home";
  return raw === "domain" || raw === "system" ? "products" : raw;
}

function setMetaDescription(content) {
  const tag = document.querySelector('meta[name="description"]');
  if (tag && content) {
    tag.setAttribute("content", content);
  }
}

function renderHeader() {
  const target = document.getElementById("site-header");
  if (!target) {
    return;
  }

  const current = pageKey();
  const links = siteData.nav
    .map((item) => {
      const active = item.key === current ? " active" : "";
      if (!item.children || item.children.length === 0) {
        return `<a class="nav-link${active}" href="${item.href}">${item.label}</a>`;
      }

      // Group child links under one parent item so the mobile flyout can show
      // drill-down navigation without turning the desktop header into a mega menu.
      const childLinks = item.children
        .map((child) => `<a class="nav-sublink" href="${child.href}">${child.label}</a>`)
        .join("");

      return `
        <div class="nav-group${active ? " is-active" : ""}">
          <a class="nav-link${active}" href="${item.href}">${item.label}</a>
          <div class="nav-submenu">
            ${childLinks}
          </div>
        </div>
      `;
    })
    .join("");

  target.innerHTML = `
    <header class="site-header">
      <div class="nav-overlay" data-close-menu></div>
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="${siteData.brand.name} home">
          <img class="brand-logo" src="${siteData.brand.logo}" alt="${siteData.brand.name}">
        </a>
        <button class="theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed="false">
          <span class="theme-toggle-icon" aria-hidden="true"></span>
          <span class="theme-toggle-label">Dark</span>
        </button>
        <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span class="nav-toggle-line" aria-hidden="true"></span>
          <span class="nav-toggle-line" aria-hidden="true"></span>
          <span class="nav-toggle-line" aria-hidden="true"></span>
        </button>
        <nav class="site-nav" aria-label="Primary navigation">
          ${links}
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const target = document.getElementById("site-footer");
  if (!target) {
    return;
  }

  const links = siteData.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  target.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="brand" href="index.html">
              <img class="brand-logo footer-logo" src="${siteData.brand.footerLogo}" alt="${siteData.brand.name}">
            </a>
            <p>${siteData.brand.tagline}</p>
          </div>
          <div class="footer-links">
            <h4>Navigation</h4>
            ${links}
          </div>
          <div class="footer-meta">
            <h4>Contact</h4>
            <a href="mailto:${siteData.brand.email}">${siteData.brand.email}</a>
            <a href="tel:${siteData.brand.phone.replace(/\s+/g, "")}">${siteData.brand.phone}</a>
            <span>Bengaluru, India</span>
          </div>
        </div>
        <div class="footer-copy">Copyright ${new Date().getFullYear()} ${siteData.brand.name}.Built by <a href="https://subhra1432.github.io/Portfolio/">Subhrakanta.</a></div>
      </div>
    </footer>
  `;
}

function attachHeaderBehavior() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const overlay = document.querySelector("[data-close-menu]");
  const navLinks = document.querySelectorAll(".site-nav a");
  const themeToggle = document.querySelector(".theme-toggle");

  function closeMenu() {
    document.body.classList.remove("menu-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  }

  function openMenu() {
    document.body.classList.add("menu-open");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.contains("menu-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Mirror native drawer behavior on mobile by closing the flyout whenever the
  // pointer lands outside the nav panel or the toggle itself.
  document.addEventListener("pointerdown", (event) => {
    if (!document.body.classList.contains("menu-open") || window.innerWidth > 880) {
      return;
    }

    if (!(event.target instanceof Element)) {
      return;
    }

    if (event.target.closest(".site-nav") || event.target.closest(".nav-toggle")) {
      return;
    }

    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  if (themeToggle) {
    applyTheme(document.body.classList.contains("theme-dark") ? "dark" : "light");
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 880) {
      closeMenu();
    }
  });

  function syncHeaderState() {
    const isScrolled = document.body.classList.contains("is-scrolled");
    const nextScrollY = window.scrollY;

    if (!isScrolled && nextScrollY > 32) {
      document.body.classList.add("is-scrolled");
    } else if (isScrolled && nextScrollY < 12) {
      document.body.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", syncHeaderState, { passive: true });
  syncHeaderState();
}

function domainEntries() {
  return Object.entries(siteData.domains);
}

function renderHomeShowcase() {
  const target = document.querySelector('[data-render="home-showcase"]');
  if (!target) {
    return;
  }

  target.innerHTML = domainEntries()
    .map(([slug, domain]) => {
      return `
        <article class="cinematic-panel ${domain.theme}" data-reveal>
          <div class="cinematic-content">
            <span class="eyebrow">${domain.name} Systems</span>
            <h3>${domain.name}</h3>
            <p>${domain.showcaseDescription}</p>
            <a class="button" href="domain.html?domain=${slug}">Explore ${domain.name}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderProductsGrid() {
  const target = document.querySelector('[data-render="products-grid"]');
  if (!target) {
    return;
  }

  target.innerHTML = domainEntries()
    .map(([slug, domain]) => {
      const description = domain.showcaseDescription || domain.overview || "";
      return `
        <article class="application-card" data-reveal>
          <div class="card-visual ${domain.theme}"></div>
          <span class="eyebrow">${domain.name} Domain</span>
          <h3>${domain.heading}</h3>
          <p class="domain-card-summary">${description}</p>
          <a class="link-arrow" href="domain.html?domain=${slug}">Open ${domain.name}</a>
        </article>
      `;
    })
    .join("");
}

function renderApplicationPreview() {
  const target = document.querySelector('[data-render="application-preview"]');
  if (!target) {
    return;
  }

  target.innerHTML = siteData.applicationsPreview
    .map((item) => {
      return `
        <article class="application-card" data-reveal>
          <div class="card-visual application-card-visual">
            <img src="${item.image}" alt="${item.imageAlt || item.title}" loading="lazy" decoding="async">
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `;
    })
    .join("");
}

function getDomainFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const domainSlug = (params.get("domain") || "terra").toLowerCase();
  return {
    slug: siteData.domains[domainSlug] ? domainSlug : "terra",
    data: siteData.domains[domainSlug] || siteData.domains.terra
  };
}

function getSystemFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const systemSlug = (params.get("system") || "helius").toLowerCase();
  const blueprint = siteData.systemBlueprints[systemSlug] || siteData.systemBlueprints.helius;
  const safeSlug = siteData.systemBlueprints[systemSlug] ? systemSlug : "helius";
  return { slug: safeSlug, blueprint };
}
function renderDomainPage() {
  const target = document.getElementById("domain-page");
  if (!target) {
    return;
  }

  const { slug, data: domain } = getDomainFromUrl();
  const systemCards = Object.entries(domain.systems)
    .map(([systemSlug, systemData]) => {
      const blueprint = siteData.systemBlueprints[systemSlug];
      return `
        <article class="system-card" data-reveal>
          ${renderSystemCardSlider(slug, systemSlug)}
          <span class="eyebrow">${blueprint.category}</span>
          <h3>${blueprint.name}</h3>
          <p>${systemData.summary}</p>
          <!-- <a class="link-arrow" href="system.html?domain=${slug}&system=${systemSlug}">View ${blueprint.name}</a> -->
        </article>
      `;
    })
    .join("");

  const stats = domain.stats
    .map((item) => {
      return `
        <article class="summary-card" data-reveal>
          <span class="eyebrow">${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `;
    })
    .join("");

  document.title = `${domain.name} | ${siteData.brand.name}`;
  setMetaDescription(`${domain.name} systems from ${siteData.brand.name}. ${domain.overview || domain.showcaseDescription || ""}`);

  target.innerHTML = `
    <section class="page-hero ${domain.theme}">
      <div class="container page-hero-content title-only" data-reveal>
        <h1>${domain.heading}</h1>
      </div>
    </section>

    <section class="content-band">
      <div class="container domain-intro">
        <div class="section-heading" data-reveal>
          <span class="eyebrow">Technology Overview</span>
          <p>${domain.overview || domain.showcaseDescription}</p>
        </div>
        <div class="summary-grid">
          ${stats}
        </div>
      </div>
    </section>

    <section class="content-band muted-band" id="systems">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="eyebrow">System Portfolio</span>
          <h2>Navigate the ${domain.name} system family.</h2>
          <p>Every ${domain.name} deployment is structured around two primary systems.</p>
        </div>
        <div class="system-grid">
          ${systemCards}
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-shell" data-reveal>
        <span class="eyebrow">Program Consultation</span>
        <h2>Need a domain-level briefing for ${domain.name}?</h2>
        <p>Our engineering teams can translate portfolio structure into deployment planning, site architecture, and system selection.</p>
        <a class="button" href="contact.html">Request Consultation</a>
      </div>
    </section>
  `;
}

function renderSystemPage() {
  const target = document.getElementById("system-page");
  if (!target) {
    return;
  }

  const { slug: domainSlug, data: domain } = getDomainFromUrl();
  const { slug: systemSlug, blueprint } = getSystemFromUrl();
  const systemData = domain.systems[systemSlug] || domain.systems.helius;
  const activeSystemSlug = domain.systems[systemSlug] ? systemSlug : "helius";
  const specs = [...systemData.specs, ...blueprint.baseSpecs];
  const overviewVisual = activeSystemSlug === "helius"
    ? `<div class="card-visual ${domain.theme} system-overview-visual" data-reveal aria-hidden="true"></div>`
    : "";
  const heroSpecs = specs
    .slice(0, 3)
    .map((item) => {
      return `
        <article class="summary-card" data-reveal>
          <span class="eyebrow">${item.label}</span>
          <strong>${item.value}</strong>
        </article>
      `;
    })
    .join("");

  const subsectionCards = blueprint.subsections
    .map((subsection) => {
      return `
        <article class="module-card" id="${activeSystemSlug}-${subsection.slug}" data-reveal>
          ${domain.theme === "theme-hydra" ? '<div class="module-visual theme-hydra" aria-hidden="true"></div>' : ""}
          <span class="eyebrow">${subsection.title}</span>
          <h3>${subsection.summary}</h3>
          <p>This layer is tuned for ${domain.name} deployments and supports ${systemData.summary.toLowerCase()}</p>
          <ul>
            ${subsection.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      `;
    })
    .join("");

  const featureList = systemData.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  const specsMarkup = specs
    .map((item) => {
      return `
        <article class="spec-item" data-reveal>
          <strong>${item.label}</strong>
          <span>${item.value}</span>
        </article>
      `;
    })
    .join("");

  const applicationsMarkup = systemData.applications
    .map((item) => {
      return `
        <article class="application-card" data-reveal>
          <div class="card-visual ${domain.theme}"></div>
          <h3>${item}</h3>
          <p>${blueprint.name} extends into this application with a modular control layer, clear operator visibility, and resilient deployment packaging.</p>
        </article>
      `;
    })
    .join("");

  document.title = `${domain.name} ${blueprint.name} | ${siteData.brand.name}`;
  setMetaDescription(`${domain.name} ${blueprint.name} from ${siteData.brand.name}. ${systemData.summary}`);

  target.innerHTML = `
    <section class="page-hero ${domain.theme}">
      <div class="container page-hero-content title-only" data-reveal>
        <h1>${blueprint.name}</h1>
      </div>
    </section>

    <section class="content-band">
      <div class="container system-overview-shell">
        <div class="section-heading" data-reveal>
          <span class="eyebrow">Technology Overview</span>
          <h2>${blueprint.name} is the ${blueprint.category.toLowerCase()} within ${domain.name}.</h2>
          <p>${systemData.overview}</p>
        </div>
        ${overviewVisual}
        <div class="summary-grid">
          ${heroSpecs}
        </div>
      </div>
    </section>

    <section class="content-band muted-band" id="subsections">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="eyebrow">Subsection Navigation</span>
          <h2>Navigate the ${blueprint.name} subsystem stack.</h2>
          <p>The four core subsections organize runtime logic, controls, sensing, and deployment pathways into clear modules.</p>
        </div>
        <div class="module-grid">
          ${subsectionCards}
        </div>
      </div>
    </section>

    <section class="content-band" id="features">
      <div class="container split-layout">
        <div data-reveal>
          <div class="section-heading">
            <span class="eyebrow">Feature List</span>
            <h2>Key operating capabilities.</h2>
            <p>${domain.name} ${blueprint.name} is designed for premium performance, clear supervision, and modular scaling.</p>
          </div>
          <ul class="feature-list">
            ${featureList}
          </ul>
        </div>
        <div data-reveal id="specifications">
          <div class="section-heading">
            <span class="eyebrow">Technical Specifications</span>
            <h2>Core specification envelope.</h2>
            <p>Technical characteristics combine domain-specific operating requirements with the shared ${blueprint.name} platform model.</p>
          </div>
          <div class="spec-grid">
            ${specsMarkup}
          </div>
        </div>
      </div>
    </section>

    <section class="content-band" id="applications">
      <div class="container">
        <div class="section-heading" data-reveal>
          <span class="eyebrow">Applications</span>
          <h2>Deployment profiles for ${domain.name} ${blueprint.name}.</h2>
        </div>
        <div class="card-grid">
          ${applicationsMarkup}
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container cta-shell" data-reveal>
        <span class="eyebrow">Engineering Support</span>
        <h2>Need a detailed brief for ${domain.name} ${blueprint.name}?</h2>
        <p>We can share fit guidance, system mapping, and program-level architecture recommendations.</p>
        <a class="button" href="contact.html">Talk To Engineering</a>
      </div>
    </section>
  `;
}

function attachContactForm() {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");
  const submitButton = form?.querySelector('button[type="submit"]');
  if (!form || !response || !submitButton) {
    return;
  }

  function setResponseState(message, tone = "success", mailtoLink = "") {
    response.textContent = "";
    response.classList.remove("is-success", "is-error");
    response.classList.add(tone === "error" ? "is-error" : "is-success");
    response.append(document.createTextNode(message));

    if (mailtoLink) {
      response.append(document.createTextNode(" "));
      const link = document.createElement("a");
      link.href = mailtoLink;
      link.textContent = "Email us directly";
      response.append(link);
    }
  }

  // This site is static, so the most reliable end-to-end contact flow is to
  // open the visitor's mail client with a fully populated inquiry draft.
  function buildInquiryMailto(fields) {
    const subjectParts = ["Website inquiry"];
    if (fields.organization) {
      subjectParts.push(`from ${fields.organization}`);
    }

    const subject = `${subjectParts.join(" ")} (${fields.name})`;
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Organization: ${fields.organization || "Not provided"}`,
      "",
      "Message:",
      fields.message
    ].join("\n");

    return `mailto:${siteData.brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const fields = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      organization: String(formData.get("organization") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    const firstMissingField = Object.entries({
      name: fields.name,
      email: fields.email,
      message: fields.message
    }).find(([, value]) => !value)?.[0];

    if (firstMissingField) {
      form.querySelector(`[name="${firstMissingField}"]`)?.focus();
      setResponseState("Please complete the required fields before sending your inquiry.", "error");
      return;
    }

    const mailtoLink = buildInquiryMailto(fields);
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    setResponseState("Your email app should open with a prefilled inquiry draft.", "success", mailtoLink);

    window.location.href = mailtoLink;

    window.setTimeout(() => {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
    }, 700);
  });
}

function observeReveals() {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
}

function init() {
  applyTheme(preferredTheme());
  renderHeader();
  renderFooter();
  renderCookieBanner();
  renderHomeShowcase();
  renderProductsGrid();
  renderApplicationPreview();
  renderDomainPage();
  renderSystemPage();
  attachHeaderBehavior();
  attachCookieBanner();
  attachSystemCardSliders();
  attachContactForm();
  observeReveals();
}

init();
