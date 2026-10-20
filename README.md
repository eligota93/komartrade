# Komar Trading — Website

Complete static website export, including all six languages, material imagery,
company contact form, mobile layout adjustments and the in-site catalogue reader.
The homepage uses the latest real elevator photograph.
The product details and technical specifications placeholders for aluminium,
copper, zinc and scrap show the Coming soon crane icons.
All five catalogue downloads preserve the original source bytes. The viewer uses
continuous page scrolling and high-resolution rendering of nearby pages.
Keep every file in catalogues/, including .part files and sanitary-source.json.
The large sanitary original is stored in lossless segments and reassembled
into the original PDF by the Download PDF button. No compression is applied.
No install or build command is required.

## Upload to GitHub Pages

1. Extract this ZIP on your computer. Upload the extracted files and folders to a GitHub repository; uploading the ZIP alone will not publish the website.
2. Put `index.html`, `style.css`, `app.js`, `i18n.js`, `viewport.js`, `catalogue-reader.js`, `assets/`, `catalogues/` and `vendor/` directly at the repository root. Include `.nojekyll`.
3. In repository **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, then save.
4. Open the Pages URL when deployment completes. Catalogue viewing requires hosting; double-clicking the local HTML file may not support the PDF reader.

## Connect your Porkbun domain

1. Add your own domain under GitHub **Settings → Pages → Custom domain**, then save. GitHub creates the `CNAME` file for branch publishing. The CNAME file is prefilled with komar-trade.com.
2. In Porkbun, open your domain's DNS controls. You can use **Quick DNS Config → Github**, then set `www` to your GitHub username's Pages hostname.
3. For manual configuration, use these records:

| Type | Host | Answer |
|---|---|---|
| A | blank / root | 185.199.108.153 |
| A | blank / root | 185.199.109.153 |
| A | blank / root | 185.199.110.153 |
| A | blank / root | 185.199.111.153 |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username, without a repository path.
Keep existing email records (MX, SPF, DKIM and DMARC). Update conflicting website
records only. Enable **Enforce HTTPS** in GitHub Pages when available.

Official references:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://kb.porkbun.com/article/64-how-to-connect-your-domain-to-github-pages

## Company contact

Email: Info@komar-trading.com
Phone: +383 49 920 925

The enquiry form opens the visitor's mail app with a prepared message to the
company. The visitor must press Send in that app. Direct server-side email
submission is not connected.

## Files and editing

- `app.js`: page content, navigation and interactions.
- `i18n.js`: Serbian, Turkish, German and Italian translations; English and Albanian are in `app.js`.
- `style.css`: layouts and animation.
- `viewport.js`: mobile embedded-viewer viewport support.
- `catalogues/`: Sanitary, updated Statuario (35 pages), Super White Endless (4 pages), Laminate (29 pages) and elevator PDFs.
- `vendor/`: self-hosted PDF.js and its license.
- `docs/asset-sources.json`: image provenance.

Serbian uses Latin script. The PDF catalogue files retain their original
languages. Entries marked Coming soon still await product data.

## Validation

JavaScript syntax, catalogue files and all local asset references were checked.
The mobile viewport guard was tested for phone, desktop and orientation cases.
A full visual browser review on iPhone and desktop remains outstanding.
