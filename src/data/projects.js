import screenshot26 from '../assets/Screenshot (26).png'
import screenshot233306 from '../assets/Screenshot 2025-11-18 233306.png'
import screenshot235729 from '../assets/Screenshot 2025-11-18 235729.png'
import screenshot28 from '../assets/Screenshot (28).png'

const projects = [
  {
    id: 1,
    title: 'Spam Bang Website',
    role: 'AI/ML Developer / Full-Stack Developer',
    year: 2024,
    type: 'AI Web Application',
    description: 'An AI-powered web app that filters spam calls in real-time with 92% accuracy using a custom NLP model.',
    descriptionEn: 'Built an AI-powered web app that filters spam calls in real-time with 92% accuracy using a custom NLP model.',
    technologies: ['React.js', 'Node.js', 'Docker', 'NLP', 'Machine Learning'],
    accuracy: '92%',
    performance: 'Reduced response latency by 40%',
    dataSize: '10,000+ call records for EDA',
    image: screenshot26,
    github: 'https://github.com',
    features: [
      'Real-time spam call detection',
      'Custom NLP model with 92% accuracy',
      'Full-stack solution with Docker deployment',
      'Comprehensive EDA on large dataset'
    ]
  },
  {
    id: 2,
    title: 'Disaster Classification Using Neural Networks',
    role: 'Deep Learning Engineer / Data Scientist',
    year: 2024,
    type: 'Deep Learning Project',
    description: 'Engineered a dual-model deep learning pipeline leveraging Custom CNN and VGG16 Transfer Learning, achieving 88% accuracy in classifying disaster imagery.',
    descriptionEn: 'A project aimed at classifying real-world disaster imagery into various categories using advanced neural networks.',
    technologies: ['Python', 'TensorFlow', 'CNN', 'VGG16', 'Transfer Learning'],
    accuracy: '88%',
    dataSize: '4,500+ disaster images',
    categories: ['Cyclone', 'Earthquake', 'Flood', 'Wildfire'],
    image: screenshot233306,
    github: 'https://github.com',
    features: [
      'Dual-model pipeline (Custom CNN + VGG16)',
      '88% accuracy in disaster classification',
      'Data augmentation and transfer learning',
      'Solution-ready for disaster response systems'
    ]
  },
  {
    id: 3,
    title: 'Prayana Electrics Website',
    role: 'Software Developer',
    year: 2024,
    type: 'Full-Stack Web Application',
    description: 'Developed and managed company website for electric vehicle solutions using modern web technologies.',
    descriptionEn: 'Built scalable web application for EV company with 90% satisfaction rating.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Google OAuth'],
    satisfaction: '90%',
    deployment: 'AWS (EC2, S3)',
    image: screenshot235729,
    features: [
      'Modern responsive design with Tailwind CSS',
      'Integrated Google OAuth authentication',
      'MongoDB database integration',
      'AWS cloud deployment and management'
    ]
  },
  {
    id: 4,
    title: 'Open Source Contributions',
    role: 'Software Engineer / Contributor',
    year: 2024,
    type: 'Open Source Development',
    description: 'Fixed CI linting failures in Brisbane Social by replacing missing ESLint plugin with built-in sort-keys rule.',
    descriptionEn: 'Contributing to open source projects and solving critical issues in community repositories.',
    technologies: ['JavaScript', 'ESLint', 'CI/CD', 'Git'],
    impact: 'Resolved 19+ failing checks',
    image: screenshot28,
    features: [
      'Fixed critical CI/CD pipeline issues',
      'Improved code quality and linting',
      'Enhanced project maintainability',
      'Active community contribution'
    ]
  }
]

export default projects
