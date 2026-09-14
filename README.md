# Bridge Health Research Foundation — website

Static site. No build step, no dependencies. Four pages, one stylesheet, one small script.

```
index.html          Home — hero span, what we do, programme rail, five-year goals
about.html          Vision, mission, the name, Clause III(A) objects, compliance table
programmes.html     Six programmes in detail + the testing/certification arm
work-with-us.html   Students, institutions, funders, manufacturers + contact form
assets/css/site.css
assets/js/site.js   Mobile nav, current-page marking, mobile crop for the bridge
assets/img/         logo-mark.svg, favicon.svg
CNAME               bhrfindia.org
.nojekyll           Stops GitHub Pages running Jekyll over the files
robots.txt, sitemap.xml
```

## Deploying to GitHub Pages

1. Create a public repo (e.g. `bhrf-site`) and push these files to the root of `main`.
2. Repo → **Settings → Pages** → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. In **Custom domain**, enter `bhrfindia.org` and save. The `CNAME` file already carries this.
4. In Hostinger's DNS panel for `bhrfindia.org`, delete any existing A records for `@` and add these four:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | `<your-github-username>.github.io` |

5. Wait for DNS to propagate (usually under an hour), then tick **Enforce HTTPS** in Settings → Pages.

## Before it goes live

These are deliberately unfilled — none of them are invented:

- **Email addresses.** `contact@`, `research@`, `info@bhrfindia.org` are used throughout. Set them up as forwarders in Hostinger, or replace them with a working address.
- **Contact form.** GitHub Pages cannot process form submissions. In `work-with-us.html`, replace `YOUR_FORM_ID` in the form's `action` with a Formspree (or Web3Forms) endpoint, or delete the `<form>` and keep the email links.
- **Registered office** — full address on `about.html`.
- **CIN** — on allotment, `about.html` compliance table.
- **12A / 80G / CSR status** — same table, update as each is granted.
- **Board and founding members** — the People block at the foot of `about.html` is a placeholder paragraph.
- **Founding year in the footer** — currently 2026 on all four pages.

## Design notes

- Palette and metaphor follow the existing brand: slate `#1B232D`/`#48586C` structure, cream `#FBF8F2`/`#EFE9DC` paper, amber `#F0BB4D`/`#C2871C` cable. **Amber is only used for connective elements** — the cable, rail, node markers, rules. Keeping that rule is what stops the site looking like a generic warm-cream nonprofit template.
- Type: Spectral (serif) for headlines and the wordmark, Archivo for body and UI, both from Google Fonts.
- One motion moment only: the cable draws itself on load, then the pods and anchors settle. Respects `prefers-reduced-motion`.
- The bridge on the home page carries three connector pods — One Health globe, AI assistant, DNA — chosen from the six-icon set. Swap them in the inline `<svg>` in `index.html` if you'd rather show data, outcomes or devices.
- Responsive to 360px, keyboard-focusable throughout, skip link, no colour-only meaning.
