#!/usr/bin/env bash
# Download the Higgsfield-generated poster stills into assets/posters/ and
# rewrite index.html to use the local copies instead of the CDN links.
# Run from anywhere; operates on the repo it lives in.
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p assets/posters

declare -A POSTERS=(
  [hero-led-lobby]="https://d8j0ntlcm91z4.cloudfront.net/user_3G4vT0leBNeViaTHBbsao3dtR2N/hf_20260705_110328_effcbeb8-9858-4131-9d49-b8339f1b2e3d.png"
  [control-room]="https://d8j0ntlcm91z4.cloudfront.net/user_3G4vT0leBNeViaTHBbsao3dtR2N/hf_20260705_110331_2b924734-1a22-4f8d-a210-f10ca0580f39.png"
  [showroom-led]="https://d8j0ntlcm91z4.cloudfront.net/user_3G4vT0leBNeViaTHBbsao3dtR2N/hf_20260705_110335_ac496b8f-5d44-4d27-9ef6-fa4089e08c83.png"
  [immersive-museum]="https://d8j0ntlcm91z4.cloudfront.net/user_3G4vT0leBNeViaTHBbsao3dtR2N/hf_20260705_110341_e06a2109-6271-4bc9-b48d-069b283363a7.png"
)

for name in "${!POSTERS[@]}"; do
  url="${POSTERS[$name]}"
  out="assets/posters/${name}.png"
  echo "→ ${out}"
  curl -sSfL -o "${out}" "${url}"
  # point index.html at the local copy
  sed -i.bak "s|${url}|assets/posters/${name}.png|g" index.html
done
rm -f index.html.bak

echo "Done. Posters localized and index.html updated."
echo "Tip: convert to WebP/AVIF and resize to ~1920w for lighter pages."
