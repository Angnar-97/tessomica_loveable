import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Scientist",
    company: "Telómera",
    type: "Full-time",
    period: "Oct 2024 – Present",
    location: "Madrid, Spain · On-site",
    description: [
      "Development of predictive models and data analysis pipelines applied to the biotech and healthcare sectors.",
      "Design and implementation of data intelligence solutions to support evidence-based decision-making.",
      "Exploratory analysis of clinical and genomic data using Machine Learning and biostatistics techniques.",
    ],
    skills: ["Data Intelligence", "Exploratory Data Analysis", "Machine Learning", "Python", "Biostatistics"],
    current: true,
  },
  {
    role: "Data Scientist",
    company: "Intrum",
    type: "Full-time",
    period: "Apr 2022 – Oct 2024 · 2 yrs 7 mos",
    location: "Madrid, Spain",
    description: [
      "Built statistical and Machine Learning models for debt behavior prediction and customer scoring.",
      "Developed interactive Power BI dashboards for KPI monitoring and executive reporting.",
      "Automated ETL processes and data pipelines with R and SQL to handle large volumes of financial data.",
    ],
    skills: ["R", "Microsoft Power BI", "SQL", "Statistical Modeling", "ETL", "Data Analysis", "Machine Learning"],
  },
  {
    role: "Data Scientist",
    company: "CGI",
    type: "Full-time",
    period: "Sep 2021 – Apr 2022 · 8 mos",
    location: "Madrid, Spain",
    description: [
      "Designed and developed large-scale data processing pipelines with PySpark in Big Data environments.",
      "Performed data extraction, transformation, and analysis using SQL and Python for technology consulting projects.",
    ],
    skills: ["PySpark", "SQL", "Python", "Big Data"],
  },
  {
    role: "IT Consultant",
    company: "M2C – An Ayesa Company",
    type: "Full-time",
    period: "Mar 2021 – Sep 2021 · 7 mos",
    location: "Madrid, Spain",
    description: [
      "Consulting and implementation of BPM solutions using the Pega (PRPC) platform for enterprise process automation.",
      "Contributed to system architecture design and workflow definition for financial sector clients.",
    ],
    skills: ["Pegasystems PRPC", "System Architecture"],
  },
  {
    role: "Bioinformatician",
    company: "Helix BioS",
    type: "Internship",
    period: "Feb 2020 – Jul 2020 · 6 mos",
    location: "Madrid, Spain",
    description: [
      "Analyzed Next-Generation Sequencing (NGS) data for metagenomics and microbial diversity studies.",
      "Developed bioinformatics pipelines with R (Phyloseq) and QIIME2 for processing and visualizing 16S amplicon data.",
      "Performed taxonomic and functional characterization of microbial communities from DNA sequencing data.",
    ],
    skills: ["Sequence Analysis", "DNA Sequencing", "NGS", "Bioinformatics", "R", "Python", "Phyloseq", "QIIME2"],
  },
];
const ExperienceSection = () => (
  <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-16 text-center"
      >
        Professional Experience
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
                      Current
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-1">{exp.period}</p>
                <p className="text-sm text-muted-foreground/70 mb-3">{exp.location}</p>

                <ul className="space-y-1.5 mb-4">
                  {exp.description.map((item, j) => (
                    <li key={j} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
