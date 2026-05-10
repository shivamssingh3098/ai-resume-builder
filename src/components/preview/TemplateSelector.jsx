import { useResume } from '../../context/ResumeContext';
import { FiCheck } from 'react-icons/fi';

const templates = [
  { id: 'classic', name: 'Classic', desc: 'Traditional & professional' },
  { id: 'modern', name: 'Modern', desc: 'Two-column with sidebar' },
  { id: 'minimal', name: 'Minimal', desc: 'Clean & elegant' },
];

export default function TemplateSelector() {
  const { state, dispatch } = useResume();

  return (
    <div className="template-selector">
      {templates.map((t) => (
        <div
          key={t.id}
          className={`template-option ${state.selectedTemplate === t.id ? 'selected' : ''}`}
          onClick={() => dispatch({ type: 'SET_TEMPLATE', payload: t.id })}
        >
          <div className="template-option-preview">
            {/* Mini preview illustration */}
            <div style={{
              padding: '12px',
              height: '100%',
              display: 'flex',
              flexDirection: t.id === 'modern' ? 'row' : 'column',
              gap: '6px',
              background: '#fff',
            }}>
              {t.id === 'modern' && (
                <div style={{ width: '35%', background: '#1a1a2e', borderRadius: '3px', padding: '8px' }}>
                  <div style={{ height: '8px', width: '70%', background: '#fff', borderRadius: '2px', marginBottom: '6px' }} />
                  <div style={{ height: '4px', width: '90%', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', marginBottom: '3px' }} />
                  <div style={{ height: '4px', width: '60%', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', marginBottom: '8px' }} />
                  <div style={{ height: '4px', width: '50%', background: '#67e8f9', borderRadius: '2px', marginBottom: '4px' }} />
                  {[1,2,3].map(i => (
                    <div key={i} style={{ height: '3px', width: '80%', background: 'rgba(255,255,255,0.15)', borderRadius: '2px', marginBottom: '2px' }} />
                  ))}
                </div>
              )}
              <div style={{ flex: 1 }}>
                <div style={{
                  height: t.id === 'classic' ? '10px' : '8px',
                  width: t.id === 'classic' ? '50%' : '60%',
                  background: '#1a1a2e',
                  borderRadius: '2px',
                  margin: t.id === 'classic' ? '0 auto 6px' : '0 0 6px',
                }} />
                <div style={{
                  height: '3px',
                  width: t.id === 'classic' ? '80%' : '100%',
                  background: '#cbd5e0',
                  borderRadius: '2px',
                  margin: t.id === 'classic' ? '0 auto 8px' : '0 0 8px',
                }} />
                {[1,2,3,4].map(i => (
                  <div key={i} style={{ marginBottom: '6px' }}>
                    <div style={{ height: '4px', width: '40%', background: t.id === 'minimal' ? '#e2e8f0' : '#67e8f9', borderRadius: '2px', marginBottom: '3px' }} />
                    <div style={{ height: '3px', width: '95%', background: '#e2e8f0', borderRadius: '2px', marginBottom: '2px' }} />
                    <div style={{ height: '3px', width: '80%', background: '#f0f0f5', borderRadius: '2px' }} />
                  </div>
                ))}
              </div>
            </div>

            {state.selectedTemplate === t.id && (
              <div style={{
                position: 'absolute', top: '8px', right: '8px',
                width: '24px', height: '24px', borderRadius: '50%',
                background: 'var(--accent-cyan)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px',
              }}>
                <FiCheck />
              </div>
            )}
          </div>
          <div className="template-option-name">{t.name}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.desc}</div>
        </div>
      ))}
    </div>
  );
}
