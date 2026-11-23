# Hacker Chronicles + Takeshi: The Lazy Dev

**Release candidate 1 — ready for local preview, not published automatically.**

Two deliberately different static websites in one package:

- **Hacker Chronicles** (`/`): a personal Linux, Go and tinkering site with an Alacritty-inspired palette, an About page, photo, linked system setup and Thanks page.
- **Takeshi: The Lazy Dev** (`/lazydev/`): an independent-looking cyberpunk comedy site, kept as designed in Stage 3. Its company, staff reports and sales are **fictional satire**; the coding experiments are real and AI-assisted.

Journal and Projects are honest **coming soon** placeholders. Unreviewed Afterfall beta source/binaries are **not distributed** with this site. The Lazy Dev section can describe the game, but the downloads remain gated pending tests, licensing and source review.

## Local preview

From the directory containing `index.html`:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/> (personal site) or <http://localhost:8000/lazydev/> (Takeshi). Stop the server with `Ctrl+C`.

Alternatively, use a free port if `8000` is occupied.

## GitHub Pages

Put the **contents of this directory** at the root of your `hacker-chronicles` Git repository; `index.html` must be at the repository root. Then enable **Settings → Pages → Deploy from a branch → main / (root)**.

- No build tool, framework, CDN, analytics or tracking cookies are used.
- The `.nojekyll` file is intentional.
- All site and image references are relative; this works on GitHub Pages project sites.
- Check public Git commit author identity, page copy, links and the personal photo before publishing.
- Expose only information you intend to make public; images have been saved without embedded camera metadata.
- A public GitHub repository makes the site code and Git history public. The site can also be viewed locally without publication.

Official Pages publishing source guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Next steps (no deadline)

- Read and approve the final personal pages and identity details.
- Preview desktop/mobile layouts on the actual machine.
- Publish this static website whenever ready.
- Independently review/compile/test Afterfall before any public software release.
- Write the first journal article only after there is something worth sharing.

*Made with curiosity, too much coffee and a little help from AI.*
