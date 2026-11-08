# Dr. Md. Yousuf Ali — Personal Academic Website

Static personal website (HTML/CSS/JS, no build step) for Dr. Md. Yousuf Ali,
Senior Scientific Officer & Project Director, Bangladesh Livestock Research Institute (BLRI).

## Structure
```
index.html            Main page (all sections)
assets/css/style.css  Styles
assets/js/main.js     Publication list data + interactions
assets/img/profile.jpg Portrait
```

## Publish on GitHub Pages
1. Create a GitHub repository (e.g. `yousufali-blri` or `<username>.github.io`).
2. Push this folder:
   ```bash
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. Repository → Settings → Pages → Source: `Deploy from a branch`, Branch: `main` / `(root)`.

## Move to the official domain later
Add a file named `CNAME` containing the domain (e.g. `yousufali.blri.gov.bd`) and point
the domain's DNS CNAME record to `<username>.github.io`. Or copy the files to any web server.

## To complete (highlighted in gold/italic on the page)
- Project title, funder, duration, objectives, outputs, partners (Project section)
- M.S. / B.Sc. degrees and universities (Career section)
- Author lists for publications (ORCID summary does not include them)
- Office address/room confirmation, a formal studio portrait if available

## Updating publications
Edit the `PUBLICATIONS` array at the top of `assets/js/main.js`:
`[year, "Title", "Journal", "DOI or null", "poultry|dairy|fodder|ruminant|other"]`
