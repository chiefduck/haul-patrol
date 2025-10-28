import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CapitolHill from "./pages/neighborhoods/CapitolHill";
import LoDo from "./pages/neighborhoods/LoDo";
import CherryCreek from "./pages/neighborhoods/CherryCreek";
import HighlandsPark from "./pages/neighborhoods/HighlandsPark";
import Littleton from "./pages/neighborhoods/Littleton";
import HighlandsRanch from "./pages/neighborhoods/HighlandsRanch";
import Parker from "./pages/neighborhoods/Parker";
import CastleRock from "./pages/neighborhoods/CastleRock";
import Aurora from "./pages/neighborhoods/Aurora";
import Lakewood from "./pages/neighborhoods/Lakewood";
import Arvada from "./pages/neighborhoods/Arvada";
import Westminster from "./pages/neighborhoods/Westminster";
import Boulder from "./pages/neighborhoods/Boulder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* Denver Neighborhood Pages for SEO */}
          <Route path="/denver/capitol-hill" element={<CapitolHill />} />
          <Route path="/denver/lodo" element={<LoDo />} />
          <Route path="/denver/cherry-creek" element={<CherryCreek />} />
          <Route path="/denver/highlands-park-hill" element={<HighlandsPark />} />
          
          {/* Surrounding Cities Pages for SEO */}
          <Route path="/littleton" element={<Littleton />} />
          <Route path="/highlands-ranch" element={<HighlandsRanch />} />
          <Route path="/parker" element={<Parker />} />
          <Route path="/castle-rock" element={<CastleRock />} />
          <Route path="/aurora" element={<Aurora />} />
          <Route path="/lakewood" element={<Lakewood />} />
          <Route path="/arvada" element={<Arvada />} />
          <Route path="/westminster" element={<Westminster />} />
          <Route path="/boulder" element={<Boulder />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
