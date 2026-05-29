# Kuldeep Chaturvedi — Personal Brand Website

A **person-first** personal branding website for Kuldeep Chaturvedi, entrepreneur and founder of multiple Dubai ventures including JSK & JYMMA.

---

## Philosophy

This is **not a business website**. It's a personal brand site — Kuldeep first, his ventures second. The design is warm editorial luxury: portrait-driven, story-led, human.

---

## Project Structure

```
/
├── index.html       ← All sections, semantic HTML
├── styles.css       ← Full design system (Cream + Green + Gold)
├── script.js        ← Cursor, reveal animations, nav, form
├── assets/          ← Drop all photos here
└── README.md
```

---

## Adding Photos

Search for `[IMAGE HERE` in `index.html` — there are **5 image slots**:

| Slot | File to create | Notes |
|------|---------------|-------|
| Hero portrait | `assets/kuldeep-hero.jpg` | Full/3/4 body, formal, portrait orientation |
| About candid | `assets/kuldeep-about.jpg` | Warm, candid, in-office |
| Philosophy shot | `assets/kuldeep-philosophy.jpg` | Speaking, meeting, or thoughtful |
| Venture images (×4) | `assets/venture-*.jpg` | Wide/landscape, one per venture card |

**To swap a placeholder**, find the comment and replace the `<div class="...-placeholder">` with an `<img>` tag:

```html
<!-- Before -->
<div class="hero-photo-placeholder"> … </div>

<!-- After -->
<img src="assets/kuldeep-hero.jpg" alt="Kuldeep Chaturvedi" class="hero-photo" />
```

CSS classes for real images are already defined: `.hero-photo`, `.about-photo`, `.phil-photo`, `.venture-img`.

---

## Running Locally

```bash
# No build step — just open in browser
open index.html

# Or with a local server (recommended)
npx serve .
# → http://localhost:3000

python3 -m http.server 8080
# → http://localhost:8080
```

---

## Deploy to GitHub Pages

### 1. Create a repo on GitHub
Go to github.com → New repository → name it (e.g. `kuldeep-chaturvedi`) → Public → Create

### 2. Push your files
```bash
git init
git add .
git commit -m "Launch personal brand site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kuldeep-chaturvedi.git
git push -u origin main
```

### 3. Enable Pages
GitHub repo → **Settings** → **Pages** → Source: `main` branch, `/ (root)` → **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/kuldeep-chaturvedi/`

### 4. Custom domain (e.g. kuldeepchaturvedi.com)
1. Settings → Pages → Custom domain → enter your domain
2. Create a `CNAME` file in repo root containing just: `kuldeepchaturvedi.com`
3. In your DNS, add a CNAME record pointing to `YOUR_USERNAME.github.io`

---

## Make the Contact Form Work

The form currently simulates submission. To go live:

**Formspree (easiest — free for 50 submissions/month):**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form → copy your form ID
3. In `index.html`, update the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST" class="connect-form" id="connect-form">
   ```
4. Remove the JS submit handler block from `script.js`

---

## Fonts Used
- **Playfair Display** — display headings (elegant serif)
- **Outfit** — body text (clean, modern)
- **EB Garamond** — pull quotes (warm italic)

All loaded from Google Fonts — no installation needed.

---

*Built for Kuldeep Chaturvedi · Dubai, UAE*
