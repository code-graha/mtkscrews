$path   = "f:\WORK\Freelance\mtkscrews\Development\theme7\products-data.js"
$imgDir = "f:\WORK\Freelance\mtkscrews\Development\theme7\assets\product-images"
$content = [System.IO.File]::ReadAllText($path)

# Products in the exact order they appear in products-data.js
$products = @(
  "mfg-machine-screw__pan-phillips",
  "mfg-machine-screw__csk-phillips",
  "mfg-machine-screw__truss-phillips",
  "mfg-machine-screw__combination",
  "mfg-machine-screw__combiwasher",
  "mfg-machine-screw__csk-head-torx",
  "mfg-machine-screw__torx-button-head",
  "mfg-machine-screw__ln-button-head",
  "mfg-machine-screw__ln-csk-head",
  "mfg-self-tapping__pan-phillips",
  "mfg-self-tapping__csk-phillips",
  "mfg-self-tapping__truss-phillips",
  "mfg-self-tapping__combiwasher",
  "mfg-self-tapping__combination",
  "mfg-self-tapping__wooden-screw",
  "trd-self-drilling__hex-head-sds",
  "trd-self-drilling__epdm-bonded-hex-flange",
  "trd-self-drilling__hex-head-stitching",
  "trd-self-drilling__sds-sockett",
  "trd-self-drilling__cyclone-washers",
  "trd-self-drilling__truss-head-sds",
  "trd-self-drilling__csk-head-sds",
  "trd-self-drilling__pan-head-sds",
  "trd-self-drilling__ph2-bitt",
  "trd-self-drilling__epdm-washer",
  "trd-self-tapping__pan-slotted-screw",
  "trd-self-tapping__pan-phillips-screw",
  "trd-self-tapping__csk-slotted-screw",
  "trd-self-tapping__csk-phillips-screw",
  "trd-self-tapping__truss-head-screw",
  "trd-self-tapping__combination-head-screw",
  "trd-self-tapping__combi-washer-head-screw",
  "trd-self-tapping__drywall-screw",
  "trd-self-tapping__chipboard-screw",
  "trd-machine-screw__pan-phillips-washer",
  "trd-machine-screw__csk-phillips",
  "trd-machine-screw__truss-phillips",
  "trd-machine-screw__combi-washer-machine",
  "trd-rivets__aluminium-pop-rivet",
  "trd-rivets__coloured-pop-rivet",
  "trd-rivets__hammer-rivet",
  "trd-rivets__tinmen-rivet",
  "trd-rivets__double-hand-riveting-gun",
  "trd-fasteners__frame-fixing-fastener",
  "trd-fasteners__wegde-anchor-fastener",
  "trd-fasteners__pin-type-fastener",
  "trd-fasteners__bolt-type-fastner",
  "trd-fasteners__hook-type-fastener",
  "trd-fasteners__coach-head-screw",
  "trd-allen-bolt__csk-head-ln-bolt",
  "trd-allen-bolt__truss-head-ln-bolt",
  "trd-allen-bolt__ln-bolt"
)

# Track how many times each product slug has been seen
# (some slugs like pan-phillips appear in multiple categories)
$slugOccurrence = @{}

foreach ($prod in $products) {
  $sep      = $prod.IndexOf("__")
  $prodSlug = $prod.Substring($sep + 2)

  if (-not $slugOccurrence.ContainsKey($prodSlug)) { $slugOccurrence[$prodSlug] = 0 }
  $slugOccurrence[$prodSlug]++
  $occ = $slugOccurrence[$prodSlug]

  # Collect image files for this product
  $files = Get-ChildItem $imgDir -Filter "${prod}__*" |
    Sort-Object { [int]([regex]::Match($_.Name, '__(\d+)\.').Groups[1].Value) }

  if ($files.Count -gt 0) {
    $parts = $files | ForEach-Object { '"/assets/gallery/product-images/' + $_.Name + '"' }
    $inner = $parts -join ", "
  } else {
    $inner = ""
  }
  $newImages = '"images": [' + $inner + ']'

  # Locate the Nth occurrence of this product slug in the file
  $slugPat     = '"slug":\s*"' + [regex]::Escape($prodSlug) + '"'
  $slugMatches = [regex]::Matches($content, $slugPat)
  if ($slugMatches.Count -lt $occ) {
    Write-Host "WARNING: slug '$prodSlug' occurrence $occ not found (only $($slugMatches.Count) present)"
    continue
  }
  $slugPos = $slugMatches[$occ - 1].Index

  # From that slug position forward, replace the very next "images": [...] array
  $tail     = $content.Substring($slugPos)
  $imgMatch = [regex]::Match($tail, '"images":\s*\[.*?\]')
  if (-not $imgMatch.Success) {
    Write-Host "WARNING: no images array found after slug '$prodSlug' (occurrence $occ)"
    continue
  }

  $absStart = $slugPos + $imgMatch.Index
  $content  = $content.Substring(0, $absStart) + $newImages + $content.Substring($absStart + $imgMatch.Length)

  Write-Host "$prod  ($($files.Count) images)"
}

[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "`nDone."
