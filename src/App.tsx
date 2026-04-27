import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  ShieldCheck, 
  Target, 
  Award,
  Gem,
  Sparkles,
  Hammer,
  RefreshCw,
  Search,
  CheckCircle2,
  Instagram,
  Facebook
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from './lib/utils';
import { useInView } from 'react-intersection-observer';

const SERVICES = [
  { icon: Gem, title: "Jewellery Sales", desc: "Exquisite collection of Gold & Silver jewellery for every occasion." },
  { icon: Hammer, title: "Repair & Restoration", desc: "Expert repair services to bring your precious pieces back to life." },
  { icon: RefreshCw, title: "Old Jewellery Exchange", desc: "Get the best value for your old gold with our transparent exchange process." },
  { icon: Sparkles, title: "Custom Jewellery Making", desc: "Turn your vision into reality with our bespoke custom design services." },
  { icon: Sparkles, title: "Polishing & Cleaning", desc: "Professional cleaning to restore the original brilliance of your jewellery." },
  { icon: Target, title: "Stone Setting & Fixing", desc: "Precise setting of precious stones with expert craftsmanship." },
  { icon: RefreshCw, title: "Resizing Services", desc: "Perfect fit for your rings, bangles, and other cherished items." },
  { icon: Award, title: "Hallmarking Assistance", desc: "Ensuring purity and peace of mind with BIS hallmarking support." },
];

