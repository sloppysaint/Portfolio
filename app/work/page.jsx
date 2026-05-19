"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Inbox Insight AI',
    description: 'Developed an AI-powered SaaS Gmail dashboard with smart email intent detection, summarization, and multi-account management using secure Google OAuth authentication. Integrated OpenRouter API for automated email summaries and actionable insights, reducing manual triage effort. Successfully tested with over 100 real users, gathering UX feedback to iterate on features and improve reliability.',
    stack: [{ name: "Next.js" }, { name: "MongoDB" }, { name: "Google OAuth" }, { name: "OpenRouter" }, { name: "Gmail API" }],
    image: "/inboxinsight.png",
    live: "https://intent-aware.vercel.app/",
    github: "https://github.com/sloppysaint/Intent-Email",
  },
  {
    num: '02',
    category: 'AI & deep learning',
    title: 'Real Time Image/Video Sharpening',
    description: 'Built a lightweight deep learning model for real-time image and video sharpening achieving 100+ FPS using knowledge distillation. Engineered a modular backend architecture for model inference and deployment with clean separation of concerns and optimized compute path.',
    stack: [{ name: "Python" }, { name: "PyTorch" }, { name: "Knowledge Distillation" }, { name: "Streamlit" }],
    image: "/sharpening.png",
    live: "https://imagesharpening-abcd.streamlit.app/",
    github: "",
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'CarePulse',
    description: 'The Patient Management System is a modern healthcare application designed to simplify patient registration, appointment booking, and doctor consultations.',
    stack: [{ name: "Next.js" }, { name: "Appwrite" }, { name: "Typescript" }, { name: "Twilio" }, { name: "Sentry" }],
    image: "/carepulse.png",
    backgroundPosition: '50% 30%',
    live: "https://care-pulse-rust-rho.vercel.app/",
    github: "https://github.com/sloppysaint/CarePulse",
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'PrepWise',
    description: 'Prepwise is a website project designed to help you learn integrating AI models with your apps.',
    stack: [{ name: "Next.js" }, { name: "Firebase" }, { name: "Typescript" }, { name: "Vapi AI" }, { name: "Google Gemini" }],
    image: "/prepwise.png",
    backgroundPosition: '50% 30%',
    live: "https://prep-wise-pied.vercel.app//",
    github: "https://github.com/sloppysaint/PrepWise",
  },
  {
    num: '05',
    category: 'frontend',
    title: 'Spotify Clone',
    description: 'A fully functional Spotify clone built using HTML, CSS, and JavaScript. This project includes features such as music playback, playlists and a responsive design. The aim was to recreate the user interface of Spotify and provide a seamless music streaming experience',
    stack: [{ name: "Html" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/spotify.png",
    live: "",
    github: "https://github.com/sloppysaint/SPOTIFY",
  },
  {
    num: '06',
    category: 'frontend',
    title: 'Unity Fund',
    description: 'The Unity Fund website is designed to help underprivileged communities by facilitating donations and support. The site includes sections like Vision, Mission, and Banner, each dedicated to showcasing our efforts and goals. This project feature a responsive design, ensuring optimal user experience across all devices.',
    stack: [{ name: "React" }, { name: "Vite" }, { name: "Tailwind.CSS" }],
    image: "/unityFund.png",
    live: "https://donateunityfund.netlify.app/",
    github: "https://github.com/sloppysaint/unityFund",
  },
  {
    num: '07',
    category: 'fullstack',
    title: 'Gibbly Redesign',
    description: 'Developed a new user interface for the Gibbly website using React, Vite, Tailwind CSS, Express, and Node.js. The redesigned platform allows teachers to create quizzes and students to play quizzes, enhancing the overall user experience with an intuitive and engaging interface. The backend is powered by Express and Node.js to handle quiz creation, management, and user interactions efficiently.',
    stack: [{ name: "React" }, { name: "Vite" }, { name: "Tailwind.CSS" }, { name: "Nodejs" }],
    image: "/gibbly.png",
    backgroundPosition: '50% 30%',
    live: "",
    github: "https://github.com/sloppysaint/Gibblyweb",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[99vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] md:gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project title & category */}
              <div>
                <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-1 block">
                  {project.category} Project
                </span>
                <h2 className="text-[36px] md:text-[48px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
              </div>
              {/* project description */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm md:text-base text-accent font-semibold">
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/10"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                {project.live ? (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-colors hover:bg-white/10">
                          <BsArrowUpRight className="text-white text-2xl md:text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-30 cursor-not-allowed">
                        <BsArrowUpRight className="text-white text-2xl md:text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Demo Not Available</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}

                {/* github project button */}
                {project.github ? (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center group transition-colors hover:bg-white/10">
                          <BsGithub className="text-white text-2xl md:text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-30 cursor-not-allowed">
                        <BsGithub className="text-white text-2xl md:text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repository Private</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] mt-8 xl:mt-0">
            <Swiper spaceBetween={30} slidesPerView={1} className="h-[280px] sm:h-[380px] xl:h-[460px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="w-full h-full relative group flex justify-center items-center bg-transparent rounded-2xl overflow-hidden border border-white/5">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-[1]"></div>
                      {/* image */}
                      <div className="relative w-full h-full z-[2]">
                        <Image src={project.image} fill className="object-cover" alt={project.title} />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns containterStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
               z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover 
               text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all
              "/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
