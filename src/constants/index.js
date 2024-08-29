import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  att,
  AppAcademy,
  awaken,
  carrent,
  jobit,
  tripguide,
  threejs,
  investidom,
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
    title: "React Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Instructor",
    company_name: "App Academy",
    icon: AppAcademy,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Teaching and mentoring students in software development concepts and technologies.",
      "Writing extensive documentation on projects built for students.",
      "Creating npm packages for different projects within App Academy.",
      "Providing constructive feedback and support to enhance student learning outcomes.",
    ],
  },
  {
    title: "Instructional Assistant",
    company_name: "App Academy",
    icon: AppAcademy,
    iconBg: "#383E56",
    date: "January 2022 - July 2022",
    points: [
      "Assisted in delivering instructional content and coding exercises to students.",
      "Provided one-on-one support to students to help them grasp complex software engineering concepts.",
      "Reviewed and graded assignments, offering detailed feedback to improve student performance.",
      "Collaborated with lead instructors to develop curriculum and enhance the learning experience.",
    ],
  },
  {
    title: "CEO/Founder",
    company_name: "Investidom",
    icon: investidom,
    iconBg: "#E6DEDD",
    date: "May 2019 - August 2020",
    points: [
      "Developed and executed business strategies to drive growth and profitability.",
      "Managed all aspects of operations, including sales, marketing, and finance.",
      "Collaborated with stakeholders to optimize business processes and customer engagement.",
      "Leveraged data analytics to inform decision-making and improve service offerings.",
    ],
  },
  {
    title: "Acquisitions Manager/Dispositions",
    company_name: "Awaken Real Estate",
    icon: awaken,
    iconBg: "#383E56",
    date: "November 2018 - May 2019",
    points: [
      "Identified and assessed real estate investment opportunities for acquisition.",
      "Negotiated contracts and managed relationships with vendors and clients.",
      "Developed marketing strategies to maximize property visibility and sales.",
      "Analyzed market trends to inform investment strategies and portfolio management.",
    ],
  },
  {
    title: "Sales Representative",
    company_name: "AT&T",
    icon: att,
    iconBg: "#E6DEDD",
    date: "August 2016 - October 2018",
    points: [
      "Provided exceptional customer service and support to clients.",
      "Executed sales strategies to achieve and exceed performance targets.",
      "Educated customers on product features and benefits to facilitate informed decisions.",
      "Maintained accurate records of sales activities and customer interactions.",
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
    source_code_link: "https://github.com/jt989073",
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
    source_code_link: "https://github.com/jt989073",
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
    source_code_link: "https://github.com/jt989073",
  },
];

export { services, technologies, experiences, testimonials, projects };
