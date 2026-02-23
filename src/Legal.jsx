import React, { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

function PrivacyPolicy({ onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="policy-page" style={{ background: 'var(--bg-soft)', minHeight: '100vh', padding: '120px 20px' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--white)', padding: '60px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--glass-shadow)' }}>
                <button
                    onClick={onBack}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'none', color: 'var(--primary-emerald)', fontWeight: 600, cursor: 'pointer', marginBottom: '40px' }}
                >
                    <ArrowLeft size={20} /> Back to Home
                </button>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--bg-dark)' }}>Privacy Policy</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Last Updated: February 23, 2026</p>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--bg-dark)' }}>1. Introduction</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        At KSR Tech Solutions, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--bg-dark)' }}>2. Data We Collect</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '16px', paddingLeft: '20px' }}>
                        <li>Identity Data (name, username)</li>
                        <li>Contact Data (email address, telephone numbers)</li>
                        <li>Technical Data (IP address, browser type and version, time zone setting)</li>
                        <li>Usage Data (information about how you use our website and services)</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--bg-dark)' }}>3. How We Use Your Data</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginTop: '16px', paddingLeft: '20px' }}>
                        <li>To register you as a new client</li>
                        <li>To process and deliver your project orders</li>
                        <li>To manage our relationship with you</li>
                        <li>To improve our website, services, and customer experiences</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--bg-dark)' }}>4. Contact Us</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        <br />
                        <strong>Email:</strong> kunalsinghrajput2125@gmail.com
                    </p>
                </section>
            </div>
        </div>
    )
}

function TermsOfService({ onBack }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="policy-page" style={{ background: 'var(--bg-soft)', minHeight: '100vh', padding: '120px 20px' }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--white)', padding: '60px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--glass-shadow)' }}>
                <button
                    onClick={onBack}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'none', color: 'var(--primary-emerald)', fontWeight: 600, cursor: 'pointer', marginBottom: '40px' }}
                >
                    <ArrowLeft size={20} /> Back to Home
                </button>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'var(--bg-dark)' }}>Terms of Service</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Last Updated: February 23, 2026</p>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--bg-dark)' }}>1. Agreement to Terms</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        By accessing or using the services provided by KSR Tech Solutions, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--bg-dark)' }}>2. Services</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        KSR Tech Solutions provides premium digital solutions including web development, enterprise systems, and technical consulting. All services are subject to a separate project agreement or statement of work.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--bg-dark)' }}>3. Intellectual Property</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        The Service and its original content, features, and functionality are and will remain the exclusive property of KSR Tech Solutions and its licensors. Upon full payment for services, specific deliverables may be transferred to the client as outlined in the signed project agreement.
                    </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--bg-dark)' }}>4. Termination</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                </section>
            </div>
        </div>
    )
}

export { PrivacyPolicy, TermsOfService }
