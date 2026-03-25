import { motion } from "framer-motion";

const experiences = [
  {
    role: "Científico de Datos",
    company: "Telómera",
    type: "Jornada completa",
    period: "oct. 2024 – actualidad",
    location: "Madrid, España · Presencial",
    skills: ["Inteligencia de datos", "Análisis exploratorio de datos", "Machine Learning", "Python", "Bioestadística"],
    current: true,
  },
  {
    role: "Científico de Datos",
    company: "Intrum",
    type: "Jornada completa",
    period: "abr. 2022 – oct. 2024 · 2 años 7 meses",
    location: "Madrid, España",
    skills: ["R", "Microsoft Power BI", "SQL", "Modelado estadístico", "ETL", "Análisis de datos", "Machine Learning"],
  },
  {
    role: "Científico de Datos",
    company: "CGI",
    type: "Jornada completa",
    period: "sept. 2021 – abr. 2022 · 8 meses",
    location: "Madrid, España",
    skills: ["PySpark", "SQL", "Python", "Big Data"],
  },
  {
    role: "Asesor de TI",
    company: "M2C – An Ayesa Company",
    type: "Jornada completa",
    period: "mar. 2021 – sept. 2021 · 7 meses",
    location: "Madrid, España",
    skills: ["PRPC de Pegasystems", "Arquitectura de sistemas"],
  },
  {
    role: "Bioinformático",
    company: "Helix BioS",
    type: "Contrato de prácticas",
    period: "feb. 2020 – jul. 2020 · 6 meses",
    location: "Madrid, España",
    skills: ["Análisis de secuencias", "Secuenciación del ADN", "NGS", "Bioinformática", "R", "Python", "Phyloseq", "QIIME2"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 bg-secondary/30">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
      >
        Experiencia Profesional
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                  exp.current
                    ? "bg-primary border-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                    : "bg-background border-muted-foreground/40"
                }`}
              />

              <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/50 p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{exp.role}</h3>
                    <p className="text-primary font-medium">
                      {exp.company}
                      <span className="text-muted-foreground font-normal text-sm"> · {exp.type}</span>
                    </p>
                  </div>
                  {exp.current && (
                    <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded-full w-fit">
                      Actual
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                <p className="text-sm text-muted-foreground/70 mb-3">{exp.location}</p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
