import { motion } from "framer-motion";
import { Building2, Home, Briefcase, Wrench, ClipboardCheck, Key } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import constructionImg from "@/assets/construction-service.jpg";

const services = [
  { icon: Home, title: "Residential Construction", desc: "Custom homes and villas built to your specifications with premium quality materials and modern designs." },
  { icon: Building2, title: "Commercial Construction", desc: "Office spaces, retail complexes, and warehouses designed for functionality and aesthetic appeal." },
  { icon: Briefcase, title: "Turnkey Projects", desc: "Complete end-to-end solutions from design to handover — move in with zero hassle." },
  { icon: Wrench, title: "Renovation & Remodeling", desc: "Transform your existing property with modern upgrades and structural improvements." },
  { icon: ClipboardCheck, title: "Project Management", desc: "Professional oversight ensuring timely delivery, quality control, and budget adherence." },
  { icon: Key, title: "Property Consulting", desc: "Expert advice on property investment, market trends, and portfolio diversification." },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "Understanding your requirements, budget, and vision" },
  { step: "02", title: "Design & Planning", desc: "Architectural design, approvals, and project planning" },
  { step: "03", title: "Construction", desc: "Quality construction with regular progress updates" },
  { step: "04", title: "Handover", desc: "Final inspection, documentation, and key handover" },
];

const Services = () => {
  return (
    <div className="pt-15 md:pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={constructionImg} alt="Construction services" className="w-full h-full object-cover" width={800} height={600} />
          <div className="absolute inset-0 bg-navy-dark/80" />
        </div>
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground">
              Construction <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              From foundation to finish — comprehensive building solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="Our Services" subtitle="End-to-end construction and real estate solutions" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-8 group hover:border-gold/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 mb-5 rounded-lg gold-gradient flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <SectionHeading title="Our Process" subtitle="A streamlined approach to building your dream" light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="text-5xl font-display font-bold text-gold/30 mb-2">{step.step}</div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground">{step.title}</h3>
                <p className="mt-2 text-primary-foreground/60 text-sm">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-16 h-0.5 gold-gradient" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
