"use client";

import Image from "next/image";
import { Send, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.99, 0.99, 0.99, 0.94],
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="min-h-[calc(100vh-10rem)] flex flex-col justify-center relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        <div className="order-2 lg:order-1 flex flex-col lg:flex-row items-center lg:items-start lg:gap-24 md:gap-12 gap-8">
          {/* Social Links */}
          <motion.div
            className="flex lg:flex md:flex lg:flex-col gap-4 mt-1"
            variants={socialVariants}
          >
            {[
              {
                href: "https://www.linkedin.com/in/injamulhoque007/",
                icon: "linkedin",
                color: "hover:bg-blue-600 dark:hover:bg-blue-600",
              },
              {
                href: "https://github.com/injamul007",
                icon: "github",
                color:
                  "hover:bg-slate-800 dark:hover:bg-white dark:hover:text-black",
              },
              {
                href: "https://x.com/InjamulHoq86366",
                icon: "twitter",
                color: "hover:bg-black dark:hover:bg-black",
              },
            ].map((social, index) => (
              <motion.div
                key={social.icon}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 ${social.color} hover:text-white transition-all duration-300 flex items-center justify-center`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon === "linkedin" && (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  )}
                  {social.icon === "github" && (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  )}
                  {social.icon === "twitter" && (
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  )}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <motion.div className="space-y-2" variants={itemVariants}>
              <motion.p
                className="text-xl font-medium text-slate-600 dark:text-slate-400 inline-flex items-center gap-2"
                variants={itemVariants}
              >
                Hey, I&apos;m
                <motion.span
                  className="inline-block text-4xl"
                  animate={{
                    rotate: [0, 14, -8, 14, -4, 10, 0],
                    scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                >
                  👋
                </motion.span>
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-white lg:whitespace-nowrap"
                variants={itemVariants}
              >
                Injamul Hoque
              </motion.h1>
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-2"
                variants={itemVariants}
              >
                <span className="text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200">
                  I am a
                </span>
                <motion.span className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {"MERN Stack Developer".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      className={`inline-block ${char === " " ? "w-2" : "mr-0"}`} // add spacing for spaces
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.06,
                        duration: 1.2,
                        ease: "easeOut",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}{" "}
                      {/* non-breaking space */}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-slate-600 dark:text-slate-400 text-base lg:text-lg max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              🚀 Building modern, user-friendly web applications with MERN stack
              💻 Junior Developer | Open to Entry-Level Opportunities 🌟
            </motion.p>

            <motion.div
              className="relative z-20 pt-4 flex flex-wrap justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              {/* Say Hello Button */}
              <motion.button
                onClick={() => {
                  const section = document.getElementById("contact");
                  section?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="cursor-pointer group relative inline-flex items-center gap-3 px-8 py-4 rounded-full
      bg-slate-800 hover:bg-slate-700 dark:bg-white/10 dark:hover:bg-white/20
      text-white backdrop-blur-sm border border-slate-700 dark:border-white/10
      transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "tween",
                  duration: 0.15,
                  ease: "easeOut",
                }}
              >
                <span className="relative z-10 font-medium text-lg">
                  Say Hello
                </span>

                <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                <div
                  className="pointer-events-none absolute inset-0 z-0
        -translate-x-full group-hover:translate-x-full
        transition-transform duration-700
        bg-gradient-to-r from-transparent via-white/10 to-transparent"
                ></div>
              </motion.button>

              {/* Resume Button */}
              <motion.a
                href="/resume/Injamul-Hoque-MERN-Developer-Resume.pdf"
                download="Injamul_Hoque_Resume.pdf"
                className="cursor-pointer group relative inline-flex items-center gap-3 px-8 py-4 rounded-full
      bg-slate-800 hover:bg-slate-700 dark:bg-white/10 dark:hover:bg-white/20
      text-white backdrop-blur-sm border border-slate-700 dark:border-white/10
      transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "tween",
                  duration: 0.15,
                  ease: "easeOut",
                }}
              >
                <span className="relative z-10 font-medium text-lg">
                  Resume
                </span>

                <Download className="relative z-10 w-5 h-5 group-hover:translate-y-1 transition-transform" />

                <div
                  className="pointer-events-none absolute inset-0 z-0
        -translate-x-full group-hover:translate-x-full
        transition-transform duration-700
        bg-gradient-to-r from-transparent via-white/10 to-transparent"
                ></div>
              </motion.a>
            </motion.div>

            <motion.div
              className="lg:absolute lg:bottom-10 lg:left-0 lg:right-0 lg:mx-auto flex flex-col items-center gap-2 mt-12 lg:mt-0 text-slate-500 dark:text-slate-500"
              variants={itemVariants}
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center p-1">
                <motion.div
                  className="w-1 h-2 bg-current rounded-full"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="order-1 lg:order-2 relative flex justify-center items-center"
          variants={imageVariants}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transform scale-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
          <motion.div
            className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-4 rounded-[3rem] border border-slate-200/50 dark:border-white/10 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-sm z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <Image
              src="https://i.ibb.co.com/rGRSTbmh/My-Picture-Front-Head2.jpg"
              alt="Injamul Hoque Portrait"
              width={450}
              height={450}
              className="absolute inset-0 w-full h-full object-cover rounded-[3rem] p-2 z-10 mask-image-gradient"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
              onError={(e) => {
                console.log("Hero image failed to load, using placeholder");
                e.target.style.display = "none";
              }}
              loading="eager"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
