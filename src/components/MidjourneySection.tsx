
import React from "react";
import { Image, Wand2, ArrowRight } from "lucide-react";

const MidjourneySection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyberpunk-grid-bg opacity-40"></div>
      <div className="absolute top-32 -right-32 w-64 h-64 bg-cyberpunk-neon-green/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyberpunk-neon-cyan/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side: Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-cyberpunk-border rounded-full text-sm text-cyberpunk-neon-green mb-4">
              <Image size={16} className="text-cyberpunk-neon-green" />
              <span>TEXT TO IMAGE</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyberpunk-neon-green to-cyberpunk-neon-cyan text-transparent bg-clip-text">
                Midjourney Prompt Assistant
              </span>
            </h2>
            
            <p className="text-white/70 text-lg mb-6">
              Transform your ideas into stunning visual masterpieces with our specialized Midjourney prompt engineering assistant. Create detailed, high-quality images with perfect composition, lighting, and style.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-cyberpunk-neon-green/20 text-cyberpunk-neon-green">
                  <Wand2 size={16} />
                </div>
                <span className="text-white/80">Generate professional-grade Midjourney prompts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-cyberpunk-neon-green/20 text-cyberpunk-neon-green">
                  <Wand2 size={16} />
                </div>
                <span className="text-white/80">Perfect composition with detailed art direction</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-1 rounded-full bg-cyberpunk-neon-green/20 text-cyberpunk-neon-green">
                  <Wand2 size={16} />
                </div>
                <span className="text-white/80">Step-by-step guidance for optimal results</span>
              </li>
            </ul>
            
            <a
              href="https://chat.openai.com/g/g-2le87gT1s-middlejourney-prompt-enhancer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyberpunk-neon-green to-cyberpunk-neon-cyan rounded-lg text-black font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all"
            >
              Try Midjourney Assistant
              <ArrowRight size={18} />
            </a>
          </div>
          
          {/* Right side: Visual */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-neon-green/20 to-cyberpunk-neon-cyan/20 rounded-xl blur-xl"></div>
              <div className="glass-card p-8 relative overflow-hidden border border-cyberpunk-neon-green/30">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyberpunk-neon-green/10 rounded-full blur-3xl"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyberpunk-neon-green/20 flex items-center justify-center">
                      <Image size={20} className="text-cyberpunk-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Midjourney Prompt Assistant</h3>
                      <p className="text-white/60 text-sm">Text-to-image expert</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-white/80 text-sm italic">
                      "Ethereal forest guardian, dramatic volumetric lighting, intricate details, hyper-realistic textures, 8k resolution, cinematic composition with bokeh background, digital art masterpiece."
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square rounded-lg bg-cyberpunk-background border border-white/10 flex items-center justify-center p-3">
                      <div className="text-center">
                        <p className="text-white/40 text-xs">Midjourney v6</p>
                        <p className="text-white/80 text-sm">Style optimization</p>
                      </div>
                    </div>
                    <div className="aspect-square rounded-lg bg-cyberpunk-background border border-white/10 flex items-center justify-center p-3">
                      <div className="text-center">
                        <p className="text-white/40 text-xs">Parameter control</p>
                        <p className="text-white/80 text-sm">--ar 16:9 --q 2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidjourneySection;
