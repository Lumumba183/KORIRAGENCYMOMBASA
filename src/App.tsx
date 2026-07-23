import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { StoreProvider } from "@/lib/store";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Properties from "@/pages/Properties";
import Villas from "@/pages/Villas";
import CarHire from "@/pages/CarHire";
import Tours from "@/pages/Tours";
import PropertyManagement from "@/pages/PropertyManagement";
import Gallery from "@/pages/Gallery";
import Testimonials from "@/pages/Testimonials";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Account from "@/pages/Account";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <StoreProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/holiday-villas" element={<Villas />} />
            <Route path="/car-hire" element={<CarHire />} />
            <Route path="/tours-safaris" element={<Tours />} />
            <Route path="/property-management" element={<PropertyManagement />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <WhatsAppFloat />
    </StoreProvider>
  );
}
