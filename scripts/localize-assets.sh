#!/usr/bin/env bash
# Download the Higgsfield-generated poster stills into assets/posters/ (and
# rewrite index.html to use the local copies) plus the three Seedance video
# clips into assets/videos/ (the site prefers the local files automatically).
# Run from anywhere; operates on the repo it lives in.
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p assets/posters assets/videos

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

declare -A VIDEOS=(
  [control-room-server-room]="https://d8j0ntlcm91z4.cloudfront.net/user_3G4vT0leBNeViaTHBbsao3dtR2N/hf_20260705_122426_6e77a604-ada9-45b6-88c0-1dda344f9cbb.mp4"
  [showroom-exhibition-led]="https://d8j0ntlcm91z4.cloudfront.net/user_3G4vT0leBNeViaTHBbsao3dtR2N/hf_20260705_122436_0e3f7679-7ab2-4282-b3a3-78d20e1d138b.mp4"
  [immersive-museum-room]="https://d8j0ntlcm91z4.cloudfront.net/user_3G4vT0leBNeViaTHBbsao3dtR2N/hf_20260705_122415_3e7c85b8-c93c-4dd8-9bf2-b90488529bf4.mp4"
)

for name in "${!VIDEOS[@]}"; do
  out="assets/videos/${name}.mp4"
  echo "→ ${out}"
  curl -sSfL -o "${out}" "${VIDEOS[$name]}"
done

echo "Done. Posters localized (index.html updated) and videos downloaded."
echo "Tip: convert to WebP/AVIF and resize to ~1920w for lighter pages."
