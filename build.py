"""Gera o index.html único a partir de src/. Uso: python3 build.py"""
from pathlib import Path
root = Path(__file__).parent
src = root / "src"
html = (src / "index.template.html").read_text(encoding="utf-8")
for marker, name in [("/*CSS*/", "style.css"), ("/*DATA*/", "data.js"), ("/*APP*/", "app.js")]:
    html = html.replace(marker, (src / name).read_text(encoding="utf-8"))
(root / "index.html").write_text(html, encoding="utf-8")
print(f"index.html gerado ({len(html):,} caracteres)")
