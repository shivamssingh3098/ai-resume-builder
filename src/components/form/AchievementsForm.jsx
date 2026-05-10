import { useResume } from '../../context/ResumeContext';
import { emptyAchievement } from '../../utils/resumeDefaults';
import { FiStar, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function AchievementsForm() {
  const { state, dispatch } = useResume();
  const { achievements } = state;

  const addEntry = () => {
    dispatch({ type: 'ADD_ACHIEVEMENT', payload: { ...emptyAchievement } });
  };

  const updateEntry = (index, field, value) => {
    dispatch({ type: 'UPDATE_ACHIEVEMENT', index, payload: { [field]: value } });
  };

  const removeEntry = (index) => {
    dispatch({ type: 'REMOVE_ACHIEVEMENT', index });
  };

  return (
    <div className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon"><FiStar /></div>
        <div>
          <div className="section-card-title">Achievements</div>
          <div className="section-card-subtitle">Highlight your key accomplishments and awards</div>
        </div>
      </div>

      {achievements.map((ach, index) => (
        <div key={index} className="dynamic-entry">
          <div className="dynamic-entry-header">
            <span className="dynamic-entry-title">Achievement #{index + 1}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeEntry(index)}>
              <FiTrash2 /> Remove
            </button>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>Title *</label>
              <input type="text" className="input-field" placeholder="Dean's List, Hackathon Winner..."
                value={ach.title} onChange={(e) => updateEntry(index, 'title', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Date</label>
              <input type="month" className="input-field"
                value={ach.date} onChange={(e) => updateEntry(index, 'date', e.target.value)} />
            </div>
            <div className="input-group full-width">
              <label>Description</label>
              <textarea className="textarea-field"
                placeholder="Briefly describe the achievement..."
                value={ach.description}
                onChange={(e) => updateEntry(index, 'description', e.target.value)}
                rows={2} style={{ minHeight: '70px' }} />
            </div>
          </div>
        </div>
      ))}

      <button className="add-entry-btn" onClick={addEntry}>
        <FiPlus /> Add Achievement
      </button>
    </div>
  );
}
