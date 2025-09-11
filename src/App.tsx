import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import JoinServer from "./pages/JoinServer";
import NotFound from "./pages/NotFound";
import { PageWrapper } from "./components/PageWrapper";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add smooth scrolling class to body
    document.body.classList.add('smooth-scroll');
    
    // Enhanced smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const targetId = target.href.split('#')[1];
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  const basename = import.meta.env.PROD ? '/openwildsweb' : '/';

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <PageWrapper>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/join" element={<JoinServer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </PageWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
