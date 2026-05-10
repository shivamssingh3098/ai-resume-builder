import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../context/ResumeContext';
import TemplateSelector from '../components/preview/TemplateSelector';
import ClassicTemplate from '../components/preview/templates/ClassicTemplate';
import ModernTemplate from '../components/preview/templates/ModernTemplate';
import MinimalTemplate from '../components/preview/templates/MinimalTemplate';
import { FiDownload, FiEdit3, FiPrinter } from 'react-icons/fi';

const templateMap = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
};

export default function PreviewPage() {
  const { state } = useResume();
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${state.personalInfo.name || 'Resume'}_Resume`,
  });

  const Template = templateMap[state.selectedTemplate] || ModernTemplate;

  return (
    <div style={{ padding: 'var(--space-xl) 0' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Page Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--space-xl)',
          flexWrap: 'wrap',
          gap: 'var(--space-md)',
        }}>
          <div>
            <h1 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)',
              marginBottom: '6px',
            }}>
              Preview & Download
            </h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Choose your template and download your polished resume.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
            <Link to="/builder" className="btn btn-secondary">
              <FiEdit3 /> Back to Edit
            </Link>
            <button className="btn btn-primary" onClick={handlePrint} id="download-pdf-btn">
              <FiDownload /> Download PDF
            </button>
          </div>
        </div>

        {/* Template Selector */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h2 style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 600,
            marginBottom: 'var(--space-md)',
          }}>
            Select Template
          </h2>
          <TemplateSelector />
        </div>

        {/* AI Enhancement Badge */}
        {state.aiEnhanced && (
          <div className="animate-fade-in" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(34, 211, 238, 0.1)',
            border: '1px solid rgba(34, 211, 238, 0.25)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--accent-cyan)',
            fontSize: 'var(--text-sm)',
            fontWeight: 500,
            marginBottom: 'var(--space-lg)',
          }}>
            ✨ AI Enhanced — Content has been professionally polished
          </div>
        )}

        {/* Resume Preview */}
        <div className="preview-container" style={{ background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)' }}>
          <div
            ref={resumeRef}
            className="preview-wrapper"
            style={{ boxShadow: 'var(--shadow-xl)', borderRadius: '4px', overflow: 'hidden' }}
          >
            <Template data={state} />
          </div>
        </div>

        {/* Bottom Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-md)',
          marginTop: 'var(--space-xl)',
        }}>
          <button className="btn btn-primary btn-lg" onClick={handlePrint}>
            <FiPrinter /> Print / Save as PDF
          </button>
        </div>
      </div>
    </div>
  );
}
