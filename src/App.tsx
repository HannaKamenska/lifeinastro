// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalContent from "@/components/LegalContent";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const queryClient = new QueryClient();

export default function App() {
  const [showLegal, setShowLegal] = useState<"privacy" | "terms" | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={150}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ДОБАВЛЯЙТЕ свои маршруты выше этой строки */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
        <ScrollToTopButton />
        <CookieBanner onShowLegal={() => setShowLegal("privacy")} />
        {showLegal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div
              className="
                relative
                bg-white
                rounded-lg
                shadow-lg
                w-full
                max-w-2xl
                max-h-[90vh]
                p-6
                overflow-y-auto
                sm:p-8
              "
              style={{ boxSizing: "border-box" }}
            >
              <button
                className="absolute top-2 right-2 text-3xl font-bold text-gray-500 hover:text-primary p-3 rounded-full hover:bg-gray-200 transition"
                onClick={() => setShowLegal(null)}
                aria-label="Закрыть"
              >
                ×
              </button>
              <LegalContent type="privacy" variant="modal" onClose={() => setShowLegal(null)} />
            </div>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}