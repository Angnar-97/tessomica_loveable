import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

      {/* Floating DNA sequences — spread across the entire hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {/* Left column — slow upward drift */}
        <motion.div
          className="absolute top-0 left-[5%] font-mono text-[10px] md:text-xs text-primary/10 whitespace-pre leading-loose tracking-widest"
          animate={{ y: [0, -60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          {`A T C G A T C G\nG C T A G C T A\nT T A A G G C C\nA T G C T G A C\nC G T T A A G G\nG G C C T T A A\nA T C G A T C G\nT A G C T A G C\nC C G G T T A A\nA T G C T G A C`}
        </motion.div>

        {/* Center-left — medium drift */}
        <motion.div
          className="absolute top-[15%] left-[25%] font-mono text-[9px] md:text-[11px] text-accent/8 whitespace-pre leading-loose tracking-[0.25em]"
          animate={{ y: [20, -40, 20] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          {`G C T A\nA T C G\nT T A A\nG G C C\nC G T T\nA T G C\nG C T A\nT A G C`}
        </motion.div>

        {/* Center — slow pulse drift */}
        <motion.div
          className="absolute top-[30%] left-[45%] font-mono text-[8px] md:text-[10px] text-primary/6 whitespace-pre leading-loose tracking-[0.4em]"
          animate={{ y: [-15, 25, -15], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          {`A  T  C  G\nC  G  A  T\nT  A  G  C\nG  C  T  A\nA  T  C  G\nC  G  A  T`}
        </motion.div>

        {/* Center-right — downward drift */}
        <motion.div
          className="absolute top-[10%] right-[22%] font-mono text-[9px] md:text-[11px] text-accent/7 whitespace-pre leading-loose tracking-[0.3em]"
          animate={{ y: [-30, 30, -30] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          {`T A G C\nC G A T\nA T C G\nG C T A\nT T A A\nG G C C\nA T G C\nC G T T`}
        </motion.div>

        {/* Right column — slow upward */}
        <motion.div
          className="absolute top-[5%] right-[3%] font-mono text-[10px] md:text-xs text-primary/8 whitespace-pre leading-loose tracking-widest"
          animate={{ y: [10, -50, 10] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        >
          {`C G T T A A\nG G C C T T\nA T C G A T\nG C T A G C\nT T A A G G\nC C G G T T\nA T G C T G\nG C T A G C\nA T C G A T\nT A G C T A`}
        </motion.div>

        {/* Bottom left — slow horizontal sway */}
        <motion.div
          className="absolute bottom-[15%] left-[12%] font-mono text-[8px] md:text-[10px] text-primary/5 whitespace-pre leading-loose tracking-[0.5em]"
          animate={{ x: [-10, 15, -10], y: [5, -15, 5] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        >
          {`A T C G A T C G A T\nT A G C T A G C T A\nC G A T C G A T C G\nG C T A G C T A G C`}
        </motion.div>

        {/* Bottom right — gentle float */}
        <motion.div
          className="absolute bottom-[20%] right-[8%] font-mono text-[9px] md:text-[11px] text-accent/6 whitespace-pre leading-loose tracking-[0.2em]"
          animate={{ y: [15, -25, 15], x: [5, -5, 5] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        >
          {`>rRNA_16S\nATGCTGACCGTT\n>ITS_region\nGGCCTTAAGGCC\n>rbcL_marker\nCGTTAAGGCCTT\n>matK_gene\nATCGATCGATCG`}
        </motion.div>
      </div>

      {/* Content */}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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

export default HeroSection;
