
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Orders from "./pages/Orders";
import ShiprocketOrders from "./pages/ShiprocketOrders";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import Stores from "./pages/Stores";
import Customers from "./pages/Customers";
import Categories from "./pages/Categories";
import Plans from "./pages/Plans";
import ChangePlan from "./pages/ChangePlan";
import Coupons from "./pages/Coupons";
import WhatsApp from "./pages/WhatsApp";
import PageBuilder from "./pages/PageBuilder";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/shiprocket-orders" element={<ShiprocketOrders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/change-plan" element={<ChangePlan />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
            <Route path="/page-builder/*" element={<PageBuilder />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
