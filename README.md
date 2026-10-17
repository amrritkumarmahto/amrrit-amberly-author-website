# Amrrit Amberly — Author Website

The official website for **Amrrit Amberly**, author of
*The Bed Was Still Warm: A Psychological Thriller (A Reckoning of Names Book 1)*.

It's a plain **HTML + CSS + JavaScript** site. It needs no framework, database or build step, so any static web host can run it.

## What's in this folder

| File | What it does |
|------|--------------|
| `index.html` | All the page content: hero, featured book, series, about, contact, footer |
| `css/styles.css` | All the styling. The colours and fonts are at the top in `:root` |
| `js/main.js` | Mobile menu, scroll animations, active menu highlighting, contact form |
| `assets/favicon.svg` | The little icon in the browser tab |
| `package.json` | Lists the one helper tool (`serve`) used to preview the site |

## Preview the website on your computer

1. Install **Node.js** (the "LTS" version) from https://nodejs.org.
2. Open a terminal in this folder.
3. Run `npm install`. You only need to do this once. It downloads `serve`, a small preview server.
4. Run `npm start`.
5. Open **http://localhost:3000** in your browser.
6. To stop the server, press `Ctrl + C` in the terminal.

(Shortcut: you can also double-click `index.html` to open it straight in your browser. Everything except the fonts works without the internet.)

## How to test it

- **Phone and tablet sizes:** in Chrome, right-click → *Inspect*, then click the phone/tablet icon and choose devices such as iPhone or iPad.
- **On your real phone:** with `npm start` running, connect your phone to the same Wi-Fi and open the "Network" address that `serve` prints, e.g. `http://192.168.x.x:3000`.
- **Check these things:**
  - The menu links scroll to the right sections. On a phone, the ☰ button opens and closes the menu.
  - **Buy the Book** opens the book store in a new tab.
  - The contact form opens your email app with the message already filled in.
  - Sections fade in gently as you scroll.

## Things to personalise (marked `PLACEHOLDER` in `index.html`)

1. **Purchase link.** Right now **Buy the Book** opens an Amazon *search* for the title. Replace the `href` with your exact book page link.
2. **Book description.** The short blurb is generic placeholder text. Replace it with your official description.
3. **Author bio.** Replace it with your own words.
4. **Tagline.** "Every name carries a debt. Every debt comes due." is suggested copy. Change it or remove it.

### Adding your real book cover
Put your cover image at `assets/cover.jpg`. In `index.html`, replace the whole `<div class="book__cover" ...> ... </div>` block with:
```html
<img class="book__cover-img" src="assets/cover.jpg" alt="Cover of The Bed Was Still Warm by Amrrit Amberly">
```

### Adding an author photo
Put the photo at `assets/author.jpg`. In `index.html`, replace `<span class="about__monogram">AA</span>` with:
```html
<img src="assets/author.jpg" alt="Amrrit Amberly">
```
Also remove `aria-hidden="true"` from the `about__portrait` div.

## Publishing (later, when you're ready)

The site has **not** been published anywhere. When you want it online, you can upload this folder to a free static host such as Netlify, Vercel, Cloudflare Pages or GitHub Pages, and optionally connect your own domain name.
