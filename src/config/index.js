module.exports = {
  siteTitle: 'Andrew Ingson | aingson.xyz',
  siteDescription:
    'Andrew Ingson is an undergraduate student at the University of Maryland, Baltimore County, where he is majoring in Computer Science. Right now, he is looking for a technical internship in the field of Software Engineering.',
  siteKeywords:
    'Andrew Ingson, Andrew, Ingson, ADMARIl, aings1, software engineer, front-end engineer, web developer, javascript, UMBC',
  siteUrl: 'https://aingson.xyz',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-76848038-4',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Andrew Ingson',
  location: 'Baltimore, MD',
  email: 'aings1@umbc.edu',
  github: 'https://github.com/ADMARIl',
  twitterHandle: '@twitter',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ADMARIl',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/andrew-ingson-194ab2150/',
    },
    {
      name: 'Mail',
      url: 'mailto:aings1@umbc.edu',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Coursework',
      url: '/#coursework',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#f2efe6',
  darkNavyColor: '#000000',

  loaderEnable: 0,

  srConfig: (delay = 20) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 5,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
