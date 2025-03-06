
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is the Text to Video Prompt Assistant?",
      answer:
        "The Text to Video Prompt Assistant is an AI tool designed to help users create detailed, effective prompts for video generation platforms like SORA. It helps transform basic ideas into professional-grade video descriptions with precise camera movements, lighting, atmosphere, and emotional context.",
    },
    {
      question: "How do I use the SORA Text to Video Prompt Assistant?",
      answer:
        "Simply visit the SORA Assistant through the link provided, describe what kind of video scene you want to create, and the assistant will guide you through crafting the perfect prompt. The assistant will ask clarifying questions about your vision and then generate detailed prompts that you can copy and paste directly into SORA.",
    },
    {
      question: "What makes a good video generation prompt?",
      answer:
        "A good video generation prompt typically includes details about camera movement, lighting, atmosphere, key visual elements, transitions, and emotional tone. The more specific and descriptive your prompt is (while staying under word limits), the better results you'll get. Our assistant helps ensure your prompts have all these essential elements.",
    },
    {
      question: "Can I use these prompts with other AI video generators?",
      answer:
        "While our prompts are optimized for SORA and Luma Dream Machine, many of the principles and techniques can be adapted for other AI video generation tools. The fundamental elements of good prompt design are transferable across platforms, though you may need to adjust for specific requirements of different tools.",
    },
    {
      question: "Is there a cost to use the Text to Video Prompt Assistant?",
      answer:
        "The assistant is available through ChatGPT, which may require a subscription depending on which model is being used. Please check the current pricing on OpenAI's website for the most up-to-date information on accessing GPTs.",
    },
    {
      question: "Can I get access to SORA through this tool?",
      answer:
        "No, our tool helps you create effective prompts, but access to SORA itself is managed by OpenAI and subject to their availability and access policies. We provide links to official resources but cannot grant direct access to SORA.",
    },
  ];

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-cyberpunk-neon-purple/10 to-transparent opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-white/5 border border-cyberpunk-border rounded-full text-sm text-cyberpunk-neon-cyan mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyberpunk-neon-cyan to-cyberpunk-neon-magenta text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Everything you need to know about our Text to Video Prompt Assistant and how to get the most out of it.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-cyberpunk-border rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyberpunk-neon-cyan transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
