// MTK Screws / Aggarwal Industries — product catalogue & site config.
// Single source of truth for all data used across the site.
// Code logic (slug map, SVG injector, render helpers, DOM injection) lives in script.js.

// ─── Site-wide configuration ────────────────────────────────────────────
// Update this object whenever contact details, social links or branding change.
// script.js reads this and injects the values into every page automatically.
window.SITE_CONFIG = {
  company: {
    name:      'MTK Screws',
    subName:   'Aggarwal Industries',
    logoSrc:   '/assets/mtk-logo.png',
    logoAlt:   'MTK Screws Logo',
    founded:   1983,
    copyright: 'Aggarwal Industries (MTK Screws)',
  },
  contact: {
    phone1:    '+91 97112 21918',
    phone1Url: 'tel:+919711221918',
    phone2:    '+91 98102 29770',
    phone2Url: 'tel:+919810229770',
    email:     'aggarwalindustries311@gmail.com',
    whatsapp:  'https://wa.me/919711221918?text=Hi',
    address:   'A-003/11, Site-V, Kasna Industrial Area,<br>Greater Noida, UP – 201310',
    hours:     'Mon – Sat: 9:00 AM - 5:30 PM',
  },
  social: {
    linkedin:  'https://www.linkedin.com/in/aggarwal-industries-203b47394',
    instagram: 'https://www.instagram.com/aggarwalindustries311',
  },
  catalog: '/assets/MTK%20Screws%20Catalog.pdf',
  credit: {
    name: 'WebGraha',
    url:  'https://webgraha.com',
  },
};