const SPECIALTIES = [
  { name: "Bridal Jewellery", img: "https://images.unsplash.com/photo-1620656088241-1191a629b3ba?auto=format&fit=crop&q=80&w=800" },
  { name: "Temple Jewellery", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800" },
  { name: "Antique Designs", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800" },
  { name: "Modern Wear", img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
       {subtitle && <p className="text-gold max-w-2xl mx-auto uppercase tracking-editorial text-[10px] font-bold mb-4">{subtitle}</p>}
      <h2 className="text-4xl md:text-6xl font-serif text-ink tracking-heading">{title}</h2>
      <div className="w-16 h-px bg-gold/30 mx-auto mt-8" />
    </motion.div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="relative min-h-screen selection:bg-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-paper/80 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 font-sans font-bold mb-1">Nellore, Andhra Pradesh</span>
            <span className="text-xl font-serif leading-none tracking-tight text-ink flex items-baseline gap-2">
              Suresh <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold">Jewellery Works</span>
            </span>
          </motion.div>

          <div className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "text-[11px] uppercase tracking-[0.2em] font-sans font-medium transition-colors relative overflow-hidden group",
                  activeSection === link.id ? "text-gold" : "text-ink/60 hover:text-ink"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-px bg-gold transition-transform duration-300",
                  activeSection === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+919885526557" className="hidden sm:flex items-center gap-2 text-zinc-900 font-semibold text-sm bg-gold/10 px-4 py-2 rounded-full border border-gold/20 hover:bg-gold/20 transition-all">
              <Phone size={14} className="text-gold" />
              <span>+91 98855 26557</span>
            </a>
            <button 
              className="md:hidden text-zinc-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-paper pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-3xl font-serif text-left border-b border-gold/10 pb-4"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center bg-paper overflow-hidden pt-20">
          {/* Editorial Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -z-0" />
          <div className="absolute top-[30%] right-12 w-32 h-32 border border-gold/10 rounded-full flex items-center justify-center -z-0">
            <div className="w-28 h-28 border border-gold/30 rounded-full flex items-center justify-center">
              <span className="text-[10px] text-center uppercase tracking-[0.2em] font-sans font-bold leading-tight opacity-40">Est. <br/>Nellore</span>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-12 md:px-16 lg:px-32 w-full grid md:grid-cols-[1.2fr_1fr] gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="absolute -left-20 -top-24 text-[180px] md:text-[240px] leading-none text-gold/5 select-none font-bold italic tracking-tighter -z-10 pointer-events-none">
                Suresh
              </div>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.9] text-ink tracking-heading mb-10">
                Fine Gold <br />
                <span className="italic font-light text-gold">& Silver</span> Works
              </h1>
              <p className="text-ink/70 text-lg md:text-xl mb-12 max-w-md font-light leading-relaxed">
                A legacy of trust in the heart of Chinna Bazzar. Crafting exquisite temple designs and modern heirlooms since generations.
              </p>
              
              <div className="flex flex-wrap gap-10 items-center">
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="bg-gold text-white px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-gold-dark transition-all rounded-none ring-1 ring-gold ring-offset-4 ring-offset-paper"
                >
                  View Collection
                </button>
                <div className="flex flex-col border-l border-gold/20 pl-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">Authentic</span>
                  <span className="text-sm font-serif">Nellore, AP</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              style={{ opacity, scale }}
              className="relative hidden md:block aspect-[4/5] overflow-hidden bg-gold/5 grayscale-[0.2] border border-gold/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                alt="Jewellery Hero"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[30px] border-paper/20" />
            </motion.div>
          </div>
        </section>

        {/* Highlight Stats */}
        <section className="bg-paper py-20 border-y border-gold/10">
          <div className="max-w-7xl mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Quality Purity', val: '22K / 24K' },
              { label: 'Heritage', val: '25+ Years' },
              { label: 'Craftsmanship', val: 'Artisanal' },
              { label: 'Pricing', val: 'Transparent' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2"
              >
                <div className="text-[10px] uppercase tracking-editorial font-bold text-gold">{stat.label}</div>
                <div className="text-3xl font-serif text-ink">{stat.val}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-paper overflow-hidden">
          <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gold/5 grayscale-[0.2]">
                <img 
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover mix-blend-multiply opacity-70"
                  alt="Craftsmanship"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gold p-8 text-white hidden md:block">
                <span className="text-[10px] uppercase tracking-editorial font-bold mb-2 block">Quality Guaranteed</span>
                <h3 className="text-xl font-serif">BIS Hallmarked Excellence</h3>
              </div>
            </motion.div>

            <div className="space-y-10">
              <span className="text-gold font-bold uppercase tracking-editorial text-[10px]">Our Story</span>
              <h2 className="text-5xl md:text-6xl font-serif text-ink leading-[1.1]">
                Master Craftsmanship <br /> <span className="italic font-light">Since Generations.</span>
              </h2>
              <p className="text-ink/70 text-lg leading-relaxed font-light">
                Suresh Jewellery Works stands as a beacon of artisanal excellence in Nellore. 
                Our legacy is built on the pillars of purity, precision, and personal connection. 
                From the intricate details of Temple Jewellery to the minimalist elegance of 
                Modern Wear, each piece is a testament to our dedicated craftsmanship.
              </p>
              <div className="grid sm:grid-cols-2 gap-10 pt-4">
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-gold">Honest Pricing</h4>
                  <p className="text-sm text-ink/60 font-light">Transparent billing with no hidden making charges.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-gold">Custom Design</h4>
                  <p className="text-sm text-ink/60 font-light">Bespoke creations tailored to your unique vision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-12">
            <SectionTitle 
              title="Master Services" 
              subtitle="The Art of Perfection" 
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gold/10">
              {SERVICES.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-12 border border-gold/10 hover:bg-gold/5 transition-all group flex flex-col items-center text-center"
                >
                  <div className="text-gold mb-8 transform group-hover:scale-110 transition-transform">
                    <item.icon size={32} strokeWidth={1} />
                  </div>
                  <h3 className="text-lg font-serif mb-4 text-ink">{item.title}</h3>
                  <p className="text-ink/50 text-xs tracking-tight leading-relaxed max-w-[200px]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties (Horizontal Scroll or Large Tiles) */}
        <section className="bg-zinc-900 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs block mb-4">Our Specialities</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white">Masterpieces in Gold & Silver</h2>
              </div>
              <button className="text-white border border-white/20 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                View All Categories
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SPECIALTIES.map((spec, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
                >
                  <img 
                    src={spec.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    alt={spec.name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-serif text-white mb-2">{spec.name}</h3>
                    <div className="h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-paper">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle 
              title="Gallery" 
              subtitle="Behold the Craft" 
            />
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {GALLERY.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden relative group cursor-zoom-in"
                >
                  <img 
                    src={img} 
                    className="w-full h-auto object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" 
                    alt={`Jewellery ${i}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full text-zinc-900 transform scale-50 group-hover:scale-100 transition-transform">
                      <Search size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="bg-gold py-24 mb-12">
          <div className="max-w-7xl mx-auto px-12 text-center text-white space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-editorial opacity-60">Subscribe to our Story</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-heading max-w-4xl mx-auto leading-tight italic font-light">
              Experience Timeless Elegance and Artisanal Mastery at <br /> Suresh Jewellery Works.
            </h2>
            <div className="max-w-md mx-auto flex gap-4 pt-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-transparent border-b border-white/30 px-2 py-4 text-sm focus:outline-none focus:border-white transition-all"
              />
              <button className="text-[10px] font-bold uppercase tracking-widest border border-white/40 px-8 py-4 hover:bg-white hover:text-gold transition-all">
                Join Now
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24">
              <div>
                <SectionTitle 
                  title="Visit Our Store" 
                  subtitle="Nellore, AP" 
                />
                
                <div className="space-y-12">
                  <div className="flex items-start gap-8">
                    <div className="text-gold pt-1"><MapPin size={20} /></div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-editorial font-bold text-gold mb-3">Our Location</h4>
                      <address className="not-italic text-lg text-ink/70 leading-relaxed font-serif">
                        CM Complex, Korada Street,<br />
                        Chinna Bazzar, Nellore, Andhra Pradesh
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="text-gold pt-1"><Phone size={20} /></div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-editorial font-bold text-gold mb-3">Direct Contact</h4>
                      <a href="tel:+919885526557" className="text-3xl font-light text-ink hover:text-gold transition-colors tracking-tighter">
                        +91 98855 26557
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="text-gold pt-1"><Clock size={20} /></div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-editorial font-bold text-gold mb-3">Store Hours</h4>
                      <div className="text-lg text-ink/70 font-serif flex justify-between pr-24">
                        <span>Mon – Sat</span>
                        <span>10AM – 7PM</span>
                      </div>
                      <div className="text-lg text-ink/30 font-serif flex justify-between pr-24 italic mt-1">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-paper p-12 lg:p-16 border border-gold/10"
              >
                <div className="mb-10">
                  <h3 className="text-3xl font-serif text-ink mb-2">Private Consultation</h3>
                  <p className="text-ink/50 text-sm font-light">Book an appointment or send an inquiry.</p>
                </div>
                
                <form className="space-y-8">
                  <div className="space-y-6">
                    <div className="border-b border-gold/20 pb-2">
                       <input 
                        type="text" 
                        placeholder="Your Full Name"
                        className="w-full bg-transparent text-ink placeholder:text-ink/30 focus:outline-none py-2 text-lg font-serif"
                      />
                    </div>
                    <div className="border-b border-gold/20 pb-2">
                      <input 
                        type="tel" 
                        placeholder="Contact Number"
                        className="w-full bg-transparent text-ink placeholder:text-ink/30 focus:outline-none py-2 text-lg font-serif"
                      />
                    </div>
                    <div className="border-b border-gold/20 pb-2">
                      <select className="w-full bg-transparent text-ink focus:outline-none py-2 text-lg font-serif appearance-none">
                        <option>Interests</option>
                        <option>Bridal Customization</option>
                        <option>Old Gold Exchange</option>
                        <option>Temple Jewellery</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full bg-gold text-white font-bold uppercase tracking-widest text-[10px] py-5 hover:bg-gold-dark transition-all">
                    Send Inquiry
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24 items-start">
            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-gold">Suresh</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Jewellery Works</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                Exquisite craftsmanship and a heritage of trust in the heart of Nellore. 
                Designing pieces that tell your story.
              </p>
              <div className="flex gap-6">
                <a href="#" className="opacity-40 hover:opacity-100 hover:text-gold transition-all"><Instagram size={20} strokeWidth={1.5} /></a>
                <a href="#" className="opacity-40 hover:opacity-100 hover:text-gold transition-all"><Facebook size={20} strokeWidth={1.5} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-editorial font-bold text-gold mb-8">Navigation</h4>
              <ul className="space-y-4 text-xs tracking-widest uppercase font-sans font-medium text-white/50">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)} className="hover:text-gold transition-colors">{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-editorial font-bold text-gold mb-8">Collections</h4>
              <ul className="space-y-4 text-xs tracking-widest uppercase font-sans font-medium text-white/50">
                <li>Bridal Wear</li>
                <li>Antique Gold</li>
                <li>Silver Heirlooms</li>
                <li>Temple Designs</li>
                <li>Custom Pieces</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-editorial font-bold text-gold mb-8">Visit</h4>
              <address className="not-italic text-sm text-white/40 leading-relaxed font-light mb-6">
                CM Complex, Korada Street,<br />
                Chinna Bazzar, Nellore, AP
              </address>
              <p className="text-sm text-white/40 font-light">+91 98855 26557</p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] font-bold text-white/20">
            <p>&copy; 2026 Suresh Jewellery Works. Nellore, Andhra Pradesh.</p>
            <p>Editorial Aesthetic Concept</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
