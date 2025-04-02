/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Leandra Lorena Prada Cruz",
  title: "Recupera tu mejor nivel entrenando tu mentalidad",
  subTitle: emoji(
"Soy Leandra Prada, Psicóloga Clínica - Deportiva ⚽️✨\n" +
    "Te ayudo a fortalecer tu mentalidad, manejar la presión y alcanzar tu máximo rendimiento en la competencia. 🚀🔥"  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/leandra-lorena-prada-cruz-95224a251/",
  gmail: "saadpasta70@gmail.com",
  facebook: "https://www.facebook.com/saad.pasta7",
  instagram : "",
  tiktok: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "¿Cómo puedo ayudarte?",
  subTitle: "PSICÓLOGA DEPORTIVA COMPROMETIDA CON TU RENDIMIENTO MENTAL Y BIENESTAR",
  skills: [
    emoji("⚡ Entrenamiento mental para mejorar la concentración, confianza y manejo de la presión en la competencia"),
    emoji("⚡ Estrategias psicológicas para optimizar el rendimiento deportivo y el bienestar emocional"),
    emoji("⚡ Acompañamiento en la gestión del estrés, motivación y establecimiento de objetivos")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad El Bosque",
      logo: require("./assets/images/elBosqueLogo.png"),
      subHeader: "Psicología del Deporte y el Ejercicio",
      duration: "2010 - 2015",
      desc: "Formación en psicología con un enfoque en la salud mental y el bienestar emocional.",
    },
    {
      schoolName: "Universidad Católica de Colombia",
      logo: require("./assets/images/catolicaLogo.png"),
      subHeader: "Psicología Clínica",
      duration: "2016 - 2018",
      desc: "Especialización en psicología clínica, profundizando en técnicas terapéuticas avanzadas.",
    },
    {
      schoolName: "Universidad Antonio Nariño",
      logo: require("./assets/images/antonio.jpg"),
      subHeader: "Psicología",
      duration: "2019 - 2021",
      desc: "Enfoque en el rendimiento mental de atletas de alto nivel y estrategias psicológicas para la mejora deportiva.",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sesiones individuales de terapia psicológica",
      company: "Atención individual",
      companylogo: require("./assets/images/Psiconline.webp"),
      date: "",
      desc: "Sesiones personalizadas de terapia psicológica diseñadas para mejorar la concentración, la autoconfianza y el manejo del estrés en el deporte.",
      descBullets: [
        "Evaluación y planificación psicológica adaptada",
        "Estrategias de motivación y enfoque mental",
        "Gestión de la ansiedad y la presión competitiva"
      ]
    },
    {
      role: "Talleres de grupo sobre manejo de la presión",
      company: "Trabajo grupal y equipos",
      companylogo: require("./assets/images/group.jpg"),
      date: "",
      desc: "Entrenamiento mental y talleres diseñados para fortalecer la cohesión del equipo y mejorar el rendimiento colectivo.",
      descBullets: [
        "Talleres grupales sobre manejo de la presión",
        "Desarrollo de comunicación efectiva en el equipo",
        "Estrategias para mejorar la toma de decisiones bajo presión"
      ]
    },
    {
      role: "Entrenamiento mental para equipos",
      company: "Formación y asesoría",
      companylogo: require("./assets/images/groupF.webp"),
      date: "",
      desc: "Asesoría para la creación de estrategias mentales personalizadas que ayuden a potenciar el desarrollo psicológico del deportista.",
      descBullets: [
        "Entrenamiento mental adaptado a cada nivel deportivo",
        "Prevención y manejo del burnout en el deporte",
        "Desarrollo de una mentalidad ganadora y resiliente"
      ]
    },
    {
      role: "Asesoría para el desarrollo de estrategias mentales personalizadas",
      company: "Formación y Asesoría Deportiva",
      companylogo: require("./assets/images/saludmental.jpg"),
      date: "",
      desc: "Brindamos asesoramiento especializado para desarrollar estrategias mentales personalizadas que optimicen el rendimiento psicológico de los deportistas.",
      descBullets: [
        "Entrenamiento mental adaptado a cada nivel deportivo",
        "Prevención y manejo del agotamiento psicológico en el deporte",
        "Fomento de una mentalidad ganadora y resiliente"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
      "Descubre cómo la mente influye en el rendimiento deportivo y aprende estrategias para potenciar tu desempeño.",
  displayMediumBlogs: false, // Set true si quieres integrar blogs desde Medium
  blogs: [
    {
      url: "https://www.psicologosdeldeporteonline.com/blog/",
      title: "La importancia de la psicología en el deporte",
      description:
          "Explora cómo la preparación mental puede marcar la diferencia en el rendimiento deportivo y cómo entrenar la mente para el éxito."
    },
    {
      url: "https://entrenandolamentepy.wordpress.com/",
      title: "Entrenando la mente para la competencia",
      description:
          "Descubre estrategias psicológicas para mejorar la concentración, la motivación y el control emocional en el deporte."
    }
  ],
  display: true // Set false para ocultar esta sección
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Explorando el impacto de la psicología en el deporte y el bienestar mental.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle:
      "¿Quieres agendar una consulta o conocer más sobre mis servicios? ¡Escríbeme!",
  number: "+57 3205794183", // Reemplaza con el número real
  email_address: "correo@ejemplo.com" // Reemplaza con el correo real
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
