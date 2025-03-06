
import React from "react";

const Disclaimer: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative overflow-hidden bg-cyberpunk-background-darker">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-white/5 border border-cyberpunk-border rounded-full text-sm text-cyberpunk-neon-cyan mb-4">
            LEGAL
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-neon-cyan to-cyberpunk-neon-magenta text-transparent bg-clip-text">
              Disclaimer
            </span>
          </h2>
        </div>

        {/* Disclaimer content */}
        <div className="max-w-4xl mx-auto glass-card p-8 text-white/70 space-y-4 text-sm">
          <p>
            <strong className="text-white">GENERAL DISCLAIMER:</strong> The Text to Video Prompt Assistant ("the Assistant") is provided as-is without any warranties, expressed or implied. AI Web Tools LLC ("we," "us," "our") does not guarantee the accuracy, completeness, or usefulness of any information provided by the Assistant.
          </p>
          
          <p>
            <strong className="text-white">NO AFFILIATION:</strong> The Assistant is not affiliated with, endorsed by, or sponsored by OpenAI, SORA, Luma AI, or any other third-party services mentioned or linked to from this website. All trademarks, service marks, trade names, and logos used are the property of their respective owners.
          </p>
          
          <p>
            <strong className="text-white">ACCESS TO THIRD-PARTY SERVICES:</strong> The Assistant provides guidance for creating prompts but does not provide access to SORA, Luma Dream Machine, or other third-party video generation services. Access to such services is subject to their own terms, conditions, and availability.
          </p>
          
          <p>
            <strong className="text-white">CONTENT GENERATION:</strong> Users are solely responsible for the content they generate using prompts created with the assistance of this tool. We do not monitor, control, or take responsibility for how users utilize the prompts or the content they create.
          </p>
          
          <p>
            <strong className="text-white">INTELLECTUAL PROPERTY:</strong> Users must ensure they have appropriate rights to any concepts, descriptions, or other content they input into the Assistant. We are not responsible for any intellectual property infringement that may result from your use of our tool or the prompts it helps generate.
          </p>
          
          <p>
            <strong className="text-white">LIMITATION OF LIABILITY:</strong> In no event shall AI Web Tools LLC, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Assistant.
          </p>
          
          <p>
            <strong className="text-white">CHANGES TO SERVICE:</strong> We reserve the right to withdraw or amend the Assistant, and any service or material we provide via the Assistant, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Assistant is unavailable at any time or for any period.
          </p>
          
          <p>
            <strong className="text-white">GOVERNING LAW:</strong> These terms shall be governed and construed in accordance with the laws applicable to the location of AI Web Tools LLC, without regard to its conflict of law provisions.
          </p>
          
          <p>
            By using the Text to Video Prompt Assistant, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
