import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { publications } from "@/lib/publications";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Publications = () => (
  <>
    <Navbar />
    <main className="min-h-screen pt-24 pb-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          Publications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          Projects and work published on GitHub — analyses, pipelines, and data tools.
        </motion.p>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
            >
              <Link
                to={`/publicaciones/${pub.slug}`}
                className="block group bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h2 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {pub.title}
                  </h2>
                  <span className="text-xs font-mono text-muted-foreground shrink-0">
                    {new Date(pub.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{pub.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {publications.length === 0 && (
          <p className="text-muted-foreground text-center py-20">
            Coming soon — work in progress.
          </p>
        )}
      </div>
    </main>
    <Footer />
  </>
);

export default Publications;
