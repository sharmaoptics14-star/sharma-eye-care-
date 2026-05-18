export default function SharmaEyeCareWebsite() {
  const services = [
    "Computerized Eye Testing",
    "Prescription Glasses",
    "Contact Lenses",
    "Sunglasses",
    "Kids Eyewear",
    "Lens Replacement & Repairs",
    "Blue Cut & Anti-Glare Lenses",
  ];

  const reasons = [
    {
      title: "Experienced Guidance",
      desc: "Professional support to help you choose the right vision solutions.",
    },
    {
      title: "Affordable Pricing",
      desc: "Quality eyewear and eye care services at fair and transparent prices.",
    },
    {
      title: "Genuine Products",
      desc: "Reliable lenses and stylish frames sourced from trusted brands.",
    },
    {
      title: "Modern Eye Testing",
      desc: "Accurate computerized eye testing for precise prescriptions.",
    },
    {
      title: "Customer Satisfaction",
      desc: "Focused on comfort, trust, and long-term vision care.",
    },
    {
      title: "Personalized Attention",
      desc: "Family-friendly service tailored to every age group.",
    },
  ];

  const testimonials = [
    {
      name: "Rakesh Mehta",
      text: "Very polite behavior and honest advice. My glasses fitting and lens quality were excellent.",
    },
    {
      name: "Sunita Jain",
      text: "Eye testing was accurate and the staff explained everything clearly. Highly recommended in Sadri.",
    },
    {
      name: "Mohit Solanki",
      text: "Affordable pricing with stylish frames. The experience felt professional and comfortable.",
    },
  ];

  const products = [
    {
      title: "Premium Frames",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Stylish Sunglasses",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Modern Lenses",
      image:
        "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Family Eyewear",
      image:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans scroll-smooth">
      {/* Floating Buttons */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="tel:+917891384329"
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-full shadow-xl transition-all"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/917891384329"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl transition-all"
        >
          WhatsApp
        </a>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Sharma Eye Care & Opticals
            </h1>
            <p className="text-sm text-slate-500">Clear Vision, Trusted Care.</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-700 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-blue-700 transition-colors">
              Services
            </a>
            <a href="#products" className="hover:text-blue-700 transition-colors">
              Products
            </a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in duration-700">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              Trusted Optical Shop in Sadri
            </div>

            <div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                Clear Vision,
                <span className="text-blue-700"> Trusted Care.</span>
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Complete eye care solutions with stylish eyewear and professional guidance for every age.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#appointment"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg transition-all"
              >
                Book Eye Checkup
              </a>

              <a
                href="#products"
                className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-xl transition-all"
              >
                Explore Frames
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1400&auto=format&fit=crop"
              alt="Premium Optical Store"
              className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1588776814546-bc7d6c8c1f5f?q=80&w=1400&auto=format&fit=crop"
            alt="Eye Testing"
            className="rounded-3xl shadow-xl h-[450px] object-cover"
          />

          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
              About Us
            </span>

            <h3 className="text-4xl font-bold mt-4 text-slate-900 leading-tight">
              Trusted Eye Care & Optical Solutions for Families in Sadri
            </h3>

            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              Sharma Eye Care & Opticals is a trusted local optical and eye-care destination serving Sadri and nearby areas with professional consultation, accurate eye testing, quality lenses, and stylish eyewear.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              We are committed to customer satisfaction, honest guidance, and affordable quality products that improve vision and confidence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h4 className="font-semibold text-blue-900">Accurate Eye Testing</h4>
                <p className="text-slate-500 mt-2">Modern computerized vision checks.</p>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <h4 className="font-semibold text-blue-900">Premium Eyewear</h4>
                <p className="text-slate-500 mt-2">Stylish and comfortable frames.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
              Our Services
            </span>

            <h3 className="text-4xl font-bold mt-4 text-slate-900">
              Complete Eye Care & Optical Services
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-2xl mb-5">
                  👓
                </div>
                <h4 className="font-semibold text-lg text-slate-900">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
              Why Choose Us
            </span>

            <h3 className="text-4xl font-bold mt-4 text-slate-900">
              Reliable Eye Care with Genuine Service
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-semibold text-blue-900">
                  {reason.title}
                </h4>
                <p className="mt-4 text-slate-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
              Product Collection
            </span>

            <h3 className="text-4xl font-bold mt-4 text-slate-900">
              Stylish Frames & Modern Lens Solutions
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-3xl shadow-lg bg-white group"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-slate-900">
                    {product.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lens Clarity */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
            Better Vision Experience
          </span>

          <h3 className="text-4xl font-bold mt-4 text-slate-900">
            Experience Clearer & More Comfortable Vision
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
                alt="Before Lens"
                className="h-80 w-full object-cover blur-sm"
              />
              <div className="p-5 font-semibold text-slate-700">Before Anti-Glare Lens</div>
            </div>

            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
                alt="After Lens"
                className="h-80 w-full object-cover"
              />
              <div className="p-5 font-semibold text-slate-700">After Blue Cut & Anti-Glare Lens</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-300 font-semibold uppercase tracking-widest text-sm">
              Customer Testimonials
            </span>

            <h3 className="text-4xl font-bold mt-4">
              Trusted by Families Across Sadri
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
              >
                <p className="leading-relaxed text-slate-200">“{item.text}”</p>
                <h4 className="mt-6 font-semibold text-lg">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Tips */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
              Eye Health Tips
            </span>

            <h3 className="text-4xl font-bold mt-4 text-slate-900">
              Helpful Tips for Healthy Vision
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              "Protect your eyes from screen strain with blue-cut lenses.",
              "Regular eye checkups help detect vision problems early.",
              "Choose UV-protected sunglasses for outdoor protection.",
            ].map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-md border border-slate-100"
              >
                <h4 className="font-semibold text-xl text-blue-900">
                  Eye Care Tip {idx + 1}
                </h4>
                <p className="mt-4 text-slate-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section id="appointment" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-[40px] p-10 md:p-16 text-white shadow-2xl">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-4xl font-bold">Book an Eye Checkup</h3>
              <p className="mt-4 text-slate-300">
                Schedule your visit for accurate eye testing and personalized eyewear guidance.
              </p>
            </div>

            <form className="grid md:grid-cols-2 gap-6 mt-12">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-blue-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-blue-400"
              />

              <input
                type="date"
                className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-blue-400"
              />

              <select className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-blue-400">
                <option>Choose Service</option>
                <option>Eye Testing</option>
                <option>Frames & Glasses</option>
                <option>Contact Lenses</option>
              </select>

              <textarea
                rows={4}
                placeholder="Additional Notes"
                className="md:col-span-2 bg-white/10 border border-white/20 rounded-2xl px-5 py-4 outline-none focus:border-blue-400"
              ></textarea>

              <a
             href="https://forms.gle/J6B4WwZGWtb1Hw2JA"
             target="_blank"
             className="md:col-span-2 bg-white text-blue-900 hover:bg-blue-100 font-semibold py-4 rounded-2xl transition-all shadow-lg text-center"
             >
             Confirm Appointment
             </a>
            </form>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-700 font-semibold uppercase tracking-widest text-sm">
              Contact & Location
            </span>

            <h3 className="text-4xl font-bold mt-4 text-slate-900">
              Visit Sharma Eye Care & Opticals
            </h3>

            <div className="mt-8 space-y-5 text-lg text-slate-600">
              <p>
                <strong>Address:</strong> In Front of Bus Stand, Above Dr. Pandey Clinic, First Floor, Sadri – 306702, Pali District, Rajasthan, India
              </p>

              <p>
                <strong>Business Hours:</strong> Monday – Saturday | 9:00 AM – 8:00 PM
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:+917891384329"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  Call Us
                </a>

                <a
                  href="https://wa.me/917891384329"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200 h-[450px]">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Sadri%20Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold text-white">
              Sharma Eye Care & Opticals
            </h4>
            <p className="mt-4 leading-relaxed text-slate-400">
              Your trusted destination for eye care, stylish eyewear, and professional vision solutions in Sadri.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Quick Links</h5>
            <div className="space-y-3">
              <a href="#about" className="block hover:text-white transition-colors">
                About Us
              </a>
              <a href="#services" className="block hover:text-white transition-colors">
                Services
              </a>
              <a href="#products" className="block hover:text-white transition-colors">
                Products
              </a>
              <a href="#contact" className="block hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-white mb-4">Connect With Us</h5>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm">
          © 2026 Sharma Eye Care & Opticals — Your Vision, Our Responsibility.
        </div>
      </footer>
    </div>
  );
}
