import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import springerLogo from "@/assets/springer.png";
import atlantisLogo from "@/assets/atlantis.png";

const ConferenceProceedingsPage = () => {
  const bookPublicationLogos = [
    "/CFP OF ICETPS (1).png",
    "/CFP OF ICETPS (2).png",
    "/CFP OF ICETPS (3).png",
  ];

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

        {/* Publication Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-8 md:p-12 shadow-lg border-t-4 border-t-blue-500 bg-slate-100 text-center">
            <BookOpen className="w-14 h-14 text-blue-500 mx-auto mb-6" />

            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
              Publication Partners
            </h3>

            <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed mb-12">
              The conference proceedings will be published in
              <span className="text-blue-700 font-semibold">
                {" "}
                Atlantis Press
              </span>
              , part of{" "}
              <span className="text-blue-700 font-semibold">
                Springer Nature
              </span>
              .
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 flex items-center justify-center min-h-[180px]">
                  <img
                    src={atlantisLogo}
                    alt="Atlantis Press"
                    className="w-full h-auto max-h-28 object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-slate-600 font-semibold mt-5">
                  Atlantis Press
                </p>
              </div>

              <div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 flex items-center justify-center min-h-[180px]">
                  <img
                    src={springerLogo}
                    alt="Springer Nature"
                    className="w-full h-auto max-h-28 object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-slate-600 font-semibold mt-5">
                  Springer Nature
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Book/Book Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="p-8 md:p-10 shadow-lg border-t-4 border-t-blue-500 bg-white">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-8">
              Book/Book Publications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookPublicationLogos.map((logo, index) => (
                <div
                  key={logo}
                  className="rounded-xl border border-amber-900 bg-amber-900 p-4 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Book publication logo ${index + 1}`}
                    className="w-full h-auto max-h-56 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ConferenceProceedingsPage;
