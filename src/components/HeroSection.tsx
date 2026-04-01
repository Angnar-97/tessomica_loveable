import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const dnaColumns = [
  {
    text: "A T C G A T C G\nG C T A G C T A\nT T A A G G C C\nA T G C T G A C\nC G T T A A G G\nG G C C T T A A\nA T C G A T C G\nT A G C T A G C",
    className: "top-[5%] left-[4%] text-[9px] md:text-[11px] text-primary/[0.06] tracking-widest",
    animate: { y: [0, -40, 0] },
    duration: 24,
    parallaxSpeed: 0.3,
  },
  {
    text: "G C T A\nA T C G\nT T A A\nG G C C\nC G T T\nA T G C",
    className: "top-[18%] left-[22%] text-[8px] md:text-[10px] text-accent/[0.05] tracking-[0.3em]",
    animate: { y: [15, -30, 15] },
    duration: 20,
    parallaxSpeed: 0.15,
  },
  {
    text: "A  T  C  G\nC  G  A  T\nT  A  G  C\nG  C  T  A",
    className: "top-[35%] left-[42%] text-[7px] md:text-[9px] text-primary/[0.04] tracking-[0.5em]",
    animate: { y: [-10, 20, -10], opacity: [0.3, 0.6, 0.3] },
    duration: 28,
    parallaxSpeed: 0.1,
  },
  {
    text: "T A G C\nC G A T\nA T C G\nG C T A\nT T A A\nG G C C",
    className: "top-[12%] right-[20%] text-[8px] md:text-[10px] text-accent/[0.05] tracking-[0.25em]",
    animate: { y: [-20, 25, -20] },
    duration: 22,
    parallaxSpeed: 0.25,
  },
  {
    text: "C G T T A A\nG G C C T T\nA T C G A T\nG C T A G C\nT T A A G G\nC C G G T T\nA T G C T G",
    className: "top-[3%] right-[3%] text-[9px] md:text-[11px] text-primary/[0.05] tracking-widest",
    animate: { y: [10, -35, 10] },
    duration: 26,
    parallaxSpeed: 0.35,
  },
  {
    text: "A T C G A T C G A T\nT A G C T A G C T A\nC G A T C G A T C G",
    className: "bottom-[18%] left-[10%] text-[7px] md:text-[9px] text-primary/[0.04] tracking-[0.4em]",
    animate: { x: [-8, 12, -8], y: [5, -10, 5] },
    duration: 32,
    parallaxSpeed: 0.2,
  },
  {
    text: ">rRNA_16S\nATGCTGACCGTT\n>ITS_region\nGGCCTTAAGGCC",
    className: "bottom-[22%] right-[6%] text-[8px] md:text-[10px] text-accent/[0.04] tracking-[0.2em]",
    animate: { y: [12, -18, 12], x: [4, -4, 4] },
    duration: 30,
    parallaxSpeed: 0.28,
  },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="DNA helix with plant roots and genomic data"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Floating DNA sequences with parallax — z-0 keeps them behind content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden sm:block">
        {dnaColumns.map((col, i) => (
          <ParallaxDNA key={i} col={col} scrollYProgress={scrollYProgress} />
        ))}
      </div>

      {/* Content — z-10 stays above DNA */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-mono text-sm tracking-[0.3em] text-primary mb-6 uppercase">
            Alejandro Navas González
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Decoding</span>{" "}
            <span className="text-foreground">Nature's</span>
            <br />
            <span className="text-foreground">Blueprint</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 font-body leading-relaxed">
            Leveraging genomics, metagenomics, and computational biology to unlock the
            hidden potential of plant and soil microbiomes — from mining remediation
            to sustainable agriculture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary/30 text-primary rounded-sm hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

interface ParallaxDNAProps {
  col: (typeof dnaColumns)[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const ParallaxDNA = ({ col, scrollYProgress }: ParallaxDNAProps) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * col.parallaxSpeed]);

  return (
    <motion.div style={{ y }}>
      <motion.div
        className={`absolute font-mono whitespace-pre leading-loose ${col.className}`}
        animate={col.animate}
        transition={{ duration: col.duration, repeat: Infinity, ease: "easeInOut" }}
      >
        {col.text}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
