$path = "f:\WORK\Freelance\mtkscrews\Development\theme7\products-data.js"
$content = [System.IO.File]::ReadAllText($path)
$placeholder = '"/assets/gallery/product-images/image1.png", "/assets/gallery/product-images/image2.png", "/assets/gallery/product-images/image3.png", "/assets/gallery/product-images/image4.png"'

function ReplaceFirst($text, $old, $new) {
  $idx = $text.IndexOf($old)
  if ($idx -ge 0) { return $text.Substring(0, $idx) + $new + $text.Substring($idx + $old.Length) }
  return $text
}

# Products in file order — must match order in products-data.js exactly
$images = @(
  # mfg-machine-screw
  '"/assets/gallery/product-images/mfg-machine-screw__pan-phillips__1.png", "/assets/gallery/product-images/mfg-machine-screw__pan-phillips__2.png", "/assets/gallery/product-images/mfg-machine-screw__pan-phillips__3.png", "/assets/gallery/product-images/mfg-machine-screw__pan-phillips__4.png"',
  '"/assets/gallery/product-images/mfg-machine-screw__csk-phillips__1.png", "/assets/gallery/product-images/mfg-machine-screw__csk-phillips__2.png", "/assets/gallery/product-images/mfg-machine-screw__csk-phillips__3.png"',
  '"/assets/gallery/product-images/mfg-machine-screw__truss-phillips__1.png", "/assets/gallery/product-images/mfg-machine-screw__truss-phillips__2.png", "/assets/gallery/product-images/mfg-machine-screw__truss-phillips__3.png"',
  '"/assets/gallery/product-images/mfg-machine-screw__combination__1.png", "/assets/gallery/product-images/mfg-machine-screw__combination__2.png", "/assets/gallery/product-images/mfg-machine-screw__combination__3.png"',
  '"/assets/gallery/product-images/mfg-machine-screw__combiwasher__1.png", "/assets/gallery/product-images/mfg-machine-screw__combiwasher__2.png", "/assets/gallery/product-images/mfg-machine-screw__combiwasher__3.png"',
  '"/assets/gallery/product-images/mfg-machine-screw__csk-head-torx__1.png", "/assets/gallery/product-images/mfg-machine-screw__csk-head-torx__2.png", "/assets/gallery/product-images/mfg-machine-screw__csk-head-torx__3.png"',
  '"/assets/gallery/product-images/mfg-machine-screw__torx-button-head__1.jpeg", "/assets/gallery/product-images/mfg-machine-screw__torx-button-head__2.png", "/assets/gallery/product-images/mfg-machine-screw__torx-button-head__3.jpg"',
  '"/assets/gallery/product-images/mfg-machine-screw__ln-button-head__1.jpg", "/assets/gallery/product-images/mfg-machine-screw__ln-button-head__2.png", "/assets/gallery/product-images/mfg-machine-screw__ln-button-head__3.jpg"',
  '"/assets/gallery/product-images/mfg-machine-screw__ln-csk-head__1.jpg", "/assets/gallery/product-images/mfg-machine-screw__ln-csk-head__2.jpg", "/assets/gallery/product-images/mfg-machine-screw__ln-csk-head__3.jpeg"',
  # mfg-self-tapping
  '"/assets/gallery/product-images/mfg-self-tapping__pan-phillips__1.png", "/assets/gallery/product-images/mfg-self-tapping__pan-phillips__2.png", "/assets/gallery/product-images/mfg-self-tapping__pan-phillips__3.jpg"',
  '"/assets/gallery/product-images/mfg-self-tapping__csk-phillips__1.jpg", "/assets/gallery/product-images/mfg-self-tapping__csk-phillips__2.jpg", "/assets/gallery/product-images/mfg-self-tapping__csk-phillips__3.jpg"',
  '"/assets/gallery/product-images/mfg-self-tapping__truss-phillips__1.png", "/assets/gallery/product-images/mfg-self-tapping__truss-phillips__2.png", "/assets/gallery/product-images/mfg-self-tapping__truss-phillips__3.jpg"',
  '"/assets/gallery/product-images/mfg-self-tapping__combiwasher__1.png", "/assets/gallery/product-images/mfg-self-tapping__combiwasher__2.png", "/assets/gallery/product-images/mfg-self-tapping__combiwasher__3.jpg"',
  '"/assets/gallery/product-images/mfg-self-tapping__combination__1.jpg", "/assets/gallery/product-images/mfg-self-tapping__combination__2.png", "/assets/gallery/product-images/mfg-self-tapping__combination__3.png"',
  '"/assets/gallery/product-images/mfg-self-tapping__wooden-screw__1.jpg", "/assets/gallery/product-images/mfg-self-tapping__wooden-screw__2.jpg", "/assets/gallery/product-images/mfg-self-tapping__wooden-screw__3.jpg"',
  # trd-self-drilling
  '"/assets/gallery/product-images/trd-self-drilling__hex-head-sds__1.png", "/assets/gallery/product-images/trd-self-drilling__hex-head-sds__2.png", "/assets/gallery/product-images/trd-self-drilling__hex-head-sds__3.jpg"',
  '"/assets/gallery/product-images/trd-self-drilling__epdm-bonded-hex-flange__1.jpeg", "/assets/gallery/product-images/trd-self-drilling__epdm-bonded-hex-flange__2.jpeg", "/assets/gallery/product-images/trd-self-drilling__epdm-bonded-hex-flange__3.jpeg"',
  '"/assets/gallery/product-images/trd-self-drilling__hex-head-stitching__1.jpg", "/assets/gallery/product-images/trd-self-drilling__hex-head-stitching__2.jpg", "/assets/gallery/product-images/trd-self-drilling__hex-head-stitching__3.jpg"',
  '"/assets/gallery/product-images/trd-self-drilling__sds-sockett__1.jpeg", "/assets/gallery/product-images/trd-self-drilling__sds-sockett__2.jpeg", "/assets/gallery/product-images/trd-self-drilling__sds-sockett__3.jpeg"',
  '"/assets/gallery/product-images/trd-self-drilling__cyclone-washers__1.jpeg", "/assets/gallery/product-images/trd-self-drilling__cyclone-washers__2.jpeg", "/assets/gallery/product-images/trd-self-drilling__cyclone-washers__3.jpg"',
  '"/assets/gallery/product-images/trd-self-drilling__truss-head-sds__1.jpg", "/assets/gallery/product-images/trd-self-drilling__truss-head-sds__2.jpg", "/assets/gallery/product-images/trd-self-drilling__truss-head-sds__3.jpg"',
  '"/assets/gallery/product-images/trd-self-drilling__csk-head-sds__1.jpg", "/assets/gallery/product-images/trd-self-drilling__csk-head-sds__2.jpg", "/assets/gallery/product-images/trd-self-drilling__csk-head-sds__3.jpg"',
  '"/assets/gallery/product-images/trd-self-drilling__pan-head-sds__1.jpg", "/assets/gallery/product-images/trd-self-drilling__pan-head-sds__2.jpg", "/assets/gallery/product-images/trd-self-drilling__pan-head-sds__3.png"',
  '"/assets/gallery/product-images/trd-self-drilling__ph2-bitt__1.jpg", "/assets/gallery/product-images/trd-self-drilling__ph2-bitt__2.jpg", "/assets/gallery/product-images/trd-self-drilling__ph2-bitt__3.png"',
  '"/assets/gallery/product-images/trd-self-drilling__epdm-washer__1.jpg", "/assets/gallery/product-images/trd-self-drilling__epdm-washer__2.jpg", "/assets/gallery/product-images/trd-self-drilling__epdm-washer__3.jpg"',
  # trd-self-tapping
  '"/assets/gallery/product-images/trd-self-tapping__pan-slotted-screw__1.jpeg", "/assets/gallery/product-images/trd-self-tapping__pan-slotted-screw__2.jpeg", "/assets/gallery/product-images/trd-self-tapping__pan-slotted-screw__3.png"',
  '"/assets/gallery/product-images/trd-self-tapping__pan-phillips-screw__1.jpg", "/assets/gallery/product-images/trd-self-tapping__pan-phillips-screw__2.png", "/assets/gallery/product-images/trd-self-tapping__pan-phillips-screw__3.jpg"',
  '"/assets/gallery/product-images/trd-self-tapping__csk-slotted-screw__1.jpeg", "/assets/gallery/product-images/trd-self-tapping__csk-slotted-screw__2.png", "/assets/gallery/product-images/trd-self-tapping__csk-slotted-screw__3.jpg"',
  '"/assets/gallery/product-images/trd-self-tapping__csk-phillips-screw__1.jpg", "/assets/gallery/product-images/trd-self-tapping__csk-phillips-screw__2.jpg", "/assets/gallery/product-images/trd-self-tapping__csk-phillips-screw__3.jpg"',
  '"/assets/gallery/product-images/trd-self-tapping__truss-head-screw__1.jpg", "/assets/gallery/product-images/trd-self-tapping__truss-head-screw__2.jpg", "/assets/gallery/product-images/trd-self-tapping__truss-head-screw__3.jpg"',
  '"/assets/gallery/product-images/trd-self-tapping__combination-head-screw__1.jpg", "/assets/gallery/product-images/trd-self-tapping__combination-head-screw__2.png", "/assets/gallery/product-images/trd-self-tapping__combination-head-screw__3.jpg"',
  '"/assets/gallery/product-images/trd-self-tapping__combi-washer-head-screw__1.jpeg", "/assets/gallery/product-images/trd-self-tapping__combi-washer-head-screw__2.jpeg", "/assets/gallery/product-images/trd-self-tapping__combi-washer-head-screw__3.jpg"',
  '"/assets/gallery/product-images/trd-self-tapping__drywall-screw__1.jpeg", "/assets/gallery/product-images/trd-self-tapping__drywall-screw__2.jpeg", "/assets/gallery/product-images/trd-self-tapping__drywall-screw__3.jpeg"',
  '"/assets/gallery/product-images/trd-self-tapping__chipboard-screw__1.jpg", "/assets/gallery/product-images/trd-self-tapping__chipboard-screw__2.jpg", "/assets/gallery/product-images/trd-self-tapping__chipboard-screw__3.jpg"',
  # trd-machine-screw
  '"/assets/gallery/product-images/trd-machine-screw__pan-phillips-washer__1.jpg", "/assets/gallery/product-images/trd-machine-screw__pan-phillips-washer__2.png", "/assets/gallery/product-images/trd-machine-screw__pan-phillips-washer__3.jpg"',
  '"/assets/gallery/product-images/trd-machine-screw__csk-phillips__1.jpg", "/assets/gallery/product-images/trd-machine-screw__csk-phillips__2.jpg", "/assets/gallery/product-images/trd-machine-screw__csk-phillips__3.jpg"',
  '"/assets/gallery/product-images/trd-machine-screw__truss-phillips__1.png", "/assets/gallery/product-images/trd-machine-screw__truss-phillips__2.png", "/assets/gallery/product-images/trd-machine-screw__truss-phillips__3.jpg"',
  '"/assets/gallery/product-images/trd-machine-screw__combi-washer-machine__1.jpg", "/assets/gallery/product-images/trd-machine-screw__combi-washer-machine__2.jpg", "/assets/gallery/product-images/trd-machine-screw__combi-washer-machine__3.jpg"',
  # trd-rivets
  '"/assets/gallery/product-images/trd-rivets__aluminium-pop-rivet__1.jpg", "/assets/gallery/product-images/trd-rivets__aluminium-pop-rivet__2.jpg", "/assets/gallery/product-images/trd-rivets__aluminium-pop-rivet__3.jpg"',
  '"/assets/gallery/product-images/trd-rivets__coloured-pop-rivet__1.jpg", "/assets/gallery/product-images/trd-rivets__coloured-pop-rivet__2.jpg", "/assets/gallery/product-images/trd-rivets__coloured-pop-rivet__3.jpg"',
  '"/assets/gallery/product-images/trd-rivets__hammer-rivet__1.jpg", "/assets/gallery/product-images/trd-rivets__hammer-rivet__2.jpg", "/assets/gallery/product-images/trd-rivets__hammer-rivet__3.jpg"',
  '"/assets/gallery/product-images/trd-rivets__tinmen-rivet__1.jpeg", "/assets/gallery/product-images/trd-rivets__tinmen-rivet__2.jpeg", "/assets/gallery/product-images/trd-rivets__tinmen-rivet__3.jpg"',
  '"/assets/gallery/product-images/trd-rivets__double-hand-riveting-gun__1.jpg"',
  # trd-fasteners
  '"/assets/gallery/product-images/trd-fasteners__frame-fixing-fastener__1.jpeg", "/assets/gallery/product-images/trd-fasteners__frame-fixing-fastener__2.jpeg", "/assets/gallery/product-images/trd-fasteners__frame-fixing-fastener__3.jpeg"',
  '"/assets/gallery/product-images/trd-fasteners__wegde-anchor-fastener__1.jpg", "/assets/gallery/product-images/trd-fasteners__wegde-anchor-fastener__2.jpg", "/assets/gallery/product-images/trd-fasteners__wegde-anchor-fastener__3.jpg"',
  '"/assets/gallery/product-images/trd-fasteners__pin-type-fastener__1.jpg", "/assets/gallery/product-images/trd-fasteners__pin-type-fastener__2.jpg", "/assets/gallery/product-images/trd-fasteners__pin-type-fastener__3.jpg"',
  '"/assets/gallery/product-images/trd-fasteners__bolt-type-fastner__1.jpg", "/assets/gallery/product-images/trd-fasteners__bolt-type-fastner__2.jpg", "/assets/gallery/product-images/trd-fasteners__bolt-type-fastner__3.jpg"',
  '"/assets/gallery/product-images/trd-fasteners__hook-type-fastener__1.jpeg", "/assets/gallery/product-images/trd-fasteners__hook-type-fastener__2.jpg", "/assets/gallery/product-images/trd-fasteners__hook-type-fastener__3.jpg"',
  '"/assets/gallery/product-images/trd-fasteners__coach-head-screw__1.jpg", "/assets/gallery/product-images/trd-fasteners__coach-head-screw__2.jpg", "/assets/gallery/product-images/trd-fasteners__coach-head-screw__3.jpg"',
  # trd-allen-bolt
  '"/assets/gallery/product-images/trd-allen-bolt__csk-head-ln-bolt__1.jpeg", "/assets/gallery/product-images/trd-allen-bolt__csk-head-ln-bolt__2.jpeg", "/assets/gallery/product-images/trd-allen-bolt__csk-head-ln-bolt__3.jpg"',
  '"/assets/gallery/product-images/trd-allen-bolt__truss-head-ln-bolt__1.jpg", "/assets/gallery/product-images/trd-allen-bolt__truss-head-ln-bolt__2.jpg", "/assets/gallery/product-images/trd-allen-bolt__truss-head-ln-bolt__3.jpg"',
  '"/assets/gallery/product-images/trd-allen-bolt__ln-bolt__1.jpeg", "/assets/gallery/product-images/trd-allen-bolt__ln-bolt__2.jpeg", "/assets/gallery/product-images/trd-allen-bolt__ln-bolt__3.jpg"'
)

$count = ($content | Select-String -Pattern ([regex]::Escape($placeholder)) -AllMatches).Matches.Count
Write-Host "Placeholder occurrences found: $count (expected 44)"

foreach ($img in $images) {
  $content = ReplaceFirst $content $placeholder $img
}

$remaining = ($content | Select-String -Pattern ([regex]::Escape($placeholder)) -AllMatches).Matches.Count
Write-Host "Remaining placeholders: $remaining"

[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done."
