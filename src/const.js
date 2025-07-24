import { FaAward } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";

// End of aboutCards imports

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

// End of contactOption imports

import { SiLeetcode } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiWakatime } from "react-icons/si";

// End of Socials imports

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import { BiMessageDetail } from "react-icons/bi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

// End of navLink imports

import {
    biakitchen,
    landingpage,
    techdoc,
    tribute,
    responsivebakery,
    portfolio,
    edusity,
    reactportfolio,
    quizapp,
} from "./assets/images";

// End of portfolio imports

// End of imports

export const name = "Muhammad Abdullah"
export const role = "Frontend Developer"

// End of header

export const aboutCards = [
    {
        id: 1,
        logo: <FaAward aria-hidden="true" />,
        heading: "Experience",
        description: "2+ years Studying",
    },
    {
        id: 2,
        logo: <GoProjectSymlink aria-hidden="true" />,
        heading: "Projects",
        description: "10+",
    },
]

export const aboutInfo = `I have over 2 years of dedicated study and hands-on project
            experience, creating numerous projects for learning and skill
            development. While I haven’t yet stepped into a formal job role, I
            am now fully prepared and eager to begin my professional journey.`

// End of About

export const contactOption = [
    {
        id: 1,
        logo: <MdOutlineEmail aria-hidden="true" />,
        option: "Email",
        info: "mabdullah.talk@gmail.com",
        address: "mailto:mabdullah.talk@gmail.com",
    },
    {
        id: 2,
        logo: <FaWhatsapp aria-hidden="true" />,
        option: "Whatsapp",
        info: "+92 331 559 0956",
        address: "https://api.whatsapp.com/send?phone=923315590956",
    },
]

// End of Contact

export const frontEnd = [
    {
        id: 1,
        language: "React.js",
        status: "Experienced",
    },
    {
        id: 2,
        language: "Next.js",
        status: "Intermediate",
    },
    {
        id: 3,
        language: "TypeScript",
        status: "Intermediate",
    },
    {
        id: 4,
        language: "JavaScript",
        status: "Experienced",
    },
    {
        id: 5,
        language: "HTML",
        status: "Experienced",
    },
    {
        id: 6,
        language: "CSS",
        status: "Experienced",
    },
    {
        id: 7,
        language: "Tailwind CSS",
        status: "Intermediate",
    },
]

export const backEnd = [
    {
        id: 1,
        language: "Node.js",
        status: "Basic",
    },
    {
        id: 2,
        language: "Express.js",
        status: "Basic",
    },
    {
        id: 3,
        language: "Python",
        status: "Basic",
    },
    {
        id: 4,
        language: "MongoDB",
        status: "Basic",
    },
]

export const tools = [
    {
        id: 1,
        language: "Git",
        status: "Experienced",
    },
    {
        id: 2,
        language: "GitHub",
        status: "Experienced",
    },
    {
        id: 3,
        language: "Figma",
        status: "Intermediate",
    },
    {
        id: 4,
        language: "Vercel",
        status: "Intermediate",
    },
    {
        id: 5,
        language: "Canva",
        status: "Experienced",
    },
]

export const other = [
    {
        id: 1,
        language: "Prompt Engineering",
        status: "Experienced",
    },
]

// End of Experience

export const footerLink = [
    {
        id: 1,
        section: "Home",
    },
    {
        id: 2,
        section: "About",
    },
    {
        id: 3,
        section: "Experience",
    },
    {
        id: 4,
        section: "Services",
    },
    {
        id: 5,
        section: "Portfolio",
    },
    {
        id: 6,
        section: "Contact",
    },
]

// End of Footer

export const Socials = [
    {
        id: 1,
        link: "https://www.linkedin.com/in/Abdullah-Logic/",
        icon: <FiLinkedin aria-hidden="true" />,
        tooltip: "Linkedin",
    },
    {
        id: 2,
        link: "https://github.com/Abdullah-Logic",
        icon: <FaGithub aria-hidden="true" />,
        tooltip: "GitHub",
    },
    {
        id: 3,
        link: "https://leetcode.com/u/Abdullah-Logic/",
        icon: <SiLeetcode aria-hidden="true" />,
        tooltip: "LeetCode",
    },
    {
        id: 4,
        link: "https://wakatime.com/@Abdullah_Logic",
        icon: <SiWakatime aria-hidden="true" />,
        tooltip: "WakaTime",
    },
]

// End of Socials

