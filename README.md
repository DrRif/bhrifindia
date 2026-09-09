# Bridge Health Research Foundation — Website

This repo hosts the public website for bhrfindia.org via GitHub Pages.

## Files
- `index.html` — the live page (currently a "coming soon" placeholder)
- `CNAME` — tells GitHub Pages to serve this repo at bhrfindia.org (do not delete)
- `.nojekyll` — tells GitHub Pages to skip Jekyll processing (needed for plain HTML sites)

## To update the site later
Replace `index.html` with the full site file when ready, then commit and push (or
re-upload via GitHub's web interface). No other setup is needed — GitHub Pages
rebuilds automatically within a minute or two of any change.

## DNS setup (one-time, done in Hostinger)
Point bhrfindia.org's A records to GitHub Pages' IPs:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

And optionally a CNAME record for `www` pointing to `<your-github-username>.github.io`.
