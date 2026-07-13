# CVs Fravelz (Markdown → PDF)

Fuentes ATS de 1 columna para el portfolio y para ofertas concretas.

## Archivos

| Archivo | Uso |
|---------|-----|
| `cv-fravelz-generico.md` | CV web (botón Ver CV del hero) |
| `cv-spiderman-infojobs.md` | CV oferta SPIDER-MAN / InfoJobs |
| `carta-spiderman-infojobs.md` | Carta de presentación (pegar en InfoJobs) |
| `cv-ats.css` | Estilos de impresión A4 |
| `export-pdfs.sh` | Genera ambos PDFs en `public/pdfs/` |

PDFs de salida:

- `public/pdfs/CV-Fravelz.pdf`
- `public/pdfs/CV-Fravelz-SpiderMan-InfoJobs.pdf`

## Requisitos

1. **pandoc** (CLI). Si no está en el sistema:
   ```bash
   # ejemplo: binario oficial en /tmp
   curl -fsSL -o /tmp/pandoc.tar.gz \
     https://github.com/jgm/pandoc/releases/download/3.6.1/pandoc-3.6.1-linux-amd64.tar.gz
   tar -xzf /tmp/pandoc.tar.gz -C /tmp
   export PANDOC=/tmp/pandoc-3.6.1/bin/pandoc
   ```
2. **weasyprint** en un venv local del repo (ignorado por git):
   ```bash
   python3 -m venv .venv-cv
   .venv-cv/bin/pip install weasyprint
   ```

## Exportar

Desde la raíz del repo:

```bash
bash docs/cv/export-pdfs.sh
```

Opcional: `PANDOC=/ruta/a/pandoc bash docs/cv/export-pdfs.sh`

## Notas

- El inventario largo sigue en `docs/cv-fravelz-completo.md` (no usar como PDF).
- El PDF antiguo `public/pdfs/CV - ATS Harvard.pdf` se deja sin referenciar en el hero.
