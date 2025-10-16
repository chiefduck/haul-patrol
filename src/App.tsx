import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CapitolHill from "./pages/neighborhoods/CapitolHill";
import LoDo from "./pages/neighborhoods/LoDo";
import CherryCreek from "./pages/neighborhoods/CherryCreek";
import HighlandsPark from "./pages/neighborhoods/HighlandsPark";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Neighborhood Pages for SEO */}
          <Route path="/denver/capitol-hill" element={<CapitolHill />} />
          <Route path="/denver/lodo" element={<LoDo />} />
          <Route path="/denver/cherry-creek" element={<CherryCreek />} />
          <Route path="/denver/highlands-park-hill" element={<HighlandsPark />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
