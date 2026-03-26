import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const completedProjects = [
  { title: "Green Meadows Villas", location: "Vadavalli", units: "24 Villas", year: "2023", image: project3 },
  { title: "Skyline Apartments", location: "RS Puram", units: "48 Units", year: "2022", image: project1 },
  { title: "Sunrise Plots", location: "Saravanampatti", units: "60 Plots", year: "2021", image: project2 },
];

const ongoingProjects = [
  { title: "Royal Gardens Phase II", location: "Vadavalli", units: "36 Villas", completion: "Dec 2026", image: heroBg },
  { title: "Metro Business Hub", location: "Gandhipuram", units: "Commercial", completion: "Mar 2027", image: project4 },
];

const testimonials = [
  { name: "Rajesh Kumar", text: "BuildNest made buying our first plot incredibly simple. Their transparency and legal support gave us complete peace of mind.", role: "Homeowner" },
  { name: "Priya Sundar", text: "The construction quality of our villa exceeded expectations. The team was professional and delivered on time.", role: "Villa Owner" },
  { name: "Karthik Raman", text: "Best real estate experience in Coimbatore. Their market knowledge helped us make a smart investment.", role: "Investor" },
];

const Projects = () => {
  return (
    <div className="pt-15 md:pt-20">
      {/* Hero */}
      <section className="py-24 navy-gradient">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-widest uppercase mb-3">Our Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground">
              Our <span className="text-gold-gradient">Projects</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Showcasing our completed and ongoing developments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Completed */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="Completed Projects" subtitle="Successfully delivered with quality and trust" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={800} height={600} />
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold bg-green-500 text-primary-foreground rounded-full">Completed</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">{project.title}</h3>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1"><MapPin className="w-3.5 h-3.5" /> {project.location}</p>
                  <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{project.units}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <SectionHeading title="Ongoing Projects" subtitle="Currently under development" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ongoingProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold gold-gradient text-accent-foreground rounded-full">Ongoing</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">{project.title}</h3>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1"><MapPin className="w-3.5 h-3.5" /> {project.location}</p>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{project.units}</span>
                    <span className="text-gold font-semibold">Expected: {project.completion}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <SectionHeading title="What Our Clients Say" subtitle="Real stories from real homeowners" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-navy-light/50 border border-gold/10 rounded-xl p-6"
              >
                <p className="text-primary-foreground/80 italic leading-relaxed">"{t.text}"</p>
                <div className="mt-4">
                  <p className="font-display font-semibold text-gold">{t.name}</p>
                  <p className="text-sm text-primary-foreground/60">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
