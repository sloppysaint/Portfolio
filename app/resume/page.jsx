"use client";
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from '@radix-ui/react-tooltip';
import { BsBriefcaseFill } from 'react-icons/bs';

const experience = {
  title: 'My Experience',
  description: 'A track record of building production-grade systems across startups — from React Native apps and AI chatbots to payment APIs and microservices.',
  items: [
    {
      role: 'SDE Intern',
      company: 'Hummingbird Web Solutions',
      duration: 'Apr. 2026 – Present',
      workType: 'On-site',
      points: [
        'Developing high-performance web applications using Next.js, utilizing SSR, SSG, and API routes to deliver scalable and SEO-friendly solutions.',
      ],
    },
    {
      role: 'Software Developer Intern',
      company: 'Robotico Digital',
      duration: 'Aug. 2025 – Mar. 2026',
      workType: 'Remote',
      points: [
        'Owned end-to-end development of a React Native HR application (Synergy), working closely with clients to gather requirements and deliver a streamlined employee leave management system.',
        'Implemented a SenseStudio-based photo quality validation pipeline enforcing FR score ≥ 0.8, bounding-box checks, and image format validation, integrated with a NestJS backend and consumed via an Angular frontend.',
        'Built a real-time AI chatbot for a banking client with end-to-end WebSocket communication, enabling voice-note input and low-latency AI responses.',
      ],
    },
    {
      role: 'Backend Development Intern',
      company: 'Techchefz Digital',
      duration: 'Feb. 2025 – Jun. 2025',
      workType: 'Hybrid',
      points: [
        'Developed scalable APIs and business logic for live client payment systems, focusing on reliability and seamless payment flows.',
        'Led backend development for Apollo Tyres\u2019 Fan Contest Entry event, generating and managing QR codes for over 5,000 users.',
        'Constructed comprehensive unit and integration tests for backend components, achieving 90% code coverage and preventing critical bugs from reaching production.',
      ],
    },
    {
      role: 'SDE Intern',
      company: 'Vibo',
      duration: 'Aug. 2024 – Jan. 2025',
      workType: 'On-site',
      points: [
        'Designed and implemented RESTful APIs and new features in a microservices architecture using Agile practices, improving system reliability and maintainability by 35%.',
        'Engineered secure user authentication flows with multi-factor authentication (MFA) using Clerk, resulting in a 99.99% reduction in unauthorized access attempts and zero security incidents.',
      ],
    },
  ],
};

const education = {
  icon: <SchoolIcon />,
  title: 'My Education',
  description: 'I am pursuing my B.tech in Computer Science and Engineering.',
  items: [
    {
      institution: "Bharati Vidyapeeth",
      degree: "Computer Science and Engineering",
      duration: "2022-2026",
    },
    {
      institution: "Coding Blocks",
      duration: "2023-2024",
      degree: "Full Stack Web Development Course"
    },
    {
      institution: "Mahavir Senior Model School",
      duration: "2008-2022",
      degree: "Graduated with a strong foundation in academic excellence."
    }
  ]
};

const skills = {
  title: "My skills",
  description: "A versatile web developer proficient in both front-end and back-end technologies, with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. I excel in creating responsive and user-friendly interfaces with Tailwind CSS and Figma, and have experience in server-side development with Node.js.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html"
    },
    {
      icon: <FaCss3 />,
      name: "CSS"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.cSS"
    },
    {
      icon: <FaFigma />,
      name: "figma"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    }
  ]
};
const about = {
  title: 'About me',
  description: 'I am an aspiring full-stack developer with a passion for building scalable and efficient applications.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Piyush Khattar",
    },
    {
      fieldName: "Email",
      fieldValue: "piyushkhattar26@gmail.com",
    },
    {
      fieldName: "Contact",
      fieldValue: "(+91) 8860-239-250"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },

    {
      fieldName: "Languages",
      fieldValue: "English , Hindi",
    },

  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">My Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[420px] pr-4">
                  <ul className="flex flex-col gap-[20px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] border border-white/5 hover:border-accent/20 py-6 px-8 rounded-2xl flex flex-col gap-4 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,255,153,0.03)] group"
                      >
                        {/* header row */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 text-left">
                              {item.role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="text-white/80 font-medium text-sm">{item.company}</span>
                              <span className="text-white/30">•</span>
                              <span className="text-accent text-xs font-semibold bg-accent/10 px-2 py-0.5 rounded-md">
                                {item.workType}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center self-start md:self-auto">
                            <span className="text-white/60 text-xs font-semibold border border-white/10 rounded-full px-3 py-1 bg-white/5">
                              {item.duration}
                            </span>
                          </div>
                        </div>
                        {/* bullet points */}
                        <ul className="flex flex-col gap-3 pl-1">
                          {item.points.map((point, i) => (
                            <li key={i} className="flex gap-3 text-white/70 text-sm leading-relaxed text-left">
                              <span className="text-accent text-[10px] mt-1.5 flex-shrink-0">✦</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[420px] pr-4">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] border border-white/5 hover:border-accent/20 py-6 px-8 rounded-2xl flex flex-col justify-between items-start gap-4 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,255,153,0.03)] group min-h-[190px]"
                      >
                        <div className="flex flex-col gap-1 w-full text-left">
                          <span className="text-accent text-xs font-semibold bg-accent/10 px-2 py-0.5 rounded-md self-start">
                            {item.duration}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mt-2">
                            {item.degree}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mt-auto">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-6'>
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[621px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
