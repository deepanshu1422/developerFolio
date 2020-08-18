
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "deepanshu1422",
  title: "Hi, I'm Deepanshu Udhwani",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript and Reactjs with undying love to tweak linux and kernels"),
  resumeLink: "https://drive.google.com/file/d/1nMExANMHyxD3Nt0y9gNfIlUMKptAtCaq/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/deepanshu1422",
  linkedin: "https://www.linkedin.com/in/deepanshu-udhwani/",
  gmail: "deepanshu1422@gmail.com",
  gitlab: "https://gitlab.com/deepanshu1422",
  facebook: "https://www.facebook.com/deepanshu.udhwani",
  medium: "https://medium.com/@deepanshu.udhwani",
  stackoverflow: "https://stackoverflow.com/users/12041248/deepanshu-udhwani"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "I love to try different things and experiment with technology",
  skills: [
    emoji("⚡ I've compeleted my Bachelors in CS and currently persuing an MBA "),
    emoji("⚡ I am fairly Skilled in Data Structures And Algorithms"),
    //emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "c++",
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
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "89%"
    },
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "70%"  //Insert relative proficiency in percentage
    },
    
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Kernel Development Intern",  
      company: "Alibaba Cloud",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "July 2018 – Present",
      desc: "Adding io_uring support to PostgreSQL for Aliyum Linux 2",
      descBullets: [
        "Increased read-write performance by 23% ",
        "Added support to remove dirty buffers side by side"
      ]
    },
   /* {
      role: "Front-End Developer",   
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",  
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },*/
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "deepanshu1422", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/postgres.png"),
      link: "http://postgresql.com/"
    },
    {
      image: require("./assets/images/hotshotpanda.png"),
      link: "http://hotshotpanda.com/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "ASOC finalist ",
      subtitle: "Selected among 29 interns out of thousand of applications .",
      image: require("./assets/images/facebookLogo.png"),
      footerLink: [
        { name: "Certification", url: "https://www.linkedin.com/posts/deepanshu-udhwani_alibabacloud-opensourcesoftware-opensourcedevelopment-activity-6689382556397383680-Yfnm" },
       // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
       // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Hand Gesture Recognition To help Deaf And Mute",
      subtitle: "Developed an python application that could detect and translate hand gestures in real time ",
      image: require("./assets/images/translate.png"),
      footerLink: [{ name: "View My Project", url: "https://github.com/deepanshu1422/HandGestureRecognition" }]
    },
    {
      title: "550+ stars on my github project",
      subtitle: "Compiled a list of all open souce programs helping candidates worldwide",
      image: require("./assets/images/github.svg"),
      footerLink: [
        { name: "", url: "" },
        { name: "View Project Here", url: "https://github.com/deepanshu1422/List-Of-Open-Source-Internships-Programs" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://dev.to/itsdeepanshu/2k-10k-per-month-open-source-internships-3hi1",
      title: "A curated list of all open source programs",
      description: "Best programms and internships that you can work upon"
    },
    {
      url: "https://dev.to/itsdeepanshu/how-to-write-the-simplest-make-file-1hgl",
      title: "How to write the Simplest MAKE file",
      description: "Writing simples make file to compile all c++ files in one go."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};
// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  //Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7018765080",
  email_address: "deepanshu1422@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "itsudhwani"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
