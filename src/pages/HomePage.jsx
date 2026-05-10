import { Link } from 'react-router-dom';
import { FiZap, FiLayout, FiShield, FiDownload, FiArrowRight, FiStar, FiCpu, FiFileText } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap />,
    title: 'AI-Powered Enhancement',
    desc: 'Transform casual descriptions into polished, professional bullet points with powerful action verbs.',
    color: '#22d3ee',
  },
  {
    icon: <FiLayout />,
    title: 'Multiple Templates',
    desc: 'Choose from Classic, Modern, and Minimal templates designed for maximum impact.',
    color: '#a855f7',
  },
  {
    icon: <FiShield />,
    title: 'ATS Optimized',
    desc: 'Generated resumes are formatted and worded for Applicant Tracking System compatibility.',
    color: '#34d399',
  },
  {
    icon: <FiDownload />,
    title: 'Easy PDF Export',
    desc: 'Download your polished resume as a print-ready PDF with one click.',
    color: '#fb923c',
  },
];

const steps = [
  { num: '01', title: 'Enter Your Details', desc: 'Fill in your information using plain, everyday language.' },
  { num: '02', title: 'AI Enhances It', desc: 'Our AI transforms your text into professional resume language.' },
  { num: '03', title: 'Pick a Template', desc: 'Choose a design that matches your style and industry.' },
  { num: '04', title: 'Download & Apply', desc: 'Export as PDF and start applying to your dream jobs.' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '100px 0 80px',
        background: 'var(--gradient-hero)',
        overflow: 'hidden',
      }}>
        {/* Background glow effects */}
        <div style={{
          position: 'absolute',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
          top: '-200px', right: '-100px',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          bottom: '-100px', left: '-50px',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: '800px' }}>
          <div className="animate-fade-in-up" style={{ marginBottom: '24px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(168, 85, 247, 0.12)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              color: 'var(--accent-purple-light)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
            }}>
              <FiStar style={{ fontSize: '14px' }} /> Powered by Google Gemini AI
            </span>
          </div>

          <h1 className="animate-fade-in-up" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '24px',
            fontFamily: 'var(--font-heading)',
          }}>
            Build Your Perfect Resume{' '}
            <span className="gradient-text">with AI</span>
          </h1>

          <p className="animate-fade-in-up" style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 40px',
          }}>
            Simply describe your experience in plain language. Our AI transforms it into a polished,
            ATS-optimized resume that gets you interviews.
          </p>

          <div className="animate-fade-in-up" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/builder" className="btn btn-primary btn-lg" id="hero-cta">
              <FiCpu /> Start Building — It's Free
              <FiArrowRight />
            </Link>
            <Link to="/preview" className="btn btn-secondary btn-lg">
              <FiFileText /> View Preview
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: '12px' }}>
              Everything You Need to <span className="gradient-text">Stand Out</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)', maxWidth: '500px', margin: '0 auto' }}>
              A complete toolkit to create professional resumes that land interviews.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {features.map((f, i) => (
              <div key={i} className="glass-panel animate-fade-in-up" style={{
                padding: '32px 28px',
                transition: 'all 0.3s ease',
                cursor: 'default',
                animationDelay: `${i * 100}ms`,
                animationFillMode: 'backwards',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = `${f.color}40`;
                e.currentTarget.style.boxShadow = `0 0 30px ${f.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: `${f.color}15`,
                  border: `1px solid ${f.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  color: f.color,
                  marginBottom: '16px',
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 600, marginBottom: '8px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{
        padding: '80px 0',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 700, marginBottom: '12px' }}>
              How It <span className="gradient-text">Works</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
              Four simple steps to your perfect resume.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
            maxWidth: '960px',
            margin: '0 auto',
          }}>
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '12px',
                  opacity: 0.6,
                }}>{s.num}</div>
                <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 600, marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/builder" className="btn btn-primary btn-lg">
              Get Started Now <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
