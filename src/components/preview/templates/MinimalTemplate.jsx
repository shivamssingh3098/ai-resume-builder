import { formatDate } from '../../../utils/helpers';

export default function MinimalTemplate({ data }) {
  const { personalInfo, objective, education, skills, experience, projects, certifications, achievements } = data;
  const allSkills = [...(skills.technical || []), ...(skills.soft || []), ...(skills.tools || [])];

  return (
    <div className="resume-page template-minimal">
      {/* Header */}
      <div className="resume-section" style={{ marginBottom: '20px' }}>
        <div className="resume-name">{personalInfo.name || 'Your Name'}</div>
        <div className="resume-contact">
          {personalInfo.email && <span className="resume-contact-item">{personalInfo.email}</span>}
          {personalInfo.phone && <span className="resume-contact-item">{personalInfo.phone}</span>}
          {personalInfo.location && <span className="resume-contact-item">{personalInfo.location}</span>}
          {personalInfo.linkedin && <span className="resume-contact-item">{personalInfo.linkedin}</span>}
          {personalInfo.github && <span className="resume-contact-item">{personalInfo.github}</span>}
        </div>
      </div>

      {objective && (
        <div className="resume-section">
          <div className="resume-section-title">About</div>
          <p style={{ fontSize: '9.5pt', lineHeight: '1.7', color: '#4a5568' }}>{objective}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Experience</div>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <div className="resume-entry-header">
                <span className="resume-entry-title">{exp.role} — {exp.company}</span>
                <span className="resume-entry-date">
                  {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              {exp.bullets && exp.bullets.length > 0 ? (
                <ul className="resume-bullets">
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              ) : exp.description ? (
                <p style={{ fontSize: '9.5pt', marginTop: '4px', color: '#4a5568' }}>{exp.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Education</div>
          {education.map((edu, i) => (
            <div key={i} style={{ marginBottom: '8px' }}>
              <div className="resume-entry-header">
                <span className="resume-entry-title">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</span>
                <span className="resume-entry-date">
                  {formatDate(edu.startDate)} — {formatDate(edu.endDate) || 'Present'}
                </span>
              </div>
              <div className="resume-entry-subtitle">
                {edu.institution}{edu.gpa ? ` • GPA: ${edu.gpa}` : ''}
              </div>
            </div>
          ))}
        </div>
      )}

      {allSkills.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Skills</div>
          <div className="resume-skills-grid">
            {allSkills.map((skill, i) => (
              <span key={i} className="resume-skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Projects</div>
          {projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '8px' }}>
              <div className="resume-entry-header">
                <span className="resume-entry-title">{proj.name}</span>
                {proj.link && <span className="resume-entry-date">{proj.link}</span>}
              </div>
              {proj.technologies?.length > 0 && (
                <div style={{ fontSize: '8.5pt', color: '#a0aec0', marginBottom: '2px' }}>
                  {proj.technologies.join(' · ')}
                </div>
              )}
              {proj.bullets && proj.bullets.length > 0 ? (
                <ul className="resume-bullets">
                  {proj.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              ) : proj.description ? (
                <p style={{ fontSize: '9.5pt', color: '#4a5568' }}>{proj.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      )}

      {certifications.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Certifications</div>
          {certifications.map((cert, i) => (
            <div key={i} style={{ fontSize: '9.5pt', marginBottom: '4px' }}>
              <strong>{cert.name}</strong>{cert.issuer ? ` — ${cert.issuer}` : ''}{cert.date ? ` (${formatDate(cert.date)})` : ''}
            </div>
          ))}
        </div>
      )}

      {achievements.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Achievements</div>
          <ul className="resume-bullets">
            {achievements.map((ach, i) => (
              <li key={i}><strong>{ach.title}</strong>{ach.description ? ` — ${ach.description}` : ''}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
