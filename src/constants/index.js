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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    contrast,
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
      title: "Computer Science Graduate",
      company_name: "IPEC",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jul 2018 - Aug 2022",
      points: [
        "7.2 CGPA in Computer Science and Engineering",
        "Learned the basics of computer science",
        "Implemented Algorithms and Data structures",
        "Developed a Full stack MERN app called Smart Treat Junction with my 3 peers ",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    
    {
      title: "React.js Developer",
      company_name: "Freelance",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2022 - April 2023",
      points: [
        "Created a Landing Page for a Startup named safePay using MERN Stack",
        "Implemented forms using Formik",
        "Used SCSS for better css structure",
        "Used EJS to create reusable code",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "FreeLance",
      icon: meta,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining an NGO Website for Saroj Foundation",
        "Styling Components using SCSS",
        "Used VITE + REACT for better speed",
        "Full Website for Saroj Foundation in USA!",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Arnav proved me wrong.",
      name: "Ritu Tyagi",
      designation: "Founder",
      company: "Saroj Foundation",
      image: "https://www.sarojfoundationusa.org/img/profile.jpeg",
    },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Contrast",
      description:
        "Create communities, share, discuss and connect with Contrast",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Prisma",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: contrast,
      source_code_link: "https://contrast-gamma.vercel.app",
    },
    {
      name: "fightClub",
      description:
        "MERN Stack Social Media Website using formik Mongoose, React, Nodejs, vanilla javascript With Features like Posting your photos, adding friends, feedpost",
        
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/shinobi106",
    },
    {
      name: "Shopper",
      description:
        "A Full stack Ecomm Website built using React, React Router, Strapi, Scss, Mui, With Payment and Add to Cart Methods, Look for link",
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
      source_code_link: "https://github.com/shinobi106",
    },
    {
      name: "Saroj Foundation Website",
      description:
        "A Front end NGO Website built using reactjs which uses vite, SCSS and javascript, this website is in progress and I regularly update it",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.sarojfoundationusa.org/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };