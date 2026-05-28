import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "Legal Document Summarization System",
      description:
        "Transformer-based NLP system using BERT architectures for semantic legal document summarization across 5000+ legal text samples.",
      tag: "NLP + Transformers",
      type: "image",
      media: "/legal-preview.jpeg",
    },

    {
      title: "Disaster Tweet Detection System",
      description:
        "Built a Deep Learning-based NLP system using TensorFlow and Bi-Directional LSTM networks to classify whether tweets correspond to real-world disasters. The system includes text preprocessing, tokenization, sequence padding, real-time prediction testing, and performance evaluation using accuracy visualizations and confusion matrices.",
      tag: "Deep Learning + NLP",
      type: "image",
      media: "/disaster-tweet-preview.jpeg",
    },

    {
      title: "Driver Drowsiness Detection System",
      description:
        "Real-time fatigue detection platform using OpenCV, facial landmark detection, and EAR algorithms for intelligent driver monitoring.",
      tag: "Computer Vision",
      type: "video",
      media: "/drowsiness-demo.mp4",
    },

    {
      title: "Smart India Hackathon — Farmer Advisory System",
      description:
        "AI-powered agricultural assistance platform developed during Smart India Hackathon, integrating NLP and image-processing pipelines for crop analysis, farmer query resolution, and intelligent recommendations.",
      tag: "SIH + AI Automation",
      type: "image",
      media: "/farmer-preview.jpeg",
    },

    {
      title: "TextEmotionX",
      description:
        "NLP-based sentiment analysis system capable of classifying emotions through scalable text classification pipelines.",
      tag: "Sentiment Analysis",
      type: "none",
    },
  ];

  const skills = [
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenCV",
    "Transformers",
    "BERT",
    "LangChain",
    "React",
    "FastAPI",
    "Streamlit",
    "Computer Vision",
    "NLP",
    "Prompt Engineering",
    "AI Automation",
    "GitHub",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans relative">

      {/* Liquid Cursor */}
      <motion.div
        animate={{
          x: mousePosition.x - 180,
          y: mousePosition.y - 180,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 0.5,
        }}
        className="pointer-events-none fixed top-0 left-0 z-0 w-[360px] h-[360px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(125,211,252,0.10) 0%, rgba(196,181,253,0.08) 30%, rgba(255,255,255,0.02) 55%, transparent 75%)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          mixBlendMode: "soft-light",
          opacity: 0.65,
          boxShadow:
            "0 0 120px rgba(255,255,255,0.12), inset 0 0 40px rgba(255,255,255,0.08)",
        }}
      >
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-[20%] rounded-full border border-white/5" />
      </motion.div>

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 30,
        }}
        className="pointer-events-none fixed top-0 left-0 z-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-sky-400/15 blur-[180px]" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-violet-400/15 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_65%)]" />

      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-5 backdrop-blur-3xl bg-white/5 border-b border-white/10 flex items-center justify-between">

        <h1 className="text-xl tracking-wide font-semibold">
          Shawn.
        </h1>

        <div className="hidden md:flex gap-10 text-sm text-white/70">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

      </nav>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center px-8 relative">

        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 mb-8 text-sm text-white/70">
              AI Engineer • ML Developer • Creative Technologist
            </div>

            <div className="mb-10">

              <h1 className="text-7xl md:text-[9rem] leading-[0.85] tracking-[-0.06em] font-black">

                <span
                  className="block"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #ffffff, #7dd3fc, #c4b5fd)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Shawn
                </span>

                <span
                  className="block text-transparent"
                  style={{
                    WebkitTextStroke: "1.5px rgba(255,255,255,0.65)",
                    textShadow: "0 0 40px rgba(125,211,252,0.12)",
                  }}
                >
                  Mendes
                </span>

              </h1>

            </div>

            <p className="text-lg text-white/60 max-w-xl leading-8">
              I build AI-powered systems focused on NLP, Computer Vision, and intelligent automation — blending engineering with cinematic digital experiences and modern interface design.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">

              <a
                href="#projects"
                className="px-7 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300 inline-flex items-center"
              >
                View Projects
              </a>

              <a
                href="/Shawn_Mendes_Resume.pdf"
                download
                className="px-7 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300 inline-flex items-center"
              >
                Download Resume
              </a>

            </div>

          </div>

          {/* Glass Card */}
          <div className="relative flex items-center justify-center">

            <div className="absolute w-[450px] h-[450px] rounded-full bg-white/10 blur-[120px]" />

            <div className="relative w-full max-w-md rounded-[40px] border border-white/15 bg-white/10 backdrop-blur-3xl shadow-2xl p-8 overflow-hidden">

              <div className="relative z-10">

                <div className="flex items-center justify-between mb-10">

                  <div>
                    <p className="text-white/50 text-sm">
                      Core Expertise
                    </p>

                    <h2 className="text-2xl font-semibold mt-1">
                      AI Systems
                    </h2>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-xl">
                    ✦
                  </div>

                </div>

                <div className="space-y-5">

                  <div className="p-5 rounded-3xl bg-black/20 border border-white/10">

                    <p className="text-white/50 text-sm">
                      Experience
                    </p>

                    <h3 className="text-3xl font-semibold mt-2">
                      Machine Learning
                    </h3>

                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="p-5 rounded-3xl bg-black/20 border border-white/10">

                      <p className="text-white/50 text-sm">
                        Projects
                      </p>

                      <h3 className="text-2xl font-semibold mt-2">
                        5+
                      </h3>

                    </div>

                    <div className="p-5 rounded-3xl bg-black/20 border border-white/10">

                      <p className="text-white/50 text-sm">
                        Focus
                      </p>

                      <h3 className="text-2xl font-semibold mt-2">
                        NLP + CV
                      </h3>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      <section id="about" className="px-8 py-32">

        <div className="max-w-6xl mx-auto">

          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-12">

            <p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-6">
              About
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold max-w-4xl leading-tight">
              Building intelligent systems through Machine Learning, NLP, Computer Vision, and modern AI engineering.
            </h2>

            <p className="mt-10 text-white/60 leading-8 text-lg max-w-3xl">
              I'm Shawn Mendes, an aspiring Artificial Intelligence Engineer from Mumbai with hands-on experience in Machine Learning, NLP, Computer Vision, and real-time AI systems.
            </p>

          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">

            <div>

              <p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-4">
                Selected Work
              </p>

              <h2 className="text-5xl font-semibold">
                Projects
              </h2>

            </div>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{
                  rotateX: -4,
                  rotateY: 4,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-3xl overflow-hidden p-8 transition duration-500"
              >

                <div className="relative z-10">

                  <div className="flex justify-between items-start mb-10">

                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white/70">
                      {project.tag}
                    </span>

                    <span className="text-white/30 text-2xl">
                      ↗
                    </span>

                  </div>

                  <h3 className="text-3xl font-semibold mb-5">
                    {project.title}
                  </h3>

                  <p className="text-white/60 leading-8 text-lg">
                    {project.description}
                  </p>

                  {project.type !== "none" && (

                    <div className="mt-10 h-52 rounded-3xl overflow-hidden border border-white/10 bg-black/40 relative group">

                      {project.type === "video" ? (

                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        >
                          <source src={project.media} type="video/mp4" />
                        </video>

                      ) : (

                        <img
                          src={project.media}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />

                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] tracking-[0.2em] uppercase text-white/70">
                        {project.type === "video"
                          ? "Live Demo"
                          : "Project Preview"}
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <h4 className="text-sm font-medium text-white">
                          {project.title}
                        </h4>

                        <p className="text-xs text-white/50 mt-1">
                          {project.tag}
                        </p>

                      </div>

                    </div>

                  )}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-32">

        <div className="max-w-6xl mx-auto">

          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-12">

            <p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-6">
              Skills
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-6 py-4 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl text-white/80 hover:scale-105 transition"
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-32">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-white/50 uppercase tracking-[0.3em] text-sm mb-6">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold leading-tight">
            Let’s build intelligent products.
          </h2>

          <p className="mt-8 text-white/60 text-lg max-w-2xl mx-auto leading-8">
            Open to AI engineering internships, machine learning collaborations, startup opportunities, and creative technology projects.
          </p>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=buildwithshawnm@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/shawnmendes123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shawn-mendes-a36a85249"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 px-8 py-4 rounded-full border border-sky-400/20 bg-sky-400/10 backdrop-blur-xl hover:bg-sky-400/20 transition text-sky-200"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="pb-10 pt-10 text-center">

        <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl text-white/40 text-xs tracking-[0.3em] uppercase">
          Made By Shawn Mendes
        </div>

      </footer>

    </div>
  );
}