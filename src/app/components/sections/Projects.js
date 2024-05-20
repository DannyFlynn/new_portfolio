"use client"
import { useState } from "react";
import ProjectTitle from "./ProjectTitle";
import { motion } from "framer-motion";
import Image from "next/image";

import eccom from "../../images/eccom.png";
import holiday from "../../images/holiday.png";
import movies from "../../images/movies.png";

import eccomDesktop from "../../images/eccom_desktop.png";
import holidayDesktop from "../../images/holiday_desktop.png";
import moviesDesktop from "../../images/movies_desktop.png";






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
        id: 1, imageMobile: eccom, bigImage: eccomDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Fullstack', 'Stripe'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/'
    },
    {
        id: 2, imageMobile: eccom, bigImage: holidayDesktop, seeInfo: false,
        skills: ['NextJS', 'Bootstrap', 'Frontend', 'Frontend'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://gilded-fairy-bc9a53.netlify.app/'
    },
    {
        id: 3, imageMobile: eccom, bigImage: moviesDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Api', 'Frontend'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://statuesque-khapse-537fcf.netlify.app/'
    }
];

const gameData = [
    {
        id: 1, imageMobile: holiday, bigImage: holidayDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Fullstack', 'Frontend'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/'
    },
    {
        id: 2, imageMobile: holiday, bigImage: holidayDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Fullstack', 'Frontend'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/'
    },
    {
        id: 3, imageMobile: holiday, bigImage: holidayDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Fullstack', 'Frontend'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/'
    }
];

const appData = [
    {
        id: 1, imageMobile: movies, bigImage: moviesDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Fullstack', 'Frontend'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/'
    },
    {
        id: 2, imageMobile: movies, bigImage: moviesDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Fullstack', 'Frontend'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/'
    },
    {
        id: 3, imageMobile: movies, bigImage: moviesDesktop, seeInfo: false,
        skills: ['NextJS', 'Tailwind', 'Fullstack', 'Frontend'], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        url: 'https://vocal-fenglisu-4ca0eb.netlify.app/'
    }
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
                                        {projectImage.skills.map(skill => (
                                            <div className="flex justify-center mx-4">
                                                <span className="p-1 border-2 rounded-md w-32 text-center mt-4 border-dashed ">{skill}</span>
                                            </div>
                                        ))}
                                    </div>{projectImage.description}
                                    </div>}
                                    {index % 2 === 0 ? <div className=" px-6"><div className="flex flex-wrap justify-center my-4">
                                        {projectImage.skills.map(skill => (
                                            <div className="flex justify-center mx-4">
                                                <span className="p-1 border-2 rounded-md w-32 text-center mt-4 border-dashed ">{skill}</span>
                                            </div>
                                        ))}
                                    </div>{projectImage.description}
                                    </div> : <Image src={projectImage.bigImage} alt="project pics" width={200} height={200} className="border-4" style={{ width: 200, height: 300 }} />}

                                </div>
                                <div className="flex flex-col lg:hidden justify-center items-center">
                                    <Image src={projectImage.bigImage} alt="project pics" width={200} height={200} className="border-4" style={{ width: 200, height: 300 }} />
                                    <p className="my-8 text-center">{projectImage.description}</p>
                                    <div className="flex flex-wrap justify-evenly my-4">
                                        {projectImage.skills.map(skill => (
                                            <div className="w-1/2 flex justify-center">
                                                <span className="p-1 border-2 rounded-md w-3/4 text-center mt-4 border-dashed ">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-center mt-4  lg:my-0 border-red-500 border-b-2 p-8">
                                    <a href={projectImage.url} className="bg-red-500 p-2 rounded-md border-white border-2 lg:hover:bg-red-600 mr-6 w-36 text-center mb-10">View Live</a>
                                    <a href={projectImage.url} className="bg-red-500 p-2 rounded-md border-white border-2 lg:hover:bg-red-600 ml-6 w-36 text-center mb-10">Github</a>
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