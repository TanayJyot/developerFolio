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
  username: "tanayjyot",
  title: "Hi all, I'm Tanay",
  subTitle: emoji(
    "A second year Computer Science student proficient in Flutter, React, Django, Firebase and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10gJMr5f3cSA96g3VvSU5kVnuKS9gP7MF/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/TanayJyot",
  linkedin: "https://www.linkedin.com/in/tanayjyot/",
  gmail: "tjsinghchawla@gmail.com",
  instagram: "https://www.instagram.com/tanayjyot/",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I work on projects in multiple domains with the aim to explore and understand different tools",
  skills: [
    emoji(
      "⚡ Develop Django Rest APIs to handle server based tasks "
    ),
    emoji("⚡ Create interactive front-end applications with animations from framer-motion"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Google Play Console"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },

    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// <i class="fa-brands fa-flutter"></i>

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Toronto",
      logo: require("./assets/images/Utoronto_coa.svg.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2023 - June 2027",
      desc: "Completed my first year with high academic standing",
      descBullets: [
        "Learnt Formal Logic, Object Oriented Programming, Number Theory, Cryptography, \n" +
        "Running Time Analysis, Linked Lists, Trees, Graphs, Sorting Algorithms \n",
      ]
    },
    {
      schoolName: "Cambridge International AS and A Level",
      logo: require("./assets/images/caielogo.png"),
      subHeader: "A Levels in Information Technology, Physics, Chemistry, Mathematics",
      duration: "April 2021 - March 2023",
      desc: "School topper in the program",
      descBullets: ["Learnt Web Programming, Spreadsheet Modelling, Sound and Video Editing," +
      " Animation, Databases, System Life Cycle\n"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Frontend/Design",
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
      role: "Data Scientist",
      company: "CouBon",
      companylogo: require("./assets/images/coubon.webp"),
      date: "July 2024 – Present",
      desc: "Student-centric coupon app with partnerships with major restaurants chains",
      descBullets: [
        "Create and edit APIs to analyze and predict Realtime data from Mix Panel.",
        "Retrieve and manipulate data from Cloud Firestore using Numpy and Pandas."
      ]
    },
    {
      role: "Backend Engineering Intern",
      company: "Neurobridge Tech Pvt. Ltd.",
      companylogo: require("./assets/images/neurobridge_tech_logo.jpeg"),
      date: "June 2024 – Present",
      desc: "Startup focused on providing text generation and video analytics solutions.",
      descBullets: [
        "Created and edited APIs using Django Rest Framework to handle authentication and payment and Django Silk for debugging.",
        "Worked with Django Object Relational Mapping (ORM) to create optimized functions reducing runtime by over 300ms."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Sampark Infoways",
      companylogo: require("./assets/images/sampark_infoways_logo.jpeg"),
      date: "May 2024 – June 2024",
      desc: "IT consultation and solutions company working with over 10 years of experience.",
      descBullets: [
        "Head developer for React.js, Tailwind CSS and Daisy UI to create and maintain visually appealing websites from scratch.",
        "Used Javascript and Framer Motion to bring dynamic objects and Figma designs to life."
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
  display: false // Set false to hide this section, defaults to true
};
//TODO Can be useful when Food A Friend comes to life

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "National Coding League Finalist",
      subtitle:
        "Accredited as 3rd in 5000+ teams and 25000+ participants in India organized by Scaler School of Technology.",
      image: require("./assets/images/scaler_school_of_technology_logo.jpeg"),
      imageAlt: "Tanayjyot Singh Chawla",
      footerLink: [
        {
          name: "Certification",
          url: "This will be added soon!!"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Introduction to Computer Science and Programming using Python",
      subtitle:
        "Completed Certificate offered by MIT on Edx on Objected Oriented Programming, Recursion and Runtime Analysis",
      image: require("./assets/images/mitx_logo.png"),
      imageAlt: "Tanayjyot Singh Chawla",
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.edx.org/certificates/d48b0459c0c24591862db2a757cef93e"
        }
      ]
    },

    {
      title: "Introduction to C++",
      subtitle: "Completed Certifcation from Sololearn on C++ basics",
      image: require("./assets/images/sololearn_logo.jpeg"),
      imageAlt: "Tanayjyot Singh Chawla",
      footerLink: [
        {name: "Certification",
          url: "https://www.sololearn.com/en/certificates/CT-HX76LLW3"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7089300000",
  email_address: "tj.singhchawla@mail.utoronto.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
