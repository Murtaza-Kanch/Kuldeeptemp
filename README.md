# JSK & JYMMA — Kuldeep Chaturvedi Personal Branding Website

Premium, modern single-page marketing website for **Kuldeep Chaturvedi**, Founder & CEO of **JSK & JYMMA** — Dubai's unified business setup, accounting, tax, audit, Golden Visa, and finance firm.

---

## Project Structure

```
/
├── index.html      ← Main HTML (all sections)
├── styles.css      ← Full design system + responsive layout
├── script.js       ← Scroll animations, nav, form handler
├── assets/         ← Place all images here (see below)
└── README.md
```

---

## Adding Real Images

Search the HTML for `<!-- [IMAGE HERE` comments — there are 15 image slots:

| Slot | Recommended file | Where |
|------|-----------------|-------|
| Hero portrait / background | `assets/hero-portrait.jpg` | Hero section, right column |
| About portrait | `assets/about-portrait.jpg` | About section, left column |
| Beyond Work photo | `assets/beyond-work.jpg` | Beyond Work, right column |
| Contact office | `assets/contact-office.jpg` | Contact section, left column |
| Article 1 thumbnail | `assets/article-tax.jpg` | Articles grid, card 1 |
| Article 2 thumbnail | `assets/article-setup.jpg` | Articles grid, card 2 |
| Article 3 thumbnail | `assets/article-visa.jpg` | Articles grid, card 3 |
| Service images (×6) | `assets/service-*.jpg` | Service cards (optional) |

**To replace a placeholder**, find the `[IMAGE HERE]` comment and swap the `<div class="...-placeholder">` block with a plain `<img>` tag. CSS classes are already prepared (e.g. `.about-photo`, `.beyond-photo`, `.article-img`).

Example:
```html
<!-- Before -->
<div class="about-image-placeholder"> … </div>

<!-- After -->
<img src="assets/about-portrait.jpg" alt="Kuldeep Chaturvedi" class="about-photo" />
```

---

## Running Locally

No build step required — this is plain HTML/CSS/JS.

```bash
# Option A: Open directly
open index.html

# Option B: Simple local server (recommended to avoid CORS)
npx serve .
# or
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## Deploying to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it (e.g. `jsk-jymma-website` or `kuldeep-chaturvedi`)
3. Set to **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2 — Push the Files

```bash
cd /path/to/your/project
git init
git add .
git commit -m "Initial website launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Open your repository on GitHub
2. Go to **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait ~2 minutes, then your site will be live at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Step 4 — Custom Domain (optional)

1. In **Settings → Pages**, enter your domain (e.g. `www.jymma.com`)
2. Add a `CNAME` file to your repo root containing just your domain
3. Update your DNS: add a CNAME record pointing to `YOUR_USERNAME.github.io`

---

## Contact Form Setup

The form currently simulates submission. To make it functional:

**Option A — Formspree (easiest, free tier)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, copy your form ID
3. In `index.html`, update the `<form>` tag:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form" id="contact-form">
   ```
4. Remove the JS form handler from `script.js` (the `form.addEventListener('submit', ...)` block)

**Option B — Netlify Forms** (if hosting on Netlify instead)
1. Add `netlify` attribute to `<form>` tag
2. Deploy to Netlify

---

## Color System

| Token | Value | Use |
|-------|-------|-----|
| `--green-primary` | `#0A8A4A` | Buttons, accents |
| `--green-deep` | `#064F2A` | Backgrounds |
| `--gold` | `#D4AF37` | Labels, borders, highlights |
| `--gold-pale` | `#F5E6B3` | Pills, subtle text |
| `--black` | `#0B0B0C` | Main background |

---

## Browser Support

Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+). IE is not supported.

---

*Built for JSK & JYMMA · Dubai, UAE*
