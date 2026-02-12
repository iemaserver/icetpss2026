import React from "react";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const PaperStructurePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] pt-24 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            Paper Structure & Submission Guidelines
          </h1>
          <p className="text-lg text-[#1e293b] max-w-3xl mx-auto font-medium leading-relaxed">
            Papers must be written in English. Please ensure your submission is
            original and follows standard academic writing conventions for
            research papers.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="max-w-2xl mx-auto mt-16">
          <Card className="p-10 md:p-14 shadow-lg border-t-4 border-t-amber-500 bg-amber-50 text-center">
            <Clock className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Coming Soon
            </h3>
            <p className="text-lg text-amber-800">
              Detailed paper structure and submission guidelines will be
              available soon.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaperStructurePage;
