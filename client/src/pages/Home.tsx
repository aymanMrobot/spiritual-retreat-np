import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Leaf, Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? "bg-background/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-4 md:py-6"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo.webp" alt="Daba Village Logo" className="h-10 md:h-12 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center gap-8 font-sans text-sm tracking-widest uppercase ${scrolled ? "text-foreground" : "text-white"}`}>
            <a href="#about" className="hover:text-primary transition-colors">Our Story</a>
            <a href="#experience" className="hover:text-primary transition-colors">The Retreat Experience</a>
            <a href="#retreats" className="hover:text-primary transition-colors">Dates & Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <Button variant="outline" className={`${scrolled ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground" : "border-white text-white hover:bg-white hover:text-black"} rounded-none px-6`} asChild>
              <a href="https://api.whatsapp.com/send?phone=212655699126&text=I%20would%20like%20to%20enquire%20about%20Daba%20Riad" target="_blank" rel="noopener noreferrer">Inquire</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${scrolled || mobileMenuOpen ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Content */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-6 px-4 flex flex-col gap-6 font-sans text-sm tracking-widest uppercase text-foreground">
            <a href="#about" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
            <a href="#experience" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>The Retreat Experience</a>
            <a href="#retreats" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Dates & Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none w-full" asChild onClick={() => setMobileMenuOpen(false)}>
              <a href="https://api.whatsapp.com/send?phone=212655699126&text=I%20would%20like%20to%20enquire%20about%20Daba%20Riad" target="_blank" rel="noopener noreferrer">Inquire</a>
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bcb342b6-2d37-4527-b612-f345c7b7f52d.webp"
            alt="Moroccan Retreat Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center gap-6"
          >
            <motion.span variants={fadeIn} className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-gold">
              Daba Village Retreats
            </motion.span>
            <motion.h1 variants={fadeIn} className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white">
              Find Your Sakinah <br /> in the Heart of Morocco
            </motion.h1>
            <motion.p variants={fadeIn} className="font-sans text-lg md:text-xl max-w-2xl mx-auto font-light opacity-90 mt-4">
              A sanctuary for the soul. Join us at Daba Village for a transformative journey of Tazkiyah (purification), reflection, and spiritual reconnection amidst the tranquility of the Moroccan landscape.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button className="bg-gold text-white hover:bg-gold/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase border border-gold" asChild>
                <a href="/retreats">
                  Explore Our Retreats
                </a>
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase" asChild>
                <a href="https://dabavillage.uk/" target="_blank" rel="noopener noreferrer">
                  Back to Daba Village Main Site
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </header>

      {/* Introduction */}
      <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/courtyard_night.jpg?v=2"
                  alt="Moroccan reflection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-[4/3] overflow-hidden hidden md:block border-8 border-background">
                <img
                  src="/images/garden_path.jpg"
                  alt="Tranquil garden path"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <span className="text-teal font-sans text-xs tracking-[0.2em] uppercase">The Vision</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                Reconnect with the <span className="italic text-teal">Divine</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Inspired by the wisdom of the Quran and the poetic depth of Rumi, Daba Spiritual Retreats offers a space to pause. In the hustle of modern life, we provide a "Maqam" (station) of peace.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our retreats are designed to nourish the Ruh (spirit) through guided reflection, communal dhikr, and the breathtaking beauty of God's creation in Morocco.
              </p>
              <div className="pt-4">
                <a href="#experience" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors uppercase text-xs tracking-widest border-b border-primary pb-1">
                  The Retreat Experience <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience / Offerings */}
      <section id="experience" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-sans text-xs tracking-[0.2em] uppercase">The Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 text-teal">A Journey of Reconnection</h2>
            <p className="text-muted-foreground font-light">
              Nourish your soul, body, and mind with our carefully curated spiritual experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Spiritual Growth",
                desc: "Daily guided Dhikr, Fajr reflections, and workshops on Islamic spirituality and mindfulness.",
                icon: <Moon className="w-6 h-6 text-gold" />,
                image: "/images/retreat_palms.jpg"
              },
              {
                title: "Halal Tayyib Living",
                desc: "Nourish your body with organic, farm-to-table Moroccan cuisine, prepared with love and mindfulness.",
                icon: <Leaf className="w-6 h-6 text-primary" />,
                image: "/images/olives.jpg?v=2"
              },
              {
                title: "Nature as a Teacher",
                desc: "Silent walks through the Moroccan hills and contemplation sessions under the stars.",
                icon: <Sun className="w-6 h-6 text-teal" />,
                image: "/images/willow_picnic.jpg"
              },
              {
                title: "Community (Suhbah)",
                desc: "Share stories and wisdom with like-minded souls in our traditional Moroccan lounge.",
                icon: <Calendar className="w-6 h-6 text-secondary" />,
                image: "/images/community_suhbah.jpg"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Rooted in Tradition */}
      <section className="py-24 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#8B5A2B] font-sans text-xs tracking-[0.2em] uppercase">Activities & Experiences</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 text-[#556B2F]">Experiences Rooted in Tradition</h2>
            <p className="text-[#8B5A2B]/80 font-light text-lg leading-relaxed">
              Nourish your spirit and revive the Sunnah through mindful activities, sacred gatherings, and the timeless beauty of the Moroccan landscape.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex flex-col gap-4"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/IMG_3254.jpg" alt="Archery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[21/9] overflow-hidden">
                  <img src="/images/horse 2.webp" alt="Equestrian Arts" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col gap-6"
              >
                <span className="text-[#8B5A2B] font-sans text-xs tracking-[0.2em] uppercase">Archery & Equestrian Arts</span>
                <h3 className="font-serif text-3xl md:text-4xl text-[#556B2F]">The Sunnah of Strength</h3>
                <p className="text-[#8B5A2B]/80 leading-relaxed font-light">
                  Echoing the timeless Prophetic tradition that encourages the mastery of archery and horsemanship, we offer guided sessions through the breathtaking Moroccan terrain. This experience is designed for guests of all ages—inviting adults and youth alike to cultivate focus, physical discipline, and inner stillness. Reconnect with the strength of the Sunnah, grounding your body while elevating your spirit.
                </p>
              </motion.div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex flex-col gap-4"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/henna_new.jpg?v=2" alt="Sacred Gatherings for Sisters" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[21/9] overflow-hidden">
                  <img src="/images/Pool.jpg" alt="Private Ladies Pool" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col gap-6"
              >
                <span className="text-[#8B5A2B] font-sans text-xs tracking-[0.2em] uppercase">Sacred Gatherings for Sisters</span>
                <h3 className="font-serif text-3xl md:text-4xl text-[#556B2F]">Sisterhood, Henna & Harmony</h3>
                <p className="text-[#8B5A2B]/80 leading-relaxed font-light">
                  A dedicated, private sanctuary for women to connect and unwind, featuring a private ladies-only pool. Enjoy traditional Moroccan henna artistry, storytelling, and soulful evenings filled with beautiful spiritual Nasheeds accompanied by live, traditional drums. A space to foster deep sisterhood and inner peace.
                </p>
              </motion.div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 flex flex-col gap-4"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/IMG_2623.JPG" alt="Zaouia & Masjid Gatherings" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="aspect-[21/9] overflow-hidden">
                  <img src="/images/zaouia_gathering.jpg?v=2" alt="Spiritual Music" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col gap-6"
              >
                <span className="text-[#8B5A2B] font-sans text-xs tracking-[0.2em] uppercase">Sacred Spaces</span>
                <h3 className="font-serif text-3xl md:text-4xl text-[#556B2F]">Zaouia & Masjid Gatherings</h3>
                <p className="text-[#8B5A2B]/80 leading-relaxed font-light">
                  Join in profound spiritual gatherings at our Zaouia and Masjid. A dedicated sanctuary for communal prayer, deep conversations, and uplifting spiritual sessions set to the stirring sounds of traditional drums and acoustic strings. A space to forge lifelong bonds in a spiritually uplifting atmosphere.
                </p>
              </motion.div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 aspect-[4/3] overflow-hidden"
              >
                <img src="/images/dinner_stars.jpg" alt="Tafakkur (Contemplation) Under the Sky" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:w-1/2 flex flex-col gap-6"
              >
                <span className="text-[#8B5A2B] font-sans text-xs tracking-[0.2em] uppercase">Tafakkur Under the Sky</span>
                <h3 className="font-serif text-3xl md:text-4xl text-[#556B2F]">Nights Under the Stars</h3>
                <p className="text-[#8B5A2B]/80 leading-relaxed font-light">
                  Step away from the lights of the city and immerse yourself in the majesty of God’s creation. Join us for guided night walks and stargazing sessions. Wrap yourself in a warm Moroccan blanket, sip fresh mint tea, and engage in Tafakkur (deep contemplation) under the vast, unpolluted celestial canopy.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section id="retreats" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <span className="text-primary font-sans text-xs tracking-[0.2em] uppercase">Accommodation</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8">Your Home in Morocco</h2>
              <p className="text-muted-foreground font-light mb-4">
                Our retreats are hosted at the beautiful Daba Village, featuring up to 16 bedrooms hosting up to 40 people.
              </p>
              <p className="text-muted-foreground font-light mb-8 text-sm">
                <span className="italic">
                  <strong>Low Season:</strong> Jan, Feb, Jul, Aug.<br />
                  <strong>High Season:</strong> All other months.<br />
                  <strong>Very High Season:</strong> Apr, Oct, Dec 15 - Jan 5.
                </span><br /><br />
                <span className="font-medium text-primary">Prices include taxes + meals + accommodation + standard services.</span>
              </p>
              <div className="space-y-6">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-6 py-4 uppercase tracking-widest text-xs" asChild>
                  <a href="/retreats">
                    Explore Accommodation & Retreats
                  </a>
                </Button>
              </div>

            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Triple Suite */}
              <div className="border border-border p-8 hover:border-primary/50 transition-colors duration-300 bg-card">
                <h3 className="font-serif text-2xl mb-2">Triple Suite</h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Shared Occupancy • Per Person / Night</p>

                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-border/50 pb-2">
                    <span className="font-sans text-sm">Low Season</span>
                    <span className="font-serif text-lg italic text-muted-foreground">Upon Request</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-border/50 pb-2">
                    <span className="font-sans text-sm">High Season</span>
                    <span className="font-serif text-lg italic text-muted-foreground">Upon Request</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-2">
                    <span className="font-sans text-sm">Very High Season</span>
                    <span className="font-serif text-lg italic text-muted-foreground">Upon Request</span>
                  </div>
                </div>
              </div>

              {/* Double Suite */}
              <div className="border border-border p-8 hover:border-primary/50 transition-colors duration-300 bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1">Popular</div>
                <h3 className="font-serif text-2xl mb-2">Double Suite</h3>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Shared Occupancy • Per Person / Night</p>

                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-border/50 pb-2">
                    <span className="font-sans text-sm">Low Season</span>
                    <span className="font-serif text-lg italic text-muted-foreground">Upon Request</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-border/50 pb-2">
                    <span className="font-sans text-sm">High Season</span>
                    <span className="font-serif text-lg italic text-muted-foreground">Upon Request</span>
                  </div>
                  <div className="flex justify-between items-baseline pb-2">
                    <span className="font-sans text-sm">Very High Season</span>
                    <span className="font-serif text-lg italic text-muted-foreground">Upon Request</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  *Extra bed in same room: Upon Request
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Journey */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-white/70 font-sans text-xs tracking-[0.2em] uppercase">Nourish</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-8 text-white">Farm to Table</h2>
              <p className="text-white/80 font-light text-lg leading-relaxed mb-10">
                <strong className="text-white block mb-2">Full Board Basis:</strong> Your stay includes both accommodation and all meals.<br /><br />
                <strong className="text-white">Farm-to-Table Meals:</strong> All meals are cooked with local produce, accommodating vegetarian, vegan, and gluten-free needs.<br /><br />
                <span className="italic block text-base text-white/90">Pick your own eggs & drink organic whole milk from our cows to experience true farm-to-table living!</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center lg:text-left">
                <div className="p-4 border border-white/20 rounded-sm">
                  <h4 className="font-serif text-xl mb-2">Breakfast</h4>
                  <p className="text-sm text-white/70 font-light">Fresh juices, Moroccan pancakes, fruits & organic eggs</p>
                </div>
                <div className="p-4 border border-white/20 rounded-sm">
                  <h4 className="font-serif text-xl mb-2">Lunch</h4>
                  <p className="text-sm text-white/70 font-light">Soups, fresh garden salads or sandwiches</p>
                </div>
                <div className="p-4 border border-white/20 rounded-sm">
                  <h4 className="font-serif text-xl mb-2">Dinner</h4>
                  <p className="text-sm text-white/70 font-light">Full dinner served between 5:00 PM and 7:00 PM.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-4">
              <div className="aspect-[4/3] w-full overflow-hidden border-4 border-white/10 rounded-sm">
                <img src="/images/Organic food.jpg" alt="Organic Moroccan Food" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="aspect-[21/9] w-full overflow-hidden border-4 border-white/10 rounded-sm hidden md:block relative">
                <img src="/images/Farm.jpg" alt="Our Farm" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          <div className="mt-16 text-left border-t border-white/20 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-gold">Venue Exclusivity</h3>
              <ul className="space-y-4 text-white/80 font-light text-sm">
                <li><strong>Full Exclusivity:</strong> Groups with a minimum of 15-room occupancy receive exclusive use of the entire venue.</li>
                <li><strong>Retreat Space Exclusivity:</strong> Groups of 12–20 participants receive exclusive use of our dedicated retreat and meditation space.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4 text-gold">Teacher Benefits</h3>
              <p className="text-white/80 font-light text-sm">
                Complementary stay for the Teacher or Organizer for groups over 20 people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rumi Quote Section */}
      <section className="py-32 relative bg-fixed-parallax flex items-center justify-center min-h-[60vh] text-center" style={{ backgroundImage: "url('/images/9e25ed9c-3fc9-4af2-a286-c1585264c2c5.webp')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight italic font-light">
              "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it."
            </h2>
            <p className="text-gold font-sans uppercase tracking-[0.3em] mt-8 text-sm">— Rumi</p>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-background pt-24 pb-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <img src="/images/logo.webp" alt="Daba Village" className="h-16 w-auto mb-6 opacity-80" />
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                A sanctuary of peace in the heart of Morocco. Part of the Daba Village Family.
              </p>
              <div className="mt-6">
                <a href="https://dabavillage.uk/" target="_blank" rel="noopener noreferrer" className="text-teal text-sm uppercase tracking-widest border-b border-teal pb-1 hover:text-teal/80 transition-colors">
                  Visit Main Daba Village Site
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-muted-foreground font-light">
                <li>Route Ourika, Km 12<br />Mohamadia 9<br />Tameslouht 42312</li>
                <li><a href="tel:+212655699126" className="hover:text-primary transition-colors">+212 655 699 126</a></li>
                <li><a href="mailto:info@dabavillage.com" className="hover:text-primary transition-colors">info@dabavillage.com</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-muted-foreground font-light">
                <li><a href="#about" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">The Retreat Experience</a></li>
                <li><a href="#retreats" className="hover:text-primary transition-colors">Dates & Pricing</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 text-gold">Begin Your Journey</h4>
              <p className="text-sm text-muted-foreground font-light mb-4">
                Join our circle. Receive spiritual reflections and updates on upcoming retreat dates.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-b border-border focus:border-gold outline-none py-2 w-full text-sm font-light"
                />
                <button className="text-gold uppercase text-xs tracking-widest hover:text-gold/80">Join</button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-light tracking-widest uppercase">
            <p>© 2025 Daba Village. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/daba.village/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
              <a href="https://api.whatsapp.com/send?phone=212655699126&text=I%20would%20like%20to%20enquire%20about%20Daba%20Riad" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}
