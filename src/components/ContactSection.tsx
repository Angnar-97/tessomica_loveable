import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4 uppercase">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Interested in genomics-driven environmental solutions? Whether it's a research 
            collaboration, consulting project, or just a conversation about microbiomes and 
            sustainable mining — I'd love to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@example.com"
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Send an Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-primary/30 text-primary rounded-sm hover:bg-primary/10 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
