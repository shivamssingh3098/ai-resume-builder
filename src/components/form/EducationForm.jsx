import { useResume } from '../../context/ResumeContext';
import { emptyEducation } from '../../utils/resumeDefaults';
import { FiBook, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function EducationForm() {
  const { state, dispatch } = useResume();
  const { education } = state;

  const addEntry = () => {
    dispatch({ type: 'ADD_EDUCATION', payload: { ...emptyEducation } });
  };

  const updateEntry = (index, field, value) => {
    dispatch({ type: 'UPDATE_EDUCATION', index, payload: { [field]: value } });
  };

  const removeEntry = (index) => {
    dispatch({ type: 'REMOVE_EDUCATION', index });
  };

  return (
    <div className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon"><FiBook /></div>
        <div>
          <div className="section-card-title">Education</div>
          <div className="section-card-subtitle">Add your educational qualifications</div>
        </div>
      </div>

      {education.map((edu, index) => (
        <div key={index} className="dynamic-entry">
          <div className="dynamic-entry-header">
            <span className="dynamic-entry-title">Education #{index + 1}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeEntry(index)}>
              <FiTrash2 /> Remove
            </button>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>Institution *</label>
              <input type="text" className="input-field" placeholder="MIT, Stanford University..."
                value={edu.institution} onChange={(e) => updateEntry(index, 'institution', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Degree *</label>
              <input type="text" className="input-field" placeholder="Bachelor of Science, MBA..."
                value={edu.degree} onChange={(e) => updateEntry(index, 'degree', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Field of Study</label>
              <input type="text" className="input-field" placeholder="Computer Science, Business..."
                value={edu.field} onChange={(e) => updateEntry(index, 'field', e.target.value)} />
            </div>
            <div className="input-group">
              <label>GPA (optional)</label>
              <input type="text" className="input-field" placeholder="3.8 / 4.0"
                value={edu.gpa} onChange={(e) => updateEntry(index, 'gpa', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Start Date</label>
              <input type="month" className="input-field"
                value={edu.startDate} onChange={(e) => updateEntry(index, 'startDate', e.target.value)} />
            </div>
            <div className="input-group">
              <label>End Date</label>
              <input type="month" className="input-field"
                value={edu.endDate} onChange={(e) => updateEntry(index, 'endDate', e.target.value)} />
            </div>
            <div className="input-group full-width">
              <label>Highlights / Activities</label>
              <textarea className="textarea-field" placeholder="Dean's List, relevant coursework, student organizations..."
                value={edu.highlights} onChange={(e) => updateEntry(index, 'highlights', e.target.value)}
                rows={2} style={{ minHeight: '70px' }} />
            </div>
          </div>
        </div>
      ))}

      <button className="add-entry-btn" onClick={addEntry}>
        <FiPlus /> Add Education
      </button>
    </div>
  );
}
