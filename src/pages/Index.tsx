import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, MapPin, Building2, Landmark } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import constructionImg from "@/assets/construction-service.jpg";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";

const featuredProperties = [
  { id: 1, title: "Premium Villa Plot", location: "Saravanampatti", size: "2400 sq.ft", price: "₹45 Lakhs", image: project2, type: "Land" },
  { id: 2, title: "Luxury Apartments", location: "RS Puram", size: "1850 sq.ft", price: "₹1.2 Crore", image: project1, type: "Apartment" },
  { id: 3, title: "Modern Villa", location: "Vadavalli", size: "3200 sq.ft", price: "₹1.8 Crore", image: project3, type: "Villa" },
];

const services = [
  { icon: Landmark, title: "Land Sales", desc: "Premium plots in prime Coimbatore locations" },
  { icon: Building2, title: "Construction", desc: "Residential & commercial building expertise" },
  { icon: Shield, title: "Legal Support", desc: "Complete documentation & legal clarity" },
  { icon: MapPin, title: "Property Advisory", desc: "Expert guidance for smart investments" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Luxury real estate in Coimbatore" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-navy-dark/75" />
        </div>
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-body text-sm md:text-base tracking-widest uppercase mb-4">
              Coimbatore's Trusted Real Estate Partner
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight">
              Building Your{" "}
              <span className="text-gold-gradient">Dream Home</span>
              <br />
              With Trust & Excellence
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto font-body">
              From premium land plots to turnkey construction — we bring your vision to life in the heart of Tamil Nadu.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                View Properties <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="navy-gradient py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={18} suffix="+" label="Years Experience" />
          <AnimatedCounter end={250} suffix="+" label="Projects Completed" />
          <AnimatedCounter end={500} suffix="+" label="Happy Clients" />
          <AnimatedCounter end={50} suffix="+" label="Ongoing Projects" />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading title="What We Offer" subtitle="Comprehensive real estate and construction solutions tailored for Coimbatore" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 text-center group hover:border-gold/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <SectionHeading title="Featured Properties" subtitle="Handpicked listings in Coimbatore's most sought-after locations" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold gold-gradient text-accent-foreground rounded-full">
                    {property.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-card-foreground">{property.title}</h3>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <MapPin className="w-3.5 h-3.5" /> {property.location}, Coimbatore
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-gold">{property.price}</span>
                    <span className="text-sm text-muted-foreground">{property.size}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors"
            >
              View All Properties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={constructionImg} alt="Construction services" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
          <div className="absolute inset-0 bg-navy-dark/80" />
        </div>
        <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
              Ready to Build Your <span className="text-gold-gradient">Dream?</span>
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70 max-w-xl mx-auto">
              Get a free consultation with our experts and take the first step towards your new home.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 gold-gradient text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
