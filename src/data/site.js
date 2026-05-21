export const site = {
  name: 'Daniel Jilek',
  role: 'Computer Science Student',
  tagline: '',
  bio: 'Hi, I\'m Daniel!\n I\'m a current MSCS student at Northeastern University in Boston, MA.\n' +
  'After graduating from the University of Texas at Austin with a degree in Neuroscience, ' +
  'I worked in vaccine research and drug development at MassBiologics, where I tested and produced COVID-19 antibodies. ' +  
  'I then discovered my passion for computer science and decided to return to school to pursue a master\'s degree. ' +
  'I\'m now pursuing a master\'s degree in Computer Science at Northeastern University and learning new tools and technologies along the way.',
  email: 'jilek.d@northeastern.edu',
  resumeUrl: `${import.meta.env.BASE_URL}Daniel_Jilek_Resume.pdf`,
  social: {
    github: 'https://github.com/danielrjilek',
    linkedin: 'https://linkedin.com/in/daniel-jilek-8032a4213',
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const education = [
  {
    school: 'Northeastern University',
    detail: 'M.S. Computer Science',
    location: 'Boston, MA',
    dates: 'August 2024 – December 2026',
    logo: `${import.meta.env.BASE_URL}NU_RGB_seal_R.png`,
    logoAlt: 'Northeastern University seal',
  },
  {
    school: 'University of Texas at Austin',
    detail: 'B.S. Neuroscience',
    location: 'Austin, TX',
    dates: 'August 2017 – May 2023',
    logo: `${import.meta.env.BASE_URL}University_of_Texas_at_Austin_seal.svg`,
    logoAlt: 'University of Texas at Austin logo',
  },
]

export const skillGroups = [
  {
    title: 'Languages & Databases',
    skills: ['Python', 'Java', 'JavaScript', 'C', 'C++', 'SQL', 'MongoDB'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'PyTorch', 'OpenCV'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['HTML & CSS', 'REST APIs', 'Websockets', 'Git'],
  },
  // {
  //   title: 'Concepts',
  //   skills: [
  //     'Object-Oriented Programming',
  //     'Computer Vision',
  //     'Machine Learning',
  //   ],
  // },
]
