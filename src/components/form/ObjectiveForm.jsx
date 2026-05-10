import { useResume } from '../../context/ResumeContext';
import { FiTarget } from 'react-icons/fi';

export default function ObjectiveForm() {
  const { state, dispatch } = useResume();

  return (
    <div className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon"><FiTarget /></div>
        <div>
          <div className="section-card-title">Career Objective</div>
          <div className="section-card-subtitle">Write a brief career objective or professional summary</div>
        </div>
      </div>

      <div className="input-group">
        <label>Professional Summary / Objective</label>
        <textarea
          className="textarea-field"
          placeholder="Describe your career goals, key strengths, and what you bring to the table. For example: 'Experienced software developer with 5 years of expertise in building scalable web applications. Passionate about clean code and user-centric design...'"
          value={state.objective}
          onChange={(e) => dispatch({ type: 'SET_OBJECTIVE', payload: e.target.value })}
          rows={5}
          style={{ minHeight: '140px' }}
        />
        <div className="textarea-counter">{state.objective.length} / 500 characters</div>
      </div>
    </div>
  );
}
