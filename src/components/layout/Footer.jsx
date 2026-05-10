export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: 'var(--space-lg) 0',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      marginTop: 'auto',
    }}>
      <div className="container">
        <p>Built with <span style={{ color: 'var(--accent-pink)' }}>♥</span> using React & Gemini AI</p>
        <p style={{ fontSize: 'var(--text-xs)', marginTop: '4px', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} ResumeAI — Your AI-Powered Resume Builder
        </p>
      </div>
    </footer>
  );
}
