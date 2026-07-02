/**
 * MTK Screws — Image Optimizer
 *
 * Backs up untouched originals into _archive/originals/ (mirroring their
 * path under assets/), then resizes + re-compresses oversized site images
 * IN PLACE (same filename, same path — no HTML/JS/data-file changes needed).
 *
 * Safe to re-run: a file is only touched if it has not already been
 * backed up (i.e. it has not already been optimized by this script).
 *
 * Usage:
 *   node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const ARCHIVE_DIR = path.join(ROOT, '_archive/originals');

const TARGETS = [
    // Full-bleed factory photography — shot at 24MP, displayed at a few
    // hundred px. Cap width, re-encode as JPEG at a web-friendly quality.
    {
        pattern: path.join(ROOT, 'assets/gallery/factory-images'),
        ext: ['.jpg', '.jpeg'],
        maxWidth: 1920,
        process: (img) => img.jpeg({ quality: 78, mozjpeg: true }),
    },
    // Leadership headshots — square PNGs with transparency, displayed
    // small in a photo grid.
    {
        pattern: path.join(ROOT, 'assets/headshots/leadership'),
        ext: ['.png'],
        maxWidth: 800,
        process: (img) => img.png({ compressionLevel: 9, palette: true }),
    },
    // Site logo — shown at ~56px tall in the header/footer, but kept at
    // 512px so it stays crisp for retina screens and structured-data use.
    {
        pattern: path.join(ROOT, 'assets/mtk-logo.png'),
        ext: ['.png'],
        maxWidth: 512,
        process: (img) => img.png({ compressionLevel: 9, palette: true }),
    },
];

function collectFiles(target) {
    const stat = fs.statSync(target.pattern);
    if (stat.isFile()) return [target.pattern];
    return fs.readdirSync(target.pattern)
        .filter((f) => target.ext.includes(path.extname(f).toLowerCase()))
        .map((f) => path.join(target.pattern, f));
}

async function optimizeFile(filePath, target) {
    const relFromAssets = path.relative(path.join(ROOT, 'assets'), filePath);
    const backupPath = path.join(ARCHIVE_DIR, relFromAssets);

    if (fs.existsSync(backupPath)) {
        console.log(`skip (already optimized): ${relFromAssets}`);
        return;
    }

    fs.mkdirSync(path.dirname(backupPath), { recursive: true });
    fs.copyFileSync(filePath, backupPath);

    const before = fs.statSync(filePath).size;
    const tmpPath = filePath + '.tmp';

    let img = sharp(backupPath).resize({ width: target.maxWidth, withoutEnlargement: true });
    img = target.process(img);
    await img.toFile(tmpPath);

    fs.renameSync(tmpPath, filePath);
    const after = fs.statSync(filePath).size;

    console.log(
        `optimized: ${relFromAssets}  ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
        + `  (-${(100 - (after / before) * 100).toFixed(0)}%)`
    );
}

(async () => {
    for (const target of TARGETS) {
        for (const file of collectFiles(target)) {
            await optimizeFile(file, target);
        }
    }
})();
