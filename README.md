# Luis Borges Portfolio - Personal Website and Case Study

🔗 **Live site:** [ldtluis.github.io](https://ldtluis.github.io/)

🇧🇷 [Leia em português](README-pt.md)

## Description

This is the personal portfolio of Luis Borges, a full stack developer focused on Java and React. The website presents his **profile**, **skills**, **featured project** and **contact channels**, and is fully available in **Portuguese and English**.

The portfolio also includes a **case study** of the Spa Casa Bali, an online booking, payment and gift card platform live in production at [spacasabali.com](https://spacasabali.com). The case study covers the context, the architecture, the technical challenges and screenshots of the product in use.

## Technologies Used

* **Language:** TypeScript
* **Library:** React 19
* **Build Tool:** Vite
* **Animations:** Motion
* **Styling:** CSS Modules
* **Fonts:** Fontsource (Sora, Manrope and JetBrains Mono, self-hosted)
* **Hosting:** GitHub Pages (GitHub Actions)

## Adopted Practices

* **Typed Internationalization:** all texts live in a single dictionary, and the English version must have exactly the same keys as the Portuguese one, checked by TypeScript
* **Language Detection:** the site opens in the visitor's browser language and remembers their choice
* **Multi-Page Build:** each page is its own HTML entry, so it works on any static host without routing rules
* **Accessibility:** semantic HTML, skip link, keyboard navigation and descriptive labels for screen readers
* **Reduced Motion:** animations respect the operating system's "reduce motion" setting
* **Responsive Design:** layouts adapted to desktop and mobile screens
* **Reusable Components:** shared pieces such as the device preview, section headings and reveal animations
* **Optimized Assets:** screenshots in WebP and fonts served from the site itself

## Features

* **Language Switch:** Portuguese and English, available on every page
* **Resume Download:** resume in PDF, in Portuguese or English
* **Project Preview:** desktop and mobile screenshots of the featured project
* **Case Study Page:** a detailed write-up of the Spa Casa Bali project
* **Contact Section:** email, GitHub and LinkedIn

## How to Run

1.  **Prerequisites:**
    * Node.js 20 or higher.

2.  **Execution:**
    * Clone the repository.
    * Navigate to the project's root directory in a terminal.
    * Install the dependencies and start the development server:
        ```bash
        npm install
        npm run dev
        ```
    * The website will be available in your browser at `http://localhost:5173`.

3.  **Available Scripts:**
    * **`npm run dev`**: Starts the development server.
    * **`npm run tipos`**: Runs the TypeScript type check.
    * **`npm run build`**: Checks types and generates the production build in `dist/`.
    * **`npm run preview`**: Serves the production build locally.

## Pages

* **[`/`](https://ldtluis.github.io/)**: Home page with the introduction, about, skills, featured project and contact sections.
* **[`/estudo-de-caso/spa-casa-bali/`](https://ldtluis.github.io/estudo-de-caso/spa-casa-bali/)**: Spa Casa Bali case study.

## Where to Edit the Content

* **`src/i18n/translations.ts`**: All texts, in Portuguese and English.
* **`src/data/site.ts`**: Contact details, links, resumes and project data.
* **`public/`**: Project screenshots and resume PDFs.
