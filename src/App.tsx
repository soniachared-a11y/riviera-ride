import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MentionsLegales from "./pages/MentionsLegales";
import Merci from "./pages/Merci";
import NotFound from "./pages/NotFound";
// Pages SEO locales — non visibles dans la nav, indexées par Google & bots IA
import TaxiAeroportMarignane from "./pages/TaxiAeroportMarignane";
import TaxiGareTGVAix from "./pages/TaxiGareTGVAix";
import TaxiGareSaintCharles from "./pages/TaxiGareSaintCharles";
import TaxiVitrolles from "./pages/TaxiVitrolles";
import TaxiPertuis from "./pages/TaxiPertuis";
import TaxiMeyreuil from "./pages/TaxiMeyreuil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>                            
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/merci" element={<Merci />} />
          {/* Routes SEO locales — absentes de la navigation, indexées par Google */}
          <Route path="/taxi-aeroport-marignane" element={<TaxiAeroportMarignane />} />
          <Route path="/taxi-gare-tgv-aix" element={<TaxiGareTGVAix />} />
          <Route path="/taxi-gare-saint-charles" element={<TaxiGareSaintCharles />} />
          <Route path="/taxi-vitrolles" element={<TaxiVitrolles />} />
          <Route path="/taxi-pertuis" element={<TaxiPertuis />} />
          <Route path="/taxi-meyreuil" element={<TaxiMeyreuil />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
