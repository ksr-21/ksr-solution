import React, { useState, useEffect } from 'react'
import {
  Rocket,
  Briefcase,
  Globe,
  Settings,
  Cpu,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  Linkedin,
  MessageSquare,
  Clock,
  ShieldCheck,
  Zap,
  ChevronRight,
  MousePointer2,
  Calendar,
  Layers
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import { PrivacyPolicy, TermsOfService } from './Legal'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [view, setView] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (view === 'privacy') return <PrivacyPolicy onBack={() => setView('home')} />
  if (view === 'terms') return <TermsOfService onBack={() => setView('home')} />

  const services = [
    {
      title: 'Digital Interfaces',
      description: 'High-conversion, lightning-fast digital experiences crafted with precision and pixel-perfect detail.',
      icon: <Globe size={32} />,
      tag: 'Development'
    },
    {
      title: 'Enterprise Systems',
      description: 'Sophisticated, scalable architecture engineered to power complex business processes and data ecosystems.',
      icon: <Layers size={32} />,
      tag: 'Solutions'
    },
    {
      title: 'Intelligent Automation',
      description: 'Advanced systems that leverage modern tech to eliminate friction and maximize operational efficiency.',
      icon: <Zap size={32} />,
      tag: 'Optimization'
    },
    {
      title: 'Strategic Advisory',
      description: 'Senior-level technical guidance to help you navigate architecture, scaling, and market disruption.',
      icon: <Cpu size={32} />,
      tag: 'Strategy'
    }
  ]

  const processSteps = [
    { step: '01', title: 'Consultation', desc: 'In-depth analysis of your business vision and technical requirements.' },
    { step: '02', title: 'Architecture', desc: 'Designing a robust and scalable technical blueprint for your success.' },
    { step: '03', title: 'Engineering', desc: 'Iterative development cycles focusing on performance and security.' },
    { step: '04', title: 'Assurance', desc: 'Rigorous testing protocols to ensure a flawless deployment experience.' },
    { step: '05', title: 'Evolution', desc: 'Continuous optimization and scaling as your business reaches new heights.' }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">KSR <span>Solutions</span></div>
        <div className="nav-links">
          <a href="#services">Capabilities</a>
          <a href="#about">Philosophy</a>
          <a href="#process">Framework</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="btn btn-primary btn-sm" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="section-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--primary-emerald)' }}>Premium Tech Agency</span>
            <h1>Engineering The Next Era Of Digital Growth.</h1>
            <p>We transform complex enterprise challenges into elegant technical solutions. High-performance software engineered for those who demand excellence.</p>
            <div className="hero-btns">
              <a href="#services" className="btn btn-primary">
                View Capabilities <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Book A Strategy Call
              </a>
            </div>
          </motion.div>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
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

      {/* Why Choose Us */}
      <section id="about" className="why-section">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <div className="section-title" style={{ textAlign: 'left', marginBottom: '48px' }}>
                <span className="section-tag">Philosophy</span>
                <h2>Why Visionaries Partner With Us</h2>
                <p style={{ marginLeft: '0' }}>Operating at the intersection of technical excellence and strategic business impact.</p>
              </div>
              <div className="why-features">
                {[
                  { icon: <Zap size={24} />, title: 'Inherent Scalability', desc: 'Systems architected to handle hyper-growth without compromising stability.' },
                  { icon: <ShieldCheck size={24} />, title: 'Security By Design', desc: 'Rigorous security protocols integrated into every line of code we write.' },
                  { icon: <Users size={24} />, title: 'Elite Engineering', desc: 'Direct collaboration with senior architects and strategic designers.' },
                  { icon: <Zap size={24} />, title: 'Rapid Execution', desc: 'Accelerated development cycles that maintain uncompromising quality.' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="feature-item"
                    style={{ display: 'flex', gap: '20px' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
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
                <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '16px' }}>Engineering Future-Ready Solutions</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem' }}>Built for scale. Optimized for performance. Designed for impact.</p>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="process-number">{p.step}</div>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '12px', fontWeight: 700 }}>{p.title}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-dark)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '24px', lineHeight: 1.1 }}>Ready To Elevate Your Technical Infrastructure?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.25rem', marginBottom: '48px' }}>Join the ranks of high-growth companies building with KSR Tech Solutions.</p>
            <div className="hero-btns" style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="#contact" className="btn btn-primary">Start Your Transformation</a>
              <a href="#contact" className="btn btn-white">Contact Sales</a>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '-50%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'var(--primary-emerald)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }}></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Partnership</span>
            <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Let's Build The Future Together.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '48px' }}>Have a complex challenge? We have the technical expertise to solve it.</p>

            <div style={{ display: 'grid', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'var(--accent-mint)', padding: '12px', borderRadius: '12px', color: 'var(--accent-teal)' }}><Mail size={24} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>General Inquiries</div>
                  <div style={{ color: 'var(--text-muted)' }}>kunalsinghrajput2125@gmail.com</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ background: 'var(--accent-mint)', padding: '12px', borderRadius: '12px', color: 'var(--accent-teal)' }}><Linkedin size={24} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>LinkedIn</div>
                  <div style={{ color: 'var(--text-muted)' }}>linkedin.com/company/ksr-tech</div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="card"
            style={{ padding: '48px' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form style={{ display: 'grid', gap: '24px' }}>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Full Name</label>
                <input type="text" placeholder="Alex Chen" />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Work Email</label>
                <input type="email" placeholder="alex@enterprise.com" />
              </div>
              <div className="form-group">
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Brief Project Overview</label>
                <textarea rows="4" placeholder="Tell us about your technical goals..."></textarea>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Initiate Consultation <ArrowRight size={20} />
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
              <p>Engineering elite technical infrastructure for high-growth enterprises and ambitious startups globally.</p>
              <div className="social-links">
                <a href="#" className="social-icon"><Linkedin size={20} /></a>
                <a href="mailto:kunalsinghrajput2125@gmail.com" className="social-icon"><Mail size={20} /></a>
                <a href="#" className="social-icon"><Globe size={20} /></a>
                <a href="#" className="social-icon"><Zap size={20} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Capabilities</h4>
              <ul className="footer-links">
                <li><a href="#services">Digital Interfaces</a></li>
                <li><a href="#services">Enterprise Systems</a></li>
                <li><a href="#services">Intelligent Automation</a></li>
                <li><a href="#services">Strategic Advisory</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Organization</h4>
              <ul className="footer-links">
                <li><a href="#about">Our Philosophy</a></li>
                <li><a href="#process">Framework</a></li>
                <li><a href="#contact">Partnership</a></li>
                <li><a href="#contact">Resources</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="#" onClick={(e) => { e.preventDefault(); setView('privacy'); }}>Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setView('terms'); }}>Terms of Service</a></li>
                <li><a href="#contact">Security Audit</a></li>
                <li><a href="#contact">Cookie Policy</a></li>
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
