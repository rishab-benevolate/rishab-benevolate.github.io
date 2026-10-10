# Editing
Everything is in `content.mjs`: tagline, socials, the homepage sentence, interests, notes, timeline.
Edit it, then run `node build.mjs` (Node 18+, no dependencies). Upload the folder to any static host.
To add an essay: add an object to `notes` (slug, title, date YYYY-MM-DD, body paragraphs; `[text](url)` for links).
`portrait.jpg` is the photo in the header. Styling is `style.css`. No JavaScript, no fonts to load.
