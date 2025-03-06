
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedTools from "@/components/FeaturedTools";
import FAQ from "@/components/FAQ";
import Disclaimer from "@/components/Disclaimer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Animated background that spans the entire site */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main>
        <Hero />
        <FeaturedTools />
        <FAQ />
        <Disclaimer />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
