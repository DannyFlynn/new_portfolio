"use client"
import { motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.70,
        }
    },
};

export const SlideUp = ({ children }) => {
    return (
        <motion.div
            variants={variants} initial="initial" whileInView="animate"
            transition={{ ease: 'easeInOut', duration: 0.75 }}
            className="w-full lg:w-4/5 2xl:w-4/5 mt-16 flex flex-col  p-3"
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

