import { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { emptyProject } from '../../utils/resumeDefaults';
import { FiFolder, FiPlus, FiTrash2, FiX } from 'react-icons/fi';

export default function ProjectsForm() {
  const { state, dispatch } = useResume();
  const { projects } = state;
  const [techInputs, setTechInputs] = useState({});

  const addEntry = () => {
    dispatch({ type: 'ADD_PROJECT', payload: { ...emptyProject } });
  };

  const updateEntry = (index, field, value) => {
    dispatch({ type: 'UPDATE_PROJECT', index, payload: { [field]: value } });
  };

  const removeEntry = (index) => {
    dispatch({ type: 'REMOVE_PROJECT', index });
  };

  const addTech = (index, tech) => {
    if (tech && !projects[index].technologies.includes(tech)) {
      updateEntry(index, 'technologies', [...projects[index].technologies, tech]);
    }
  };

  const removeTech = (index, techIndex) => {
    updateEntry(index, 'technologies', projects[index].technologies.filter((_, i) => i !== techIndex));
  };

  const handleTechKeyDown = (e, index) => {
    if ((e.key === 'Enter' || e.key === ',') && techInputs[index]?.trim()) {
      e.preventDefault();
      addTech(index, techInputs[index].trim());
      setTechInputs({ ...techInputs, [index]: '' });
    }
  };

  return (
    <div className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon"><FiFolder /></div>
        <div>
          <div className="section-card-title">Projects</div>
          <div className="section-card-subtitle">Showcase your key projects</div>
        </div>
      </div>

      {projects.map((proj, index) => (
        <div key={index} className="dynamic-entry">
          <div className="dynamic-entry-header">
            <span className="dynamic-entry-title">Project #{index + 1}</span>
            <button className="btn btn-danger btn-sm" onClick={() => removeEntry(index)}>
              <FiTrash2 /> Remove
            </button>
          </div>

          <div className="form-grid">
            <div className="input-group">
              <label>Project Name *</label>
              <input type="text" className="input-field" placeholder="E-commerce Platform, Weather App..."
                value={proj.name} onChange={(e) => updateEntry(index, 'name', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Project Link</label>
              <input type="url" className="input-field" placeholder="github.com/user/project"
                value={proj.link} onChange={(e) => updateEntry(index, 'link', e.target.value)} />
            </div>

            <div className="full-width">
              <div className="tags-input-container">
                <label className="tags-input-label">Technologies Used</label>
                <div className="tags-input-wrapper">
                  {proj.technologies.map((tech, i) => (
                    <span key={i} className="tag">
                      {tech}
                      <button className="tag-remove" onClick={() => removeTech(index, i)}><FiX /></button>
                    </span>
                  ))}
                  <input type="text" className="tags-input" placeholder="React, Node.js..."
                    value={techInputs[index] || ''}
                    onChange={(e) => setTechInputs({ ...techInputs, [index]: e.target.value })}
                    onKeyDown={(e) => handleTechKeyDown(e, index)} />
                </div>
              </div>
            </div>

            <div className="input-group full-width">
              <label>Description</label>
              <textarea className="textarea-field"
                placeholder="Describe the project, its purpose, and your role..."
                value={proj.description}
                onChange={(e) => updateEntry(index, 'description', e.target.value)}
                rows={3} style={{ minHeight: '90px' }} />
            </div>
          </div>
        </div>
      ))}

      <button className="add-entry-btn" onClick={addEntry}>
        <FiPlus /> Add Project
      </button>
    </div>
  );
}
