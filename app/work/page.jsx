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
    category: 'frontend',
    title: 'Project 1',
    description: 'A fully functional Spotify clone built using HTML, CSS, and JavaScript. This project includes features such as music playback, playlists and a responsive design. The aim was to recreate the user interface of Spotify and provide a seamless music streaming experience',
    stack: [{ name: "Html" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/spotify.png",
    live: "", 
    github: "https://github.com/sloppysaint/SPOTIFY",
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Project 2',
    description: 'The Unity Fund website is designed to help underprivileged communities by facilitating donations and support. The site includes sections like Vision, Mission, and Banner, each dedicated to showcasing our efforts and goals. This project feature a responsive design, ensuring optimal user experience across all devices.',
    stack: [  { name: "React" }, { name: "Vite" }, { name: "Tailwind.CSS" }],
    image: "/unityFund.png",
    live: "https://donateunityfund.netlify.app/",
    github: "https://github.com/sloppysaint/unityFund",
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'Project 3',
    description: 'Developed a new user interface for the Gibbly website using React, Vite, Tailwind CSS, Express, and Node.js. The redesigned platform allows teachers to create quizzes and students to play quizzes, enhancing the overall user experience with an intuitive and engaging interface. The backend is powered by Express and Node.js to handle quiz creation, management, and user interactions efficiently.',
    stack: [  { name: "React" }, { name: "Vite" }, { name: "Tailwind.CSS" }, { name: "Nodejs" }],
    image: "/gibbly.png",
    backgroundPosition: '50% 30%',
    live: "", 
    github: "https://github.com/sloppysaint/Gibblyweb",
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'Project 4',
    description: 'The Patient Management System is a modern healthcare application designed to simplify patient registration, appointment booking, and doctor consultations.',
    stack: [  { name: "Next.js" }, { name: "Appwrite" }, { name: "Tailwind.CSS" }, { name: "Typescript" }, { name: "Twilio" }, { name: "Sentry" }],
    image: "/carepulse.png",
    backgroundPosition: '50% 30%',
    live: "https://care-pulse-rust-rho.vercel.app/", 
    github: "https://github.com/sloppysaint/CarePulse",
  },
  
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) =>{
    //get current slide index
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 ,transition:{delay:2.4, duration: 0.4, ease:"easeIn"}}} className="min-h-[99vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent sm:flex sm:flex-wrap">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project,index)=>{
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-[1]"></div>
                      {/* image */}
                      <div className="relative w-full h-full z-[2]">
                        <Image src={project.image} fill className="object-cover" alt=""/>
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
