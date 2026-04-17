import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";

// Horizontal DNA streams — Matrix-style flowing sequences
const dnaStreams = [
  { y: "3%", speed: 35, delay: 0, opacity: 0.18, text: ">COX1_barcode ATCGATCGATGC  >nad5_mito TTAAGGCCCGTT  GCTAGCTA ATGCTGAC", parallax: 0.3, dir: "left" },
  { y: "11%", speed: 48, delay: -7, opacity: 0.13, text: "GCTAGCTA GGCCTTAA >EF1a_gene AATTCCGGGCAT  TAGCTAGC ATCGATCG TTAAGGCC", parallax: 0.15, dir: "right" },
  { y: "19%", speed: 28, delay: -3, opacity: 0.16, text: ">trnH_psbA TTAAGGCCATGC  CGTTAGGC GCTAGCTA >ndhF_chloro AATTCCGGTTAA", parallax: 0.25, dir: "left" },
  { y: "27%", speed: 55, delay: -12, opacity: 0.11, text: ">rRNA_16S ATGCTGACCGTT  >ITS_region GGCCTTAAGGCC  >matK_gene ATCGATCGATCG", parallax: 0.1, dir: "right" },
  { y: "35%", speed: 32, delay: -5, opacity: 0.17, text: "CGTTAGGC >cytB_mito ATCGATCGGCTA  TTAAGGCC >RAG1_nuclear ATGCTGACAATT", parallax: 0.35, dir: "left" },
  { y: "43%", speed: 42, delay: -18, opacity: 0.14, text: ">18S_rRNA GGCCTTAATAGC  ATCGATCG CGTTAGGC >atpB_gene GCTAGCTATTAA", parallax: 0.2, dir: "right" },
  { y: "51%", speed: 25, delay: -9, opacity: 0.15, text: "AATTCCGG >RPB2_gene GCATGCATATCG  TTAAGGCC GCTAGCTA >ycf1_plastid CGTTAGGC", parallax: 0.28, dir: "left" },
  { y: "59%", speed: 60, delay: -15, opacity: 0.11, text: "TAGCTAGC >COX2_mito GGCCTTAAAATT  GCATGCAT ATCGATCG >trnL_UAA TTAAGGCC", parallax: 0.18, dir: "right" },
  { y: "67%", speed: 38, delay: -22, opacity: 0.13, text: ">ITS2_spacer GCATGCATATGC  CGTTAGGC TTAAGGCC >rpoB_gene GCTAGCTAAATT", parallax: 0.22, dir: "left" },
  { y: "75%", speed: 45, delay: -10, opacity: 0.14, text: "ATGCTGAC >nrITS_region GCTAGCTATTAA  ATCGATCG >accD_plastid GGCCTTAACGTT", parallax: 0.12, dir: "right" },
  { y: "83%", speed: 30, delay: -8, opacity: 0.16, text: ">rRNA_28S CGATCGATTTAC  >H3_histone GGCCTTAAGCCT  CGATCGAT CTAGCTAG", parallax: 0.32, dir: "left" },
  { y: "91%", speed: 52, delay: -20, opacity: 0.12, text: ">rbcL_gene GCTAGCTATTAA  >trnL_intron CCGGAATTCCGG  >psbA ATCGATCGATCG", parallax: 0.14, dir: "right" },
  { y: "7%", speed: 40, delay: -14, opacity: 0.10, text: ">ND2_mito TTAAGGCCGCTA  ATCGATCG >GAPDH_gene ATGCTGACCGTT  AATTCCGG", parallax: 0.26, dir: "right" },
  { y: "55%", speed: 33, delay: -6, opacity: 0.12, text: ">WNT1_gene GCATGCATGGCC  TAGCTAGC >rRNA_5.8S ATCGATCGTTAA  ATGCTGAC", parallax: 0.19, dir: "left" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Fade out DNA as user scrolls
  const dnaOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0.6, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — stronger overlay ensures WCAG AA contrast for text on top */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background" />
      </div>

      {/* Horizontal flowing DNA streams — disabled when user prefers reduced motion */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden sm:block"
          style={{ opacity: dnaOpacity }}
          aria-hidden="true"
        >
          {dnaStreams.map((stream, i) => (
            <DNAStream key={i} stream={stream} scrollYProgress={scrollYProgress} index={i} />
          ))}
        </motion.div>
      )}

      {/* Content — z-10 stays above DNA */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: "easeOut" }}
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
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1, delay: prefersReducedMotion ? 0 : 0.4 }}
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

      {/* Scroll indicator — static when reduced motion is preferred */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

interface DNAStreamProps {
  stream: (typeof dnaStreams)[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
}

const DNAStream = ({ stream, scrollYProgress, index }: DNAStreamProps) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, -150 * stream.parallax]);
  const tripleText = useMemo(() => `${stream.text}    ${stream.text}    ${stream.text}`, [stream.text]);
  const goesRight = stream.dir === "right";

  // Glowing characters effect
  const [glowIndices, setGlowIndices] = useState<Set<number>>(new Set());

  const updateGlows = useCallback(() => {
    const chars = tripleText.length;
    const newGlows = new Set<number>();
    // Pick 3-6 random characters to glow
    const count = 3 + Math.floor(Math.random() * 4);
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * chars);
      if (tripleText[idx] !== ' ') {
        newGlows.add(idx);
      }
    }
    setGlowIndices(newGlows);
  }, [tripleText]);

  useEffect(() => {
    // Stagger start per stream
    const initialDelay = setTimeout(() => {
      updateGlows();
      const interval = setInterval(updateGlows, 1200 + index * 200);
      return () => clearInterval(interval);
    }, index * 300);
    
    const interval = setInterval(updateGlows, 1200 + index * 200);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [updateGlows, index]);

  // Identify gene label positions (e.g., >rRNA_16S, >matK_gene)
  const labelRanges = useMemo(() => {
    const ranges: [number, number][] = [];
    const regex = />[a-zA-Z0-9_]+/g;
    let match;
    while ((match = regex.exec(tripleText)) !== null) {
      ranges.push([match.index, match.index + match[0].length]);
    }
    return ranges;
  }, [tripleText]);

  const isInLabel = useCallback((idx: number) => {
    return labelRanges.some(([start, end]) => idx >= start && idx < end);
  }, [labelRanges]);

  const renderedText = useMemo(() => {
    return tripleText.split("").map((char, i) => {
      const inLabel = isInLabel(i);
      const isGlowing = glowIndices.has(i);

      if (inLabel) {
        return (
          <span
            key={i}
            className={isGlowing ? "inline-block animate-pulse" : undefined}
            style={{
              color: "hsl(var(--accent-foreground))",
              opacity: isGlowing ? 1 : 0.9,
              textShadow: isGlowing
                ? "0 0 6px hsl(var(--accent-foreground) / 0.6), 0 0 12px hsl(142 70% 45% / 0.3)"
                : "0 0 2px hsl(142 70% 45% / 0.2)",
              fontWeight: 600,
              transition: "all 0.4s ease",
            }}
          >
            {char}
          </span>
        );
      }

      if (isGlowing) {
        return (
          <span
            key={i}
            className="inline-block animate-pulse"
            style={{
              color: "hsl(var(--primary))",
              opacity: 0.85,
              textShadow: "0 0 4px hsl(var(--primary) / 0.5), 0 0 10px hsl(var(--primary) / 0.2)",
              transition: "all 0.4s ease",
            }}
          >
            {char}
          </span>
        );
      }
      return char;
    });
  }, [tripleText, glowIndices, isInLabel]);

  return (
    <motion.div
      className="absolute left-0 w-full"
      style={{ top: stream.y, y }}
    >
      <motion.div
        className="font-mono whitespace-nowrap tracking-[0.3em] text-[10px] md:text-[12px]"
        style={{ opacity: stream.opacity, color: "hsl(var(--primary))" }}
        animate={{ x: goesRight ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{
          x: {
            duration: stream.speed,
            repeat: Infinity,
            ease: "linear",
            delay: stream.delay,
          },
        }}
      >
        {renderedText}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
