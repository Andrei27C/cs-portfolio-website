const about = {
  // all the properties are optional - can be left empty or deleted
  // each element in the description array is a paragraph
  name: 'Andrei Csatlos',
  role: 'Software Engineer',
  company: 'Waverley Software',
  description: [
    '',
  ],
  resume: 'https://drive.google.com/file/d/12Cs2BCxclZiHKtS5voqzoQbB9019WiAx/view?usp=sharing',
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
    thumbnail: 'images/smartbear-logo.png',
    name: 'Software Engineer at Waverley Software\n',
    date: 'May 2022 - August 2023',
    description: [
      'Collaborated with 3 cross-functional, multi-functional teams and 3 stakeholders.',
      'Solved critical bugs helping over 10 big customers.',
      'Reduced the loading time and servers latency by identifying useless API calls who remained in the early development process of the app.',
      'Streamlined the user work by providing insightful information when needed.',
    ],
    stack: ['Java', 'Swing', 'Stakeholder Engagement', 'Agile', 'Jira', 'Git'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },

  {
    thumbnail: 'images/logo-ideafy.png',
    name: 'Co-founder of www.ideafy.org',
    subtitle: 'NGOs and large Companies bridging platform',
    description: [
      'Developed business and market analysis strategies, participating in 3 contests',
      'Presented the concept to 20+ companies at 3 big tech conferences (Techsylvania, Innovation Labs, FIX Cluj) and guided the business development by discovering their needs and pains.',
      'Gained the trust of 7 companies',
      'Gained experience working with JavaScript (NextJS) and Vercel in building the website.'
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
      'Altered the website’s structure to guide users into paying for the bootcamp. Gathered 5 customers in short time\n' +
      'after publishing and looking into reaching the 15 goal.',
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
      'Transitioned financing and paperwork digitally, reducing 1 man power.',
      'Led the business development efforts by offering strategic business consultation.',
      '--The website is still in construction--',
    ],
    stack: ['Business Analysis', 'Business Strategy', 'Marketing', 'Business Relations'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.dialum.ro/',
  },

  {
    // thumbnail: 'images/logo-dialum-nobg-trimmed.png',
    name: 'Electric Vehicle Sharing DApp',
    subtitle: 'Diploma Project',
    description: [
      'Electric Vehicle Sharing mobile app based on Blockchain (NodeJS, React-Native, Solidity, Truffle)',
    ],
    stack: ['NodeJS', 'React-Native', 'Solidity', 'Truffle'],
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
