# Countries Explorer

Countries Explorer is a React application for browsing country data, filtering countries by region, comparing two countries, and viewing country locations on a map.

## Features

- Browse countries with population, region, subregion, capital, and flag information.
- Search by country name, capital, region, or subregion.
- Filter the country list by Africa, Americas, Asia, Europe, or Oceania.
- View a detailed country profile, including languages, currencies, area, coordinates, and top-level domains.
- Compare two countries using demographic and geographic indicators.
- Browse aggregated statistics by continental region.
- View country coordinates with Leaflet and OpenStreetMap.
- Use the bundled country catalog when the remote API is unavailable.

## Technology

- React 19
- Vite 8
- Tailwind CSS 4
- TanStack Query 5
- React Router 7
- Leaflet and React-Leaflet
- React Icons

## Requirements

- Node.js 18 or later
- npm 9 or later

## Getting Started

Clone the repository and install its dependencies:

```bash
git clone https://github.com/yunus601/Country-Explorer.git
cd Country-Explorer
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:5173` in a browser.

## Data Sources

The application reads country data through `Services/RESTAPI.js`.

When `VITE_REST_COUNTRIES_API_KEY` is available, the service attempts to query the REST Countries API. If the key is missing, the request fails, or the response does not contain the expected data, the application uses the bundled dataset in `Services/countriesData.js`.

To configure the API key, create `.env.local` from `.env.example` and set:

```env
VITE_REST_COUNTRIES_API_KEY=your_api_key_here
```

The fallback dataset allows the application to run without external API access.

## Routes

| Path                 | Description                                      |
| -------------------- | ------------------------------------------------ |
| `/`                  | Country catalog with search and region filtering |
| `/country/:code`     | Country details page                             |
| `/country/:code/map` | Map view for a country                           |
| `/compare`           | Side-by-side country comparison                  |
| `/regions`           | Continental region overview                      |

## Available Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start the Vite development server      |
| `npm run build`   | Build the production bundle in `dist/` |
| `npm run preview` | Serve the production build locally     |
| `npm run lint`    | Run ESLint across the project          |

## Project Structure

```text
Country-Explorer/
├── Hooks/              # React Query and filtering hooks
├── Services/           # Country API service and fallback data
├── public/images/      # Images used by region cards
├── src/
│   ├── Pages/          # Route-level page components
│   ├── App.jsx         # Providers and route definitions
│   ├── main.jsx        # Application entry point
│   └── index.css       # Tailwind theme and global styles
├── ui/                 # Shared interface components
├── eslint.config.js
├── package.json
└── vite.config.js
```

## License

This project is licensed under the MIT License. See `LICENSE` for details.
