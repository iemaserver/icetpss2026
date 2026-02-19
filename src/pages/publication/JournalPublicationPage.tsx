import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const JournalPublicationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-slate-900 pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">
            Journal Publication
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Information about journal publication opportunities for selected
            papers.
          </p>
        </motion.div>

        {/* Publication Information */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-10 md:p-14 shadow-lg border-t-4 border-t-blue-500 bg-white text-center">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              EPJ Web of Conferences
            </h3>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Selected Articles to be published in EPJ Web of Conferences after
              peer review.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default JournalPublicationPage;
