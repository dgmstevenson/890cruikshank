# 890 Cruikshank Ridge — For Sale By Owner

A single-page static website for the private sale of the chalet at
**890 Cruikshank Ridge, Mount Washington, BC**. Built as plain HTML/CSS/JS so it
can be hosted for free on **GitHub Pages** at the custom domain **890cruikshank.ca**.

---

## 📁 What's in here

```
├── index.html          Main landing page
├── 404.html            Any unknown URL bounces back to the home page
├── qr/index.html       /qr landing page — redirects to the main page (QR-code target)
├── css/styles.css      All styling
├── js/main.js          Nav, scroll reveals, photo lightbox
├── images/             Placeholder SVGs (replace with your dad's photos)
├── CNAME               Custom domain for GitHub Pages (890cruikshank.ca)
└── .nojekyll           Tells GitHub Pages to serve files as-is
```

---

## ✏️ Things to fill in before going live

Search the project for these and update them:

| Where | Status |
|-------|--------|
| Owner: **Brock**, **(250) 465-0568** | ✅ set (call/text — no email listed) |
| Price **$899,000**, **≈2,200 sq ft**, 3+bed/2bath | ✅ set (verify sq ft if you have an exact figure) |
| Land tenure: **Freehold** | ✅ set |
| `images/` — real photos | ⏳ replace the placeholder SVGs with Brock's photos |

> **Want an email contact too?** There's no email on the page yet. If you set up
> `hello@890cruikshank.ca` forwarding (Porkbun offers free email forwarding), add a
> line back to the contact card.

### Swapping in real photos
Drop your dad's photos into `images/` and update the `src="..."` paths in
`index.html`. You can keep the same filenames (rename his photos to
`hero.jpg`, `gallery-01.jpg`, etc. and change the extensions in the HTML), or
use new names. Aim for landscape shots ~2000px wide, saved as JPG.

---

## 🚀 Deploy to GitHub Pages

1. **Create a repo** on GitHub (e.g. `890cruikshank`).
2. **Push these files** to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/890cruikshank.git
   git push -u origin main
   ```
3. **Turn on Pages:** repo → **Settings → Pages** → *Build and deployment* →
   Source: **Deploy from a branch** → Branch: **main / (root)** → Save.
4. In a minute the site is live at `https://<your-username>.github.io/890cruikshank/`.

### Point the domain (890cruikshank.ca)
At your domain registrar's DNS settings, add:

- Four **A records** for `@` → `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- One **CNAME record** for `www` → `<your-username>.github.io`

Then in **Settings → Pages → Custom domain**, enter `890cruikshank.ca` and
tick **Enforce HTTPS** (the included `CNAME` file already sets this). DNS can
take up to a few hours to take effect.

### The QR code
Point the QR code at **`https://890cruikshank.ca/qr`**. That page instantly
forwards to the main listing. Keeping a separate `/qr` URL means you can later
change where it goes (or add visit tracking) without reprinting the code.

---

## 🧾 Notes on the content

Copy and property facts were drafted from publicly available information about
the home and Mount Washington Alpine Resort. **Please verify every figure**
(price, square footage, bedrooms, taxes, land tenure) before publishing — all
numbers are marked as approximate on the page. This is a private for-sale-by-owner
listing and is not an offering by a licensed brokerage.
