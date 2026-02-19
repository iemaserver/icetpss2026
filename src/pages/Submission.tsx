import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Submission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-[#0f172a] pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] mb-4">
            Paper Submission
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Submit your research paper through our official submission system.
            Please review all guidelines carefully before submission to ensure
            compliance with ICETPS 2026 publication standards.
          </p>

          {/* Top Button */}
          <div className="flex flex-col items-center justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              disabled
            >
              Submit Via EDAS
            </Button>
            <span className="text-cyan-600 font-medium mt-2 text-sm animate-pulse">
              Click here
            </span>
          </div>
        </motion.div>

        {/* Submission Process */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-sky-700 mb-8">
            Submission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Prepare Paper",
                desc: (
                  <>
                    Format your paper according to standard academic writing
                    conventions in English. Review the{" "}
                    <Link
                      to="/publication/structure"
                      className="text-sky-600 font-semibold hover:underline"
                    >
                      paper structure guidelines
                    </Link>
                    .
                  </>
                ),
              },
              {
                step: 2,
                title: "Register on EDAS",
                desc: "Create or log in to your EDAS account.",
              },
              {
                step: 3,
                title: "Submit Paper",
                desc: "Upload your PDF and fill in all required details.",
              },
              {
                step: 4,
                title: "Track Status",
                desc: "Monitor submission status and review progress.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="p-6 rounded-2xl shadow-md bg-white"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Step {item.step}: {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDAS Submission CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 text-center bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-3xl shadow-lg mb-16">
            <Upload className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">Ready to Submit?</h2>
            <p className="text-lg opacity-90 mb-6">
              Use the official EDAS submission system to upload your paper.
            </p>

            {/* Bottom Button */}
            <div className="flex flex-col items-center">
              <Button
                size="lg"
                className="bg-white text-cyan-700 font-semibold hover:bg-cyan-100 transition-transform hover:scale-105"
                disabled
              >
                Submit Via EDAS
              </Button>
              <span className="text-white font-medium mt-2 text-sm">
                Click here
              </span>
            </div>

            <p className="mt-4 text-sm opacity-80">
              (You will be redirected to the EDAS submission portal)
            </p>
          </Card>
        </motion.div>

        {/* Guidelines to Authors */}
        <Card className="p-10 mb-16 bg-gradient-to-br from-cyan-50 to-blue-100 border border-sky-200 shadow-md rounded-2xl">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600">
            Guidelines to Authors
          </h2>
          <ul className="space-y-4 text-lg text-[#1e293b] font-medium leading-relaxed">
            <li>
              • Instructions{" "}
              <span className="text-cyan-600 font-semibold">
                “How to prepare your article”
              </span>
              :{" "}
              <a
                href="https://www.epj-conferences.org/doc_journal/woc/pdf_guidelines.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 underline underline-offset-4 hover:text-cyan-600"
              >
                PDF Guidelines
              </a>
              .
            </li>
            <li>
              • Instructions{" "}
              <span className="text-cyan-600 font-semibold">
                “How to write title and abstract”
              </span>{" "}
              are attached.
            </li>
            <li>
              • Publication right form (to be signed by at least one author):{" "}
              <a
                href="https://www.epj-conferences.org/doc_journal/woc/publication_right_form.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 underline underline-offset-4 hover:text-cyan-600"
              >
                Publication Right Form
              </a>
              .
            </li>
            <li>
              • Ethical rules:{" "}
              <a
                href="https://www.epj-conferences.org/about-the-journal/publishing-policies-ethics"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 underline underline-offset-4 hover:text-cyan-600"
              >
                Publishing Policies & Ethics
              </a>
              .
            </li>
            <li>
              • General editorial guideline:{" "}
              <a
                href="https://www.epj-conferences.org/doc_journal/woc/epjconf_editorial_guidelines.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 underline underline-offset-4 hover:text-cyan-600"
              >
                Editorial Guidelines
              </a>
              .
            </li>
            <li>
              • The template for writing the paper is attached. Please adhere
              strictly to the template.
            </li>
            <li>
              • Articles will be checked using a plagiarism tool. Any ethical
              misconduct will be considered very seriously.
            </li>
            <li>
              • Required file type:{" "}
              <span className="text-sky-600 font-semibold">
                camera-ready PDF
              </span>
              . Authors must carefully follow the attached camera-ready file
              preparation guideline.
            </li>
            <li>
              • Extra care must be paid to author names and references.
              References are linked via Crossref only when correctly presented.
            </li>
            <li>
              • The given-name (first name) must be written in{" "}
              <span className="italic text-cyan-600 font-semibold">ITALIC</span>
              . If this is incorrect, authors may not be properly indexed.
            </li>
            <li>
              • Complete affiliation must be mentioned: Department, Institution,
              City, and Country.
            </li>
          </ul>

          <div className="mt-8 p-6 rounded-xl border border-cyan-200 bg-white/80">
            <h3 className="text-xl font-bold text-sky-700 mb-3">
              Example to Follow
            </h3>
            <p className="text-[#1e293b] font-semibold mb-2">
              Manohar Gangikunta1 and Sonnati Venkateshwarlu2
            </p>
            <p className="text-[#334155] leading-relaxed">
              1 Associate Professor, EEE Department, CVR College of Engineering,
              Hyderabad, India
            </p>
            <p className="text-[#334155] leading-relaxed">
              2 Professor, EEE Department, CVR College of Engineering,
              Hyderabad, India
            </p>
          </div>
        </Card>

        {/* Review Process */}
        <Card className="p-10 border-t-4 border-t-cyan-500 rounded-2xl bg-white">
          <h2 className="text-3xl font-bold mb-6 text-sky-700">
            Review Process
          </h2>
          <div className="space-y-5 text-slate-700 text-lg">
            {[
              "Initial Screening – Formatting and plagiarism check",
              "Double-Blind Review – Minimum two independent reviewers",
              "Review Period – Typically 2–3 weeks",
              "Decision Notification – Review comments via email",
              "Camera-Ready Submission – Revised version upload",
            ].map((step, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-cyan-600 font-bold">{index + 1}.</span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Submission;
