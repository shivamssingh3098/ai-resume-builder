import { useResume } from '../../context/ResumeContext';
import { FiUser, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiGlobe } from 'react-icons/fi';

export default function PersonalInfoForm() {
  const { state, dispatch } = useResume();
  const { personalInfo } = state;

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_PERSONAL_INFO', payload: { [field]: value } });
  };

  return (
    <div className="section-card">
      <div className="section-card-header">
        <div className="section-card-icon"><FiUser /></div>
        <div>
          <div className="section-card-title">Personal Information</div>
          <div className="section-card-subtitle">Your basic contact details</div>
        </div>
      </div>

      <div className="form-grid">
        <div className="input-group">
          <label>Full Name *</label>
          <div className="input-with-icon">
            <FiUser className="input-icon" />
            <input
              type="text"
              className="input-field"
              placeholder="John Doe"
              value={personalInfo.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email Address *</label>
          <div className="input-with-icon">
            <FiMail className="input-icon" />
            <input
              type="email"
              className="input-field"
              placeholder="john@example.com"
              value={personalInfo.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <div className="input-with-icon">
            <FiPhone className="input-icon" />
            <input
              type="tel"
              className="input-field"
              placeholder="+1 (555) 123-4567"
              value={personalInfo.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Location</label>
          <div className="input-with-icon">
            <FiMapPin className="input-icon" />
            <input
              type="text"
              className="input-field"
              placeholder="San Francisco, CA"
              value={personalInfo.location}
              onChange={(e) => handleChange('location', e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>LinkedIn URL</label>
          <div className="input-with-icon">
            <FiLinkedin className="input-icon" />
            <input
              type="url"
              className="input-field"
              placeholder="linkedin.com/in/johndoe"
              value={personalInfo.linkedin}
              onChange={(e) => handleChange('linkedin', e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>GitHub URL</label>
          <div className="input-with-icon">
            <FiGithub className="input-icon" />
            <input
              type="url"
              className="input-field"
              placeholder="github.com/johndoe"
              value={personalInfo.github}
              onChange={(e) => handleChange('github', e.target.value)}
            />
          </div>
        </div>

        <div className="input-group full-width">
          <label>Portfolio Website</label>
          <div className="input-with-icon">
            <FiGlobe className="input-icon" />
            <input
              type="url"
              className="input-field"
              placeholder="johndoe.dev"
              value={personalInfo.portfolio}
              onChange={(e) => handleChange('portfolio', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
