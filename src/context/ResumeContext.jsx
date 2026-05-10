import { createContext, useContext, useReducer, useEffect } from 'react';
import { emptyResume } from '../utils/resumeDefaults';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/helpers';

const STORAGE_KEY = 'ai-resume-builder-data';

const ResumeContext = createContext(null);

const resumeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PERSONAL_INFO':
      return { ...state, personalInfo: { ...state.personalInfo, ...action.payload } };

    case 'SET_OBJECTIVE':
      return { ...state, objective: action.payload };

    case 'ADD_EDUCATION':
      return { ...state, education: [...state.education, action.payload] };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((edu, i) =>
          i === action.index ? { ...edu, ...action.payload } : edu
        ),
      };
    case 'REMOVE_EDUCATION':
      return { ...state, education: state.education.filter((_, i) => i !== action.index) };

    case 'SET_SKILLS':
      return { ...state, skills: { ...state.skills, ...action.payload } };

    case 'ADD_EXPERIENCE':
      return { ...state, experience: [...state.experience, action.payload] };
    case 'UPDATE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.map((exp, i) =>
          i === action.index ? { ...exp, ...action.payload } : exp
        ),
      };
    case 'REMOVE_EXPERIENCE':
      return { ...state, experience: state.experience.filter((_, i) => i !== action.index) };

    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((proj, i) =>
          i === action.index ? { ...proj, ...action.payload } : proj
        ),
      };
    case 'REMOVE_PROJECT':
      return { ...state, projects: state.projects.filter((_, i) => i !== action.index) };

    case 'ADD_CERTIFICATION':
      return { ...state, certifications: [...state.certifications, action.payload] };
    case 'UPDATE_CERTIFICATION':
      return {
        ...state,
        certifications: state.certifications.map((cert, i) =>
          i === action.index ? { ...cert, ...action.payload } : cert
        ),
      };
    case 'REMOVE_CERTIFICATION':
      return { ...state, certifications: state.certifications.filter((_, i) => i !== action.index) };

    case 'ADD_ACHIEVEMENT':
      return { ...state, achievements: [...state.achievements, action.payload] };
    case 'UPDATE_ACHIEVEMENT':
      return {
        ...state,
        achievements: state.achievements.map((ach, i) =>
          i === action.index ? { ...ach, ...action.payload } : ach
        ),
      };
    case 'REMOVE_ACHIEVEMENT':
      return { ...state, achievements: state.achievements.filter((_, i) => i !== action.index) };

    case 'SET_TEMPLATE':
      return { ...state, selectedTemplate: action.payload };

    case 'SET_AI_ENHANCED_DATA':
      return { ...state, ...action.payload, aiEnhanced: true };

    case 'RESET':
      return { ...emptyResume };

    case 'LOAD_DATA':
      return { ...emptyResume, ...action.payload };

    default:
      return state;
  }
};

export function ResumeProvider({ children }) {
  const saved = loadFromLocalStorage(STORAGE_KEY);
  const initial = saved ? { ...emptyResume, ...saved } : emptyResume;

  const [state, dispatch] = useReducer(resumeReducer, initial);

  useEffect(() => {
    saveToLocalStorage(STORAGE_KEY, state);
  }, [state]);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}
