# Takeshi: The Lazy Dev — Stage 2 website

A self-contained static microsite intended to live at `/lazydev/` beneath Hacker Chronicles. Separate HTML, CSS and JavaScript. Fictional satire; actual Afterfall Go source attached as a downloadable archive. No fonts, scripts or images fetched from third parties.

## Start locally

From the **parent HackerChronicles directory**, run:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/lazydev/`. `index.html` also works when opened directly as a file, but using a server better reflects GitHub Pages.

## Pages

- `index.html` — front page / cover / latest news / CEO quotes
- `news.html` + four articles — fictional newsroom
- `saga.html` — chronological Afterfall beta development saga
- `software.html` — real Afterfall Beta 3 download + build commands
- `comics.html`, `comic-001.html` — first HTML comic strip
- `studio.html` — characters, identity, satire + AI disclosure

## Folder separation

The parent site uses its own Alacritty CSS. This folder uses its own cyberpunk colours. No shared stylesheet. Paths are relative for GitHub Pages project-site hosting.

## Publishing notes

- The game download is the beta source as supplied in the current project; it is NOT a production-certified release.
- All fictional claims about sales, news interviews and profits are parody. The actual software and developer history are kept distinguishable.
- Use a real GitHub release URL after the project is published, rather than duplicating ZIP files inside a website indefinitely.
- Use only public-facing character art. The old Hacker Chronicles `setup.html` with personal details is not used.
