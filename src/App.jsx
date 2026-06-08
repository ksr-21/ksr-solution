import React, { useState, useEffect } from 'react'
import {
  Globe,
  Cpu,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import './App.css'
import { PrivacyPolicy, TermsOfService } from './Legal'

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites built for speed and conversion.',
    icon: <Globe size={32} />,
    tag: 'Web'
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent systems and chatbots to automate your business.',
    icon: <Cpu size={32} />,
    tag: 'AI'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that users love.',
    icon: <Zap size={32} />,
    tag: 'Mobile'
  },
  {
    title: 'UI/UX Design',
    description: 'User-centric designs that prioritize usability and aesthetics.',
    icon: <Layers size={32} />,
    tag: 'Design'
  },
  {
    title: 'WhatsApp Automation',
    description: 'Streamline customer communication with automated WhatsApp flows.',
    icon: <Zap size={32} />,
    tag: 'Automation'
  },
  {
    title: 'E-commerce',
    description: 'Scalable online stores built to grow your sales.',
    icon: <Globe size={32} />,
    tag: 'Retail'
  },
  {
    title: 'Custom Software',
    description: 'Tailored solutions for your unique business challenges.',
    icon: <ShieldCheck size={32} />,
    tag: 'Custom'
  },
  {
    title: 'Digital Strategy',
    description: 'Data-driven insights to guide your digital transformation.',
    icon: <Users size={32} />,
    tag: 'Strategy'
  }
]

const processSteps = [
  { step: '01', title: 'Discover', desc: 'In-depth analysis of your business vision and technical requirements.' },
  { step: '02', title: 'Design', desc: 'Designing a robust and scalable technical blueprint for your success.' },
  { step: '03', title: 'Build', desc: 'Iterative development cycles focusing on performance and security.' },
  { step: '04', title: 'Launch', desc: 'Rigorous testing and deployment for a flawless go-live experience.' }
]

