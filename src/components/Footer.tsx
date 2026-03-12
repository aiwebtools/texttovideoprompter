
import React from "react";
import { Mail, Phone, Image } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyberpunk-background-darker relative overflow-hidden border-t border-cyberpunk-border">
      {/* Background grid */}
      <div className="absolute inset-0 cyberpunk-grid-bg opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-cyberpunk-neon-cyan/5 to-transparent opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Footer top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-cyberpunk-neon-magenta via-cyberpunk-neon-purple to-cyberpunk-neon-cyan p-[2px]">
                <div className="w-full h-full rounded-full bg-cyberpunk-background-darker flex items-center justify-center">
                  <span className="text-white text-sm font-bold">TV</span>
                </div>
              </div>
              <span className="font-bold text-white text-lg">
                TEXT TO VIDEO
              </span>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Professional-grade video prompt engineering for SORA and other AI video generation platforms. Transform your ideas into stunning visual stories.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="text-xs text-white">More</span>
              </a>
            </div>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://chatgpt.com/g/g-6767015882288191810ef9bd3270862f-video-prompt-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm"
                >
                  SORA Text to Video Assistant
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-By5fjcWKs-luma-dream-machine-prompt-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm"
                >
                  Luma Dream Machine Assistant
                </a>
              </li>
              <li>
                <a
                  href="https://chat.openai.com/g/g-2le87gT1s-middlejourney-prompt-enhancer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-neon-green transition-colors text-sm flex items-center gap-1"
                >
                  <Image size={12} />
                  Midjourney Prompt Assistant
                </a>
              </li>
              <li>
                <a
                  href="https://perfectpromptengine.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm"
                >
                  Perfect Prompting Engine
                </a>
              </li>
              <li>
                <a
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm"
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.sora.com/library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm"
                >
                  SORA Library
                </a>
              </li>
              <li>
                <a
                  href="https://lumalabs.ai/dream-machine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm"
                >
                  Luma Dream Machine
                </a>
              </li>
              <li>
                <a
                  href="https://www.midjourney.com/showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-cyberpunk-neon-green transition-colors text-sm"
                >
                  Midjourney Showcase
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+14758008096"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a
                  href="mailto:Contact@ai-webtools.com"
                  className="text-white/60 hover:text-cyberpunk-neon-cyan transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal links */}
        <div className="border-t border-cyberpunk-border pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div className="mb-4 md:mb-0 flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
            <a
              href="https://openai.com/policies/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyberpunk-neon-cyan transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://aiwebtools.lovable.app/terms-of-services?via=aiwebtools"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyberpunk-neon-cyan transition-colors"
            >
              Terms of Service
            </a>
          </div>

          <a
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-cyberpunk-neon-cyan transition-colors"
          >
            © {currentYear} AI WEB TOOLS LLC. All rights reserved.
          </a>
        </div>

        {/* More AI Tools button */}
        <div className="absolute right-8 -top-12 transform translate-y-1/2">
          <a
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyberpunk-neon-magenta to-cyberpunk-neon-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
