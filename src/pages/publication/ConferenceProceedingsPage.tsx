import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Clock } from "lucide-react";

const ConferenceProceedingsPage = () => {
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
            Conference Proceedings
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Access information regarding the publication of accepted research
            papers.
          </p>
        </motion.div>

        {/* Publication Info Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-10 md:p-14 shadow-lg border-t-4 border-t-blue-500 bg-white text-center">
            <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-6" />

            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
              Publication in Conference Proceedings
            </h2>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              All accepted and registered papers will be published in the
              conference proceedings.
            </p>
          </Card>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-10 md:p-14 shadow-lg border-t-4 border-t-amber-500 bg-amber-50 text-center">
            <Clock className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Coming Soon
            </h3>
            <p className="text-lg text-amber-800">
              Detailed information about conference proceedings will be
              available soon.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ConferenceProceedingsPage;
