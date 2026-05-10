import { Link, useLocation } from 'react-router-dom';
import { FiFileText, FiZap } from 'react-icons/fi';

export default function Header() {
  const location = useLocation();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 'var(--z-sticky)',
      background: 'rgba(10, 14, 26, 0.8)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textDecoration: 'none',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--bg-primary)',
            fontSize: '18px',
          }}>
            <FiFileText />
          </div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-lg)',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}>
            ResumeAI
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '3px',
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(168, 85, 247, 0.15)',
            color: 'var(--accent-purple-light)',
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
          }}>
            <FiZap style={{ fontSize: '10px' }} /> AI
          </span>
        </Link>

        <nav style={{ display: 'flex', gap: 'var(--space-sm)' }}>
          <Link to="/" className={`btn btn-ghost ${location.pathname === '/' ? '' : ''}`}>Home</Link>
          <Link to="/builder" className="btn btn-ghost">Builder</Link>
          <Link to="/preview" className="btn btn-ghost">Preview</Link>
        </nav>
      </div>
    </header>
  );
}