// ─── Product catalogue ───────────────────────────────────────────────────
window.PRODUCTS_DATA = {
  "manufacturing": [
    {
      "slug": "mfg-machine-screw",
      "name": "Machine Screw",
      "track": "mfg",
      "trackLabel": "Manufacturing",
      "categoryIcon": "head-pan",
      "lead": "Precision-threaded screws for metal-to-metal fastening, manufactured in-house at our Kasna facility.",
      "shared": {
        "Grade": "201, 204, 304, 316(L)",
        "Thread": "M2 – M6 · 1/8 – 1/4",
        "Length": "4 – 100 mm",
        "Finish": "Bright passivated / electropolished"
      },
      "applications": [
        "Electrical & electronics assembly",
        "Sheet-metal fabrication",
        "Industrial machinery",
        "OEM assembly lines"
      ],
      "standards": [
        "ISO 1207",
        "DIN 7985",
        "IS 1366"
      ],
      "products": [
        {
          "slug": "pan-phillips",
          "name": "Pan Phillips",
          "icon": "head-pan",
          "tag": "Bestseller",
          "shortDesc": "Rounded pan head with Phillips cross-drive — the most common general-purpose machine screw.",
          "features": [
            "Phillips cross recess for high-torque driving",
            "Low-profile rounded pan head",
            "Excellent for electrical & electronics work",
            "Available in all four stainless grades"
          ],
          "specs": {
            "Head Type": "Pan",
            "Drive": "Phillips"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/pan-phillips/1.jpeg",
            "/assets/gallery/product-images/mfg/machine-screw/pan-phillips/2.png",
            "/assets/gallery/product-images/mfg/machine-screw/pan-phillips/3.png",
            "/assets/gallery/product-images/mfg/machine-screw/pan-phillips/4.png"
          ]
        },
        {
          "slug": "csk-phillips",
          "name": "Csk Phillips",
          "icon": "head-csk",
          "tag": "",
          "shortDesc": "Countersunk Phillips machine screw — flush-sit installation with Phillips cross-drive for clean surface finishes.",
          "features": [
            "90° countersunk head sits flush",
            "Phillips cross-drive recess",
            "Ideal for panels and enclosures",
            "Available in all four stainless grades"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Phillips"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/csk-phillips/1.jpeg",
            "/assets/gallery/product-images/mfg/machine-screw/csk-phillips/2.png",
            "/assets/gallery/product-images/mfg/machine-screw/csk-phillips/3.png"
          ]
        },
        {
          "slug": "truss-phillips",
          "name": "Truss Phillips",
          "icon": "head-truss",
          "tag": "",
          "shortDesc": "Wide low-profile truss head with Phillips drive — distributes clamping load over thin or soft sheet material.",
          "features": [
            "Wide truss head spreads clamping load",
            "Phillips cross-drive",
            "Low profile above surface",
            "For thin sheet and soft materials"
          ],
          "specs": {
            "Head Type": "Truss",
            "Drive": "Phillips"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/truss-phillips/1.png",
            "/assets/gallery/product-images/mfg/machine-screw/truss-phillips/2.png",
            "/assets/gallery/product-images/mfg/machine-screw/truss-phillips/3.jpg"
          ]
        },
        {
          "slug": "combination",
          "name": "Combination",
          "icon": "head-combi",
          "tag": "",
          "shortDesc": "Combination drive (Phillips + slotted) machine screw — driveable with either screwdriver type for service flexibility.",
          "features": [
            "Dual-drive recess (Phillips + slotted)",
            "Pan or CSK head options",
            "Service-friendly for field maintenance",
            "Available in all four stainless grades"
          ],
          "specs": {
            "Head Type": "Pan / CSK",
            "Drive": "Combination (Phillips + slot)"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/combination/1.jpeg",
            "/assets/gallery/product-images/mfg/machine-screw/combination/2.png",
            "/assets/gallery/product-images/mfg/machine-screw/combination/3.png"
          ]
        },
        {
          "slug": "combiwasher",
          "name": "Combiwasher",
          "icon": "head-combi",
          "tag": "",
          "shortDesc": "Pan head machine screw with integrated captive washer — distributes load and prevents head pull-through.",
          "features": [
            "Captive washer eliminates separate-part handling",
            "Pan head with Phillips drive",
            "Higher bearing surface for thin material",
            "Available in all four stainless grades"
          ],
          "specs": {
            "Head Type": "Pan + Washer",
            "Drive": "Phillips"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/combiwasher/1.jpeg",
            "/assets/gallery/product-images/mfg/machine-screw/combiwasher/2.png",
            "/assets/gallery/product-images/mfg/machine-screw/combiwasher/4.png"
          ]
        },
        {
          "slug": "csk-head-torx",
          "name": "Csk Head Torx",
          "icon": "head-csk",
          "tag": "High Torque",
          "shortDesc": "Countersunk head with Torx (star) recess — flush finish combined with superior cam-out resistance.",
          "features": [
            "90° countersunk head sits flush",
            "Six-lobe Torx recess resists cam-out",
            "Higher torque transfer than Phillips",
            "Ideal for structural and automotive panels"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Torx"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/csk-head-torx/1.jpeg"
          ]
        },
        {
          "slug": "torx-button-head",
          "name": "Torx Button Head",
          "icon": "head-button",
          "tag": "High Torque",
          "shortDesc": "Low-domed button head with Torx (star) recess — superior cam-out resistance for high-torque applications.",
          "features": [
            "Six-lobe Torx recess for maximum torque transfer",
            "Low-domed button head profile",
            "Tamper-resistant variants available",
            "Ideal for automotive & robotics"
          ],
          "specs": {
            "Head Type": "Button",
            "Drive": "Torx"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/torx-button-head/1.png",
            "/assets/gallery/product-images/mfg/machine-screw/torx-button-head/2.jpg"
          ]
        },
        {
          "slug": "ln-button-head",
          "name": "LN Button Head",
          "icon": "head-button",
          "tag": "",
          "shortDesc": "Button head with internal hex (Allen) drive — clean low-profile alternative to socket cap screws.",
          "features": [
            "Internal hex (Allen) drive",
            "Lower head profile than standard cap screws",
            "Decorative finish on visible assemblies",
            "Stainless grades 201–316(L)"
          ],
          "specs": {
            "Head Type": "Button",
            "Drive": "Hex (Allen)"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/ln-button-head/2.jpg",
            "/assets/gallery/product-images/mfg/machine-screw/ln-button-head/3.png"
          ]
        },
        {
          "slug": "ln-csk-head",
          "name": "LN Csk Head",
          "icon": "head-csk",
          "tag": "",
          "shortDesc": "Countersunk head with internal hex drive — flush finish with reliable Allen-key tightening.",
          "features": [
            "90° countersunk head sits flush",
            "Internal hex (Allen) drive",
            "No protrusion above surface",
            "Common in machinery covers & panels"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Hex (Allen)"
          },
          "images": [
            "/assets/gallery/product-images/mfg/machine-screw/ln-csk-head/1.jpeg"
          ]
        }
      ]
    },
    {
      "slug": "mfg-self-tapping",
      "name": "Self Tapping Screw",
      "track": "mfg",
      "trackLabel": "Manufacturing",
      "categoryIcon": "head-combi",
      "lead": "Hardened thread-cutting screws manufactured in-house that form their own mating thread in sheet metal, plastic and wood.",
      "shared": {
        "Grade": "201, 204, 304, 316(L)",
        "Thread": "#2 (2.4 mm) – #14 (6.3 mm)",
        "Length": "4.5 – 100 mm",
        "Hardness": "Case hardened HRC 28–38"
      },
      "applications": [
        "Sheet-metal fabrication",
        "HVAC ducting",
        "White-goods assembly",
        "Joinery & wood-to-metal"
      ],
      "standards": [
        "DIN 7981",
        "DIN 7982",
        "IS 7510"
      ],
      "products": [
        {
          "slug": "pan-phillips",
          "name": "Pan Phillips",
          "icon": "head-pan",
          "tag": "Bestseller",
          "shortDesc": "Rounded pan head with Phillips cross-drive — the most versatile general-purpose self-tapping screw.",
          "features": [
            "Phillips cross recess for fast driving",
            "Low-profile rounded pan head",
            "Thread-cutting point for direct drive",
            "Available in all four stainless grades"
          ],
          "specs": {
            "Head Type": "Pan",
            "Drive": "Phillips"
          },
          "images": [
            "/assets/gallery/product-images/mfg/self-tapping/pan-phillips/1.jpeg",
            "/assets/gallery/product-images/mfg/self-tapping/pan-phillips/2.jpg",
            "/assets/gallery/product-images/mfg/self-tapping/pan-phillips/3.jpg",
            "/assets/gallery/product-images/mfg/self-tapping/pan-phillips/4.jpg"
          ]
        },
        {
          "slug": "csk-phillips",
          "name": "Csk Phillips",
          "icon": "head-csk",
          "tag": "",
          "shortDesc": "Countersunk Phillips self-tapping screw — flush finish in sheet metal, plastic and wood applications.",
          "features": [
            "90° countersunk head sits flush",
            "Phillips cross-drive",
            "Thread-cutting point — no pilot hole needed",
            "For sheet metal, plastic, and wood"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Phillips"
          },
          "images": [
            "/assets/gallery/product-images/mfg/self-tapping/csk-phillips/1.jpeg",
            "/assets/gallery/product-images/mfg/self-tapping/csk-phillips/2.jpg"
          ]
        },
        {
          "slug": "truss-phillips",
          "name": "Truss Phillips",
          "icon": "head-truss",
          "tag": "",
          "shortDesc": "Wide low-profile truss head self-tapping screw — broad bearing surface for thin or soft sheet material.",
          "features": [
            "Wide truss head spreads clamping load",
            "Phillips cross-drive",
            "Thread-cutting point for direct drive",
            "For thin sheet and soft materials"
          ],
          "specs": {
            "Head Type": "Truss",
            "Drive": "Phillips"
          },
          "images": [
            "/assets/gallery/product-images/mfg/self-tapping/truss-phillips/1.jpeg"
          ]
        },
        {
          "slug": "combiwasher",
          "name": "Combiwasher",
          "icon": "head-combi",
          "tag": "Popular",
          "shortDesc": "Pan head with integrated captive washer — distributes load and prevents head damage during installation.",
          "features": [
            "Captive washer eliminates separate-part handling",
            "Pan head with Phillips drive",
            "Higher pull-out resistance",
            "Threads #2 – #14"
          ],
          "specs": {
            "Head Type": "Pan + Washer",
            "Drive": "Phillips"
          },
          "images": [
            "/assets/gallery/product-images/mfg/self-tapping/combiwasher/1.jpeg",
            "/assets/gallery/product-images/mfg/self-tapping/combiwasher/2.jpg"
          ]
        },
        {
          "slug": "combination",
          "name": "Combination",
          "icon": "head-combi",
          "tag": "",
          "shortDesc": "Combination drive (Phillips + slotted) head — driveable with either screwdriver type for service flexibility.",
          "features": [
            "Dual-drive recess (Phillips + slotted)",
            "CSK or pan head options",
            "Service-friendly for field maintenance",
            "Threads #2 – #14"
          ],
          "specs": {
            "Head Type": "Combination",
            "Drive": "Combination (Phillips + slot)"
          },
          "images": [
            "/assets/gallery/product-images/mfg/self-tapping/combination/1.jpeg",
            "/assets/gallery/product-images/mfg/self-tapping/combination/2.png"
          ]
        },
        {
          "slug": "wooden-screw",
          "name": "Wooden Screw",
          "icon": "head-wood",
          "tag": "For Wood",
          "shortDesc": "Coarse-pitch CSK self-tapping screw with sharp gimlet point — optimised for direct drive into softwood and hardwood.",
          "features": [
            "Coarse asymmetric thread for wood",
            "Sharp gimlet point — no pilot hole needed",
            "Countersunk head sits flush",
            "Threads #5 – #10, lengths 20 – 100 mm"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Phillips",
            "Thread": "#5 (3.2 mm) – #10 (4.8 mm)",
            "Length": "20 – 100 mm"
          },
          "images": [
            "/assets/gallery/product-images/mfg/self-tapping/wooden-screw/1.jpeg"
          ]
        }
      ]
    }
  ],
  "trading": [
    {
      "slug": "trd-self-drilling",
      "name": "Self Drilling Screw",
      "track": "trd",
      "trackLabel": "Trading",
      "categoryIcon": "head-hex",
      "lead": "Tek-point self-drilling screws that cut their own hole and thread in a single operation — stocked in all head profiles, plus accessories and sealing washers.",
      "shared": {
        "Material": "Carbon steel / SS 304 (A2) / SS 410",
        "Coating": "Yellow zinc / Galvanised",
        "Drill Capacity": "Up to 6 mm steel",
        "Standard": "DIN 7504 / ISO 15480"
      },
      "applications": [
        "Metal roofing & cladding",
        "HVAC ducting & ductwork",
        "Steel-to-steel structural fastening",
        "Greenhouse & shed construction"
      ],
      "standards": [
        "DIN 7504",
        "ISO 15480"
      ],
      "products": [
        {
          "slug": "hex-head-sds",
          "name": "Hex Head SDS",
          "icon": "head-hex",
          "tag": "Stocked",
          "shortDesc": "Hex head self-drilling screw for metal-to-metal fastening — drills and fastens in one pass without pre-drilling.",
          "features": [
            "5/16″ hex head — socket or nut-runner driven",
            "Self-drilling Tek point drills up to 4 mm steel",
            "Dia 3.5–6.3 mm, lengths 13–150 mm",
            "Yellow zinc plated carbon steel"
          ],
          "specs": {
            "Head Type": "Hex",
            "Drive": "Hex socket (5/16″)",
            "Diameter": "3.5 – 6.3 mm",
            "Length": "13 – 150 mm",
            "Standard": "DIN 7504-K"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/hex-head-sds/1.jpg",
            "/assets/gallery/product-images/trd/self-drilling/hex-head-sds/2.jpg",
            "/assets/gallery/product-images/trd/self-drilling/hex-head-sds/3.jpg",
            "/assets/gallery/product-images/trd/self-drilling/hex-head-sds/5.jpg",
            "/assets/gallery/product-images/trd/self-drilling/hex-head-sds/finethread1.jpg"
          ]
        },
        {
          "slug": "epdm-bonded-hex-flange",
          "name": "EPDM Bonded Hex Flange Head SDS",
          "icon": "head-hex-flange",
          "tag": "Sealing",
          "shortDesc": "Hex flange head SDS with factory-bonded EPDM rubber washer — creates a weatherproof seal through metal roofing in a single pass.",
          "features": [
            "EPDM rubber bonded to steel backing — no separate washer",
            "UV & ozone resistant, rated −40 °C to +90 °C",
            "Hex flange head with 5/16″ socket drive",
            "Dia 4.8–6.3 mm for roofing & cladding panels"
          ],
          "specs": {
            "Head Type": "Hex Flange",
            "Drive": "Hex socket (5/16″)",
            "Sealing": "EPDM bonded",
            "Diameter": "4.8 – 6.3 mm",
            "Standard": "DIN 7504-K"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/epdm-bonded-hex-flange/2.jpeg"
          ]
        },
        {
          "slug": "hex-head-stitching",
          "name": "Hex Head Stitching Screw",
          "icon": "head-hex",
          "tag": "",
          "shortDesc": "Short hex-head self-drilling screw designed specifically for stitching (joining) overlapping sheet-metal panels at the lap.",
          "features": [
            "Short shank optimised for thin sheet overlaps",
            "Drill point penetrates both sheets cleanly",
            "Hex head — 5/16″ socket driven",
            "Typical size #10 × 16 mm, yellow zinc"
          ],
          "specs": {
            "Head Type": "Hex",
            "Drive": "Hex socket (5/16″)",
            "Diameter": "#10 (4.8 mm)",
            "Length": "16 – 22 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/hex-head-stitching/1.jpeg"
          ]
        },
        {
          "slug": "sds-sockett",
          "name": "SDS Sockett",
          "icon": "tool-bit",
          "tag": "Accessory",
          "shortDesc": "Magnetic hex socket driver bit for installing hex-head SDS screws with cordless drills and impact drivers.",
          "features": [
            "Magnetic tip retains screw during installation",
            "1/4″ hex shank — fits all standard impact drivers",
            "Sizes: 5/16″, 3/8″, 7/16″",
            "High-impact tool steel construction"
          ],
          "specs": {
            "Type": "Driver socket",
            "Shank": "1/4″ hex",
            "Sizes": "5/16″, 3/8″, 7/16″"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/sds-sockett/1.jpeg",
            "/assets/gallery/product-images/trd/self-drilling/sds-sockett/2.jpeg",
            "/assets/gallery/product-images/trd/self-drilling/sds-sockett/3.jpeg"
          ]
        },
        {
          "slug": "cyclone-washers",
          "name": "Cyclone Washers",
          "icon": "washer",
          "tag": "",
          "shortDesc": "Heavy-gauge steel sealing washers with bonded EPDM face — used with hex-head SDS on corrugated metal roofing.",
          "features": [
            "Heavy-gauge GI steel backing for high clamp load",
            "Bonded EPDM rubber sealing face",
            "Prevents water ingress around fastener hole",
            "Sizes 19 mm & 22 mm OD to suit roofing profiles"
          ],
          "specs": {
            "Type": "Sealing washer",
            "Sealing": "EPDM bonded",
            "OD": "19 mm / 22 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/cyclone-washers/1.jpeg",
            "/assets/gallery/product-images/trd/self-drilling/cyclone-washers/2.jpeg",
            "/assets/gallery/product-images/trd/self-drilling/cyclone-washers/4.jpg"
          ]
        },
        {
          "slug": "truss-head-sds",
          "name": "Truss Head SDS",
          "icon": "head-truss",
          "tag": "",
          "shortDesc": "Wide low-domed truss head SDS — broad bearing surface distributes load on thin, soft, or corrugated sheet material.",
          "features": [
            "Wide truss head prevents pull-through on soft sheet",
            "Self-drilling Tek point — no pre-drilling",
            "Phillips #2 drive",
            "Dia #10 (4.8 mm), lengths 13–50 mm"
          ],
          "specs": {
            "Head Type": "Truss",
            "Drive": "Phillips #2",
            "Diameter": "#10 (4.8 mm)",
            "Length": "13 – 50 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/truss-head-sds/2.jpg",
            "/assets/gallery/product-images/trd/self-drilling/truss-head-sds/4.jpg"
          ]
        },
        {
          "slug": "csk-head-sds",
          "name": "CSK Head SDS",
          "icon": "head-csk",
          "tag": "",
          "shortDesc": "Countersunk head self-drilling screw that sits flush with the surface — for metal-to-metal joints requiring a clean, snag-free finish.",
          "features": [
            "90° countersunk head sits flush with substrate",
            "Self-drilling point — no pilot hole needed",
            "Phillips #2 drive",
            "Dia #10 (4.8 mm), lengths 16–50 mm"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Phillips #2",
            "Diameter": "#10 (4.8 mm)",
            "Length": "16 – 50 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/csk-head-sds/1.jpeg",
            "/assets/gallery/product-images/trd/self-drilling/csk-head-sds/2.jpg",
            "/assets/gallery/product-images/trd/self-drilling/csk-head-sds/3.jpg",
            "/assets/gallery/product-images/trd/self-drilling/csk-head-sds/4.jpg"
          ]
        },
        {
          "slug": "pan-head-sds",
          "name": "Pan Head SDS",
          "icon": "head-pan",
          "tag": "",
          "shortDesc": "Rounded pan head self-drilling screw for general-purpose sheet metal fastening with Phillips drive.",
          "features": [
            "Low-profile pan head — sits above surface",
            "Self-drilling Tek point",
            "Phillips #2 drive",
            "Dia #8–#12, lengths 13–75 mm"
          ],
          "specs": {
            "Head Type": "Pan",
            "Drive": "Phillips #2",
            "Diameter": "#8 – #12 (4.2 – 5.5 mm)",
            "Length": "13 – 75 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/pan-head-sds/2.jpg",
            "/assets/gallery/product-images/trd/self-drilling/pan-head-sds/4.png"
          ]
        },
        {
          "slug": "ph2-bitt",
          "name": "PH2 Bitt",
          "icon": "tool-bit",
          "tag": "Accessory",
          "shortDesc": "Phillips #2 driver bit for installing self-drilling and self-tapping screws with cordless drills and impact drivers.",
          "features": [
            "Phillips #2 precision-ground tip",
            "1/4″ hex shank — universal impact driver fit",
            "Available in 50 mm and 75 mm lengths",
            "High-grade S2 tool steel for long bit life"
          ],
          "specs": {
            "Type": "Driver bit",
            "Drive": "Phillips #2",
            "Shank": "1/4″ hex",
            "Lengths": "50 mm / 75 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/ph2-bitt/1.jpeg",
            "/assets/gallery/product-images/trd/self-drilling/ph2-bitt/3.jpg"
          ]
        },
        {
          "slug": "epdm-washer",
          "name": "EPDM Washer",
          "icon": "washer",
          "tag": "",
          "shortDesc": "Standalone EPDM-bonded sealing washer — fits any standard hex-head screw to create a weatherproof seal on metal roofing.",
          "features": [
            "EPDM rubber face bonded to galvanised steel backing",
            "UV, ozone & weather resistant — rated −40 °C to +90 °C",
            "Prevents water ingress around fastener holes",
            "Sizes 4 mm – 8 mm to suit common screw diameters"
          ],
          "specs": {
            "Type": "Sealing washer",
            "Material": "EPDM + Galvanised steel",
            "Sizes": "4 – 8 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-drilling/epdm-washer/2.jpg"
          ]
        }
      ]
    },
    {
      "slug": "trd-self-tapping",
      "name": "Self Tapping Screw",
      "track": "trd",
      "trackLabel": "Trading",
      "categoryIcon": "head-pan",
      "lead": "Thread-forming screws in every common head style and drive — SS 304 and MS zinc-plated, stocked for same-day dispatch.",
      "shared": {
        "Material": "SS 304 / MS Zinc Plated",
        "Thread": "#6 (3.5 mm) – #14 (6.3 mm)",
        "Length": "9.5 – 75 mm",
        "Hardness": "HRC 28–38"
      },
      "applications": [
        "Sheet-metal & electrical enclosure assembly",
        "Furniture, joinery & cabinetry",
        "White goods & appliances",
        "Drywall & plasterboard installation"
      ],
      "standards": [
        "DIN 7971",
        "DIN 7981",
        "DIN 7982",
        "IS 7510"
      ],
      "products": [
        {
          "slug": "pan-slotted-screw",
          "name": "Pan Slotted Screw",
          "icon": "head-pan",
          "tag": "",
          "shortDesc": "Pan head self-tapping screw with single slotted drive — traditional choice for hand-driven and low-torque assembly work.",
          "features": [
            "Single slotted drive for screwdriver or manual use",
            "Low-profile rounded pan head",
            "Thread #6–#12 (3.5–5.5 mm), lengths 9.5–50 mm",
            "SS 304 or MS zinc plated — DIN 7971"
          ],
          "specs": {
            "Head Type": "Pan",
            "Drive": "Slotted",
            "Thread": "#6 – #12",
            "Length": "9.5 – 50 mm",
            "Standard": "DIN 7971"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-tapping/pan-slotted-screw/1.jpeg"
          ]
        },
        {
          "slug": "pan-phillips-screw",
          "name": "Pan Phillips Screw",
          "icon": "head-pan",
          "tag": "Stocked",
          "shortDesc": "Pan head self-tapping screw with Phillips cross-drive — the most widely used thread-forming screw for sheet metal and electrical work.",
          "features": [
            "Phillips #2 cross-drive for fast power-tool installation",
            "Low-profile rounded pan head",
            "Thread #6–#14, lengths 9.5–75 mm",
            "SS 304 or MS zinc plated — DIN 7981"
          ],
          "specs": {
            "Head Type": "Pan",
            "Drive": "Phillips #2",
            "Thread": "#6 – #14",
            "Length": "9.5 – 75 mm",
            "Standard": "DIN 7981"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-tapping/pan-phillips-screw/1.jpeg",
            "/assets/gallery/product-images/trd/self-tapping/pan-phillips-screw/2.jpeg"
          ]
        },
        {
          "slug": "csk-slotted-screw",
          "name": "CSK Slotted Screw",
          "icon": "head-csk",
          "tag": "",
          "shortDesc": "Countersunk head self-tapping screw with slotted drive — flush finish for joinery and hand-assembled applications.",
          "features": [
            "90° countersunk head sits flush with surface",
            "Single slotted drive",
            "Thread #6–#12, lengths 9.5–50 mm",
            "SS 304 / MS-ZP — DIN 7972"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Slotted",
            "Thread": "#6 – #12",
            "Length": "9.5 – 50 mm",
            "Standard": "DIN 7972"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-tapping/csk-slotted-screw/1.jpeg",
            "/assets/gallery/product-images/trd/self-tapping/csk-slotted-screw/2.jpeg",
            "/assets/gallery/product-images/trd/self-tapping/csk-slotted-screw/4.jpg"
          ]
        },
        {
          "slug": "csk-phillips-screw",
          "name": "CSK Phillips Screw",
          "icon": "head-csk",
          "tag": "",
          "shortDesc": "Countersunk Phillips self-tapping screw — flush-sit finish with fast Phillips drive for sheet metal and panel assembly.",
          "features": [
            "90° countersunk head sits flush with substrate",
            "Phillips #2 drive for power-tool installation",
            "Thread #6–#14, lengths 9.5–75 mm",
            "SS 304 / MS-ZP — DIN 7982"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Phillips #2",
            "Thread": "#6 – #14",
            "Length": "9.5 – 75 mm",
            "Standard": "DIN 7982"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-tapping/csk-phillips-screw/1.jpeg",
            "/assets/gallery/product-images/trd/self-tapping/csk-phillips-screw/2.jpg",
            "/assets/gallery/product-images/trd/self-tapping/csk-phillips-screw/4.jpg"
          ]
        },
        {
          "slug": "truss-head-screw",
          "name": "Truss Head Screw",
          "icon": "head-truss",
          "tag": "",
          "shortDesc": "Wide low-profile truss head self-tapping screw — large bearing surface distributes load on thin, soft, or corrugated sheet.",
          "features": [
            "Extra-wide truss head prevents pull-through",
            "Phillips drive — power-tool friendly",
            "Thread #8–#14, lengths 13–75 mm",
            "SS 304 / MS-ZP — JIS B 1122"
          ],
          "specs": {
            "Head Type": "Truss",
            "Drive": "Phillips #2",
            "Thread": "#8 – #14",
            "Length": "13 – 75 mm",
            "Standard": "JIS B 1122"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-tapping/truss-head-screw/2.jpg",
            "/assets/gallery/product-images/trd/self-tapping/truss-head-screw/3.jpg"
          ]
        },
        {
          "slug": "combination-head-screw",
          "name": "Combination Head Screw",
          "icon": "head-combi",
          "tag": "",
          "shortDesc": "Combination drive (Phillips + slotted) self-tapping screw — driveable with either screwdriver type for maximum field flexibility.",
          "features": [
            "Dual Phillips + slotted recess — use either drive type",
            "Pan or CSK head options",
            "Thread #6–#14, lengths 9.5–75 mm",
            "SS 304 / MS-ZP"
          ],
          "specs": {
            "Head Type": "Pan / CSK",
            "Drive": "Combination (Phillips + slot)",
            "Thread": "#6 – #14",
            "Length": "9.5 – 75 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-tapping/combination-head-screw/3.png"
          ]
        },
        {
          "slug": "combi-washer-head-screw",
          "name": "Combi-Washer Head Screw",
          "icon": "head-combi",
          "tag": "",
          "shortDesc": "Pan head self-tapping screw with integrated captive washer — eliminates loose-washer handling and increases pull-out resistance.",
          "features": [
            "Captive integrated washer — no separate part",
            "Pan head with Phillips drive",
            "Higher bearing surface reduces panel distortion",
            "Thread #6–#14, lengths 13–50 mm"
          ],
          "specs": {
            "Head Type": "Pan + Captive Washer",
            "Drive": "Phillips #2",
            "Thread": "#6 – #14",
            "Length": "13 – 50 mm"
          },
          "images": []
        },
        {
          "slug": "drywall-screw",
          "name": "Drywall Screw",
          "icon": "head-bugle",
          "tag": "Bestseller",
          "shortDesc": "Bugle-head screw for fixing plasterboard/drywall — fine thread for metal studs, coarse thread for timber studs.",
          "features": [
            "Bugle head pulls flush without tearing paper face",
            "Phillips #2 drive — high-speed installation",
            "Fine thread 3.5 mm (metal studs), coarse 3.8 mm (wood studs)",
            "Phosphated black finish — lengths 25–75 mm"
          ],
          "specs": {
            "Head Type": "Bugle",
            "Drive": "Phillips #2",
            "Diameter": "3.5 mm (fine) / 3.8 mm (coarse)",
            "Length": "25 – 75 mm",
            "Finish": "Black phosphated"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-tapping/drywall-screw/2.jpg",
            "/assets/gallery/product-images/trd/self-tapping/drywall-screw/3.jpeg"
          ]
        },
        {
          "slug": "chipboard-screw",
          "name": "Chipboard Screw",
          "icon": "head-bugle",
          "tag": "",
          "shortDesc": "Coarse single-thread screw with countersunk bugle head — optimised for chipboard, MDF, and plywood without splitting.",
          "features": [
            "Coarse asymmetric single-start thread bites into board",
            "Sharp point for direct drive — no pilot hole required",
            "Bugle CSK head pulls flush with surface",
            "Dia 3.5–6.0 mm, lengths 16–100 mm — DIN 7505"
          ],
          "specs": {
            "Head Type": "Bugle CSK",
            "Drive": "Phillips / Pozi",
            "Diameter": "3.5 – 6.0 mm",
            "Length": "16 – 100 mm",
            "Standard": "DIN 7505"
          },
          "images": [
            "/assets/gallery/product-images/trd/self-tapping/chipboard-screw/2.jpg",
            "/assets/gallery/product-images/trd/self-tapping/chipboard-screw/3.jpg",
            "/assets/gallery/product-images/trd/self-tapping/chipboard-screw/4.jpg"
          ]
        }
      ]
    },
    {
      "slug": "trd-machine-screw",
      "name": "Machine Screw",
      "track": "trd",
      "trackLabel": "Trading",
      "categoryIcon": "head-pan",
      "lead": "Trading-grade machine screws in pan, CSK, truss and combi-washer heads — SS 304 and MS zinc plated, in stock for immediate dispatch.",
      "shared": {
        "Material": "SS 304 / MS Zinc Plated",
        "Thread": "M3 – M12",
        "Length": "6 – 50 mm",
        "Standard": "ISO 7045 / ISO 7046 / DIN 7985"
      },
      "applications": [
        "Industrial machinery assembly",
        "OEM production lines",
        "Maintenance, repair & overhaul",
        "Electrical panels & enclosures"
      ],
      "standards": [
        "ISO 7045",
        "ISO 7046",
        "DIN 7985"
      ],
      "products": [
        {
          "slug": "pan-phillips-washer",
          "name": "Pan Phillips Washer Screw",
          "icon": "head-combi",
          "tag": "Stocked",
          "shortDesc": "Pan head Phillips machine screw with integrated captive washer — single-part fastening that eliminates loose-washer handling on assembly lines.",
          "features": [
            "Captive washer pre-assembled — no separate part",
            "Pan head with Phillips #2 drive",
            "Thread M3–M10, lengths 6–40 mm",
            "SS 304 / MS-ZP — ISO 7045"
          ],
          "specs": {
            "Head Type": "Pan + Captive Washer",
            "Drive": "Phillips #2",
            "Thread": "M3 – M10",
            "Length": "6 – 40 mm",
            "Standard": "ISO 7045"
          },
          "images": [
            "/assets/gallery/product-images/trd/machine-screw/pan-phillips-washer/2.jpg",
            "/assets/gallery/product-images/trd/machine-screw/pan-phillips-washer/4.jpg"
          ]
        },
        {
          "slug": "csk-phillips",
          "name": "CSK Phillips Screw",
          "icon": "head-csk",
          "tag": "",
          "shortDesc": "Countersunk Phillips machine screw — sits flush for clean-surface assemblies in panels, enclosures, and electrical equipment.",
          "features": [
            "90° countersunk head sits flush with substrate",
            "Phillips #2 drive",
            "Thread M3–M12, lengths 6–50 mm",
            "SS 304 / MS-ZP — ISO 7046"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Phillips #2",
            "Thread": "M3 – M12",
            "Length": "6 – 50 mm",
            "Standard": "ISO 7046"
          },
          "images": [
            "/assets/gallery/product-images/trd/machine-screw/csk-phillips/2.jpg",
            "/assets/gallery/product-images/trd/machine-screw/csk-phillips/4.jpg"
          ]
        },
        {
          "slug": "truss-phillips",
          "name": "Truss Phillips Screw",
          "icon": "head-truss",
          "tag": "",
          "shortDesc": "Wide low-profile truss head machine screw — extra bearing surface prevents pull-through in thin sheet and plastic housings.",
          "features": [
            "Wide truss head distributes clamping load",
            "Phillips #2 drive",
            "Thread M3–M10, lengths 6–40 mm",
            "SS 304 / MS-ZP"
          ],
          "specs": {
            "Head Type": "Truss",
            "Drive": "Phillips #2",
            "Thread": "M3 – M10",
            "Length": "6 – 40 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/machine-screw/truss-phillips/1.jpg"
          ]
        },
        {
          "slug": "combi-washer-machine",
          "name": "Combi-Washer Screw",
          "icon": "head-combi",
          "tag": "",
          "shortDesc": "Pan head machine screw with integrated combi-washer — captive washer with combination Phillips + slotted drive for service versatility.",
          "features": [
            "Captive washer eliminates separate-part handling",
            "Combination Phillips + slotted drive",
            "Pan or CSK head options",
            "Thread M3–M10, SS 304 / MS-ZP"
          ],
          "specs": {
            "Head Type": "Pan / CSK + Captive Washer",
            "Drive": "Combination (Phillips + slot)",
            "Thread": "M3 – M10",
            "Length": "6 – 40 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/machine-screw/combi-washer-machine/1.jpg",
            "/assets/gallery/product-images/trd/machine-screw/combi-washer-machine/2.jpg.png",
            "/assets/gallery/product-images/trd/machine-screw/combi-washer-machine/4.jpg"
          ]
        }
      ]
    },
    {
      "slug": "trd-rivets",
      "name": "Rivets",
      "track": "trd",
      "trackLabel": "Trading",
      "categoryIcon": "rivet",
      "lead": "Permanent mechanical fasteners — blind pop rivets, solid hammer rivets and tinmen rivets in aluminium, steel and coloured finishes, plus riveting tools.",
      "shared": {
        "Diameter Range": "2.4 – 6.4 mm",
        "Grip Range": "1 – 18 mm",
        "Materials": "Aluminium / Steel / SS 304"
      },
      "applications": [
        "Sheet-metal & ductwork joining",
        "Roofing & cladding panel fixing",
        "Signboard & display assembly",
        "General fabrication & joinery"
      ],
      "standards": [
        "DIN 7337",
        "ISO 15983",
        "IFI-114"
      ],
      "products": [
        {
          "slug": "aluminium-pop-rivet",
          "name": "Aluminium Pop Rivet",
          "icon": "rivet",
          "tag": "Bestseller",
          "shortDesc": "Standard blind pop rivet with aluminium body and steel mandrel — the go-to fastener for one-sided sheet-metal joining.",
          "features": [
            "Aluminium body, steel mandrel — lightweight & corrosion resistant",
            "Dome head — installed from one side only",
            "Dia 2.4 / 3.2 / 4.0 / 4.8 / 6.4 mm; grip range 1–14 mm",
            "Conforms to DIN 7337 / ISO 15983"
          ],
          "specs": {
            "Material": "Aluminium body / Steel mandrel",
            "Head Type": "Dome",
            "Diameter": "2.4 – 6.4 mm",
            "Grip Range": "1 – 14 mm",
            "Standard": "DIN 7337"
          },
          "images": [
            "/assets/gallery/product-images/trd/rivets/aluminium-pop-rivet/3.jpg",
            "/assets/gallery/product-images/trd/rivets/aluminium-pop-rivet/4.jpg"
          ]
        },
        {
          "slug": "coloured-pop-rivet",
          "name": "Coloured Pop Rivet",
          "icon": "rivet",
          "tag": "",
          "shortDesc": "Aluminium pop rivet with powder-coated coloured dome head — designed for cladding and roofing panels where fastener colour must match.",
          "features": [
            "Powder-coated dome head in 10+ RAL stock colours",
            "Aluminium body, steel mandrel",
            "Dia 4.0 & 4.8 mm, multigrip design",
            "Popular for anthracite, white, red & custom roofing colours"
          ],
          "specs": {
            "Material": "Aluminium (powder-coated head)",
            "Head Type": "Dome",
            "Diameter": "4.0 – 4.8 mm",
            "Colours": "10+ RAL stock options"
          },
          "images": [
            "/assets/gallery/product-images/trd/rivets/coloured-pop-rivet/2.jpg",
            "/assets/gallery/product-images/trd/rivets/coloured-pop-rivet/4.jpg"
          ]
        },
        {
          "slug": "hammer-rivet",
          "name": "Hammer Rivet",
          "icon": "rivet",
          "tag": "",
          "shortDesc": "Drive-in nail rivet for light to medium plastic, wood, or sheet fixings — set with a hammer, no special riveting tool required.",
          "features": [
            "Installed with a hammer — no riveting gun needed",
            "Steel body with nylon or metal variants",
            "Pre-assembled with backing washer",
            "Dia 4–10 mm for light-to-medium load applications"
          ],
          "specs": {
            "Type": "Drive-in (nail) rivet",
            "Material": "Steel / Nylon",
            "Diameter": "4 – 10 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/rivets/hammer-rivet/2.jpg",
            "/assets/gallery/product-images/trd/rivets/hammer-rivet/4.jpg"
          ]
        },
        {
          "slug": "tinmen-rivet",
          "name": "Tinmen Rivet",
          "icon": "rivet",
          "tag": "",
          "shortDesc": "Solid tubular steel rivet for traditional sheet-metal fabrication — set with a hammer and dolly for a permanent, vibration-resistant joint.",
          "features": [
            "Solid tubular form — permanent mechanical joint",
            "Flat or countersunk head options",
            "Set with hammer & dolly — no power tool required",
            "Dia 2–6 mm; mild steel, available zinc plated"
          ],
          "specs": {
            "Type": "Solid tubular rivet",
            "Material": "Mild steel (zinc plated)",
            "Diameter": "2 – 6 mm",
            "Head Type": "Flat / Countersunk"
          },
          "images": [
            "/assets/gallery/product-images/trd/rivets/tinmen-rivet/2.jpeg"
          ]
        },
        {
          "slug": "double-hand-riveting-gun",
          "name": "Double Hand Riveting Gun",
          "icon": "tool-gun",
          "tag": "Tool",
          "shortDesc": "Heavy-duty double-action manual riveting gun — installs 2.4–4.8 mm blind pop rivets with reduced hand force through its compound lever mechanism.",
          "features": [
            "Double-action compound lever — less effort per stroke",
            "Handles rivets 2.4 / 3.2 / 4.0 / 4.8 mm diameter",
            "Includes 4 interchangeable nosepieces",
            "Tool steel body for long service life"
          ],
          "specs": {
            "Type": "Manual riveting gun",
            "Rivet Capacity": "2.4 – 4.8 mm",
            "Nosepieces": "4 (2.4 / 3.2 / 4.0 / 4.8 mm)"
          },
          "images": [
            "/assets/gallery/product-images/trd/rivets/double-hand-riveting-gun/2.jpg",
            "/assets/gallery/product-images/trd/rivets/double-hand-riveting-gun/3.jpg"
          ]
        }
      ]
    },
    {
      "slug": "trd-fasteners",
      "name": "Fasteners",
      "track": "trd",
      "trackLabel": "Trading",
      "categoryIcon": "anchor-wedge",
      "lead": "Anchors, fixings and heavy-duty fasteners for concrete, masonry and structural work — frame plugs to wedge anchors.",
      "shared": {
        "Material": "MS Zinc Plated / SS 304",
        "Size Range": "M6 – M16",
        "Length Range": "40 – 150 mm",
        "Standard": "IS 1367 / ETA"
      },
      "applications": [
        "Concrete & masonry anchoring",
        "Window & door frame installation",
        "Structural steel & machinery fixing",
        "Signage & cable management"
      ],
      "standards": [
        "ETA approvals available",
        "IS 1367"
      ],
      "products": [
        {
          "slug": "frame-fixing-fastener",
          "name": "Frame Fixing Fastener",
          "icon": "anchor-frame",
          "tag": "Stocked",
          "shortDesc": "Pre-assembled nylon sleeve anchor with screw for fixing window and door frames directly into masonry — single hammer-in installation.",
          "features": [
            "Pre-assembled nylon sleeve + screw — one-piece install",
            "Nylon sleeve expands on screw drive to grip masonry",
            "Suitable for concrete, brick & AAC block",
            "M6–M10 x 50–120 mm"
          ],
          "specs": {
            "Type": "Frame plug anchor",
            "Material": "Nylon sleeve + MS-ZP screw",
            "Size": "M6 – M10",
            "Length": "50 – 120 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/fasteners/frame-fixing-fastener/1.jpeg",
            "/assets/gallery/product-images/trd/fasteners/frame-fixing-fastener/2.jpeg"
          ]
        },
        {
          "slug": "wegde-anchor-fastener",
          "name": "Wegde Anchor Fastener",
          "icon": "anchor-wedge",
          "tag": "",
          "shortDesc": "Heavy-duty wedge anchor for high-load structural fixing into solid concrete — mechanical expansion provides maximum pull-out resistance.",
          "features": [
            "Wedge expands on torque to deliver maximum holding force",
            "Through-fix installation — bolt protrudes through fixture",
            "For solid concrete; M8–M16 x 50–150 mm",
            "MS zinc plated; higher loads than sleeve anchors"
          ],
          "specs": {
            "Type": "Wedge anchor",
            "Material": "MS Zinc Plated",
            "Size": "M8 – M16",
            "Length": "50 – 150 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/fasteners/wegde-anchor-fastener/1.jpg",
            "/assets/gallery/product-images/trd/fasteners/wegde-anchor-fastener/3.jpg"
          ]
        },
        {
          "slug": "pin-type-fastener",
          "name": "Pin Type Fastener",
          "icon": "anchor-pin",
          "tag": "",
          "shortDesc": "Steel nail-in pin anchor for quick light-to-medium load fixings in concrete and brick — hammer-driven, no drill needed after pilot hole.",
          "features": [
            "Quick nail-in installation — set with a hammer",
            "Mushroom or countersunk head options",
            "For concrete, brick & hollow block",
            "Dia M6–M10, lengths 40–80 mm, MS-ZP"
          ],
          "specs": {
            "Type": "Nail / pin anchor",
            "Material": "MS Zinc Plated",
            "Size": "M6 – M10",
            "Length": "40 – 80 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/fasteners/pin-type-fastener/1.jpg",
            "/assets/gallery/product-images/trd/fasteners/pin-type-fastener/2.jpg"
          ]
        },
        {
          "slug": "bolt-type-fastner",
          "name": "Bolt Type Fastner",
          "icon": "head-hex",
          "tag": "",
          "shortDesc": "Hex-head sleeve expansion anchor for through-bolting into masonry — high load capacity, removable and re-tightenable.",
          "features": [
            "Through-bolt hex-head design — spanner tightened",
            "Expansion sleeve locks in concrete or brick",
            "Removable & re-tightenable unlike chemical anchors",
            "M8–M16 x 60–150 mm, MS-ZP"
          ],
          "specs": {
            "Type": "Hex sleeve anchor",
            "Material": "MS Zinc Plated",
            "Size": "M8 – M16",
            "Length": "60 – 150 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/fasteners/bolt-type-fastner/1.jpg",
            "/assets/gallery/product-images/trd/fasteners/bolt-type-fastner/2.jpg"
          ]
        },
        {
          "slug": "hook-type-fastener",
          "name": "Hook Type Fastener",
          "icon": "anchor-hook",
          "tag": "",
          "shortDesc": "Open hook-end expansion anchor bolt for suspending pipes, cables, and fixtures from concrete ceilings and beams.",
          "features": [
            "Open hook end for hanging cables & pipe clamps",
            "Expansion anchor sleeve grips concrete on tightening",
            "Ideal for ceiling & overhead installations",
            "M6–M12 x 60–120 mm, MS-ZP"
          ],
          "specs": {
            "Type": "Hook bolt anchor",
            "Material": "MS Zinc Plated",
            "Size": "M6 – M12",
            "Length": "60 – 120 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/fasteners/hook-type-fastener/1.jpeg",
            "/assets/gallery/product-images/trd/fasteners/hook-type-fastener/2.jpeg",
            "/assets/gallery/product-images/trd/fasteners/hook-type-fastener/3.jpg"
          ]
        },
        {
          "slug": "coach-head-screw",
          "name": "Coach Head Screw",
          "icon": "head-hex",
          "tag": "",
          "shortDesc": "Heavy-duty hex-head lag bolt with coarse wood thread — for high-strength timber-to-timber and timber-to-masonry structural connections.",
          "features": [
            "Coarse asymmetric thread bites deep into timber",
            "Hex head — driven with spanner or impact wrench",
            "High pull-out and shear strength",
            "M6–M16 x 40–150 mm, MS-ZP / SS 304"
          ],
          "specs": {
            "Type": "Lag bolt (coach screw)",
            "Material": "MS-ZP / SS 304",
            "Size": "M6 – M16",
            "Length": "40 – 150 mm"
          },
          "images": [
            "/assets/gallery/product-images/trd/fasteners/coach-head-screw/1.jpg",
            "/assets/gallery/product-images/trd/fasteners/coach-head-screw/2.jpg",
            "/assets/gallery/product-images/trd/fasteners/coach-head-screw/3.jpg"
          ]
        }
      ]
    },
    {
      "slug": "trd-allen-bolt",
      "name": "Allen Bolt",
      "track": "trd",
      "trackLabel": "Trading",
      "categoryIcon": "head-socket",
      "lead": "High-strength bolts with internal hex (Allen) drive — for high-torque precision fastening in restricted spaces where a spanner cannot reach.",
      "shared": {
        "Grade": "8.8 / 10.9 / 12.9 · SS 304",
        "Thread": "M3 – M20",
        "Length": "5 – 150 mm",
        "Finish": "Black oxide / Zinc plated / Plain"
      },
      "applications": [
        "Machine & engine assembly",
        "Precision tooling & jigs",
        "Restricted-access structural joints",
        "Automotive & robotics"
      ],
      "standards": [
        "DIN 912",
        "ISO 4762",
        "DIN 7991",
        "DIN 6912"
      ],
      "products": [
        {
          "slug": "csk-head-ln-bolt",
          "name": "CSK Head LN Bolt",
          "icon": "head-csk",
          "tag": "",
          "shortDesc": "Countersunk socket head Allen bolt — 90° flush finish combined with high-torque internal hex drive for a clean surface profile.",
          "features": [
            "90° countersunk head sits completely flush",
            "Internal hex (Allen key) drive",
            "Grades 8.8 / 10.9 / 12.9 & SS 304",
            "M3–M20, lengths 6–100 mm — DIN 7991"
          ],
          "specs": {
            "Head Type": "Countersunk",
            "Drive": "Hex (Allen)",
            "Grade": "8.8 / 10.9 / 12.9 · SS 304",
            "Thread": "M3 – M20",
            "Length": "6 – 100 mm",
            "Standard": "DIN 7991"
          },
          "images": [
            "/assets/gallery/product-images/trd/allen-bolt/csk-head-ln-bolt/2.jpeg",
            "/assets/gallery/product-images/trd/allen-bolt/csk-head-ln-bolt/2.jpg"
          ]
        },
        {
          "slug": "truss-head-ln-bolt",
          "name": "Truss Head LN Bolt",
          "icon": "head-truss",
          "tag": "",
          "shortDesc": "Low-profile truss head Allen bolt — wide bearing surface with internal hex drive for load distribution on thin or soft materials.",
          "features": [
            "Wide low-profile truss head minimises protrusion",
            "Internal hex (Allen key) drive",
            "Grades 8.8 / 10.9 & SS 304",
            "M4–M16, lengths 8–80 mm — DIN 6912"
          ],
          "specs": {
            "Head Type": "Truss (Low)",
            "Drive": "Hex (Allen)",
            "Grade": "8.8 / 10.9 · SS 304",
            "Thread": "M4 – M16",
            "Length": "8 – 80 mm",
            "Standard": "DIN 6912"
          },
          "images": []
        },
        {
          "slug": "ln-bolt",
          "name": "LN Bolt",
          "icon": "head-socket",
          "tag": "Bestseller",
          "shortDesc": "Standard socket head cap screw — the industry-standard high-strength Allen bolt for precision machine assembly and structural joints.",
          "features": [
            "Cylindrical socket head with precision hex recess",
            "Tensile strength up to 1220 MPa (grade 12.9)",
            "Grades 8.8 / 10.9 / 12.9 & SS 304/316",
            "M3–M20, lengths 5–200 mm — DIN 912 / ISO 4762"
          ],
          "specs": {
            "Head Type": "Socket Cap",
            "Drive": "Hex (Allen)",
            "Grade": "8.8 / 10.9 / 12.9 · SS 304/316",
            "Thread": "M3 – M20",
            "Length": "5 – 200 mm",
            "Standard": "DIN 912 / ISO 4762"
          },
          "images": [
            "/assets/gallery/product-images/trd/allen-bolt/ln-bolt/1.jpg",
            "/assets/gallery/product-images/trd/allen-bolt/ln-bolt/2.jpg"
          ]
        }
      ]
    }
  ]
};
