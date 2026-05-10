import { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { FiCpu, FiX } from 'react-icons/fi';

function TagInput({ label, placeholder, tags, onAdd, onRemove }) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        onAdd(input.trim());
      }
      setInput('');
    }
    if (e.key === 'Backspace' && !input && tags.length > 0) {
      onRemove(tags.length - 1);
    }
  };

  return (
    <div className="tags-input-container">
      <label className="tags-input-label">{label}</label>
      <div className="tags-input-wrapper" onClick={(e) => e.currentTarget.querySelector('input')?.focus()}>
        {tags.map((tag, i) => (
          <span key={i} className="tag">
            {tag}
            <button className="tag-remove" onClick={() => onRemove(i)}><FiX /></button>
          </span>
        ))}
        <input
          type="text"
          className="tags-input"
          placeholder={tags.length === 0 ? placeholder : 'Add more...'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default function SkillsForm() {
  const { state, dispatch } = useResume();
  const { skills } = state;

  const updateSkills = (category, newTags) => {
    dispatch({ type: 'SET_SKILLS', payload: { [category]: newTags } });
  };

  const addTag = (category, tag) => {
    updateSkills(category, [...skills[category], tag]);
  };

  const removeTag = (category, index) => {
    updateSkills(category, skills[category].filter((_, i) => i !== index));
  };

  return (
    <div className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon"><FiCpu /></div>
        <div>
          <div className="section-card-title">Skills</div>
          <div className="section-card-subtitle">Type a skill and press Enter to add</div>
        </div>
      </div>

      <TagInput
        label="Technical Skills"
        placeholder="React, Python, Node.js, SQL..."
        tags={skills.technical}
        onAdd={(tag) => addTag('technical', tag)}
        onRemove={(i) => removeTag('technical', i)}
      />

      <TagInput
        label="Soft Skills"
        placeholder="Leadership, Communication, Problem Solving..."
        tags={skills.soft}
        onAdd={(tag) => addTag('soft', tag)}
        onRemove={(i) => removeTag('soft', i)}
      />

      <TagInput
        label="Languages"
        placeholder="English, Spanish, Hindi..."
        tags={skills.languages}
        onAdd={(tag) => addTag('languages', tag)}
        onRemove={(i) => removeTag('languages', i)}
      />

      <TagInput
        label="Tools & Technologies"
        placeholder="Git, Docker, AWS, Figma..."
        tags={skills.tools}
        onAdd={(tag) => addTag('tools', tag)}
        onRemove={(i) => removeTag('tools', i)}
      />
    </div>
  );
}
