import { useResume } from '../../context/ResumeContext';
import { emptyCertification } from '../../utils/resumeDefaults';
import { FiAward, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function CertificationsForm() {
  const { state, dispatch } = useResume();
  const { certifications } = state;

  const addEntry = () => {
    dispatch({ type: 'ADD_CERTIFICATION', payload: { ...emptyCertification } });
  };

  const updateEntry = (index, field, value) => {
    dispatch({ type: 'UPDATE_CERTIFICATION', index, payload: { [field]: value } });
  };

  const removeEntry = (index) => {
    dispatch({ type: 'REMOVE_CERTIFICATION', index });
  };

  return (
    <div className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon"><FiAward /></div>
        <div>
          <div className="section-card-title">Certifications</div>
          <div className="section-card-subtitle">Add your professional certifications</div>
        </div>
      </div>

      {certifications.map((cert, index) => (
        <div key={index} className="dynamic-entry">
          <div className="dynamic-entry-header">
            <span className="dynamic-entry-title">Certification #{index + 1}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeEntry(index)}>
              <FiTrash2 /> Remove
            </button>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>Certification Name *</label>
              <input type="text" className="input-field" placeholder="AWS Solutions Architect..."
                value={cert.name} onChange={(e) => updateEntry(index, 'name', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Issuing Organization</label>
              <input type="text" className="input-field" placeholder="Amazon, Google, Coursera..."
                value={cert.issuer} onChange={(e) => updateEntry(index, 'issuer', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Date</label>
              <input type="month" className="input-field"
                value={cert.date} onChange={(e) => updateEntry(index, 'date', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Credential Link</label>
              <input type="url" className="input-field" placeholder="credential URL"
                value={cert.link} onChange={(e) => updateEntry(index, 'link', e.target.value)} />
            </div>
          </div>
        </div>
      ))}

      <button className="add-entry-btn" onClick={addEntry}>
        <FiPlus /> Add Certification
      </button>
    </div>
  );
}
