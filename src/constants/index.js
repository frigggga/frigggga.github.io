import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  swift,
  unity,
  aws,
  figma,
  docker,
  socialfuture,
  canvasmain,
  elixirmain,
  doordrinkmain
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'swift',
    icon: swift,
  },
  {
    name: 'aws',
    icon: aws,
  },
  {
    name: 'unity',
    icon: unity,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Enginnering Intern',
    company_name: 'Social Future',
    icon: socialfuture,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Elixir',
    description: 'Developed an iOS application that utilized the fine-tuned GPT-3 Model to read and interpret Tarot cards selected by users.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: elixirmain,
    repo: 'https://github.com/frigggga/Elixir',
    demo: 'https://youtu.be/6jYyLx50e5U',
  },
  {
    id: 'project-2',
    name: 'USC DoorDrink',
    description:
      'Led a team of 3 in developing an Android drink delivery app that helped over 100 coffee and tea lovers get drinks at door.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: doordrinkmain,
    repo: 'https://github.com/frigggga/USCDoordrink',
    demo: 'https://youtu.be/Wi08ihAFIo0',
  },
  {
    id: 'project-3',
    name: 'Pixel Canvas USC',
    description: 'A collaborative USC-logo-shaped canvas Each user can change the color of a single pixel Both guests and registered users can interact with the canvas. However, their benefits differ. Multiple users can interact with the canvas at the same time and each of these interactions will be handled by one thread.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: canvasmain,
    repo: 'https://github.com/frigggga/PixelCanvasUSC',
    demo: 'https://github.com/frigggga/PixelCanvasUSC/tree/main/public',
  },
];

export { services, technologies, experiences, projects };
