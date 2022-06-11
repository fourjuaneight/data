export const config = {
  baseURL: process.env.BASE_URL || 'http://localhost:3000',
  title: 'Data Archive',
  description: 'Data consolidation and trends graphs for all the data I hoard.',
  locale: 'en',
  theme: '#9333ea',
  themeBg: '#333333',
  author: 'Juan Villela',
  social: 'fourjuaneight',
  intro: {
    img: 'dev.png',
    alt: 'Illustration of Juan laying on a sofa, coding on a laptop. While being levitated by a wizard cat.',
    heading: "Hi, I'm Juan",
    copy: "A Senior Full-Stack Developer that likes stickers and building things. This is where I've compiled all the data I hoard and display it in a useful manner.",
  },
  nav: {
    header: {
      About: 'about',
    },
    footer: {
      Blog: 'https://cleverlaziness.com',
      Uses: 'https://cleverlaziness.com/uses',
      Twitter: 'https://twitter.com/fourjuaneight',
      GitHub: 'https://github.com/fourjuaneight',
    },
  },
};
