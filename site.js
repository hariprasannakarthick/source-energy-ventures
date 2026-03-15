const siteData = {
  brand: {
    name: "The Source-Company",
    tagline: "Engineering The next wave of Power",
    email: "support@thesource-company.com",
    phone: "+91 xxxxx-xxxxx",
    logo: "assets/images/logo.png"
  },
  nav: [
    { key: "home", label: "Home", href: "index.html" },
    { key: "products", label: "Products", href: "products.html" },
    { key: "services", label: "Services", href: "services.html" },
    { key: "applications", label: "Applications", href: "applications.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ],
  applicationsPreview: [
    {
      title: "Renewable Energy",
      description: "Grid-aware coordination for clean power generation, dispatch balancing, and site resilience.",
      theme: "theme-storage"
    },
    {
      title: "Environmental Monitoring",
      description: "Persistent sensing and high-confidence telemetry across distributed land, water, and air systems.",
      theme: "theme-terra"
    },
    {
      title: "Smart Infrastructure",
      description: "Connected control layers for campuses, public assets, utility networks, and intelligent facilities.",
      theme: "theme-hydra"
    },
    {
      title: "Robotics Systems",
      description: "Precision motion, operator visibility, and deterministic feedback for semi-autonomous environments.",
      theme: "theme-aero"
    },
    {
      title: "Industrial Automation",
      description: "Modular engineering stacks that integrate sensing, actuation, and process control at production scale.",
      theme: "theme-storage"
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
        { label: "System Trait", value: "Deterministic edge control" }
      ],
      systems: {
        helius: {
          summary: "Coordinated control for terrain-based energy and sensing assets.",
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
        thermus: {
          summary: "Thermal regulation for ground energy and process sites.",
          overview: "Terra Thermus manages heat transfer, thermal buffering, and condition monitoring for land-based energy and industrial installations.",
          features: [
            "Heat exchange balancing across equipment clusters",
            "Thermal storage coordination for load shifting",
            "Predictive temperature supervision at edge sites",
            "Fail-safe thermal interventions for harsh environments"
          ],
          specs: [
            { label: "Thermal Range", value: "-40C to 180C" },
            { label: "Transfer Media", value: "Liquid, glycol, and oil loops" },
            { label: "Sensor Density", value: "128 thermal points per array" },
            { label: "Safety Layer", value: "Multi-zone thermal cutoffs" }
          ],
          applications: [
            "Geotechnical heating systems",
            "Industrial process skids",
            "District energy nodes"
          ]
        },
        dynamus: {
          summary: "Mechanical motion control for land systems and heavy automation.",
          overview: "Terra Dynamus coordinates high-force motion systems for terrestrial robotics, automated inspection, and industrial handling operations.",
          features: [
            "Actuator timing across heavy-duty motion assemblies",
            "Vibration-aware control for outdoor infrastructure",
            "Energy-efficient motion profiles for continuous duty",
            "Integrated operator safeguards during live motion events"
          ],
          specs: [
            { label: "Torque Management", value: "Dynamic vector control" },
            { label: "Drive Topology", value: "Multi-axis servo network" },
            { label: "Feedback Resolution", value: "0.01 mm positional tracking" },
            { label: "Duty Cycle", value: "24/7 industrial rating" }
          ],
          applications: [
            "Robotic handling systems",
            "Mobile infrastructure platforms",
            "Automated inspection gantries"
          ]
        },
        reactus: {
          summary: "Reactive process control for terrestrial treatment and materials systems.",
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
          summary: "Water network control kernel for treatment and coastal assets.",
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
        thermus: {
          summary: "Thermal management for water treatment and marine energy systems.",
          overview: "Hydra Thermus balances process heat, cooling, and thermal efficiency for water infrastructure where chemistry and flow both matter.",
          features: [
            "Exchanger balancing for wet-end processes",
            "Saline process heat management",
            "Adaptive cooling loops for variable water loads",
            "Thermal loss diagnostics across distributed equipment"
          ],
          specs: [
            { label: "Thermal Range", value: "0C to 220C" },
            { label: "Transfer Media", value: "Seawater-compatible loop paths" },
            { label: "Sensor Density", value: "96 wet-end thermal points" },
            { label: "Materials", value: "Duplex stainless internals" }
          ],
          applications: [
            "Desalination platforms",
            "Aquaculture climate control",
            "Marine energy skids"
          ]
        },
        dynamus: {
          summary: "Motion and flow mechanics for pumps, gates, and valves.",
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
        reactus: {
          summary: "Reactive treatment control for water chemistry and compliance workflows.",
          overview: "Hydra Reactus manages controlled dosing, mixing, and process traceability for treatment chemistry in regulated water environments.",
          features: [
            "Chemical dosing automation with traceable steps",
            "Chamber mixing stability across variable influent states",
            "Compliance logging tied directly to process events",
            "Safe intervention logic for treatment anomalies"
          ],
          specs: [
            { label: "Chamber Pressure", value: "Up to 18 bar" },
            { label: "Dosing Precision", value: "+/-0.1%" },
            { label: "Reactor Type", value: "Continuous-flow process line" },
            { label: "Compliance Profile", value: "Traceable batch records" }
          ],
          applications: [
            "Membrane pretreatment",
            "Wastewater conditioning",
            "Nutrient recovery systems"
          ]
        }
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
          summary: "Control kernel for flight-adjacent and atmospheric platforms.",
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
        thermus: {
          summary: "Thermal stability platform for avionics and aerial payloads.",
          overview: "Aero Thermus protects sensitive electronics and energy systems with altitude-aware thermal control and high-efficiency heat routing.",
          features: [
            "Battery temperature conditioning during mission cycles",
            "Payload cooling for dense edge compute loads",
            "Altitude-aware regulation under rapid atmospheric shifts",
            "Thermal anomaly detection before mission degradation"
          ],
          specs: [
            { label: "Thermal Range", value: "-55C to 160C" },
            { label: "Transfer Media", value: "Phase-change and closed-loop air" },
            { label: "Sensor Density", value: "80 distributed thermal points" },
            { label: "Control Cadence", value: "High-altitude adaptive tuning" }
          ],
          applications: [
            "Unmanned aircraft systems",
            "High-altitude stations",
            "Edge compute payloads"
          ]
        },
        dynamus: {
          summary: "Motion system for thrust vectoring and aerial articulation.",
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
        },
        reactus: {
          summary: "Reaction platform for atmospheric processing and material transformation.",
          overview: "Aero Reactus supports portable and onboard reaction workflows where containment, micro-dosing, and autonomous timing must remain tightly controlled.",
          features: [
            "Chamber conditioning for compact process units",
            "Micro-dosing with repeatable recipe control",
            "Autonomous reaction sequences with safety interlocks",
            "Protected processing for airborne material programs"
          ],
          specs: [
            { label: "Chamber Pressure", value: "Vacuum to 12 bar" },
            { label: "Catalyst Management", value: "Sealed cartridge workflow" },
            { label: "Precision Profile", value: "Micro-batch process control" },
            { label: "Enclosure", value: "Carbon-composite shield" }
          ],
          applications: [
            "Air sampling systems",
            "Advanced materials research",
            "Portable synthesis units"
          ]
        }
      }
    },
    storage: {
      name: "Storage",
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
        helius: {
          summary: "Energy storage control kernel for balancing, safety, and dispatch.",
          overview: "Storage Helius orchestrates battery clusters, inverters, and grid events through a deterministic supervisory layer built for reserve power environments.",
          features: [
            "Cell cluster orchestration for stable dispatch",
            "Balancing logic tied to live operating states",
            "Inverter coordination for flexible grid response",
            "Fast event handling during transients and faults"
          ],
          specs: [
            { label: "Network Architecture", value: "Battery cluster ring bus" },
            { label: "Voltage Class", value: "600V to 1500V DC" },
            { label: "Safety Layer", value: "Cell-level isolation logic" },
            { label: "Operating Range", value: "-10C to 50C" }
          ],
          applications: [
            "Utility battery systems",
            "Campus energy hubs",
            "Fast-response microgrids"
          ]
        },
        thermus: {
          summary: "Thermal system for batteries and energy reserve units.",
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
        dynamus: {
          summary: "Mechanical motion and switching layer inside storage facilities.",
          overview: "Storage Dynamus coordinates service access, switching sequences, and mechanical isolation across dense reserve power environments.",
          features: [
            "Rack actuation and service aisle coordination",
            "Breaker sequencing tied to protection logic",
            "Mechanical isolation during fault response",
            "Robotic access flows for efficient maintenance"
          ],
          specs: [
            { label: "Drive Topology", value: "Compact servo and breaker network" },
            { label: "Duty Cycle", value: "Rapid-response switching" },
            { label: "Response Envelope", value: "Sub-second isolation events" },
            { label: "Maintenance Profile", value: "Front-access service geometry" }
          ],
          applications: [
            "Energy warehouses",
            "Modular reserve banks",
            "Automated service aisles"
          ]
        },
        reactus: {
          summary: "Reactive conversion and conditioning for stored energy chemistry.",
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

const THEME_STORAGE_KEY = "site-theme";

function preferredTheme() {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
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
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

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
      return `<a class="nav-link${active}" href="${item.href}">${item.label}</a>`;
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
          <span></span>
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
              <img class="brand-logo" src="${siteData.brand.logo}" alt="${siteData.brand.name}">
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
        <div class="footer-copy">Copyright ${new Date().getFullYear()} ${siteData.brand.name}. Built by ❤️.</div>
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
      return `
        <article class="application-card" data-reveal>
          <div class="card-visual ${domain.theme}"></div>
          <span class="eyebrow">${domain.name} Domain</span>
          <h3>${domain.heading}</h3>
          <p>${domain.pageDescription}</p>
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
          <div class="card-visual ${item.theme}"></div>
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
          <span class="eyebrow">${blueprint.category}</span>
          <h3>${blueprint.name}</h3>
          <p>${systemData.summary}</p>
          <a class="link-arrow" href="system.html?domain=${slug}&system=${systemSlug}">View ${blueprint.name}</a>
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
  setMetaDescription(`${domain.name} systems from ${siteData.brand.name}. ${domain.pageDescription}`);

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
          <p>Every ${domain.name} deployment is structured around four primary systems with dedicated subsystem pages.</p>
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
  if (!form || !response) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = new FormData(form).get("name") || "there";
    response.textContent = `Thanks ${name}. The Source-Company team will respond within one business day.`;
    form.reset();
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
  renderHomeShowcase();
  renderProductsGrid();
  renderApplicationPreview();
  renderDomainPage();
  renderSystemPage();
  attachHeaderBehavior();
  attachContactForm();
  observeReveals();
}

init();
