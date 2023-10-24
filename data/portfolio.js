const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Andrei Csatlos',
  role: 'Smart Contract Engineer',
  company: 'LendeXe Finance',
  description: [
    '',
  ],
  resume: 'https://drive.google.com/file/d/11RpfhhV-sOPrSXc_lrdb2--8AmHhRnfv/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/andrei27/',
    github: 'https://github.com/Andrei27C',
  },
  greetingEmoji: '👋',
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  // each element in the description array is a paragraph
  {
    thumbnail: 'images/Logo-LendeXe.svg',
    name: 'Smart Contract Engineer at LendeXe Finance\n',
    date: 'August 2023 - Present',
    description: [
      'Increased transparency for developers by restructuring the development process.',
      'Working on protocol, front-end and api parts of the project.',
      'Saved company’s and user’s money in the long run by identifying and solving a problem with decimal mismatch in the blockchain contracts of the application.',
      'Streamlined the user work by providing insightful information when needed.',
    ],
    stack: ['Solidity', 'Hardhat', 'Truffle', 'Node.js', 'TypeScript', 'MongoDB'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },

  {
    thumbnail: 'images/smartbear-logo.png',
    name: 'Software Engineer at Smartbear\n',
    date: 'May 2022 - August 2023',
    description: [
      'Collaborated with 5 cross-functional, multi-disciplinary teams for ReadyAPI.',
      'Solved critical bugs helping over 10 big customers.',
      'Conducted 1 on 1 meetings with stakeholders.',
      'Reduced the loading time and servers latency by identifying useless API calls.',
    ],
    stack: ['Java', 'Spring Boot', 'Swing', 'Swagger', 'Stakeholder Engagement', 'Agile', 'Jira', 'Git'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },

  {
    thumbnail: 'images/logo-ideafy.png',
    name: 'Co-founder of www.ideafy.org',
    subtitle: 'NGOs and large Companies bridging platform',
    description: [
      'Provided ESG expertise to companies and connected them with NGOs.',
      'Launched MVP in under 1 month using Next.js, deployed with Vercel.',
      'Won several contests. (Innovation Labs, FIX Cluj).',
      'Presented the concept to 20+ companies at Techsylvania tech conference, connecting 7 companies and 12 NGOs.',
      'Had trainings from big companies on Business Analysis and Strategy, Market Analysis and Stakeholder Engagement.'
    ],
    stack: ['Startup Development', 'Business Analysis', 'Business Strategy',  'Competitive Analysis', 'Stakeholder Engagement', 'Market Analysis', 'JavaScript', 'Next.js', 'Vercel'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.ideafy.org/',
  },

  {
    thumbnail: 'images/logo-define.svg',
    name: 'Software Engineer & Business Analyst at #defineSchool',
    date: 'June 2023 - August 2023',
    description: [
      'Built website, resulting in a 40% surge in web traffic. Applied SEO practices to optimise client conversion, onboarding 8 new participants. \n',
    ],
    stack: ['Business Analysis', 'Business Strategy', 'Google Analytics', 'Microsoft Clarity', 'Divi'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://2023.defineschool.ro/',
  },

  {
    thumbnail: 'images/logo-dialum-nobg-trimmed.png',
    name: 'Software Engineer & Business Analyst  at www.dialum.ro',
    date: 'November 2022 - Present',
    description: [
      'Building a e-commerce platform tailored for a local gutter systems company.',
      'Transitioned financing and paperwork digitally, reducing 2 man power.',
      'Led the business development efforts by offering strategic business consultation.',
      '--The website is still in construction--',
    ],
    stack: ['Business Analysis', 'Business Strategy', 'Marketing', 'Business Relations'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.dialum.ro/',
  },

  {
    // thumbnail: 'images/logo-dialum-nobg-trimmed.png',
    name: 'Electric Vehicle Sharing dApp',
    subtitle: 'Diploma Project',
    description: [
      'Developed a decentralized secure application for electric vehicle sharing, leveraging blockchain technology to ensure secure, transparent, and efficient operations. This innovation modernized the vehicle sharing landscape by utilizing the distinctive strengths of blockchain.',
    ],
    stack: ['Node.js', 'React-Native', 'Solidity', 'Truffle'],
    sourceCode: 'https://github.com/Andrei27C/electric-vehicle-sharing',
    // livePreview: 'https://www.dialum.ro/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Spring Boot',
  'Swing',
  'C',
  'Solidity',
  'Truffle',
  'Blockchain',
  'Node.js',
  'React',
  'NextJS',
  'React-Native',
  'Vercel',
  'Jira',
  'Growth Acceleration',
  'Competitive Analysis',
  'Market Research & Analysis',
  'Business Development & Analysis',
  'Startup Development',
  'Stakeholder Engagement',
  'Git',
  'SASS',
  'OOP',
  'MVC',
  'MVVM',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tech@andreicsatlos.dev',
}

export { about, projects, skills, contact }
