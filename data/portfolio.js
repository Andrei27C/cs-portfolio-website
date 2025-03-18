const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Andrei Csatlos',
  role: 'Technical Lead',
  company: 'ATLAS ANALYTICS',
  description: [
    '',
  ],
  resume: 'https://drive.google.com/file/d/1YsZgmipUky4nPCOeadGXqLhMg49rlFSc/view?usp=sharing',
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
    thumbnail: 'images/ATLAS_black-removebg-preview.png',
    name: 'Technical Lead at ATLAS ANALYTICS\n',
    date: 'Jan 2024 - Present',
    description: [
      '𝐑𝐞𝐛𝐮𝐢𝐥𝐭 and 𝐥𝐞𝐝 the development of 𝐒𝐚𝐥𝐞𝐬𝐎𝐒 from scratch, managing both frontend and backend.',
      'Implemented 𝐀𝐈-driven solutions to enhance user productivity and eﬃciency, including automatic AI custom outreach, email content extraction, and automatic email replies based on categories of the emails.',
      'Started managing the parallel development of multiple apps, constantly integrating advanced AI technologies to improve user experience.',
      'Mentored team members, promoting best practices in coding, architecture, and problem-solving.',
      'Continuously explored and integrated advanced development platforms to accelerate app development processes. Also got pretty familiar with AWS S3, EC2, Lambda Functions and MediaConvert.',
    ],
    stack: ['Solidity', 'Hardhat', 'Mocha', 'Chai', 'Truffle', 'Node.js', 'TypeScript', 'MongoDB'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    thumbnail: 'images/Logo-LendeXe.svg',
    name: 'Smart Contract Engineer at LendeXe Finance\n',
    date: 'August 2023 - Jan 2024',
    description: [
      'Rebuilt development process, boosting developer transparency and enhancing workflow efficiency by 30%.',
      'Devised a scalable repayment framework that successfully addressed the issues of remainder accumulation from decimal mismatch, improving precision and customer satisfaction by 40%.',
      'Enhanced the precision of lending calculations by expanding the decimal handling capacity from 8 to 18 places drastically reducing rounding errors and potential financial discrepancies in high-volume transactions.',
    ],
    stack: ['Solidity', 'Hardhat', 'Mocha', 'Chai', 'Truffle', 'Node.js', 'TypeScript', 'MongoDB'],
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
      'Won 2 big contests. (Innovation Labs, FIX Cluj).',
      'Presented the concept to 20+ companies at Techsylvania tech conference, connecting 7 companies and 12 NGOs.',
      'Completed specialized training in Business Analysis, Market Analysis, and Stakeholder Engagement from top industry firms, enhancing skills in predicting market trends and making strategic decisions.'
    ],
    stack: ['JavaScript', 'Next.js', 'Vercel', 'Startup Development', 'Business Analysis', 'Business Strategy',  'Competitive Analysis', 'Stakeholder Engagement', 'Market Analysis'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.ideafy.org/',
  },

  {
    thumbnail: 'images/logo-define.svg',
    name: 'Software Engineer & Business Analyst at #defineSchool',
    date: 'June 2023 - August 2023',
    description: [
      'Built website, resulting in a 40% surge in web traffic. Applied SEO practices to optimise client conversion, onboarding 8 new participants.',
      'Also provided Business Strategies and Analysis',
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
      'Building an e-commerce platform tailored for a local gutter systems company.',
      'Transitioned financing and paperwork digitally, reducing 2 man power.',
      'Led the business development efforts by offering strategic business consultation.',
      '--The website is still in construction--',
    ],
    stack: ['React', 'Business Analysis', 'Business Strategy', 'Marketing', 'Business Relations'],
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
  'Node.js',
  'React',
  'React-Native',
  'Next.js',
  'TypeScript',

  'Java',
  'Spring Boot',
  'Swing',

  'Solidity',
  'Hardhat',
  'Mocha',
  'Chai',
  'Truffle',
  'Blockchain',

  'C/C++',

  'SQL',
  'MongoDB',

  'AWS',
  'Docker',
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
