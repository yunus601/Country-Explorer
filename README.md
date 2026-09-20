<div align="center">

# 🌍 Countries Explorer

**An interactive global data portal for discovering sovereign nations, exploring continental divisions, and comparing cross-national demographics.**

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8.svg)](https://tailwindcss.com)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-red.svg)](https://tanstack.com/query)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green.svg)](https://leafletjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

</div>

---

## 📌 Overview

**Countries Explorer** is a modern, responsive web application built with React 19, Tailwind CSS v4, and TanStack Query. It provides comprehensive geographical and demographic data for sovereign nations across all continents, allowing users to search, filter by region, benchmark two countries side by side, and view territorial coordinates on an interactive map.

---

## 🚀 Key Features

* **🌍 Global Country Catalog**: Browse sovereign territories with details on population, regional divisions, capital cities, currencies, languages, timezones, and land areas.
* **🔍 Real-Time Search & Regional Filtering**: Search by country name, capital, or subregion, with instant debounced queries and region filtering (Africa, Americas, Asia, Europe, Oceania).
* **⚖️ Cross-National Comparison**: Compare any two countries side by side with real-time visual progress bars benchmarked against the higher population.
* **🗺️ Continental Regions Explorer**: Explore the globe through its major continental divisions, complete with aggregated population counts and landmass statistics.
* **📍 Interactive Cartography**: Pinpoint and view territorial boundaries using Leaflet and OpenStreetMap basemaps.
* **📱 Responsive Layout**: Fully responsive layout engineered for phones, tablets, and desktop displays.
* **🛡️ Resilient Data Layer**: Built-in support for live REST Countries v5 API queries with an automatic, zero-latency curated fallback catalog when operating offline or without an API key.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 19](https://react.dev)
* **Build Tool**: [Vite 8](https://vitejs.dev)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
* **Data Fetching & Caching**: [TanStack Query v5](https://tanstack.com/query)
* **Routing**: [React Router v7](https://reactrouter.com)
* **Interactive Maps**: [Leaflet](https://leafletjs.com) & [React-Leaflet](https://react-leaflet.js.org)
* **Icons**: [React Icons](https://react-icons.github.io/react-icons)

---

## 🎨 Design Philosophy & Typography

Crafted with an **Editorial Atlas & Swiss Modernist Cartography** aesthetic, **Countries Explorer** avoids generic boilerplate patterns (such as purple gradients, saturated neon cards, and overused default fonts) in favor of a timeless, scholarly atlas design:

* **Archival Parchment Foundation** (`#faf8f5`): A warm, tactile linen canvas inspired by classic physical atlases and institutional almanacs.
* **Prussian Ink Typography** (`#0a192f` / `#526175`): High-contrast, publication-grade reading experience with zero eye strain.
* **Deep Lapis & Terracotta Accents** (`#1e3a8a` & `#c2410c`): Purposeful comparative markers and navigation accents rooted in historic map engraving.
* **Distinguished Three-Tier Typography**:
  - **Editorial Display Serif**: [Fraunces](https://fonts.google.com/specimen/Fraunces) — Imbues sovereign country titles and page mastheads with character and institutional authority.
  - **Functional Sans**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — Highly legible geometric sans-serif for UI controls, navigation, and body copy.
  - **Cartographic Monospace**: [Space Mono](https://fonts.google.com/specimen/Space+Mono) — Renders ISO-3166 codes, population numbers, and geographical coordinates with ledger precision.
* **Cartographic Linework**: Subtle grid rules and hairline borders (`#e5e0d8`) evoking architectural drafting paper.


---

## 📁 Project Structure

```text
Country-Explorer/
├── public/
│   ├── images/               # Regional landscape images (Africa, Americas, Asia, Europe, Oceania)
│   ├── favicon.svg           # Application favicon
│   └── icons.svg             # SVG icon assets
├── Hooks/
│   ├── useCountries.js       # TanStack Query hook for fetching country datasets
│   └── useFilter.js          # Debounced search and filtering logic
├── Services/
│   ├── RESTAPI.js            # API fetching service with seamless fallback engine
│   └── countriesData.js      # Curated global dataset for offline operation
├── src/
│   ├── Pages/
│   │   ├── Home.jsx          # Country catalog with search and filters
│   │   ├── CountryDetails.jsx# Detailed country profile and demographic dossier
│   │   ├── Compare.jsx       # Side-by-side country comparison page
│   │   ├── Regions.jsx       # Continental divisions overview
│   │   ├── Map.jsx           # Interactive Leaflet map view
│   │   └── Layout.jsx        # App layout shell (Header, Main, Footer)
│   ├── App.jsx               # Route definitions and QueryClient provider
│   ├── main.jsx              # React DOM entrypoint
│   └── index.css             # Tailwind CSS tokens, theme variables, and global styles
├── ui/
│   ├── ButtonPrimary.jsx     # Primary action button
│   ├── CompareCard.jsx       # Comparison country selector card
│   ├── CompareTable.jsx      # Indicator comparison table with population bars
│   ├── CountryCard.jsx       # Individual territory card
│   ├── CountryList.jsx       # Responsive grid of country cards with pagination
│   ├── DetailsCard.jsx       # Metric cards on country details page
│   ├── Footer.jsx            # Application footer
│   ├── Header.jsx            # Navigation bar with responsive mobile menu
│   ├── RegionsCard.jsx       # Continental region overview card
│   ├── Search.jsx            # Search bar and region select dropdown
│   └── Spinner.jsx           # Loading indicator
├── .env.example              # Environment variable template
├── eslint.config.js          # ESLint flat configuration
├── package.json              # Dependencies and build scripts
└── vite.config.js            # Vite configuration
```

---

## ⚡ Getting Started

### Prerequisites

* **Node.js**: `v18.0.0` or later
* **npm**: `v9.0.0` or later

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yunus601/Country-Explorer.git
   cd Country-Explorer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment (Optional):**
   The application works immediately out of the box using the built-in global dataset. If you have a [REST Countries](https://restcountries.com) v5 API key:
   ```bash
   cp .env.example .env.local
   ```
   Add your key inside `.env.local`:
   ```env
   VITE_REST_COUNTRIES_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with hot module replacement |
| `npm run build` | Builds the production bundle in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
