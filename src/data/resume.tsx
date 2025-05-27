import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Goutham Sreeram S B",
  initials: "GS",
  url: "https://github.com/Goutham-Sreeram",
  location: "Kottayam, Kerala, India",
  locationLink: "https://www.google.com/maps/place/Kottayam,+Kerala",
  description:
    "4th year Electronics and Computer Engineering student passionate about AI, simulations, and NLP. Strong background in design, development, and system architecture.",
  summary:
    "A driven engineer with hands-on experience in UI/UX design, frontend development, and creative brand design. Developed multiple AI and system projects, held key leadership roles in student communities.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "C++",
    "Java",
    "Flutter",
    "React Native",
    "C",
    "Web Technologies",
    "UI/UX Design",
    "Graphic Design",
    "Frontend Development",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "goutham070503@gmail.com",
    tel: "+91 8301971072",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Goutham-Sreeram",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "https://x.com/gothamnit",
        icon: Icons.x,
        navbar: true,
      },
      Behance: {
        name: "Behance",
        url: "https://www.behance.net/gouthamsb",
        icon: Icons.behance,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:goutham070503@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
       Spotify: {
        name: "Spotify",
        url: "https://open.spotify.com/playlist/1RGdUazMg776mSzhQbfBK5?si=4c2887a093b949a2",
        icon: Icons.spotify,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ThinkForge Technologies",
      href: "https://makemypass.com/",
      badges: [],
      location: "Remote",
      title: "Creative Product Designer",
      logoUrl: "/thinkforge.jpg",
      start: "2024",
      end: "Present",
      description:
        "Craft brand design guidelines and promotional materials. Enhance UI/UX for the platform. Collaborate closely with clients to ensure designs exceed expectations.",
    },
    {
      company: "Makemypass",
      href: "https://makemypass.com/",
      badges: [],
      location: "Remote",
      title: "Creative Associate",
      logoUrl: "/makemypass.jpg",
      start: "2024",
      end: "Present",
      description:
        "Craft brand design guidelines and promotional materials. Enhance UI/UX for the platform. Collaborate closely with clients to ensure designs exceed expectations.",
    },
    {
      company: "Evobi Automations",
      
      href: "https://www.linkedin.com/company/evobiautomations/?originalSubdomain=in",
      badges: [],
      location: "Remote",
      title: "Web Developement Intern",
      logoUrl: "/evobi.png",
      start: "2024",
      end: "Present",
      description:
        "Craft brand design guidelines and promotional materials. Enhance UI/UX for the platform. Collaborate closely with clients to ensure designs exceed expectations.",
    },
    
  ],

  education: [
    {
      school: "St. Joseph's College of Engineering and Technology, Palai",
      href: "https://sjcetpalai.ac.in",
      degree: "B.Tech in Electronics and Computer Engineering",
      logoUrl: "/sjcet.png",
      start: "2021",
      end: "Present",
    },
    {
      school: "Mary Mount Public School, Kottayam",
      href: "#",
      degree: "AISSCE (12th)",
      logoUrl: "/marymount.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Mary Mount Public School, Kottayam",
      href: "#",
      degree: "AISSE (10th)",
      logoUrl: "/marymount.png",
      start: "2017",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "Developer Browser",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "A Qt-based, Chromium-derived browser for developers and designers, with browser-level automation for testing and data pipelining.",
      technologies: ["Qt", "Chromium", "Python", "Web Automation"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Cloud Billboard System",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Cloud-based digital billboard system with a custom OS for Raspberry Pi and a PWA for real-time customization.",
      technologies: ["Web", "Raspberry Pi", "PWA"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI File Manager & Search",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "AI-powered semantic search companion with support for all file types and local on-device execution.",
      technologies: ["AI", "NLP", "Search", "Local Apps"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "3D Tech Fest Website",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "A fully structured 3D website for a college tech fest using Three.js with integrated payment gateway.",
      technologies: ["Three.js", "JavaScript", "Payments"],
      links: [],
      image: "",
      video: "",
    },
  ],

  clubs: [
    {
      title: "IEDC SJCET",
      dates: "2023 - 2024",
      location: "Palai, Kerala",
      description:
        "Chief Creative Officer at IEDC Execom. Initiated design-focused student communities and established consistent event branding.",
      image: "/iedc.jpg",
      mlh: "",
      links: [],
    },
    {
      title: "Tinkerhub SJCET",
      dates: "2023 - 2024",
      location: "Palai, Kerala",
      description:
        "Media Lead, created tech talk series 'The Format' and promoted design/development culture among peers.",
      image: "/29ef.webp",
      mlh: "",
      links: [],
    },
    {
      title: "The Nexus Project (FOSS Club)",
      dates: "2023 - 2024",
      location: "Palai, Kerala",
      description:
        "Core team member. Rebooted the FOSS Club, organized large events, managed design language and event execution.",
      image: "/nexus.jpeg",
      mlh: "",
      links: [],
    },
  ],

  hackathons: [
    {
      title: "FOSS Hack 3.0",
      dates: "2024",
      location: "Kochi, Kerala",
      description: "Developed and presented the Developer Browser project",
      image: "/fu.png",
      links: [],
    },
    {
      title: "Kerala Product Hunt",
      dates: "2024",
      location: "Kochi, Kerala",
      description: "Showcased Developer Browser project and received validation",
      image: "/kph.jpg",
      links: [],
    },
  ],
} as const;
