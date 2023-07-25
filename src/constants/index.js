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
  carrent,
  jobit,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Ruby on Rails Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    date: "Jan 2023 - Present",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };