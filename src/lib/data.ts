import { Code2, Database, Palette, Wrench } from "lucide-react";

export const personalInfo = {
  name: "Ronald Rosquete",
  logo: "<Dev />",
  email: "ronaldrosquete756@gmail.com",
  github: "https://github.com/ronaldRosquete",
  linkedin: "www.linkedin.com/in/ronaldrosquete",
  ocupation: "Frontend Developer",
  heroDescription:
    "I create modern, accessible, and high-performance web experiences that combine elegant design with robust code.",
  profilePicture: "/profile.jpg",
  aboutMe:
    "Computer Science Engineer, graduated from the University of Computer Sciences (UCI, 2025), with a strong background in web development, user experience, and performance optimization. I am known for my proactivity, adaptability, and teamwork skills. Committed to continuous improvement, I apply my technical abilities to create efficient, user-centered solutions, aiming to add value in dynamic and demanding environments as a frontend developer.",
};

export const workExperience = [
  {
    period: "Sep 2025 - Present",
    position: "Frontend Developer",
    company: "Centro de Tecnologías para la Formación",
    location: "Universidad de las Ciencias Informáticas (UCI)",
    achievements: [
      "Development and maintenance of responsive web interfaces with Angular and TypeScript.",
      "Collaboration with analysts and backend developers in AUP-UCI environments.",
      "Component performance optimization and accessibility improvement.",
      "Implementation of good version control practices with Git.",
    ],
  },
  {
    period: "Ene 2024 - Ago 2025",
    position: "Full Stack Developer",
    company: "TechSolutions Inc.",
    location: "Remote",
    achievements: [
      "Desarrollé aplicaciones web completas usando React y Node.js.",
      "Implementé APIs RESTful y sistemas de autenticación seguros.",
      "Lideré la migración de aplicaciones legacy a arquitecturas modernas.",
      "Mejoré el rendimiento de la base de datos reduciendo tiempos de consulta en un 40%.",
    ],
  },
  {
    period: "Mar 2022 - Dic 2023",
    position: "Frontend Developer",
    company: "StartupLab",
    location: "Buenos Aires, Argentina",
    achievements: [
      "Creé interfaces de usuario modernas con Vue.js y Tailwind CSS.",
      "Colaboré con diseñadores UX para implementar prototipos interactivos.",
      "Implementé testing automatizado mejorando la calidad del código.",
      "Participé en code reviews y mentoría de desarrolladores junior.",
    ],
  },
];

export const projects = [
  {
    title: "E-commerce Platform",
    description: [
      "Morbi in sem quis dui placerat ornare.",
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
      "Praesent dapibus, neque id cursus faucibus.",
      "Fusce feugiat malesuada odio.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    ],
    image: "/e-commerce.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Task Management App",
    description: [
      "Morbi in sem quis dui placerat ornare.",
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
      "Praesent dapibus, neque id cursus faucibus.",
      "Fusce feugiat malesuada odio.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    ],
    image: "/management-dashboard.jpg",
    technologies: ["React", "Firebase", "Material UI", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: [
      "Morbi in sem quis dui placerat ornare.",
      "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.",
      "Praesent dapibus, neque id cursus faucibus.",
      "Fusce feugiat malesuada odio.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    ],
    image: "/weather-dashboard.jpg",
    technologies: ["Vue.js", "Chart.js", "API REST", "SCSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

 export const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Prisma'],
  },
  {
    icon: Palette,
    title: 'Diseño',
    skills: ['UI/UX', 'Figma', 'Responsive Design', 'Accessibility', 'Design Systems'],
  },
  {
    icon: Wrench,
    title: 'Herramientas',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Testing'],
  },
]

export const education = [
  {
    institution: "Universidad de Ciencias Informaticas (UCI)",
    location: "La Habana ",
    degree: "Ingeniero en Ciencias Informaticas",
    period: "2022 - 2025",
    achievements: [
      "President of Lorem Ipsum Club",
      "Organized multiple lorem events",
      "Represented university in national competitions.",
      "Graduated with honors.",
    ],
  },
];