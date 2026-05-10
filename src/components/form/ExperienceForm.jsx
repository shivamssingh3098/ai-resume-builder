import { useResume } from '../../context/ResumeContext';
import { emptyExperience } from '../../utils/resumeDefaults';
import { FiBriefcase, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function ExperienceForm() {
  const { state, dispatch } = useResume();
  const { experience } = state;

  const addEntry = () => {
    dispatch({ type: 'ADD_EXPERIENCE', payload: { ...emptyExperience } });
  };

  const updateEntry = (index, field, value) => {
    dispatch({ type: 'UPDATE_EXPERIENCE', index, payload: { [field]: value } });
  };

  const removeEntry = (index) => {
    dispatch({ type: 'REMOVE_EXPERIENCE', index });
  };

  return (
    <div className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon"><FiBriefcase /></div>
        <div>
          <div className="section-card-title">Work Experience</div>
          <div className="section-card-subtitle">Describe your work experience in plain language — AI will enhance it</div>
        </div>
      </div>

      {experience.map((exp, index) => (
        <div key={index} className="dynamic-entry">
          <div className="dynamic-entry-header">
            <span className="dynamic-entry-title">Experience #{index + 1}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeEntry(index)}>
              <FiTrash2 /> Remove
            </button>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>Company *</label>
              <input type="text" className="input-field" placeholder="Google, Amazon, Startup Inc..."
                value={exp.company} onChange={(e) => updateEntry(index, 'company', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Role / Title *</label>
              <input type="text" className="input-field" placeholder="Software Engineer, Product Manager..."
                value={exp.role} onChange={(e) => updateEntry(index, 'role', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Start Date</label>
              <input type="month" className="input-field"
                value={exp.startDate} onChange={(e) => updateEntry(index, 'startDate', e.target.value)} />
            </div>
            <div className="input-group">
              <label>End Date</label>
              <input type="month" className="input-field"
                value={exp.endDate} onChange={(e) => updateEntry(index, 'endDate', e.target.value)}
                disabled={exp.current} />
            </div>
            <div className="full-width">
              <div className="checkbox-group">
                <input type="checkbox" className="checkbox-input" id={`current-${index}`}
                  checked={exp.current} onChange={(e) => updateEntry(index, 'current', e.target.checked)} />
                <label className="checkbox-label" htmlFor={`current-${index}`}>I currently work here</label>
              </div>
            </div>
            <div className="input-group full-width">
              <label>Description (plain language — AI will enhance this)</label>
              <textarea className="textarea-field"
                placeholder="Describe what you did in plain, casual language. For example: 'I built a dashboard that helped the team track sales. It was used by 50+ people and reduced report generation time by half...'"
                value={exp.description}
                onChange={(e) => updateEntry(index, 'description', e.target.value)}
                rows={4} style={{ minHeight: '110px' }} />
            </div>
          </div>
        </div>
      ))}

      <button className="add-entry-btn" onClick={addEntry}>
        <FiPlus /> Add Experience
      </button>
    </div>
  );
}