const portfolioProjects = [
  { title: 'E-commerce Platform', type: 'Web Development', result: '40% Sales Increase', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
  { title: 'AI Booking Bot', type: 'AI Solutions', result: '60% Auto-Bookings', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998' },
  { title: 'Real Estate Portal', type: 'Web Design', result: '40 Leads/Month', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa' },
  { title: 'Fitness Tracking App', type: 'Mobile App', result: '10k+ Downloads', image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3' }
]

const blogArticles = [
  { title: "Why every Pune business needs a website in 2025", slug: "pune-business-website-2025" },
  { title: "How AI chatbots help restaurants get more bookings", slug: "ai-chatbots-restaurants" },
  { title: "5 signs your business website is losing you customers", slug: "website-losing-customers" },
  { title: "WhatsApp automation for small businesses in India", slug: "whatsapp-automation-india" },
  { title: "How we built a real estate website for 40 leads", slug: "real-estate-leads-case-study" },
  { title: "Website vs Instagram page — why you need both", slug: "website-vs-instagram" }
]

const testimonials = [
  { name: 'Rohan Sharma', role: 'Founder, TechStart Pune', content: 'KSR transformed our digital presence in record time. Their AI solutions are top-notch.' },
  { name: 'Anita Desai', role: 'CEO, Global Retail', content: 'Professional, fast, and highly skilled. The project estimator was a game changer for us.' },
  { name: 'Vikram Singh', role: 'Director, RealEstate India', content: 'The best web development agency in Pune. Highly recommended for custom software.' }
]

const trustStats = [
  { label: 'Experience', value: '3+ Years' },
  { label: 'Projects', value: '50+' },
  { label: 'Location', value: 'Pune-based' },
  { label: 'Reach', value: 'Global Clients' }
]

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [scrolled, setScrolled] = useState(false)
  const [view, setView] = useState('home')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectOverview: '',
    phone: '',
    projectType: '',
    budget: ''
  })
  const [estimatorStep, setEstimatorStep] = useState(1)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Simulate API call delay for a realistic feel
    await new Promise(resolve => setTimeout(resolve, 1500))

    setStatus({
      type: 'success',
      message: 'Thank you for your interest! Our team will contact you shortly.'
    })
    setFormData({ fullName: '', email: '', projectOverview: '' })
    setIsSubmitting(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (view === 'privacy') return <PrivacyPolicy onBack={() => setView('home')} />
  if (view === 'terms') return <TermsOfService onBack={() => setView('home')} />

  return (
    <div className="app">
      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--primary-emerald)',
          transformOrigin: '0%',
          zIndex: 2000
        }}
      />
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">KSR <span>Solutions</span></div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Work</a>
          <a href="#estimator">Estimator</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#estimator" className="btn btn-primary btn-sm" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
          Start a project
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="section-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary-emerald)' }}>Pune&apos;s Leading Tech Agency</span>
            <h1>Any Problem. One Solution.</h1>
            <p>We build websites and AI solutions for businesses that want to grow. Fast. Affordable. Powerful.</p>
            <div className="hero-btns">
              <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-primary">
                WhatsApp Us <ArrowRight size={20} />
              </a>
              <a href="#estimator" className="btn btn-outline">
                Project Estimator
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container">
          <div className="stats-grid">
            {trustStats.map((stat, i) => (
              <div key={i} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Estimator Section */}
      <section id="estimator" className="estimator">
        <div className="container">
          <div className="section-title">
            <span className="section-tag">Instant Quote</span>
            <h2>Project Estimator</h2>
            <p>Tell us what you&apos;re building and get an instant price range and timeline.</p>
          </div>

          <div className="estimator-container card">
            <div className="estimator-steps">
              <div className={`est-step-indicator ${estimatorStep >= 1 ? 'active' : ''}`}>1</div>
              <div className="est-step-line"></div>
              <div className={`est-step-indicator ${estimatorStep >= 2 ? 'active' : ''}`}>2</div>
              <div className="est-step-line"></div>
              <div className={`est-step-indicator ${estimatorStep >= 3 ? 'active' : ''}`}>3</div>
            </div>

            {estimatorStep === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3>What are we building?</h3>
                <div className="estimator-grid">
                  {['Business Website', 'E-commerce Store', 'Mobile Application', 'AI Solution', 'Custom Software'].map(type => (
                    <button
                      key={type}
                      className={`est-option ${formData.projectType === type ? 'selected' : ''}`}
                      onClick={() => { setFormData(prev => ({ ...prev, projectType: type })); setEstimatorStep(2); }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {estimatorStep === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3>Estimated Budget Range</h3>
                <div className="estimator-grid">
                  {['Under ₹50k', '₹50k - ₹2L', '₹2L - ₹5L', '₹5L+'].map(budget => (
                    <button
                      key={budget}
                      className={`est-option ${formData.budget === budget ? 'selected' : ''}`}
                      onClick={() => { setFormData(prev => ({ ...prev, budget: budget })); setEstimatorStep(3); }}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm" onClick={() => setEstimatorStep(1)} style={{ marginTop: '24px' }}>Back</button>
              </motion.div>
            )}

            {estimatorStep === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h3>Final Details</h3>
                <form onSubmit={handleSubmit} className="estimator-form">
                  <div className="form-group">
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Work Email" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="WhatsApp Number" required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Get Instant Quote'}
                  </button>
                  {status.message && (
                    <div className="status-message" style={{ marginTop: '16px' }}>{status.message}</div>
                  )}
                </form>
                <button className="btn btn-outline btn-sm" onClick={() => setEstimatorStep(2)} style={{ marginTop: '24px' }}>Back</button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <span className="section-tag">Our Capabilities</span>
            <h2>Precision-Engineered Solutions</h2>
            <p>Combining architectural rigor with creative insight to deliver products that redefine possibilities.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card service-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <div className="service-icon">{service.icon}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-teal)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{service.tag}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <span className="section-tag">Case Studies</span>
            <h2>Our Featured Work</h2>
            <p>Proven results delivered for diverse industries and business models.</p>
          </div>
          <div className="portfolio-grid">
            {portfolioProjects.map((project, i) => (
              <motion.div
                key={i}
                className="portfolio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="portfolio-img" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="portfolio-overlay">
                    <span className="badge badge-teal">{project.result}</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-type">{project.type}</span>
                  <h4>{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a href="#contact" className="btn btn-outline">View All Case Studies</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <span className="section-tag">Social Proof</span>
            <h2>Results Speak Louder</h2>
            <p>Trusted by founders and directors across India and beyond.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <p className="testimonial-content">&quot;{t.content}&quot;</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <div className="section-title" style={{ textAlign: 'left', marginBottom: '48px' }}>
                <span className="section-tag">Differentiation</span>
                <h2>Any problem. One solution.</h2>
                <p style={{ marginLeft: '0' }}>We bridge the gap between large agencies and unreliable freelancers.</p>
              </div>
              <div className="why-features">
                {[
                  { icon: <Zap size={24} />, title: 'Agency Quality', desc: 'Elite standards and professional delivery frameworks for every project.' },
                  { icon: <Users size={24} />, title: 'Freelancer Speed', desc: 'Direct access to decision-makers and rapid development cycles.' },
                  { icon: <ShieldCheck size={24} />, title: 'Enterprise Reliability', desc: 'Robust, secure, and scalable systems built for long-term growth.' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="feature-item"
                    style={{ display: 'flex', gap: '20px' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className="feature-icon" style={{ background: 'var(--bg-soft)', color: 'var(--primary-emerald)', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--bg-dark)' }}>{feature.title}</h4>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="why-image-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
                  <CheckCircle size={40} color="var(--primary-emerald)" />
                </div>
                <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '16px' }}>Ready to Scale Your Business?</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Get a free consultation and let&apos;s build your digital future today.</p>
              </div>
              <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '300px', height: '300px', background: 'var(--primary-emerald)', opacity: 0.1, filter: 'blur(60px)', borderRadius: '50%' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <div className="section-title">
            <span className="section-tag">The Framework</span>
            <h2>Our Delivery Methodology</h2>
            <p>A high-performance execution model designed to mitigate risk and maximize technical ROI.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((p, index) => (
              <motion.div
                key={index}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="process-number">{p.step}</div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: 700 }}>{p.title}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="blog-preview">
        <div className="container">
          <div className="section-title">
            <span className="section-tag">Insights</span>
            <h2>Latest from the Blog</h2>
            <p>Expertise and industry insights to keep your business ahead.</p>
          </div>
          <div className="blog-grid">
            {blogArticles.slice(0, 3).map((article, i) => (
              <motion.div
                key={i}
                className="blog-card card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="blog-content">
                  <h4>{article.title}</h4>
                  <a href={`/blog/${article.slug}`} className="read-more">Read Article <ArrowRight size={16} /></a>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="#blog" className="btn btn-outline">Visit Blog</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-dark)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '24px', lineHeight: 1.1 }}>Ready to Build Something Great?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '48px' }}>Get your business online with our high-performance websites and AI solutions.</p>
            <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-primary">WhatsApp Us Now</a>
              <a href="#contact" className="btn btn-white">Contact Form</a>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '-50%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'var(--primary-emerald)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }}></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Get in Touch</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Let&apos;s Build the Future Together.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '48px' }}>Based in Pune, serving clients globally with cutting-edge technology.</p>

            <div style={{ display: 'grid', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'var(--accent-mint)', padding: '12px', borderRadius: '12px', color: 'var(--accent-teal)' }}><Mail size={24} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Email Us</div>
                  <div style={{ color: 'var(--text-muted)' }}>kunalsinghrajput2125@gmail.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'var(--accent-mint)', padding: '12px', borderRadius: '12px', color: 'var(--accent-teal)' }}><Zap size={24} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>WhatsApp</div>
                  <div style={{ color: 'var(--text-muted)' }}>+91-XXXXX-XXXXX</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'var(--accent-mint)', padding: '12px', borderRadius: '12px', color: 'var(--accent-teal)' }}><Globe size={24} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Location</div>
                  <div style={{ color: 'var(--text-muted)' }}>Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="card"
            style={{ padding: '48px' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: 'grid', gap: '24px' }}
            >
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Alex Chen"
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alex@enterprise.com"
                  required
                />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Brief Project Overview</label>
                <textarea
                  name="projectOverview"
                  value={formData.projectOverview}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your technical goals..."
                  required
                ></textarea>
              </div>

              {status.message && (
                <div style={{
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: status.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: status.type === 'success' ? '#10b981' : '#ef4444',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textAlign: 'center'
                }}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Initiate Consultation'} <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="footer-logo">KSR <span>Solutions</span></div>
              <p>Building high-performance websites and AI solutions for modern businesses. Fast. Affordable. Powerful.</p>
              <div className="social-links">
                <a href="mailto:kunalsinghrajput2125@gmail.com" className="social-icon"><Mail size={20} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">AI Solutions</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">Custom Software</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#about">About KSR</a></li>
                <li><a href="#portfolio">Our Work</a></li>
                <li><a href="#estimator">Estimator</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setView('privacy'); }}>Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setView('terms'); }}>Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
              © {new Date().getFullYear()} KSR Tech Solutions. All rights reserved. Built with precision.
            </p>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <span style={{ color: 'var(--primary-emerald)', fontSize: '0.85rem', fontWeight: 600 }}>Status: All Systems Operational</span>
              <div style={{ width: '8px', height: '8px', background: 'var(--primary-emerald)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary-emerald)' }}></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
