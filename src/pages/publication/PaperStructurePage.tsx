import React from "react";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const PaperStructurePage = () => {
  const pdfResources = [
    {
      title: "How to write title and abstract",
      fileName: "How to write title and abstract_EPJ.pdf",
      href: "/How%20to%20write%20title%20and%20abstract_EPJ.pdf",
    },
    {
      title: "Paper format",
      fileName: "Paper format_EPJ (2).pdf",
      href: "/Paper%20format_EPJ%20(2).pdf",
    },
  ];

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

        <div className="grid gap-6 md:grid-cols-2 mt-16">
          {pdfResources.map((resource) => (
            <Card
              key={resource.fileName}
              className="p-8 shadow-lg border-t-4 border-t-blue-500 bg-white"
            >
              <div className="flex items-start gap-4">
                <FileText className="w-10 h-10 text-blue-600 shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-6">
                    {resource.fileName}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Open PDF
                    </a>
                    <a
                      href={resource.href}
                      download
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-blue-600 text-blue-700 text-sm font-medium hover:bg-blue-50 transition-colors"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperStructurePage;
