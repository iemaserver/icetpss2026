import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Award,
  Cpu,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import heroBg from "@/assets/image.jpg";
import pla from "@/assets/Place-du-Tertre-Night.jpg";
import aboutImg from "@/assets/abt.png";
import tracksBg from "@/assets/wonderful-night-view-paris-capital-260nw-1207417153.jpg";
import CurvedTimeline from "@/components/CurvedTimeline";
import ass from "@/assets/ars.png";
import imgs from "@/assets/Gemini_Generated_Image_7wsqb57wsqb57wsq.png";
import ribbonImg from "@/assets/rbn.png";

const importantDates = [
  { label: "Full Paper Submission", date: "15th February, 2026" },
  { label: "Acceptance Notification", date: "10th March, 2026" },
  { label: "Registration", date: "20th March, 2026" },
  { label: "Presentation Submission", date: "20th March, 2026" },
  { label: "Conference On", date: "21st – 23rd April, 2026" },
];

const Home = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const heroImages = [heroBg, pla];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHero((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-s-y-100xt-[#0[#0f172a]t-sans">
      {/* Hero Section */}
      <section className="relative -mt-24 min-h-[85vh]">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentHero}
              initial={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
              animate={prefersReducedMotion ? { opacity: 1 } : { x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { x: "-100%" }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[currentHero]})` }}
            />
          </AnimatePresence>
        </div>
        {/* Light overlay similar to the example */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-transparent" />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 flex flex-col justify-center min-h-[85vh]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-2xl mt-16 md:mt-24 mb-8 md:mb-12">
            <p className="text-[#ffff00] font-semibold tracking-wide mb-2">
              {" "}
              ICETPSS 2026
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#ffff] mb-4">
              International Conference on Emerging Trends in Physical Sciences
              and Sustainability
            </h1>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight text-[#ffff] mb-4">
              In association with EMLV - The Leonard De Vinci Business School,
              Paris, France
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-[#92b3e7] text-base md:text-lg mb-6">
              <div className="inline-flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-600" />
                <span>21–23 April, 2026</span>
              </div>
              <span className="hidden md:inline text-slate-400">•</span>
              <div className="inline-flex items-center">
                <span>
                  <span className="font-semibold">Venue:</span> The Photovoltaic
                  Institute of Île-de-France, Paris
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 shadow-md hover:shadow-[0_10px_30px_rgba(56,189,248,0.45)] transition-transform hover:scale-[1.02]"
              >
                <Link to="/Submission">Submit Paper</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-sky-500 text-sky-700 hover:bg-sky-500 hover:text-white px-8 py-6 transition-transform hover:scale-[1.02]"
              >
                <Link to="/Registration">Register Now</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="pt-16 pb-12 px-14 bg-gradient-to-b from-blue-50 to-white mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="About ICETPSS"
              className="w-full rounded-3xl md:h-[420px] lg:h-[500px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-4 text-[#0f172a]">
              About ICETPSS
            </h2>
            <p className="text-[#1e293b] text-lg leading-relaxed mb-6">
              The International Conference on Physical Sciences and
              Sustainability (ICETPSS-26) provides a global platform for
              researchers, academicians, industry experts, and policymakers to
              explore the critical role of physical sciences in advancing
              sustainable development. The conference aims to foster
              interdisciplinary dialogue and promote fundamental and applied
              research that contributes to long-term environmental, energy, and
              societal sustainability.
            </p>
            <p className="text-[#1e293b] text-lg leading-relaxed mb-6">
              ICETPSS focuses on the application of core principles in physics
              and related disciplines to address contemporary sustainability
              challenges. By integrating theoretical foundations, experimental
              investigations, and computational approaches, the conference
              encourages the development of scientifically rigorous solutions
              that support sustainable systems and technologies.
            </p>
            <p className="text-[#1e293b] text-lg leading-relaxed mb-6">
              The conference is being organized around three broad thematic
              tracks. The Energy and Materials Physics for Sustainability track
              emphasizes fundamental studies in energy conversion, materials
              science, and nanoscale phenomena that underpin sustainable
              technologies. The Environmental and Earth System Physics track
              highlights the role of physical sciences in understanding Earth's
              climate and environmental systems. The Applied and Computational
              Physics for Sustainable Systems track focuses on the application
              of physics-based methods to sustainable technologies and systems.
              It encompasses applied physics, computational and theoretical
              modelling, instrumentation, photonics, and interdisciplinary
              system analysis, as well as the role of physics in supporting
              sustainability goals.
            </p>
            <p className="text-[#1e293b] text-lg leading-relaxed mb-8">
              Through keynote lectures, invited talks, contributed papers, and
              panel discussions, ICETPSS-26 seeks to promote knowledge exchange,
              encourage collaboration across disciplines, and strengthen the
              contribution of physical sciences to sustainable development at
              regional and global levels.
            </p>

            <div className="space-y-4">
              {[
                "Globally recognized conference on physical sciences",
                "Keynotes by renowned scientific leaders and pioneers",
                "International participants from leading research institutions",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/90 border border-cyan-100 rounded-xl px-4 py-3 shadow-sm"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-100">
                    <CheckCircle className="h-4 w-4 text-cyan-700" />
                  </span>
                  <span className="text-[#0f172a] font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: <Users className="h-8 w-8 text-sky-600" />,
              title: "Global Collaboration",
              desc: "Engage with leading minds and innovators from across the world.",
            },
            {
              icon: <BookOpen className="h-8 w-8 text-sky-600" />,
              title: "Indexed Publications",
              desc: "Publish your work in high-impact, peer-reviewed conference proceedings.",
            },
            {
              icon: <Award className="h-8 w-8 text-sky-600" />,
              title: "Keynote Speakers",
              desc: "Gain insights from pioneers intechnology, Al, and innovation.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 text-center border border-cyan-200 bg-white rounded-2xl shadow-sm">
                <div className="mb-4 flex justify-center">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-sky-700">
                  {card.title}
                </h3>
                <p className="text-[#334155] font-medium leading-relaxed">
                  {card.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section
        className="relative py-24 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${tracksBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-3">
            Tracks
          </div>
          <h2 className="text-4xl font-bold text-[#ffff] mb-3">
            Conference Tracks
          </h2>
          <p className="text-[#ffff] text-lg mb-12 max-w-3xl mx-auto font-medium">
            Explore our three thematic tracks spanning Energy and Materials
            Physics, Environmental and Earth System Physics, and Applied and
            Computational Physics for Sustainable Systems.
          </p>

          {/* Ribbon and icon stage (full-bleed across viewport) */}
          <div className="relative mt-2 h-[220px] md:h-[240px] lg:h-[260px] overflow-visible">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full flex items-center justify-center z-0">
              <img
                src={ribbonImg}
                alt="Ribbon"
                className="w-[105vw] md:w-[110vw] lg:w-[115vw] max-w-none h-auto opacity-95"
              />
            </div>

            {/* Floating bubbles/icons spread edge-to-edge */}
            <div className="hidden md:block">
              <div className="absolute left-[6vw] top-10 z-10">
                <div
                  className="h-14 w-14 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center animate-float transition-shadow hover:shadow-[0_0_25px_#38bdf8] hover:ring-2 hover:ring-cyan-300"
                  style={{ animationDelay: "0s" }}
                >
                  <Cpu className="h-7 w-7 text-sky-600" />
                </div>
              </div>
              <div className="absolute left-[22vw] top-40 z-10">
                <div
                  className="h-12 w-12 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center animate-float transition-shadow hover:shadow-[0_0_25px_#38bdf8] hover:ring-2 hover:ring-cyan-300"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Users className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-6 z-10">
                <div
                  className="h-16 w-16 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center animate-float transition-shadow hover:shadow-[0_0_25px_#38bdf8] hover:ring-2 hover:ring-cyan-300"
                  style={{ animationDelay: "1s" }}
                >
                  <BookOpen className="h-8 w-8 text-sky-600" />
                </div>
              </div>
              <div className="absolute right-[20vw] top-36 z-10">
                <div
                  className="h-12 w-12 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center animate-float transition-shadow hover:shadow-[0_0_25px_#38bdf8] hover:ring-2 hover:ring-cyan-300"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Award className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              <div className="absolute right-[6vw] top-8 z-10">
                <div
                  className="h-14 w-14 rounded-full bg-white shadow-md ring-1 ring-slate-200 flex items-center justify-center animate-float transition-shadow hover:shadow-[0_0_25px_#38bdf8] hover:ring-2 hover:ring-cyan-300"
                  style={{ animationDelay: "2s" }}
                >
                  <MapPin className="h-7 w-7 text-sky-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Support text above the Explore button */}
          <p className="text-[#ffff] text-lg mt-3 mb-4 max-w-3xl mx-auto font-medium">
            <br /> Click the button below to explore the tracks
          </p>

          {/* Explore Tracks button centered below the ribbon */}
          <motion.div
            className="relative mt-6 flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 shadow-md transition-shadow hover:shadow-[0_0_25px_#38bdf8]"
            >
              <Link to="/call-for-papers">Explore Tracks</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Important Dates - Curved Timeline with Path Animation */}
      <section className="relative">
        <CurvedTimeline />
      </section>

      <section
        className="py-48 relative"
        style={{
          backgroundImage: `url(${ass})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-black/80"
          style={{ zIndex: 1 }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8">
          {/* Left: Text and Buttons */}
          <div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-[#ffff] mb-6">
              Join ICETPSS 2026
            </h2>
            <p className="text-yellow-300 text-lg mb-10 max-w-3xl font-medium">
              Be part of a global forum redefining the future of Robotics,
              Mechatronics, and Sustainability Ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-500 hover:to-cyan-600 text-white font-semibold px-8 py-6 shadow-md hover:shadow-[0_0_20px_#06b6d4] transition-transform hover:scale-105"
              >
                <Link to="/submission">Submit Paper</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-sky-500 text-sky-700 hover:bg-sky-500 hover:text-white px-8 py-6 transition-transform hover:scale-105"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-end">
            <img
              src={imgs}
              alt="Conference"
              className="w-full max-w-2xl rounded-3xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
