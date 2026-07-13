#!/usr/bin/env bash
# Export CV Markdown → PDF (pandoc HTML5 + weasyprint).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
CV_DIR="$ROOT/docs/cv"
OUT_DIR="$ROOT/public/pdfs"
CSS="$CV_DIR/cv-ats.css"

PANDOC="${PANDOC:-}"
if [[ -z "$PANDOC" ]]; then
  if command -v pandoc >/dev/null 2>&1; then
    PANDOC="$(command -v pandoc)"
  elif [[ -x /tmp/pandoc-3.6.1/bin/pandoc ]]; then
    PANDOC=/tmp/pandoc-3.6.1/bin/pandoc
  else
    echo "pandoc no encontrado. Instálalo o define PANDOC=/ruta/a/pandoc" >&2
    exit 1
  fi
fi

WEASY="$ROOT/.venv-cv/bin/weasyprint"
if [[ ! -x "$WEASY" ]]; then
  echo "Falta .venv-cv con weasyprint. Crea:" >&2
  echo "  python3 -m venv .venv-cv && .venv-cv/bin/pip install weasyprint" >&2
  exit 1
fi

export_one() {
  local src="$1"
  local dest="$2"
  local tmp
  tmp="$(mktemp --suffix=.html)"
  "$PANDOC" "$src" -t html5 -s --metadata title="CV" -c "cv-ats.css" -o "$tmp"
  # Resolve CSS next to temp: copy html beside css or inject absolute path
  local tmp2
  tmp2="$(mktemp --suffix=.html)"
  # Rewrite stylesheet href to absolute file URL
  sed "s|href=\"cv-ats.css\"|href=\"file://$CSS\"|" "$tmp" > "$tmp2"
  "$WEASY" "$tmp2" "$dest"
  rm -f "$tmp" "$tmp2"
  echo "OK $dest"
}

mkdir -p "$OUT_DIR"
export_one "$CV_DIR/cv-fravelz-generico.md" "$OUT_DIR/CV-Fravelz.pdf"
export_one "$CV_DIR/cv-spiderman-infojobs.md" "$OUT_DIR/CV-Fravelz-SpiderMan-InfoJobs.pdf"
