import { Project, SkillCategory, TrainingItem, CertificateItem, AchievementItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ashish Pratap Singh',
  role: 'Computer Science & Engineering Student | Web Developer | Problem Solver',
  headline: 'Computer Science & Engineering Student | Web Developer | Problem Solver',
  intro: 'I build responsive and interactive web experiences while strengthening my foundation in programming, data structures, and software development.',
  about: `Ashish Pratap Singh is currently pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University, with a current CGPA of 9.0.

He is developing skills across programming, web development, databases, and problem solving, with hands-on projects involving JavaScript, React, Node.js, REST APIs, MongoDB, and modern frontend technologies.`,
  email: 'ashishpratap.singh@outlook.com',
  phone: '+91-7903498368',
  linkedin: 'http://www.linkedin.com/in/ashish-pr-singh',
  github: 'https://github.com/ashish-p-singh',
  location: 'Lovely Professional University, Phagwara, Punjab',
  stats: [
    { label: 'Degree', value: 'B.Tech CSE @ LPU' },
    { label: 'CGPA', value: '9.0' },
    { label: 'DSA Solved', value: '80+ Problems' },
    { label: 'Codeforces Streak', value: '27 Days 🔥' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    iconName: 'Code',
    skills: ['JavaScript', 'C', 'C++', 'Python', 'Java']
  },
  {
    title: 'Technologies',
    iconName: 'Layout',
    skills: ['HTML', 'CSS', 'Bootstrap', 'React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Mongoose']
  },
  {
    title: 'Databases & Tools',
    iconName: 'Database',
    skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Vite', 'Virtual Machines']
  },
  {
    title: 'Soft Skills',
    iconName: 'Brain',
    skills: ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Persistence']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'task-manager',
    title: 'Task Manager',
    subtitle: 'Dynamic Task Management System',
    date: 'Jun 2026 – Aug 2026',
    description: 'Developed a responsive Task Manager web application enabling users to add, edit, delete, search, filter, and track the completion status of tasks.',
    keyFeatures: [
      'Add, edit and delete tasks',
      'Search and filtering functionality',
      'Completion tracking with progress visualizer',
      'Dynamic UI updates via Vanilla DOM Manipulation',
      'Event-driven interactions & Local Storage persistence',
      'Fully responsive mobile-first interface'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
    category: 'frontend',
    githubUrl: 'https://github.com/ashish-p-singh/task-manager'
  },
  {
    id: 'movie-explorer',
    title: 'Movie Explorer',
    subtitle: 'Asynchronous Cinema Search Application',
    date: 'Jul 2026 – Present',
    description: 'Developed a responsive Movie Explorer web application that allows users to search for movies and view dynamically fetched movie information.',
    keyFeatures: [
      'Real-time movie search & metadata view',
      'External movie REST API integration',
      'Asynchronous data fetching with fetch() and async/await',
      'Dynamic UI rendering & DOM updates',
      'Graceful loading skeletons & error handling'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Async JavaScript', 'REST API'],
    category: 'api',
    githubUrl: 'https://github.com/ashish-p-singh/movie-explorer'
  },
  {
    id: 'defense-systems-explorer',
    title: 'Defense Systems Explorer',
    subtitle: 'Public Defense Tech Platform Concept',
    date: 'Aug 2026 – Present',
    statusLabel: 'Ongoing / Concept',
    description: 'Designed a responsive web platform concept focused on exploring and organizing publicly available information about defense systems across multiple categories.',
    keyFeatures: [
      'Detailed system profiles & specs',
      'Technical specifications & operational history',
      'Search and filtering across categories',
      'Side-by-side spec comparison tool',
      'Proposed defense news integration & system tracking'
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    category: 'fullstack',
    githubUrl: 'https://github.com/ashish-p-singh/defense-systems-explorer'
  }
];

export const TRAINING: TrainingItem = {
  title: 'Community Development Project (CDP) – WNS Care Foundation',
  institution: 'Lovely Professional University',
  organization: 'WNS Care Foundation',
  location: 'LPU, Phagwara, Punjab',
  period: 'Jun 2026 – Jul 2026',
  description: [
    'Conducted cybersecurity awareness sessions for 36 community participants across different age groups.',
    'Educated participants about phishing, online scams, strong passwords, OTP safety, and digital privacy.',
    'Guided participants through Cyber Smart learning modules and assessments.',
    'Maintained participant records and certificate reference IDs.'
  ],
  highlights: ['36 Participants Trained', 'Cybersecurity Awareness']
};

export const CERTIFICATES: CertificateItem[] = [
  {
    title: 'Introduction To Frontend Development',
    issuer: 'Meta',
    platform: 'Coursera',
    date: 'Jun 2026'
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    platform: 'Coursera',
    date: 'Jul 2026'
  },
  {
    title: 'React Basics',
    issuer: 'Coursera',
    platform: 'Coursera',
    date: 'Aug 2026'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    stat: '80+',
    title: 'Programming & DSA Problems Solved',
    description: 'Solved over 80 programming and data structure problems across LeetCode, Codeforces, and GeeksforGeeks.',
    iconName: 'Code'
  },
  {
    stat: '27-Day',
    title: 'Ongoing Codeforces Streak 🔥',
    description: 'Maintaining an active daily problem-solving streak on Codeforces, tackling algorithmic puzzles consistently.',
    iconName: 'Flame'
  },
  {
    stat: 'Multiple',
    title: 'Web Development Projects',
    description: 'Built interactive frontend and full-stack web applications using HTML, CSS, JavaScript, React, and Node.js.',
    iconName: 'Layers'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Technology – Computer Science & Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    grade: 'CGPA: 9.0',
    period: 'Aug 2025 – Present'
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'B.L Indo Anglian Public School',
    location: 'Aurangabad, Bihar',
    grade: 'Percentage: 70.2%',
    period: 'May 2022 – Mar 2024'
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'Gems English School',
    location: 'Dehri, Bihar',
    grade: 'Percentage: 88.0%',
    period: 'Jun 2020 – Mar 2022'
  }
];
