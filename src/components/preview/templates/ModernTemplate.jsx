import { formatDate } from '../../../utils/helpers';

export default function ModernTemplate({ data }) {
  const { personalInfo, objective, education, skills, experience, projects, certifications, achievements } = data;
  const allSkills = [...(skills.technical || []), ...(skills.tools || [])];

  return (
    <div className="resume-page template-modern">
      {/* Sidebar */}
      <div className="modern-sidebar">
        <div className="resume-name">{personalInfo.name || 'Your Name'}</div>
        <div className="resume-contact">
          {personalInfo.email && <span className="resume-contact-item">{personalInfo.email}</span>}
          {personalInfo.phone && <span className="resume-contact-item">{personalInfo.phone}</span>}
          {personalInfo.location && <span className="resume-contact-item">{personalInfo.location}</span>}
          {personalInfo.linkedin && <span className="resume-contact-item">{personalInfo.linkedin}</span>}
          {personalInfo.github && <span className="resume-contact-item">{personalInfo.github}</span>}
          {personalInfo.portfolio && <span className="resume-contact-item">{personalInfo.portfolio}</span>}
        </div>

        {/* Skills in sidebar */}
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

        {skills.soft?.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Soft Skills</div>
            <ul className="resume-bullets">
              {skills.soft.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        )}

        {skills.languages?.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Languages</div>
            <ul className="resume-bullets">
              {skills.languages.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          </div>
        )}

        {/* Certifications in sidebar */}
        {certifications.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Certifications</div>
            {certifications.map((cert, i) => (
              <div key={i} style={{ marginBottom: '6px', fontSize: '8.5pt' }}>
                <strong>{cert.name}</strong>
                {cert.issuer && <div style={{ color: '#a0aec0' }}>{cert.issuer}</div>}
                {cert.date && <div style={{ color: '#718096', fontSize: '8pt' }}>{formatDate(cert.date)}</div>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="modern-main">
        {/* Summary */}
        {objective && (
          <div className="resume-section">
            <div className="resume-section-title">Professional Summary</div>
            <p style={{ fontSize: '9.5pt', lineHeight: '1.6', color: '#4a5568' }}>{objective}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Experience</div>
            {experience.map((exp, i) => (
              <div key={i} style={{ marginBottom: '12px' }}>
                <div className="resume-entry-header">
                  <span className="resume-entry-title">{exp.role}</span>
                  <span className="resume-entry-date">
                    {formatDate(exp.startDate)} — {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                <div className="resume-entry-subtitle">{exp.company}</div>
                {exp.bullets && exp.bullets.length > 0 ? (
                  <ul className="resume-bullets">
                    {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                ) : exp.description ? (
                  <p style={{ fontSize: '9.5pt', marginTop: '2px' }}>{exp.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Education</div>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: '8px' }}>
                <div className="resume-entry-header">
                  <span className="resume-entry-title">{edu.institution}</span>
                  <span className="resume-entry-date">
                    {formatDate(edu.startDate)} — {formatDate(edu.endDate) || 'Present'}
                  </span>
                </div>
                <div className="resume-entry-subtitle">
                  {edu.degree}{edu.field ? ` in ${edu.field}` : ''}{edu.gpa ? ` | GPA: ${edu.gpa}` : ''}
                </div>
                {edu.highlights && <p style={{ fontSize: '9pt', color: '#718096', marginTop: '2px' }}>{edu.highlights}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
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
                  <div style={{ fontSize: '8.5pt', color: '#718096', marginBottom: '2px' }}>
                    {proj.technologies.join(' • ')}
                  </div>
                )}
                {proj.bullets && proj.bullets.length > 0 ? (
                  <ul className="resume-bullets">
                    {proj.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                ) : proj.description ? (
                  <p style={{ fontSize: '9.5pt', marginTop: '2px' }}>{proj.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="resume-section">
            <div className="resume-section-title">Achievements</div>
            <ul className="resume-bullets">
              {achievements.map((ach, i) => (
                <li key={i}>
                  <strong>{ach.title}</strong>
                  {ach.description ? ` — ${ach.description}` : ''}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
