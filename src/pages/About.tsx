import { motion } from "framer-motion";
import { Shield, Users, Award, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import constructionImg from "@/assets/construction-service.jpg";

const values = [
  { icon: Shield, title: "Trust & Transparency", desc: "Complete legal clarity with every transaction" },
  { icon: Users, title: "Customer First", desc: "Your satisfaction drives every decision we make" },
  { icon: Award, title: "Quality Excellence", desc: "Premium materials and craftsmanship guaranteed" },
];

const whyUs = [
  "18+ years of real estate experience in Coimbatore",
  "100% RERA compliant properties",
  "Transparent pricing with no hidden costs",
  "End-to-end support from purchase to possession",
  "Expert legal team for hassle-free documentation",
  "Strong local knowledge of Coimbatore market",
];

const About = () => {
  return (
    <div className="pt-15 md:pt-20">
      {/* Hero */}
      <section className="relative py-24 navy-gradient">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-widest uppercase mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground">
              About <span className="text-gold-gradient">BuildNest</span> Realty
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl  mx-auto">
              Building trust and dreams in Coimbatore since 2005
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={constructionImg} alt="Our team at work" className="rounded-xl shadow-lg w-full" loading="lazy" width={800} height={600} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              A Legacy of <span className="text-gold">Trust</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded in 2005, BuildNest Realty has grown from a small land brokerage to one of Coimbatore's most trusted real estate and construction companies. With over 250 successful projects and 500+ happy families, we've built our reputation on transparency, quality, and an unwavering commitment to our clients.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our deep understanding of the Coimbatore real estate market, combined with our in-house construction expertise, makes us a one-stop solution for anyone looking to buy land, build a home, or invest in commercial property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver premium real estate solutions that empower families and businesses in Coimbatore to achieve their property goals with complete trust and transparency.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted name in Coimbatore's real estate landscape, known for ethical practices, quality construction, and creating communities that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding navy-gradient">
        <div className="container-custom">
          <SectionHeading title="Why Choose Us" subtitle="What makes BuildNest your ideal real estate partner" light />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3"
              >
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="text-primary-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
