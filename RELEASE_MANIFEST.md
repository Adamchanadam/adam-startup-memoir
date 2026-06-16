# Public Download Site Manifest

Generated: 2026-06-16

This folder is the local source package used to publish Adam Chan's memoir public download site to GitHub Pages.

Published repository: `https://github.com/Adamchanadam/adam-startup-memoir`

Live public URL: `https://adamchanadam.github.io/adam-startup-memoir/`

Initial package commit: `7290ef73dbe0fc482cea4b241ffdbed8c068fd74`

## Source Inputs

| Item | Source path | Staged path |
|---|---|---|
| HTML site | `C:\Users\adam\_claude_desktop\Work_Adam_Startup_Memoir\outputs\book-site\` | `outputs/public_download_site/` |
| EPUB | `C:\Users\adam\_claude_desktop\Work_Adam_Startup_Memoir\outputs\ebook\adam_chan_startup_memoir.epub` | `outputs/public_download_site/downloads/adam_chan_startup_memoir.epub` |
| PDF | `C:\Users\adam\_claude_desktop\Work_Adam_Startup_Memoir\outputs\pdf\adam_chan_startup_memoir.pdf` | `outputs/public_download_site/downloads/adam_chan_startup_memoir.pdf` |

## Staged Files

| File | Size bytes | SHA256 |
|---|---:|---|
| `.nojekyll` | 1 | `01BA4719C80B6FE911B091A7C05124B64EEECE964E09C058EF8F9805DACA546B` |
| `LICENSE` | 1551 | `67A0937737379FE02CA3FDD94A1A5408AE180F8708590F6AC69A8D356D3A0F58` |
| `LICENSE.md` | 1551 | `67A0937737379FE02CA3FDD94A1A5408AE180F8708590F6AC69A8D356D3A0F58` |
| `README.md` | 5419 | `0213CFA032A7A3836F21ABC95F9DF91247DBD04F1A7A29E4B21F1342E473C8A1` |
| `index.html` | 27707 | `0A4873B13C52377E204803F2F9C6A02F1776F5458B76C4CF05ADA370511B0601` |
| `llms.txt` | 3452 | `D3649E1670B9265EA28A072C7C7EA8B88AFC7E748F881FCBDC230CD79DCF5BB8` |
| `robots.txt` | 96 | `DD15F521107CBDA045530D5BAACB1EAE455320CE17ACF7D54061C087EBC66785` |
| `script.js` | 2235 | `0223EEC0EBCCE92DE8D746E4CA0291F68F8BBD0E9ED69FB9AA87CDC38C21D183` |
| `sitemap.xml` | 294 | `8B96EEC767608D97D2077A66A2E1F9AB67DDF5F0F38C659555CA73EE6098480A` |
| `styles.css` | 11401 | `B1E053ABEF7AE755D97A9427BEDE6107F5F6B4421FE4D122FA29B2507D142890` |
| `assets/book-cover.png` | 3646128 | `3B3D6B262A28FB722731451C0695ADBBF749EDA93CC6B16D3F46877EC0AA5CC8` |
| `assets/ecosystem-table.png` | 2525721 | `E2FE72655451727CC7B1F7CF0FB146D3FCF0B3DA1E53E5D2AD116F6DEE5B2D11` |
| `assets/hero-edutech-desk.png` | 2078956 | `98E166B5E38809119EDDE6917DABE7351F9AE65F862515D298093BE18032CFB0` |
| `assets/paper-plane-hands.png` | 2030932 | `9B06B2FD5682410728F33BC137EEA4F2265623285C3B5D18352AF5D297E362D1` |
| `assets/paper-planes-hall.png` | 1908518 | `326A202AA55736FFF35EFD0D2BDB03B4A38C7D7F31ACF922FB13500C5E7DEA84` |
| `assets/preview-body-warning.jpg` | 373050 | `1EDC456F91DB6B6C8CA0C232FD675E97008C7D85693584D4C1CA5F7A52D80974` |
| `assets/preview-ecosystem.jpg` | 374656 | `4A780C26E60D1B166821D6B7A4C37FC9F942B7BDCB7255CA5CF0503049AF4C64` |
| `assets/preview-prologue.jpg` | 362067 | `A94EA2E27F6FBCB94EFF1D3DF36FCD1AA17C4AF79D23BD98A08954675F4BDED7` |
| `assets/social-preview.png` | 454020 | `C06AFA07CB3855F6DCC6E733E167AC8DE162F0F67E7468FC42C0D348F771E6B1` |
| `assets/thread-ecosystem.png` | 2865679 | `43B294BD4BA71C8E98AB2A07513A5498AD5DAEA72495265FD1E4F6EEAFCCD60B` |
| `downloads/adam_chan_startup_memoir.epub` | 6908689 | `4F8FA09D4C75F110B3DD9C5D4E3B29EACC0F297B99E0128C460E247C0D0169DA` |
| `downloads/adam_chan_startup_memoir.pdf` | 11362750 | `ACDF7E3BA3C07A72C868CF62E8AD090D11BEA17916C247CB4FA1FAF97874D322` |
| `RELEASE_MANIFEST.md` | self-referential | self-referential; validate by reading this file and hashing all other rows |

`RELEASE_MANIFEST.md` does not carry a fixed SHA256 for itself because writing its own hash changes the file hash again. All other staged files are listed with stable size and SHA256.

## Checks Completed

- EPUBCheck against source EPUB: 0 fatals / 0 errors / 0 warnings / 0 infos.
- PDF structure check: 70 pages, 19 outlines, title text found, acknowledgement text found, `craft note` not found.
- Existing PDF visual QC images reviewed for chapter opener, body page, tan note page, and tan logo page.
- Existing HTML desktop and mobile screenshots reviewed.
- Staged `index.html` contains real download links for EPUB and PDF under `downloads/`.
- Added discoverability files: `README.md`, `robots.txt`, `sitemap.xml`, `llms.txt`.
- Added license and static-site readiness files: `LICENSE` and `LICENSE.md` with `CC BY-NC-ND 4.0` reader-facing terms, plus `.nojekyll` for GitHub Pages.
- Added social preview image: `assets/social-preview.png` at 1280×640.
- Added early book preview images to HTML and README: `assets/book-cover.png`, `assets/preview-prologue.jpg`, `assets/preview-ecosystem.jpg`, and `assets/preview-body-warning.jpg`.
- Added source-backed Adam Chan background to HTML, README, JSON-LD, FAQ, and `llms.txt`, using the active bio SSOT at `C:\Users\adam\_claude_desktop\Work_Baby_Colin_Robin_AHK\knowledge-base\adam-shadow\bio\bio_v1.3.md`.
- Strengthened the public `Adam Chan 是誰` section with concrete public milestones: 1998 internet and web design start, 2001 `Flash 動之物世界`, 2003-2015 Hong Kong / Macau school platform work, myID general manager role, 2015 GRWTH founding, 2019 GRWTH Pay award, 2020 GRWTH VOD award, and post-2023 UK capability transition.
- Corrected the public author-background GRWTH start wording to `2015 年，他開始建立 GRWTH`.
- Added HTML metadata: canonical, robots, author, keywords, Open Graph, Twitter Card, and JSON-LD for WebPage / Book / FAQPage.
- Added CC BY-NC-ND 4.0 usage boundary to HTML footer, README, `llms.txt`, and `LICENSE.md`.
- Machine checks after metadata update: local reference missing count 0; JSON-LD parse count 1; Open Graph tags 10; Twitter Card tags 5; canonical URL present; social preview image is 1280×640.
- Uploaded package to `Adamchanadam/adam-startup-memoir` `main`.
- Enabled GitHub Pages from `main` branch root `/`.
- GitHub Pages build status: built.
- Public URL HTTP checks passed for HTML, EPUB, PDF, `LICENSE.md`, and `assets/social-preview.png`.
- Public HTML content check passed: title, CC BY-NC-ND 4.0 license notice, EPUB link, PDF link, and strengthened author section present.
- Fixed the sample-section buttons that previously pointed to `#`: `序章` now links to `#chapter-prologue`, `第一章` now links to `#chapter-1`, and matching chapter sections open automatically from hash links.
- Added README public entry links for the live HTML page, GitHub repository, EPUB download, and PDF download.
- Added HTML GitHub repository links in the eBook / HTML card and footer.

## Published Status

- GitHub repository: `https://github.com/Adamchanadam/adam-startup-memoir`
- GitHub Pages URL: `https://adamchanadam.github.io/adam-startup-memoir/`
- GitHub Pages source: `main` branch, root `/`
- GitHub Pages HTTPS: enforced
- Repository license file: replaced from `CC0-1.0` to `CC BY-NC-ND 4.0` terms in `LICENSE` and `LICENSE.md`
- GitHub API `licenseInfo`: `Other`, because GitHub's public license API does not list `CC-BY-NC-ND-4.0`; the repository license file itself contains the SPDX identifier `CC-BY-NC-ND-4.0` and official Creative Commons links.

## Release Boundary

Published on 2026-06-16 after Adam explicitly approved external operations. Future changes to the repository, GitHub Pages settings, release assets, or public URLs still require explicit approval before execution.
