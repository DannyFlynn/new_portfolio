"use client";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { barsIcon, crossIcon } from "../fontawesome/Fontawesome";

const variants = {
    open: { opacity: 1, x: "0%", width: "100%", height: "100%", transition: { type: "smooth", duration: 0.75 }, },
    closed: { opacity: 0, x: "100%", width: "100%", height: "1%", transition: { type: "smooth", duration: 0.75 } },
}



export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigationControls = useAnimationControls()

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
            navigationControls.start("open")
        } else {
            document.body.style.overflow = "auto"
            navigationControls.start("closed")
        }

    }, [isOpen])

    return (
        <>
            <button onClick={() => setIsOpen(isOpen => !isOpen)} className={`text-white fixed right-0 z-50 transition-all duration-700 ease-in-out p-4 ${isOpen ? "rotate-0" : "rotate-180"}`}>{isOpen ? crossIcon : barsIcon}</button>
            <motion.nav
                initial="closed"
                variants={variants}
                animate={navigationControls}
                style={{ position: 'fixed', top: 0, left: 0, zIndex: 40 }}

                className="flex">
                <div className="bg-black md:w-1/2 lg:w-2/3 opacity-50" onClick={() => setIsOpen(isOpen => !isOpen)}></div>
                <ul className="w-full md:w-1/2 lg:w-1/3  h-full bg-red-500 bg-opacity-75 flex flex-col justify-evenly items-center text-2xl">
                    <li className="underline font-bold"><a href="/" onClick={() => setIsOpen(!isOpen)}>Contact</a></li>
                    <li className="underline font-bold"><a href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</a></li>
                    <li className="underline font-bold"><a href="#about" onClick={() => setIsOpen(!isOpen)}>About</a></li>
                </ul>

            </motion.nav>
        </>
    )
}