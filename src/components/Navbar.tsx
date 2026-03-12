
import React, { useState, useEffect } from "react";
import { Menu, X, Image } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cyberpunk-background/80 backdrop-blur-lg border-b border-cyberpunk-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-cyberpunk-neon-magenta via-cyberpunk-neon-purple to-cyberpunk-neon-cyan p-[2px] animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-cyberpunk-background flex items-center justify-center">
              <span className="text-white text-xl font-bold">TV</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-xl tracking-tight">
              TEXT TO VIDEO
            </span>
            <span className="text-xs text-cyberpunk-neon-cyan mt-[-4px]">
              PROMPT ASSISTANT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="https://chatgpt.com/g/g-By5fjcWKs-luma-dream-machine-prompt-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyberpunk-neon-cyan transition-colors"
          >
            Luma Dream Machine
          </a>
          <a
            href="https://perfectpromptengine.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyberpunk-neon-cyan transition-colors"
          >
            Perfect Prompting Engine
          </a>
          <a
            href="https://chat.openai.com/g/g-2le87gT1s-middlejourney-prompt-enhancer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyberpunk-neon-green transition-colors flex items-center gap-1"
          >
            <Image size={16} />
            Midjourney Assistant
          </a>
          <a
            href="https://chatgpt.com/g/g-6767015882288191810ef9bd3270862f-video-prompt-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-cyberpunk-neon-cyan transition-colors"
          >
            SORA Assistant
          </a>
          <a
            href="#faq"
            className="text-white/80 hover:text-cyberpunk-neon-cyan transition-colors"
          >
            FAQ
          </a>
          <a
            href="#disclaimer"
            className="text-white/80 hover:text-cyberpunk-neon-cyan transition-colors"
          >
            Disclaimer
          </a>
          <a
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button group"
          >
            <span className="relative z-10 group-hover:text-cyberpunk-neon-cyan transition-colors">More AI Tools</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-cyberpunk-background border-t border-cyberpunk-border overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="https://chatgpt.com/g/g-By5fjcWKs-luma-dream-machine-prompt-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-cyberpunk-neon-cyan py-2 transition-colors"
              onClick={toggleMenu}
            >
              Luma Dream Machine
            </a>
            <a
              href="https://perfectpromptengine.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-cyberpunk-neon-cyan py-2 transition-colors"
              onClick={toggleMenu}
            >
              Perfect Prompting Engine
            </a>
            <a
              href="https://chat.openai.com/g/g-2le87gT1s-middlejourney-prompt-enhancer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-cyberpunk-neon-green py-2 transition-colors flex items-center gap-2"
              onClick={toggleMenu}
            >
              <Image size={16} />
              Midjourney Assistant
            </a>
            <a
              href="https://chatgpt.com/g/g-6767015882288191810ef9bd3270862f-video-prompt-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-cyberpunk-neon-cyan py-2 transition-colors"
              onClick={toggleMenu}
            >
              SORA Assistant
            </a>
            <a
              href="#faq"
              className="text-white/80 hover:text-cyberpunk-neon-cyan py-2 transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <a
              href="#disclaimer"
              className="text-white/80 hover:text-cyberpunk-neon-cyan py-2 transition-colors"
              onClick={toggleMenu}
            >
              Disclaimer
            </a>
            <a
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-r from-cyberpunk-neon-magenta to-cyberpunk-neon-purple py-2 px-4 rounded-lg text-center"
              onClick={toggleMenu}
            >
              More AI Tools
            </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
