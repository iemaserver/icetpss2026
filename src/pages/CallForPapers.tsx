import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Target, Zap, Cpu, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const tracks = [
  {
    category: "TRACK 1: The Role of IT for Innovation Enhancement",
    topics: [
      "1.	Big Data Analysis & Information Retrieval",
      "2.	Artificial Intelligence and Machine Learning",
      "3.	Deep Learning",
      "4.	Generative AI",
      "5.	Data Mining",
      "6.	Internet of Things",
      "7.	Cryptography and Security",
      "8.	Multimedia, Computer Graphics and Computer Vision",
    ],
  },

  {
    category: "TRACK 2: Information and Communication Technology",
    topics: [
      "1.	Embedded System",
      "2.	Information System",
      "3.	Networking and Data Communication",
      "4.	Enterprise Resource Planning",
      "5.	Service Oriented Architecture",
      "6.	 IT Risk and Disaster ",
      "7.	Natural language Processing",
      "8.	Quantum Computing",
    ],
  },
];

const importantDates = [
  { event: "Full Paper Submission", date: "15th February, 2026" },
  { event: "Acceptance Notification", date: "10th March, 2026" },
  { event: "Registration Deadline", date: "20th March, 2026" },
  { event: "Presentation Submission", date: "20th March, 2026" },
  { event: "Conference Dates", date: "21st – 23rd April, 2026" },
];

const CallForPapers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] pt-24 pb-16 font-sans">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            Call for Papers – ICETPSS 2026
          </h1>
          <p className="text-lg text-[#1e293b] max-w-3xl mx-auto font-medium leading-relaxed">
            The{" "}
            <span className="text-cyan-600 font-semibold">
              International Conference on Emerging Trends in Physical Sciences
              and Sustainability (ICETPSS 2026)
            </span>{" "}
            invites{" "}
            <span className="text-sky-600 font-semibold">
              original and unpublished research papers
            </span>
            , technical reports, and case studies from researchers,
            academicians, and industry experts.
          </p>
        </div>

        {/* Submission Types - CENTERED & SINGLE ITEM */}
        <div className="flex justify-center mb-20">
          {[
            {
              icon: (
                <FileText className="h-12 w-12 text-cyan-500 mx-auto mb-4" />
              ),
              title: "Full Papers",
              desc: "3500 words and above, presenting comprehensive research, detailed methodologies, and analytical results.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-lg" // Limit width so it looks like a card
            >
              <Card className="p-8 text-center bg-white border border-cyan-100 hover:shadow-[0_0_25px_#38bdf8] hover:border-cyan-400 transition-all rounded-xl">
                {item.icon}
                <h3 className="text-xl font-bold mb-3 text-sky-700">
                  {item.title}
                </h3>
                <p className="text-[#334155] font-medium">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Research Tracks */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            Research Tracks
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }}>
                <Card className="p-6 border border-sky-100 bg-white hover:bg-cyan-50 rounded-xl shadow-sm transition-all hover:shadow-[0_0_20px_#06b6d4]">
                  <h3 className="text-xl font-bold mb-3 text-sky-700 flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-cyan-500" />
                    <span className="drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                      {track.category}
                    </span>
                  </h3>
                  <ul className="list-disc list-inside text-[#334155] font-medium space-y-1 pl-3">
                    {track.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="hover:text-cyan-600 hover:drop-shadow-[0_0_6px_#06b6d4] transition-all"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <Card className="p-10 mb-20 bg-gradient-to-br from-blue-100 to-cyan-50 border border-cyan-200 shadow-md rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
            Submission Guidelines
          </h2>
          <ul className="space-y-3 text-lg text-[#1e293b] font-medium leading-relaxed">
            <li>
              • Submissions must be{" "}
              <span className="text-cyan-600 font-semibold">
                original and unpublished
              </span>
              .
            </li>
            <li>
              • Papers must be written in{" "}
              <span className="text-sky-600 font-semibold">English</span>{" "}
              following the IEEE format.
            </li>
            <li>
              • Submit via the{" "}
              <span className="text-cyan-600 font-semibold">
                EasyChair submission system
              </span>
              .
            </li>
            <li>
              • All papers undergo a{" "}
              <span className="text-sky-600 font-semibold">
                double-blind peer review
              </span>{" "}
              process.
            </li>
            <li>
              • One author of each accepted paper must{" "}
              <span className="text-cyan-600 font-semibold">
                register and present
              </span>{" "}
              at the conference.
            </li>
          </ul>
        </Card>

        {/* 🌟 Important Dates – Always Visible Timeline Journey */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            Important Dates
          </h2>

          <div className="relative max-w-6xl mx-auto px-4">
            {/* Horizontal path for desktop */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 opacity-50 blur-[1px]" />

            {/* Vertical path for mobile */}
            <div className="absolute left-[34px] top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-500 rounded-full md:hidden" />

            {/* Timeline items */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-16 md:gap-0 relative z-10">
              {importantDates.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center md:w-[200px] lg:w-[220px]"
                >
                  {/* Connecting line for mobile */}
                  {index !== 0 && (
                    <div className="md:hidden absolute -top-16 w-[2px] h-16 bg-gradient-to-b from-cyan-400 to-sky-400"></div>
                  )}

                  {/* Node */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="relative flex items-center justify-center group mb-5"
                  >
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full bg-cyan-400 blur-2xl opacity-40 animate-pulse"></div>

                    {/* Main circle */}
                    <div className="relative w-16 h-16 rounded-full border-[3px] border-cyan-400 bg-white flex items-center justify-center shadow-[0_0_20px_#06b6d4] group-hover:shadow-[0_0_35px_#06b6d4] transition-all duration-300">
                      <Calendar className="w-7 h-7 text-cyan-600 drop-shadow-[0_0_6px_#06b6d4]" />
                    </div>
                  </motion.div>

                  {/* Always-visible label */}
                  <div className="text-center">
                    <h4 className="text-sky-700 text-sm md:text-base font-semibold uppercase tracking-wide mb-1">
                      {item.event}
                    </h4>
                    <p className="text-cyan-600 text-sm md:text-base font-semibold">
                      {item.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-sky-700">
            Be Part of <span className="text-cyan-600">ICETPSS 2026</span> —
            Submit Your Work Today!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 shadow-md hover:shadow-[0_0_25px_#06b6d4] transition-transform hover:scale-105"
            >
              <Link to="/submission">Submit Paper</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallForPapers;
