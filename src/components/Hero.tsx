
import React, { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3D tilt effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;
      
      const { left, top, width, height } = videoRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const rotateX = (y - 0.5) * 10;
      const rotateY = (0.5 - x) * 10;
      
      videoRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!videoRef.current) return;
      videoRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
    
    const element = videoRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden flex flex-col items-center justify-center cyberpunk-grid-bg">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-cyberpunk-neon-magenta/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-cyberpunk-neon-cyan/20 to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Small label */}
        <div className="bg-gradient-to-r from-cyberpunk-neon-magenta to-cyberpunk-neon-cyan text-transparent bg-clip-text text-sm font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          POWERED BY ADVANCED AI
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <span className="bg-gradient-to-r from-cyberpunk-neon-cyan via-white to-cyberpunk-neon-magenta text-transparent bg-clip-text">
            TEXT TO VIDEO
          </span>
          <br />
          <span className="text-glow text-cyberpunk-neon-purple">
            PROMPT ASSISTANT
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-white/80 max-w-2xl text-center mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          Create stunning, cinematic video prompts for SORA. Transform your ideas into
          detailed, professional video descriptions that come to life.
        </p>
        
        {/* 3D Video Preview */}
        <div 
          ref={videoRef}
          className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden mb-12 neon-border transition-all duration-300 animate-fade-in opacity-0" 
          style={{ animationDelay: '0.7s', transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-neon-magenta/10 to-cyberpunk-neon-cyan/10"></div>
          
          {/* Video preview content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyberpunk-neon-magenta to-cyberpunk-neon-cyan opacity-70 animate-pulse-glow mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-glow text-white">Your Vision, Amplified</h3>
            <p className="text-white/70 max-w-xl">
              From concept to reality. Our AI assistant helps you craft the perfect video prompts
              with expert guidance and detailed suggestions.
            </p>
          </div>
          
          {/* Overlay grid pattern */}
          <div className="absolute inset-0 pointer-events-none cyberpunk-grid-bg"></div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
          <a 
            href="https://chatgpt.com/g/g-6767015882288191810ef9bd3270862f-video-prompt-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button group"
          >
            <span className="relative z-10 group-hover:text-cyberpunk-neon-cyan transition-colors">
              Try SORA Assistant
            </span>
          </a>
          <a 
            href="https://www.sora.com/library"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-white"
          >
            Explore SORA Library
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
