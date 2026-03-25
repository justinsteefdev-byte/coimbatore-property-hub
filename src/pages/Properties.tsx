import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const allProperties = [
  { id: 1, title: "Premium Villa Plot", location: "Saravanampatti", size: "2400 sq.ft", price: "₹45 Lakhs", priceNum: 4500000, image: project2, type: "Land" },
  { id: 2, title: "Luxury Apartments", location: "RS Puram", size: "1850 sq.ft", price: "₹1.2 Crore", priceNum: 12000000, image: project1, type: "Apartment" },
  { id: 3, title: "Modern Villa", location: "Vadavalli", size: "3200 sq.ft", price: "₹1.8 Crore", priceNum: 18000000, image: project3, type: "Villa" },
  { id: 4, title: "Commercial Space", location: "Gandhipuram", size: "5000 sq.ft", price: "₹2.5 Crore", priceNum: 25000000, image: project4, type: "Commercial" },
  { id: 5, title: "Residential Plot", location: "Singanallur", size: "1200 sq.ft", price: "₹22 Lakhs", priceNum: 2200000, image: project2, type: "Land" },
  { id: 6, title: "Duplex Villa", location: "Race Course", size: "2800 sq.ft", price: "₹2.1 Crore", priceNum: 21000000, image: project3, type: "Villa" },
];

const types = ["All", "Land", "Villa", "Apartment", "Commercial"];
const locations = ["All Locations", "Saravanampatti", "RS Puram", "Vadavalli", "Gandhipuram", "Singanallur", "Race Course"];

const Properties = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allProperties.filter((p) => {
    const matchesType = typeFilter === "All" || p.type === typeFilter;
    const matchesLocation = locationFilter === "All Locations" || p.location === locationFilter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesLocation && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 navy-gradient">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm tracking-widest uppercase mb-3">Our Listings</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground">
              Properties in <span className="text-gold-gradient">Coimbatore</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Explore premium plots, villas, apartments, and commercial spaces
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>
            <div className="flex gap-3 items-center">
              <SlidersHorizontal className="w-5 h-5 text-muted-foreground shrink-0" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-3 rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                {types.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-3 rounded-lg border border-border bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                {locations.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
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
                  <button className="mt-4 w-full py-2.5 rounded-lg border-2 border-gold text-gold font-semibold hover:bg-gold/10 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;
