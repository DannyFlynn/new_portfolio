"use client"
import { useState } from "react";
import ProjectTitle from "./ProjectTitle";
import { motion } from "framer-motion";
import Image from "next/image";



import eccomDesktop from "../../images/eccom_desktop.png";
import holidayDesktop from "../../images/holiday_desktop.png";
import moviesDesktop from "../../images/movies_desktop.png";

import turdBurger from "../../images/turd_burger.png";

import appPic from "../../images/app_dev_pic.jpg";






const variants = {
    initial: (initial) => ({
        opacity: 0,
        x: initial % 2 === 0 ? "-100%" : "100%",
    }),
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.50 * index,
        }
    }),
};

const webData = [
    {
        id: 1, bigImage: eccomDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Fullstack', 'Stripe'], description: 'Crafting an Online Store using Next.js, TypeScript, Stripe, and Redux! I integrated Stripe for secure payment processing. 🛹 🛒',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/',
        github: 'https://github.com/DannyFlynn/nextJsEcom'
    },
    {
        id: 2, bigImage: holidayDesktop, seeInfo: false,
        skills: ['React', 'Bootstrap', 'Typescript', 'Frontend'], description: 'Jetset Holidays is a React TypeScript application that lets you search for awesome vacation options. I built it using hooks like useState, useContext, useEffect, and useRef, so you know its super modern and efficient and for the styling I have used bootstrap. ✈️ 🏄🏻',
        url: 'https://gilded-fairy-bc9a53.netlify.app/',
        github: 'https://github.com/DannyFlynn/typescriptHolidays'
    },
    {
        id: 3, bigImage: moviesDesktop, seeInfo: false,
        skills: ['NextJS', 'Axios', 'Api', 'Frontend'], description: 'Next.js Movies is a TypeScript-driven web application crafted with Next.js and Axios. It introduces a security layer by prompting users to select from two options before gaining access to the main content, thereby preventing URL tampering. The application seamlessly integrates with The Movie Database (TMDb) via Axios for fetching movie data. 🎥 🍿',
        url: 'https://statuesque-khapse-537fcf.netlify.app/',
        github: 'https://github.com/DannyFlynn/nextjs_movies'
    }
];

const gameData = [
    {
        id: 1, bigImage: turdBurger, seeInfo: false,
        skills: ['Godot', 'GD Script', 'Inkskape', 'Nodes'], description: 'Inspired by my son, who finds anything with the word POO hilarious, I created Turdburger, a wacky and fun mobile game. In Turdburger, your goal is to stack your burger as high as you can to build an impressive score. But watch out! Turds are dropping from above, and if one lands on your burger, it will cost you your score—or even your life! Keep your burger clean and stack it high, but beware of the messy hazards! YIKEEEEEESSSS!!!!!(Please follow github link for the code and to play.... work in progress 😊💩)',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/',
        github: 'https://github.com/DannyFlynn/turd_burger'
    },

];

const appData = [
    {
        id: 1, bigImage: appPic, seeInfo: false,
        skills: ['Flutter', 'Widgets', 'Dart', 'UI/UX'], description: 'I am currently on an exciting journey in Android development, focusing on mastering Flutter. While I have not yet created portfolio pieces, I have built several apps that demonstrate my solid understanding of Flutters core concepts. My projects showcase my skills and dedication to continuous learning. Feel free to explore my work on GitHub!',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/',
        github: 'https://github.com/DannyFlynn/flutter_quiz'
    },

];


const Projects = () => {

    const [genre, setGenre] = useState([webData, gameData, appData])
    const [genreTitle, setGenreTitle] = useState(["Web-", "Game-", "App-"])
    const [count, setCount] = useState(0);


    const changeGenre = () => {
        if (count < genreTitle.length - 1) {
            setCount(prev => prev + 1)

        } else {
            setCount(0)

        }
    }


    return (
        <>
            <ProjectTitle genreTitle={genreTitle} count={count} changeGenre={changeGenre} />
            <div className="w-full lg:w-4/5 2xl:w-4/5  flex flex-col  p-3">
                <div className="p-4">
                    <ul>
                        {genre[count].map((projectImage, index) => (
                            <motion.li key={index} variants={variants} initial="initial" whileInView="animate" viewport={{ once: true }} custom={index}
                                className="mt-20">
                                <div className="hidden lg:flex  lg:flex-row">
                                    {index % 2 === 0 ? <Image src={projectImage.bigImage} alt="project pics" width={200} height={200} className="border-4" style={{ width: 200, height: 300 }} /> : <div className="px-6"><div className="flex flex-wrap justify-center my-4">
                                        {projectImage.skills.map((skill, id) => (
                                            <div className="flex justify-center mx-4" key={id}>
                                                <span className="p-1 border-2 rounded-md w-36 text-center mt-4 border-dashed ">{skill}</span>
                                            </div>
                                        ))}
                                    </div>{projectImage.description}
                                    </div>}
                                    {index % 2 === 0 ? <div className=" px-6"><div className="flex flex-wrap justify-center my-4">
                                        {projectImage.skills.map((skill, id) => (
                                            <div className="flex justify-center mx-4" key={id}>
                                                <span className="p-1 border-2 rounded-md w-36 text-center mt-4 border-dashed">{skill}</span>
                                            </div>
                                        ))}
                                    </div>{projectImage.description}
                                    </div> : <Image src={projectImage.bigImage} alt="project pics" width={200} height={200} className="border-4" style={{ width: 200, height: 300 }} />}

                                </div>
                                <div className="flex flex-col lg:hidden justify-center items-center">
                                    <Image src={projectImage.bigImage} alt="project pics" width={200} height={200} className="border-4" style={{ width: 200, height: 300 }} />
                                    <p className="my-8 text-center">{projectImage.description}</p>
                                    <div className="flex flex-wrap justify-evenly my-4">
                                        {projectImage.skills.map((skill, id) => (
                                            <div className="w-1/2 flex justify-center" key={id}>
                                                <span className="p-1 border-2 rounded-md w-3/4 text-center mt-4 border-dashed ">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center mt-4  lg:my-0 border-red-500 border-b-2 p-8">
                                    {count === 0 ?
                                        <a href={projectImage.url} target="_blank" className="bg-red-500 p-2 rounded-md border-white border-2 lg:hover:bg-red-600 mr-6 w-36 text-center mb-10">View Live</a> : null}

                                    <a href={projectImage.github} target="_blank" className="bg-red-500 p-2 rounded-md border-white border-2 lg:hover:bg-red-600 ml-6 w-36 text-center mb-10">Github</a>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            <div id="about"></div>
        </>
    )
}

export default Projects