import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ajay",
  title: "Hello, I'm Ajay",
  subTitle: emoji(
    "A passionate Full Stack IT professional having intensive experience in All Major Content Mangement Systems and their - Migration/Upgrade. Expert in Java, Spring, Micro-Services, JavaScript, ReactJS, Angular, AWS, Azure, CD/CI, Jenkins, Docker, Kubernetes based applications and platforms..."
  ),
  resumeLink: "#",
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/ajkr195",
  linkedin: "https://github.com/ajkr195",
  gmail: "######@gmail.com",
  gitlab: "https://github.com/ajkr195",
  facebook: "https://github.com/ajkr195",
  medium: "https://github.com/ajkr195",
  stackoverflow: "https://github.com/ajkr195",
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Design and Develop Qaility Enterprise Solutions for your organization..."
    ),
    emoji(
      "⚡ Implement, Migrate, Upgrade all your Content Mangement Solutions..."
    ),
    emoji(
      "⚡ Versatile professional with great appetite for newer technologies..."
    ),
    emoji(
      "⚡ Integration of services - Firebase/ AWS / Azure / Docker / Kubernetes..."
    )
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UI/UX Frontend Design", //Insert stack or technology you have experience in
      progressPercentage: "88%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "97%"
    },
    {
      Stack: "Programming",
      progressPercentage: "92%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or new idea or a new technology? Give me a call or write an email explaining how can I assist. !",
  number: "+1-(###) ###-####",
  email_address: "#######@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  contactInfo
};
