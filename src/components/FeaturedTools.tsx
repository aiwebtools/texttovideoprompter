
import React from "react";
import { Code, Video, Wand2, Image } from "lucide-react";

const FeaturedTools: React.FC = () => {
  const tools = [
    {
      id: 1,
      title: "SORA Text to Video Assistant",
      description:
        "Generate professional-grade video prompts for SORA. Craft detailed scenes with perfect camera movement, lighting, atmosphere, and emotion.",
      icon: <Video className="h-8 w-8 text-cyberpunk-neon-cyan" />,
      url: "https://chatgpt.com/g/g-6767015882288191810ef9bd3270862f-video-prompt-assistant",
      color: "from-cyberpunk-neon-cyan/20 to-cyberpunk-neon-blue/10",
      delay: "0.1s",
    },
    {
      id: 2,
      title: "Luma Dream Machine",
      description:
        "Create compelling video generation prompts for Luma Dream Machine. Transform static descriptions into dynamic, cinematic scenes.",
      icon: <Video className="h-8 w-8 text-cyberpunk-neon-magenta" />,
      url: "https://chatgpt.com/g/g-By5fjcWKs-luma-dream-machine-prompt-assistant",
      color: "from-cyberpunk-neon-magenta/20 to-cyberpunk-neon-purple/10",
      delay: "0.3s",
    },
    {
      id: 3,
      title: "Midjourney Prompt Assistant",
      description:
        "Craft detailed image prompts for Midjourney. Design stunning visuals with perfect composition, lighting, style, and artistic direction.",
      icon: <Image className="h-8 w-8 text-cyberpunk-neon-green" />,
      url: "https://chat.openai.com/g/g-2le87gT1s-middlejourney-prompt-enhancer",
      color: "from-cyberpunk-neon-green/20 to-cyberpunk-neon-blue/10",
      delay: "0.5s",
    },
    {
      id: 4,
      title: "Perfect Prompting Engine",
      description:
        "Enhance your prompting skills with expert guidance. Generate perfectly structured prompts that yield optimal results across AI platforms.",
      icon: <Wand2 className="h-8 w-8 text-cyberpunk-neon-cyan" />,
      url: "https://perfectpromptengine.lovable.app/",
      color: "from-cyberpunk-neon-cyan/20 to-cyberpunk-neon-blue/10",
      delay: "0.7s",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid-bg opacity-50"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyberpunk-neon-magenta/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyberpunk-neon-cyan/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-white/5 border border-cyberpunk-border rounded-full text-sm text-cyberpunk-neon-cyan mb-4">
            FEATURED TOOLS
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-neon-cyan to-cyberpunk-neon-magenta text-transparent bg-clip-text">
              AI-Powered Solutions
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore our suite of specialized AI tools designed to elevate your
            creative process and streamline your workflow.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-cyan-500/5 animate-fade-in opacity-0 group"
              style={{ animationDelay: tool.delay }}
            >
              <div className={`p-3 rounded-lg bg-gradient-to-br ${tool.color} mb-4 inline-block`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-glow group-hover:text-cyberpunk-neon-cyan transition-all duration-300">
                {tool.title}
              </h3>
              <p className="text-white/70">{tool.description}</p>
              <div className="mt-4 text-cyberpunk-neon-cyan text-sm font-medium">
                Try it now →
              </div>
            </a>
          ))}
        </div>

        {/* "More Tools" button */}
        <div className="text-center mt-12">
          <a
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button inline-block group"
          >
            <span className="relative z-10 group-hover:text-cyberpunk-neon-cyan transition-colors">
              Explore More AI Tools
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
