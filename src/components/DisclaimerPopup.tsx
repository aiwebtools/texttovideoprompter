
import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already seen and accepted the disclaimer
    const hasAccepted = localStorage.getItem("disclaimerAccepted");
    
    if (!hasAccepted) {
      // Show popup if user hasn't accepted yet
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    // Set in localStorage to prevent showing again
    localStorage.setItem("disclaimerAccepted", "true");
    setIsOpen(false);
    
    // Show a thank you toast
    toast({
      title: "Thank you!",
      description: "You've accepted our disclaimer terms.",
      duration: 3000,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="glass-card relative w-full max-w-md p-6 sm:p-8 overflow-hidden animate-scale-in"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, rgba(0, 0, 0, 0) 70%)"
        }}
      >
        {/* Close button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Title with cool styling */}
        <h2 className="text-center mb-4">
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyberpunk-neon-cyan via-cyberpunk-neon-purple to-cyberpunk-neon-magenta text-transparent bg-clip-text">
            DISCLAIMER
          </span>
        </h2>
        
        {/* Disclaimer text */}
        <div className="space-y-4 text-sm text-white/80 mb-6">
          <p>
            The Text to Video Prompt Assistant is provided as-is without any warranties, expressed or implied. We do not guarantee the accuracy, completeness, or usefulness of any information provided.
          </p>
          <p>
            This tool is not affiliated with, endorsed by, or sponsored by OpenAI, SORA, Luma AI, or any other third-party services mentioned. All trademarks are the property of their respective owners.
          </p>
          <p>
            By clicking "I AGREE" below, you acknowledge that you have read and understood this disclaimer and agree to our terms.
          </p>
        </div>
        
        {/* Interactive AGREE button */}
        <button 
          onClick={handleAccept}
          className="neon-button w-full py-3 group relative overflow-hidden transition-all duration-500"
        >
          <span className="relative z-10 flex items-center justify-center gap-2 font-medium text-lg">
            <span className="bg-gradient-to-r from-white via-cyberpunk-neon-cyan to-white bg-clip-text text-transparent group-hover:from-cyberpunk-neon-cyan group-hover:to-cyberpunk-neon-magenta transition-all duration-500">
              I AGREE
            </span>
            <Check className="h-5 w-5 text-cyberpunk-neon-cyan group-hover:text-cyberpunk-neon-magenta transition-colors duration-500" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