export const navLink = [
    {
        id: 1,
        icon: <IoHomeOutline aria-hidden="true" />,
        section: "home",
        tooltip: "Home",
    },
    {
        id: 2,
        icon: <FaRegUser aria-hidden="true" />,
        section: "about",
        tooltip: "about",
    },
    {
        id: 3,
        icon: <BsBriefcase aria-hidden="true" />,
        section: "experience",
        tooltip: "experience",
    },
    {
        id: 4,
        icon: <LiaToolsSolid aria-hidden="true" />,
        section: "services",
        tooltip: "services",
    },
    {
        id: 5,
        icon: <IoExtensionPuzzleOutline aria-hidden="true" />,
        section: "portfolio",
        tooltip: "portfolio",
    },
    {
        id: 6,
        icon: <BiMessageDetail aria-hidden="true" />,
        section: "contact",
        tooltip: "contact",
    },
]

// End of NavLink

export const data = [
    {
        id: 1,
        image: reactportfolio,
        title: "React Portfolio",
        desc: "A fully functional, dynamic and responsive portfolio made with react to showcase skills and achievements (For Client).",
        tech: "React.js, Email-js, React-Icons, Swiper.js",
        github:
            "https://github.com/Abdullah-Logic/react-portfolio",
        demo: "https://abdullah-logic-portfolio.vercel.app/",
    },
    {
        id: 2,
        image: edusity,
        title: "Edusity Website",
        desc: "This is a clone of the Edusity website replicating its features and functionality (Practice Project).",
        tech: "React.js, ReCaptcha, React-Icons",
        github:
            "https://github.com/Abdullah-Logic/edusity-website",
        demo: "https://edusity-website-pearl.vercel.app/",
    },
    {
        id: 3,
        image: quizapp,
        title: "Quiz Application",
        desc: "A full-stack quiz app built with React, featuring a custom backend and API for dynamic question handling and scoring (Practice Project).",
        tech: "React.js, Node.js, Express.js, Redux, MongoDb, Axios",
        github:
            "https://github.com/Abdullah-Logic/quiz-app",
    },
    {
        id: 4,
        image: responsivebakery,
        title: "Virtual Bakery",
        desc: "This is a responsive bakery website made using HTML, CSS, and JavaScript to showcase client's different product (Practice Project).",
        tech: "HTML, CSS, JS",
        github: "https://github.com/Abdullah-Logic/bakery-responsive.git",
    },
    {
        id: 5,
        image: techdoc,
        title: "Technical Documentation Page",
        desc: "This is a technical documentation page made that has all the information about Algorithms (Practice Project).",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/technical_doc_page",
    },
    {
        id: 6,
        image: biakitchen,
        title: "Bia's Baking Kitchen",
        desc: "This is a bakery website for an online bakery made to reveal its products to the world.",
        tech: "HTML, CSS",
        github: "https://github.com/Abdullah-Logic/bias-baking-kitchen.git",
        demo: "https://biasbakingkitchen.tiiny.site",
    },
    {
        id: 7,
        image: landingpage,
        title: "Product Landing Page",
        desc: "This is a simple product landing page made for newly launched prducts (Practice Project).",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/landing_page",
    },
    {
        id: 8,
        image: tribute,
        title: "Tribute Page",
        desc: "This tribute page honors the lives and achievements of influential figures, highlighting their impact on society. (Practice Project).",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/tribute_page",
    },
    {
        id: 9,
        image: portfolio,
        title: "Simple Portfolio Page",
        desc: "This is a simple portfolio page made to show my skills and work.",
        tech: "HTML, CSS",
        github:
            "https://github.com/Abdullah-Logic/legacy-responsive-web-design/tree/c99a86f17f6233884a9d4f17550a2e7941981edf/personal_port_page",
        demo: "https://mabdullah-portfolio.w3spaces.com",
    },
];

// End of Portfolio

export const design = [
    {
        id: 1,
        description: "Create user-centered designs that focus on clear, intuitive interactions.",
    },
    {
        id: 2,
        description: "Use basic editing skills to enhance design presentations.",
    },
    {
        id: 3,
        description: "Experiment with color schemes, typography, and layouts to align with brand identity.",
    },
];

export const webDev = [
    {
        id: 1,
        description: " Build responsive and interactive pages using HTML, CSS, and JavaScript with advanced proficiency.",
    },
    {
        id: 2,
        description: "Utilize React at an intermediate level to create reusable, dynamic UI components.",
    },
    {
        id: 3,
        description: "Implement responsive design techniques for optimal viewing on all device types.",
    },
    {
        id: 4,
        description: "Apply version control practices with Git to track and manage project changes.",
    },
    {
        id: 5,
        description: "Use foundational Python and C skills to support logic development and simple automation tasks.",
    },
];

export const contentCreation = [
    {
        id: 1,
        description: "Design mockups and prototypes to showcase ideas and enhance communication with stakeholders.",
    },
    {
        id: 2,
        description: "Produce visually appealing image-based content for various digital platforms.",
    },
    {
        id: 3,
        description: "Create simple video content to support marketing or instructional objectives.",
    },
    {
        id: 4,
        description: "Bring a creative approach to each project, crafting content that resonates with target audiences.",
    },
];

// End of Services