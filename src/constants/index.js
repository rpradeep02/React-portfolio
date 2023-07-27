import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  ruby,
  rails,
  mysql,
  rspec,
  css,
  reactjs,
  tailwind,
  git,
  plansource,
  expense,
  gamehub,
  blog,
  quiz,
  contact,
  threejs,
  mountblue,
  solartis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ruby on Rails",
    icon: mobile,
  },
  {
    title: "Ruby",
    icon: creator,
  },
  {
    title: "React",
    icon: web,
  },
  {
    title: "Rspec",
    icon: backend,
  },
 
];

const technologies = [
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Rpsec",
    icon: rspec,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "PlanSource",
    icon: plansource,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Presented a complex feature to CPTO and SVP Engineering, that helped customers create Benefit templates faster and reduced the operations time by 30%.",
      "Excelled at writing high-quality code with minimum discrepancies which significantly reduced SDLC bugs for the scrum team.",
      "Improved coverages of RSpec and Unit tests on the code base.",
      "Developed automated scripts to simplify common tasks and reduce manual effort.",
      "Shared a good rapport with the team and helped them improve code quality and ensure adherence to best practices.",
      "Improved database performance through query optimization and indexing.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "plansource",
    icon: plansource,
    iconBg: "#E6DEDD",
    date: "Apr 2021 - Jun 2023",
    points: [
      "Optimized code to improve the performance of AI features.",
      "Fixed Bugs from Engineering Backlog in the application, changing/modifying code based on the requirement.",
      "Resolved technical debt issues with RSpec and unit tests on the code base.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "MountBlue Technologies",
    icon: mountblue,
    iconBg: "#383E56",
    date: "Jan 2021 - Mar 2021",
    points: [
      "Trained in Ruby on Rails, JavaScript, Git, and PostgreSQL.",
      "Developed a robust E-Commerce site and blog utilizing Ruby on Rails as the backend framework.",
      "Developed a Ruby-based IPL data project incorporating JavaScript for interactive data visualization of IPL matches.",
    ],
  },
  {
    title: "Operations Associate",
    company_name: "Solartis LLC",
    icon: solartis,
    iconBg: "#E6DEDD",
    date: "May 2019 - May 2020",
    points: [
      "Responsible for ensuring the delivery of high-quality products through data verification using Optimix.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My Game Hub",
    description:
      "This is a game-hub application using React, Axios for request and response, and the RAWG API, where users can search for games, choose from genres based on game type, order by relevance, and sort by platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "RAWGApi",
        color: "pink-text-gradient",
      },
    ],
    image: gamehub,
    source_code_link: "https://github.com/rpradeep02/Game-Hub-React",
  },
  {
    name: "Expense Tracker",
    description:
        "This is a React-based Expense App. The main objective of this project is to allow users to sign up or log in and manage their expenses online. They can add, edit, and delete expenses, keeping track of their financial records.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: expense,
    source_code_link: "https://github.com/rpradeep02/Expense-app",
  },
  {
    name: "Blog",
    description:
      "This is a Ruby on Rails-based blog. The main objective of this project is to allow users to sign up and log in, and then add, edit, and delete articles online. All the articles added by users will be visible on the homepage.",
    tags: [
      {
        name: "Ruby on Rails",
        color: "blue-text-gradient",
      },
      {
        name: "Ruby",
        color: "green-text-gradient",
      },
      {
        name: "sqlite3",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/rpradeep02/blog",
  },
  {
    name: "Online Quiz",
    description:
      "This is a Django based Online_quiz. The main objective of this project is, the User can attend quiz(MCQ) through online after creating an account or already existing account.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/rpradeep02/Online_quiz",
  },
  {
    name: "Contact List App",
    description:
      "This is a Django based Contact-List-app. The main objective of this project is, the User can search for the particular contact and add,edit,delete contacts through online",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: contact,
    source_code_link: "https://github.com/rpradeep02/Contact-List-app",
  },
];

export { services, technologies, experiences, testimonials, projects };