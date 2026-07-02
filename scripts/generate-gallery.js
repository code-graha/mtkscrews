/**
 * MTK Screws — Gallery Data Generator
 *
 * Scans ALL subfolders inside assets/gallery/ and writes gallery-data.js.
 *
 * Usage:
 *   node generate-gallery.js
 *
 * HOW CATEGORIES WORK
 * ───────────────────
 * Each image's category = the name of its IMMEDIATE parent folder.
 *
 *   assets/gallery/
 *     logo/              → category "logo"       → filter "Logo"
 *     product-images/    → category "product-images" → filter "Product Images"
 *       manufacturing/   → category "manufacturing"  → filter "Manufacturing"
 *       trading/         → category "trading"        → filter "Trading"
 *
 * To add a new category: just create a subfolder and drop images in.
 * The filter button appears automatically — no code changes needed.
 *
 * To customise a category's display name or filter order, add a line to
 * CAT_LABELS below (unknown folders auto-title-case and appear last).
 *
 * HOW LABELS WORK
 * ───────────────
 * Files named {a}__{b}__{n}.ext (the product-images convention)
 *   → label comes from the middle part (b), looked up in PRODUCT_LABELS
 * All other files → label = title-cased filename (underscores/dashes → spaces)
 * Override any label by adding to FILE_LABELS below.
 */

const fs   = require('fs');
const path = require('path');

/* ── paths ──────────────────────────────────────────────────────────── */
const GALLERY_DIR = path.join(__dirname, '../assets/gallery');
const OUTPUT_FILE = path.join(__dirname, '../js/gallery-data.js');
const WEB_GALLERY = '/assets/gallery/';

/* ── category display names & filter order ───────────────────────────
   Only folders listed here get a custom name / guaranteed order.
   Any unlisted folder is auto-title-cased and appended at the end.  */
const CAT_LABELS = {
    'logo':              'Logo',
    'mfg':                'Manufacturing',
    'trd':                'Trading',
    'facility':          'Facility',
    'machinery':         'Machinery & Equipment',
    'quality':           'Quality Control',
    'packaging':         'Packaging',
};

/* ── product label overrides (for {a}__{b}__{n}.ext filenames) ──────── */
const PRODUCT_LABELS = {
    'combination':            'Combination Head',
    'combiwasher':            'Combi Washer',
    'csk-head-torx':          'CSK Torx Head',
    'csk-phillips':           'CSK Phillips',
    'ln-button-head':         'LN Button Head',
    'ln-csk-head':            'LN CSK Head',
    'pan-phillips':           'Pan Phillips',
    'torx-button-head':       'Torx Button Head',
    'truss-phillips':         'Truss Phillips',
    'wooden-screw':           'Wooden Screw',
    'csk-head-ln-bolt':       'CSK LN Bolt',
    'truss-head-ln-bolt':     'Truss LN Bolt',
    'bolt-type-fastner':      'Bolt Type Fastener',
    'coach-head-screw':       'Coach Head Screw',
    'frame-fixing-fastener':  'Frame Fixing',
    'hook-type-fastener':     'Hook Type Fastener',
    'pin-type-fastener':      'Pin Type Fastener',
    'wegde-anchor-fastener':  'Wedge Anchor',
    'combi-washer-machine':   'Combi Washer',
    'pan-phillips-washer':    'Pan Phillips Washer',
    'aluminium-pop-rivet':    'Aluminium Pop Rivet',
    'coloured-pop-rivet':     'Coloured Pop Rivet',
    'hammer-rivet':           'Hammer Rivet',
    'tinmen-rivet':           'Tinmen Rivet',
    'csk-head-sds':           'CSK Head SDS',
    'cyclone-washers':        'Cyclone Washer',
    'epdm-bonded-hex-flange': 'EPDM Hex Flange',
    'epdm-washer':            'EPDM Washer',
    'hex-head-sds':           'Hex Head SDS',
    'hex-head-stitching':     'Hex Head Stitching',
    'pan-head-sds':           'Pan Head SDS',
    'ph2-bitt':               'PH2 Bit',
    'sds-sockett':            'SDS Socket',
    'truss-head-sds':         'Truss Head SDS',
    'chipboard-screw':        'Chipboard Screw',
    'combination-head-screw': 'Combination Head',
    'csk-phillips-screw':     'CSK Phillips',
    'csk-slotted-screw':      'CSK Slotted',
    'drywall-screw':          'Drywall Screw',
    'pan-phillips-screw':     'Pan Phillips',
    'pan-slotted-screw':      'Pan Slotted',
    'truss-head-screw':       'Truss Head',
};

