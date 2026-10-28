#!/usr/bin/env python3
"""Sinkronkan meta WhatsApp/OG di index.html dari data/data-undangan.js dan buat foto/og.jpg (1200x630).
Jalankan dari folder proyek: python tools/sinkron-meta.py   (gambar butuh: pip install pillow)"""
import re, pathlib
R = pathlib.Path(__file__).resolve().parent.parent
d = (R / "data/data-undangan.js").read_text(encoding="utf-8")
def top(k): return re.search(k + r'\s*:\s*"([^"]*)"', d).group(1)
def sub(o, k): return re.search(o + r'\s*:\s*\{[^}]*?' + k + r'\s*:\s*"([^"]*)"', d).group(1)
pria, wanita, tgl, url = sub("pria", "panggilan"), sub("wanita", "panggilan"), sub("akad", "tanggal"), top("siteUrl")
judul = f"The Wedding of {pria} & {wanita}"
desk = f"Dengan memohon rahmat Allah SWT, kami mengundang Anda ke pernikahan kami pada {tgl}."
og = url.rstrip("/") + "/foto/og.jpg"
meta = f'''<!--META--><title>{judul}</title><meta property="og:title" content="{judul}"><meta property="og:description" content="{desk}"><meta property="og:image" content="{og}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:type" content="website"><meta property="og:url" content="{url}"><meta name="description" content="{desk}"><!--/META-->'''
p = R / "index.html"; h = p.read_text(encoding="utf-8")
p.write_text(re.sub(r"<!--META-->.*?<!--/META-->", lambda m: meta, h, flags=re.S), encoding="utf-8")
try:
    from PIL import Image, ImageDraw, ImageOps
    c = R / "foto/cover.jpg"
    if c.exists(): im = ImageOps.fit(Image.open(c).convert("RGB"), (1200, 630))
    else: im = Image.new("RGB", (1200, 630), "#e9e2d0")
    ImageDraw.Draw(im).text((60, 560), f"{pria} & {wanita}  |  {tgl}", fill="#3b3a35")
    im.save(R / "foto/og.jpg", quality=82); print("og.jpg dibuat")
except ImportError: print("Pillow belum terpasang; og.jpg dilewati")
print("Meta diperbarui:", judul)
