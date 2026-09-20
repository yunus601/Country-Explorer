import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Compare from "./Pages/Compare";
import Regions from "./Pages/Regions";
import Layout from "./Pages/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CountryDetails from "./Pages/CountryDetails";
import Map from "./Pages/Map";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="country/:code">
              <Route index element={<CountryDetails />} />
              <Route path="map" element={<Map />} />
            </Route>
            <Route path="compare" element={<Compare />} />
            <Route path="regions" element={<Regions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
