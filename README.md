# Physio Timer — PWA

## First-time setup (5 minutes)

### 1. Host on Netlify
1. Go to **netlify.com** and create a free account
2. From the dashboard, click **"Add new site" → "Deploy manually"**
3. Drag the entire `physio-timer-pwa` folder onto the upload area
4. Netlify gives you a URL like `https://random-name-123.netlify.app`
5. Optionally rename it under Site Settings → Site name

### 2. Install on your phone
**Android (Chrome):**
- Open the URL in Chrome
- Tap the 3-dot menu → "Add to Home screen"
- Tap "Add" — it appears on your home screen like a real app

**iPhone (Safari):**
- Open the URL in Safari (must be Safari, not Chrome)
- Tap the Share button (box with arrow)
- Scroll down and tap "Add to Home Screen"
- Tap "Add"

---

## Making updates (30 seconds)

When you get an updated version of the app from Claude:

### 1. Bump the version in `sw.js`
Open `sw.js` and change the version number on line 1:
```js
// Before
const VERSION = 'v1.0';

// After (use any number — just make it different)
const VERSION = 'v1.1';
```

### 2. Re-deploy to Netlify
- Go to your Netlify dashboard
- Click your site → **"Deploys" tab**
- Drag your updated `physio-timer-pwa` folder onto the deploy dropzone

### 3. App updates automatically
- Next time you open the app on your phone, a green **"Update available — Refresh"** banner appears at the bottom
- Tap **Refresh** — done

---

## File structure
```
physio-timer-pwa/
  index.html      ← the app
  manifest.json   ← PWA metadata (name, icon, colours)
  sw.js           ← service worker (caching + update logic)
  icon-192.png    ← home screen icon
  icon-512.png    ← splash screen icon
  README.md       ← this file
```

---

## Customising the icon
The default icons are simple placeholders. To use your own:
- Create a square PNG image, at least 512×512px
- Save two copies: `icon-192.png` (192×192) and `icon-512.png` (512×512)
- Replace the files in the folder and re-deploy