/* ── label overrides for plain filenames (logo/, facility/, etc.) ───── */
const FILE_LABELS = {
    'ai-logo':       'Aggarwal Industries Logo',
    'mtk-logo':      'MTK Screws Logo',
};

/* ── helpers ─────────────────────────────────────────────────────────── */
const VALID_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

function slugToTitle(slug) {
    return slug
        .replace(/[_]/g, '-')
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
}
function catLabel(folder)    { return CAT_LABELS[folder]     || slugToTitle(folder); }
function productLabel(slug)  { return PRODUCT_LABELS[slug]   || slugToTitle(slug);   }
function fileLabel(base)     {
    const key = base.replace(/_/g, '-').toLowerCase();
    return FILE_LABELS[key] || slugToTitle(base);
}

/* ── recursive file scan ─────────────────────────────────────────────── */
if (!fs.existsSync(GALLERY_DIR)) {
    console.error('✗ Folder not found:', GALLERY_DIR);
    process.exit(1);
}

function scanDir(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return scanDir(full);
        if (VALID_EXT.has(path.extname(entry.name).toLowerCase())) return [full];
        return [];
    });
}

const images = scanDir(GALLERY_DIR).sort().map(fullPath => {
    const filename = path.basename(fullPath);
    const relParts = path.relative(GALLERY_DIR, fullPath).replace(/\\/g, '/').split('/');
    const webPath  = WEB_GALLERY + relParts.join('/');
    const base     = filename.replace(/\.[^.]+$/, '');        // no extension

    // product-images/<track>/<category>/<variant>/<rest> → category = track, label = variant
    const isProductImage = relParts[0] === 'product-images' && relParts.length === 5;
    const cat   = isProductImage ? relParts[1] : path.basename(path.dirname(fullPath));
    const label = isProductImage ? productLabel(relParts[3]) : fileLabel(base);

    return { src: webPath, cat, label };
});

/* sort: CAT_LABELS order first, unknown folders alphabetically at end */
const catOrder = Object.keys(CAT_LABELS);
images.sort((a, b) => {
    const ia = catOrder.indexOf(a.cat), ib = catOrder.indexOf(b.cat);
    const ca = ia < 0 ? catLabel(a.cat) : String(ia).padStart(4, '0');
    const cb = ib < 0 ? catLabel(b.cat) : String(ib).padStart(4, '0');
    if (ca !== cb) return ca < cb ? -1 : 1;
    return a.src.localeCompare(b.src);
});

/* runtime category label map — only cats that actually have images */
const usedCats      = [...new Set(images.map(i => i.cat))];
const runtimeLabels = Object.fromEntries(usedCats.map(c => [c, catLabel(c)]));

/* ── write gallery-data.js ────────────────────────────────────────────── */
const output = `/* AUTO-GENERATED by generate-gallery.js — do not edit manually.
   Run:  node generate-gallery.js
   ${images.length} images  |  ${usedCats.length} categories
   Generated: ${new Date().toISOString()}
*/
window.GALLERY_IMAGES = ${JSON.stringify(images, null, 2)};
window.GALLERY_CAT_LABELS = ${JSON.stringify(runtimeLabels, null, 2)};
`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf8');

console.log(`✓  gallery-data.js  —  ${images.length} images, ${usedCats.length} categories`);
usedCats.forEach(c => {
    const n = images.filter(i => i.cat === c).length;
    console.log(`   ${catLabel(c).padEnd(30)} ${n} image${n === 1 ? '' : 's'}  [${c}]`);
});
