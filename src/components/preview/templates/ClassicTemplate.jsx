import { formatDate } from '../../../utils/helpers';

export default function ClassicTemplate({ data }) {
  const { personalInfo, objective, education, skills, experience, projects, certifications, achievements } = data;
  const allSkills = [...(skills.technical || []), ...(skills.soft || []), ...(skills.tools || [])];

  return (
    <div className="resume-page template-classic">
      {/* Header */}
      <div className="resume-section">
        <div className="resume-name">{personalInfo.name || 'Your Name'}</div>
        <div className="resume-contact">
          {personalInfo.email && <span className="resume-contact-item">{personalInfo.email}</span>}
          {personalInfo.phone && <span className="resume-contact-item">| {personalInfo.phone}</span>}
          {personalInfo.location && <span className="resume-contact-item">| {personalInfo.location}</span>}
          {personalInfo.linkedin && <span className="resume-contact-item">| {personalInfo.linkedin}</span>}
          {personalInfo.github && <span className="resume-contact-item">| {personalInfo.github}</span>}
          {personalInfo.portfolio && <span className="resume-contact-item">| {personalInfo.portfolio}</span>}
        </div>
      </div>

      {/* Summary */}
      {objective && (
        <div className="resume-section">
          <div className="resume-section-title">Professional Summary</div>
          <p style={{ fontSize: '9.5pt', lineHeight: '1.6' }}>{objective}</p>
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
              {edu.highlights && <p style={{ fontSize: '9pt', color: '#4a5568', marginTop: '2px' }}>{edu.highlights}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {allSkills.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Skills</div>
          <div className="resume-skills-grid">
            {allSkills.map((skill, i) => (
              <span key={i} className="resume-skill-tag">{skill}</span>
            ))}
          </div>
          {skills.languages?.length > 0 && (
            <p style={{ fontSize: '9pt', marginTop: '6px', color: '#4a5568' }}>
              <strong>Languages:</strong> {skills.languages.join(', ')}
            </p>
          )}
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Work Experience</div>
          {experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
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

      {/* Projects */}
      {projects.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Projects</div>
          {projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '8px' }}>
              <div className="resume-entry-header">
                <span className="resume-entry-title">
                  {proj.name}
                  {proj.technologies?.length > 0 && (
                    <span style={{ fontWeight: 400, fontSize: '9pt', color: '#718096' }}>
                      {' '}— {proj.technologies.join(', ')}
                    </span>
                  )}
                </span>
                {proj.link && <span className="resume-entry-date">{proj.link}</span>}
              </div>
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

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="resume-section">
          <div className="resume-section-title">Certifications</div>
          {certifications.map((cert, i) => (
            <div key={i} style={{ marginBottom: '4px', fontSize: '9.5pt' }}>
              <strong>{cert.name}</strong>
              {cert.issuer ? ` — ${cert.issuer}` : ''}
              {cert.date ? ` (${formatDate(cert.date)})` : ''}
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
                {ach.date ? ` (${formatDate(ach.date)})` : ''}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
