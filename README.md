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

## Content

The book description and author biography are the author's official text, copied word for word. Please don't edit them except to update them.

- **Purchase link:** every "Buy" button goes to https://a.co/d/0goHBiIt and opens in a new tab.
- **Instagram:** [@amrritamberly](https://instagram.com/amrritamberly). It appears in the About section, the Contact section and the footer.
- **Email:** amrritamberly@gmail.com
- **Pull-quote:** the large quote between the Book and Series sections is a design element. It's a line taken from the book description and is labelled that way.

### Book cover
The official cover is at `images/the-bed-was-still-warm-cover.jpg` (full size, 1600 × 2560). There are also two smaller web copies, so phones don't have to download the full 1.9 MB file:

- `images/the-bed-was-still-warm-cover-800.jpg`
- `images/the-bed-was-still-warm-cover-1200.jpg`

Each browser automatically picks the smallest copy that still looks sharp on that screen.

To replace the cover later, save the new image over all three files, keeping the same names. Make the web copies 800 and 1200 pixels wide. If the new image has different proportions, also update the `width` and `height` numbers on the `<img>` tag in `index.html`.

### Author portrait
The author photo is at `images/amrrit-amberly-author.png` (the original file, 1122 × 1122). To replace it, save the new photo over that file, keeping the same name. If the new photo isn't square, update the `width` and `height` numbers on its `<img>` tag in `index.html` to match.

## Publishing (later, when you're ready)

The site has **not** been published anywhere. When you want it online, you can upload this folder to a free static host such as Netlify, Vercel, Cloudflare Pages or GitHub Pages, and optionally connect your own domain name.
