import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import { enhanceResume } from '../services/aiService';
import { stepLabels } from '../utils/resumeDefaults';

import PersonalInfoForm from '../components/form/PersonalInfoForm';
import ObjectiveForm from '../components/form/ObjectiveForm';
import EducationForm from '../components/form/EducationForm';
import SkillsForm from '../components/form/SkillsForm';
import ExperienceForm from '../components/form/ExperienceForm';
import ProjectsForm from '../components/form/ProjectsForm';
import CertificationsForm from '../components/form/CertificationsForm';
import AchievementsForm from '../components/form/AchievementsForm';
import ResumePreview from '../components/preview/ResumePreview';

import { FiArrowLeft, FiArrowRight, FiZap, FiCheck, FiEye } from 'react-icons/fi';

const formComponents = [
  PersonalInfoForm,
  ObjectiveForm,
  EducationForm,
  SkillsForm,
  ExperienceForm,
  ProjectsForm,
  CertificationsForm,
  AchievementsForm,
];

export default function BuilderPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const { state, dispatch } = useResume();
  const navigate = useNavigate();

  const ActiveForm = formComponents[currentStep];

  const handleNext = () => {
    if (currentStep < stepLabels.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAIEnhance = async () => {
    setAiLoading(true);
    setAiError('');
    try {
      const enhanced = await enhanceResume(state);
      dispatch({ type: 'SET_AI_ENHANCED_DATA', payload: enhanced });
      navigate('/preview');
    } catch (err) {
      setAiError(err.message);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSkipToPreview = () => {
    navigate('/preview');
  };

  return (
    <div style={{ padding: 'var(--space-xl) 0' }}>
      {/* AI Loading Overlay */}
      {aiLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner-container">
            <div className="loading-spinner" />
            <div className="loading-text">AI is enhancing your resume...</div>
            <div className="loading-subtext">
              Transforming your descriptions into professional, ATS-optimized content. This may take a few seconds.
            </div>
          </div>
        </div>
      )}

      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Page Header */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <h1 style={{
            fontSize: 'var(--text-3xl)',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            marginBottom: '8px',
          }}>
            Build Your Resume
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Fill in each section — use plain language, AI will polish it for you.
          </p>
        </div>

        {/* Stepper */}
        <div className="stepper" style={{ marginBottom: 'var(--space-xl)' }}>
          {stepLabels.map((label, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                className={`stepper-step ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'completed' : ''}`}
                onClick={() => setCurrentStep(i)}
              >
                <div className="stepper-number">
                  {i < currentStep ? <FiCheck /> : i + 1}
                </div>
                <span className="stepper-label">{label}</span>
              </div>
              {i < stepLabels.length - 1 && (
                <div className={`stepper-connector ${i < currentStep ? 'completed' : ''}`} />
              )}
            </div>
          ))}
        </div>

        {/* Main Content — Form + Preview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: showPreview ? '1fr 1fr' : '1fr',
          gap: 'var(--space-xl)',
          alignItems: 'start',
        }}>
          {/* Form Area */}
          <div>
            <ActiveForm />

            {/* Error Message */}
            {aiError && (
              <div style={{
                padding: 'var(--space-md)',
                background: 'rgba(248, 113, 113, 0.1)',
                border: '1px solid rgba(248, 113, 113, 0.25)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--accent-red)',
                fontSize: 'var(--text-sm)',
                marginTop: 'var(--space-md)',
              }}>
                {aiError}
              </div>
            )}

            {/* Form Actions */}
            <div className="form-actions">
              <button
                className="btn btn-secondary"
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                <FiArrowLeft /> Previous
              </button>

              <div className="form-actions-right">
                <button
                  className="btn btn-ghost"
                  onClick={() => setShowPreview(!showPreview)}
                  style={{ display: 'none' }}
                  id="toggle-preview-desktop"
                >
                  <FiEye /> {showPreview ? 'Hide' : 'Show'} Preview
                </button>

                {currentStep < stepLabels.length - 1 ? (
                  <button className="btn btn-primary" onClick={handleNext}>
                    Next <FiArrowRight />
                  </button>
                ) : (
                  <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                    <button className="btn btn-secondary" onClick={handleSkipToPreview}>
                      <FiEye /> Preview without AI
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={handleAIEnhance}
                      disabled={aiLoading}
                    >
                      <FiZap /> Enhance with AI
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Live Preview Panel (togglable) */}
          {showPreview && (
            <div style={{
              position: 'sticky',
              top: '80px',
              maxHeight: 'calc(100vh - 100px)',
              overflow: 'auto',
              borderRadius: 'var(--radius-lg)',
            }}>
              <ResumePreview scale={0.45} />
            </div>
          )}
        </div>

        {/* Mobile Preview Toggle */}
        <button
          className="btn btn-secondary"
          onClick={() => setShowPreview(!showPreview)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 100,
            borderRadius: 'var(--radius-full)',
            padding: '14px 20px',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <FiEye /> {showPreview ? 'Hide' : 'Live'} Preview
        </button>
      </div>
    </div>
  );
}
