export const emptyResume = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: '',
  },
  objective: '',
  education: [],
  skills: {
    technical: [],
    soft: [],
    languages: [],
    tools: [],
  },
  experience: [],
  projects: [],
  certifications: [],
  achievements: [],
  selectedTemplate: 'modern',
  aiEnhanced: false,
};

export const emptyEducation = {
  institution: '',
  degree: '',
  field: '',
  startDate: '',
  endDate: '',
  gpa: '',
  highlights: '',
};

export const emptyExperience = {
  company: '',
  role: '',
  startDate: '',
  endDate: '',
  current: false,
  description: '',
  bullets: [],
};

export const emptyProject = {
  name: '',
  technologies: [],
  description: '',
  bullets: [],
  link: '',
};

export const emptyCertification = {
  name: '',
  issuer: '',
  date: '',
  link: '',
};

export const emptyAchievement = {
  title: '',
  description: '',
  date: '',
};

export const stepLabels = [
  'Personal Info',
  'Objective',
  'Education',
  'Skills',
  'Experience',
  'Projects',
  'Certifications',
  'Achievements',
];
